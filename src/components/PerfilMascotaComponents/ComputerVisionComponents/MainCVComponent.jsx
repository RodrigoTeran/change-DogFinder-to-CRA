import React, { useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import {
  getPetProfile
} from "../../../store/reducers/user/selector";

import {
  updatePetProfileAction
} from "../../../store/reducers/user/actions";

import {
  updateSuccessMessagesComponentAction,
  updateFailureMessagesComponentAction
} from "../../../store/reducers/layout/actions";

import {
  editPetProfileImages
} from "../../../routes/index";

import CardImage from "./CardImage"
import CroppImages from "./CroppImages";

import {
  editProfileDogFoundedImages
} from "../../../routes/indexDogFounded";

const MainCVComponent = ({
  petProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  updatePetProfile
}) => {

  // CARD IMAGE
  const [srcImageToDelete, setSrcImageToDelete] = useState("no");
  const [imageSrc, setImageSrc] = useState("");
  const [srcImageYes, setSrcImageYes] = useState(false);
  const [yesInstructions, setInstructions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [imageDestination, setImageDestination] = useState("");
  const [isResponse, setIsResponse] = useState(false);

  const handleDeleteImage = (srcImage) => {
    setSrcImageToDelete(srcImage);
  };

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
        setSrcImageToDelete("no");
      } else {
        setImageSrc(urlImage);
        setSrcImageYes(true);
      };
    } catch {
      setSrcImageYes(false);
      setImageSrc("");
      setSrcImageToDelete("no");
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
        axios.put(`${petProfile.isPetProfile ? (`${editPetProfileImages}/${petProfile.name}`) : (`${editProfileDogFoundedImages}/${petProfile.name}`)}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "token": localStorage.getItem("token"),
              "srcImageToDelete": srcImageToDelete,
              "isPetFromCompany": petProfile.isPetFromCompany ? (true) : (false)
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
        <CardImage typeOfCard="addImage"
          changeFunction={changeFunction}
        ></CardImage>
        <div className={`image-pet-profile-instructions image-pet-profile-instructions-images ${yesInstructions ? ("open") : ("close")}`} style={{
          marginTop: "10px",
          minHeight: "20px",
          marginLeft: window.innerWidth < 1121 ? (`calc(50% - 150px`) : ("0px"),
          width: window.innerWidth < 1121 ? (`300px`) : ("50%"),
          marginBottom: "0px"
        }}>
          <div className="image-pet-profile-instructions-icon">
            <div onClick={() => { setInstructions(!yesInstructions) }} title="Instrucciones" style={{
              display: "flex",
              alignItems: "center"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Instrucciones
            </div>
          </div>
          <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`} style={{
            marginBottom: "0px",
          }}>
            {`${petProfile.isPetProfile ? (`Sube una imagen específicamente del rostro de tu mascota. Puedes subir hasta 4 imágenes.`) :
              (`Sube una imagen específicamente del rostro del perro que hayas encontrado. Puedes subir hasta 4 imágenes.`)}`}
          </div>
        </div>
        <div className="computer-vision-row row">
          {petProfile.images.length === 4 ? (
            <>
              <CardImage
                srcImage={petProfile.images[0].srcImage}
                handleDeleteImage={changeFunction}
                nowSRCImage={handleDeleteImage}
                randomId={"dsvbsdvjsk"}
              ></CardImage>
              <CardImage
                srcImage={petProfile.images[1].srcImage}
                handleDeleteImage={changeFunction}
                nowSRCImage={handleDeleteImage}
                randomId={"jbsjsdjdv"}
              ></CardImage>
              <CardImage
                srcImage={petProfile.images[2].srcImage}
                handleDeleteImage={changeFunction}
                nowSRCImage={handleDeleteImage}
                randomId={"ijgsbdsbdsjks"}
              ></CardImage>
              <CardImage
                srcImage={petProfile.images[3].srcImage}
                handleDeleteImage={changeFunction}
                nowSRCImage={handleDeleteImage}
                randomId={"kogarnjdsjndsbnk"}
              ></CardImage>
            </>
          )
            : (<>
              {petProfile.images.length === 3 ? (
                <>
                  <CardImage
                    srcImage={petProfile.images[0].srcImage}
                    handleDeleteImage={changeFunction}
                    nowSRCImage={handleDeleteImage}
                    randomId={"kgsdkbkjsdvkjsd"}
                  ></CardImage>
                  <CardImage
                    srcImage={petProfile.images[1].srcImage}
                    handleDeleteImage={changeFunction}
                    nowSRCImage={handleDeleteImage}
                    randomId={"lskndlxcklsd"}
                  ></CardImage>
                  <CardImage
                    srcImage={petProfile.images[2].srcImage}
                    handleDeleteImage={changeFunction}
                    nowSRCImage={handleDeleteImage}
                    randomId={"jbdvcjxjxckxc"}
                  ></CardImage>
                  <CardImage
                    nothing={true}
                  ></CardImage>
                </>
              ) : (<>
                {petProfile.images.length === 2 ? (
                  <>
                    <CardImage
                      srcImage={petProfile.images[0].srcImage}
                      handleDeleteImage={changeFunction}
                      nowSRCImage={handleDeleteImage}
                      randomId={"rhkuoodssa"}
                    ></CardImage>
                    <CardImage
                      srcImage={petProfile.images[1].srcImage}
                      handleDeleteImage={changeFunction}
                      nowSRCImage={handleDeleteImage}
                      randomId={"8273gibdusidsv"}
                    ></CardImage>
                    <CardImage
                      nothing={true}
                    ></CardImage>
                    <CardImage
                      nothing={true}
                    ></CardImage>
                  </>
                ) : (<>
                  {petProfile.images.length === 1 ? (
                    <>
                      <CardImage
                        srcImage={petProfile.images[0].srcImage}
                        handleDeleteImage={changeFunction}
                        nowSRCImage={handleDeleteImage}
                        randomId={"hreuibe28iuviw"}
                      ></CardImage>
                      <CardImage
                        nothing={true}
                      ></CardImage>
                      <CardImage
                        nothing={true}
                      ></CardImage>
                      <CardImage
                        nothing={true}
                      ></CardImage>
                    </>
                  ) : (<>
                    <CardImage
                      nothing={true}
                    ></CardImage>
                    <CardImage
                      nothing={true}
                    ></CardImage>
                    <CardImage
                      nothing={true}
                    ></CardImage>
                    <CardImage
                      nothing={true}
                    ></CardImage>
                  </>)}
                </>)}
              </>)}
            </>)}
        </div>
        <CroppImages
          imageSrc={imageSrc}
          setImageSrc={() => {
            setImageSrc("");
            setSrcImageYes(false);
            document.querySelector(".inputfileCroppr").value = "";
          }}
          srcImageYes={srcImageYes}
          onSubmitInput={() => {
            if (!isLoading) {
              onSubmitInput();
            };
          }}
          setImageDestination={setImageDestination}
          imageDestination={imageDestination}

          isResponse={isResponse}
          setIsResponse={setIsResponse}
          setSrcImageToDelete={setSrcImageToDelete}
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
