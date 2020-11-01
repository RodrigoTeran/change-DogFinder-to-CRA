import React, { useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import {
  getPetProfile
} from "../../../store/reducers/user/selector";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../../store/reducers/layout/actions";

import {
  updatePetProfileAction
} from "../../../store/reducers/user/actions";

import {
  editPetProfileImages
} from "../../../routes/index";

import RowImagesComponent from "./RowImagesComponent";
import CroppImages from "./CroppImages";

const MainCVComponent = ({
  petProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  updatePetProfile
}) => {

  const [imageSrc, setImageSrc] = useState("");
  const [srcImageYes, setSrcImageYes] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [imageDestination, setImageDestination] = useState("");
  const [isResponse, setIsResponse] = useState(false);

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
        setImageSrc("");
      } else {
        setImageSrc(urlImage);
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

  const onSubmitInput = () => {
    setIsLoading(true);
    const data = new FormData();
    fetch(imageDestination)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "File name", { type: "image/png" })
        data.append("file", file);
        axios.put(`${editPetProfileImages}/${petProfile.name}`, data, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "token": localStorage.getItem("token")
          }
        })
          .then(res => {
            setIsLoading(false);
            setIsResponse(true);
            if (res.data.status === "true") {
              updateSuccessMessagesComponent({
                state: true,
                title: "Se añadió la imagen",
                description: `Se añadió la imagen para el reconocimiento facial con éxito`
              });
              if (res.data.imagesArray) {
                updatePetProfile({
                  selectedState: "images",
                  state: res.data.imagesArray
                });
              } else {
                updateFailureMessagesComponent({
                  state: true,
                  title: "Error al actualizar estado",
                  description: `Actualice la página para actualizar el estado`,
                });
              };
            } else if (res.data.status === "more") {
              updateFailureMessagesComponent({
                state: true,
                title: "Límite de imágenes",
                description: `Ya tienes 4 imágenes, que es el límite`,
              });
            } else {
              updateFailureMessagesComponent({
                state: true,
                title: "Error al enviar la imagen",
                description: `Algo ocurrió mal :(`,
              });
            };
          });
      });
  };

  return (
    <>
      <div className="computer-vision">
        <div className="computer-vision-title">
          Imágenes para el reconocimiento facial
        </div>
        <RowImagesComponent
          changeFunction={changeFunction}
        ></RowImagesComponent>
        <CroppImages
          imageSrc={imageSrc}
          setImageSrc={() => {
            setImageSrc("");
            setSrcImageYes(false);
            document.querySelector(".inputfileCroppr").value = "";
          }}
          srcImageYes={srcImageYes}
          onSubmitInput={onSubmitInput}
          setImageDestination={setImageDestination}
          imageDestination={imageDestination}

          isResponse={isResponse}
          setIsResponse={setIsResponse}
        ></CroppImages>
        {isLoading ? (
          <div className="loader-block" style={{
            paddingTop: "80px",
            paddingBottom: "60px"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
          </div>
        ) : (<></>)}
      </div>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
    updatePetProfile: (data) => { dispatch(updatePetProfileAction(data)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCVComponent);
