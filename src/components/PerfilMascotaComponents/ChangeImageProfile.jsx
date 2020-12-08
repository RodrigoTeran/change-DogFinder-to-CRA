import React, { useState } from "react";
import { connect } from "react-redux";

import InputFile from "../Inputs/InputFile";
import axios from 'axios';

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

import {
  updatePetProfileAction
} from "../../store/reducers/user/actions";

import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

import {
  editPetProfileImage
} from "../../routes/index";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

import {
  editProfileDogFoundedImagePet
} from "../../routes/indexDogFounded";

const ChangeImageProfile = ({
  updateFailureMessagesComponent,
  getURL,
  updateSuccessMessagesComponent,
  petProfile,
  updatePetProfile
}) => {
  const [srcImage, setSrcImage] = useState("");
  const [ImageInput, setImageInput] = useState(undefined);
  const [srcImageYes, setSrcImageYes] = useState(false);
  const changeFunction = e => {
    try {
      let urlImage = undefined;
      urlImage = URL.createObjectURL(e.target.files[0]);
      var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
      if (!allowedExtensions.exec(e.target.value)) {
        updateFailureMessagesComponent({
          state: true,
          title: "Error al cargar",
          description: `La imagen no tiene extension .png .jpeg o .jpg`,
        });
        setSrcImageYes(false);
        setSrcImage("");
      } else {
        setSrcImage(urlImage);
        setImageInput(e.target.files[0]);
        setSrcImageYes(true);
      };
    } catch{
      updateFailureMessagesComponent({
        state: true,
        title: "Error al cargar",
        description: `Algo ocurrió mal :(`,
      });
    };
  };
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitInput = () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("file", ImageInput);
    axios.put(`${petProfile.isPetProfile ? (`${editPetProfileImage}/${getURL()}`) : (`${editProfileDogFoundedImagePet}/${getURL()}`)}`, data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token"),
        "isPetFromCompany": petProfile.isPetFromCompany ? (true) : (false)
      }
    })
      .then(res => {
        setIsLoading(false);
        if (res.data.status) {
          updatePetProfile({
            selectedState: "petProfileImage",
            state: res.data.srcImage
          });
          setSrcImageYes(false);
          setSrcImage("");
          document.querySelector(".inputfileImageProfile").value = "";
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          updateSuccessMessagesComponent({
            state: true,
            title: "Se cambió la imagen",
            description: `Se cambió la imagen con éxito`
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error al enviar la imagen",
            description: `Algo ocurrió mal :(`,
          });
        };
      });
  };
  const [yesInstructions, setInstructions] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <InputFile
          width="250px"
          text="Cambiar imagen"
          mt="30px"
          changeFunction={changeFunction}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" /></svg>
        </InputFile>
        <div className={`image-pet-profile-instructions ${yesInstructions ? ("open") : ("close")}`}>
          <div className="image-pet-profile-instructions-icon">
            <div onClick={() => { setInstructions(!yesInstructions) }} title="Información" style={{
              display: "flex",
              alignItems: "center"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Información
            </div>
          </div>
          <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`}>
            Esta imagen es solo de perfil, no se va a tomar en cuenta para su análisis.
            <br />
            <br />
            Esta imagen sirve para ponerse pública en el mapa.
            Es el "rostro" del perfil, asi que no debe de ser una foto muy detallada... solo con que se vea al perro.
          </div>
        </div>
        {srcImageYes ? (
          <div className="prev-image-pet-profile">
            Previsualización de la imagen
            <div style={{
              backgroundImage: "url(" + srcImage + ")"
            }}
              className={`img-profile-thumbnail`}>
            </div>
            <ButtonWhiteRectangle text="Subir imagen"
              width="250px"
              height="50px"
              mt="mt-3"
              green="greenColor"
              clickFunctionAnotherOne={onSubmitInput}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" /></svg>
            </ButtonWhiteRectangle>
            <ButtonWhiteRectangle text="Cancelar"
              width="250px"
              height="50px"
              mt="mt-3"
              red="redColor"
              clickFunctionAnotherOne={() => {
                setSrcImageYes(false);
                setSrcImage("");
                document.querySelector(".inputfileImageProfile").value = "";
              }}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
            </ButtonWhiteRectangle>
          </div>
        ) : (
            <></>
          )}
      </div>
      {isLoading ? (
        <div className="loader-block" style={{
          paddingTop: "80px",
          paddingBottom: "60px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
    updatePetProfile: (data) => { dispatch(updatePetProfileAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeImageProfile);
