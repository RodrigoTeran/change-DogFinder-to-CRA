import React, { useState } from "react";
import { connect } from "react-redux";

import InputFile from "../InputFile/InputFile";
import { Redirect } from "react-router-dom";
import axios from 'axios';

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import {
  editPetProfileImage
} from "../../routes/index";

const ChangeImageProfile = ({
  updateFailureMessagesComponent,
  getURL,
  updateSuccessMessagesComponent
}) => {
  const [srcImage, setSrcImage] = useState("");
  const [ImageInput, setImageInput] = useState(undefined);
  const [srcImageYes, setSrcImageYes] = useState(false);
  const changeFunction = e => {
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
  };
  const [yesRedirect, setYesRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitInput = () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("file", ImageInput);
    axios.put(`${editPetProfileImage}/${getURL()}`, data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token")
      }
    })
      .then(res => {
        if (res.data.status) {
          setIsLoading(false);
          setYesRedirect(true);
          updateSuccessMessagesComponent({
            state: true,
            title: "Se cambió la imagen",
            description: `Se cambió la imagen con éxito`
          });
        } else {
          setIsLoading(false);
          updateFailureMessagesComponent({
            state: true,
            title: "Error al enviar la imagen",
            description: `Algo ocurrió mal :(`,
          });
        };
      });
  };
  return (
    <div>
      {yesRedirect ? (<Redirect to="/perfil"></Redirect>) : (<></>)}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <InputFile
          width="205px"
          text="Cambiar imagen"
          mt="30px"
          changeFunction={changeFunction}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" /></svg>
        </InputFile>
        {srcImageYes ? (
          <div className="prev-image-pet-profile">
            Previsualización de la imagen
            <div style={{
              backgroundImage: "url(" + srcImage + ")"
            }}
              className={`img-profile-thumbnail`}>
            </div>
            <ButtonWhiteRectangle text="Subir imagen"
              width="300px"
              height="50px"
              mt="mt-3"
              green="greenColor"
              clickFunctionAnotherOne={onSubmitInput}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" /></svg>
            </ButtonWhiteRectangle>
            <ButtonWhiteRectangle text="Cancelar"
              width="300px"
              height="50px"
              mt="mt-3"
              red="redColor"
              clickFunctionAnotherOne={() => {
                setSrcImageYes(false);
                setSrcImage("");
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
  return {};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeImageProfile);
