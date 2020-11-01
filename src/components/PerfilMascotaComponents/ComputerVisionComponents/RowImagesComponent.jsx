import React, { useState } from "react";
import { connect } from "react-redux";

import {
  getPetProfile
} from "../../../store/reducers/user/selector";

import CardImage from "./CardImage";

const RowImagesComponent = ({
  petProfile,
  changeFunction
}) => {
  const [yesInstructions, setInstructions] = useState(false);

  return (
    <>
      <CardImage typeOfCard="addImage"
        changeFunction={changeFunction}
      ></CardImage>
      <div className={`image-pet-profile-instructions image-pet-profile-instructions-images ${yesInstructions ? ("open") : ("close")}`} style={{
        marginTop: "5px",
        marginBottom: yesInstructions ? ("5px") : ("20px"),
        marginLeft: window.innerWidth < 1121 ? (`calc(50% - 150px`) : ("0px")
      }}>
        <div className="image-pet-profile-instructions-icon">
          <div onClick={() => { setInstructions(!yesInstructions) }} title="Información" style={{
            display: "flex",
            alignItems: "center"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Instrucciones
            </div>
        </div>
        <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`} style={{
          marginBottom: "0px",
        }}>
          Sube una imagen específicamente del rostro de tu mascota. Puedes subir hasta 4 imágenes.
        </div>
      </div>
      <div className="computer-vision-row row">
        {petProfile.images.length === 4 ? (
          petProfile.images.map(image => {
            return (
              <CardImage
                key={image.srcImage}
                srcImage={image.srcImage}
              ></CardImage>
            )
          })
        ) : (<>
          {petProfile.images.length === 3 ? (
            <>
              {petProfile.images.map(image => {
                return (
                  <CardImage
                    key={image.srcImage}
                    srcImage={image.srcImage}
                  ></CardImage>
                )
              })}
              <CardImage
                nothing={true}
              ></CardImage>
            </>
          ) : (<>
            {petProfile.images.length === 2 ? (
              <>
                {petProfile.images.map(image => {
                  return (
                    <CardImage
                      key={image.srcImage}
                      srcImage={image.srcImage}
                    ></CardImage>
                  )
                })}
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
                  {petProfile.images.map(image => {
                    return (
                      <CardImage
                        key={image.srcImage}
                        srcImage={image.srcImage}
                      ></CardImage>
                    )
                  })}
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
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

export default connect(mapStateToProps)(RowImagesComponent);
