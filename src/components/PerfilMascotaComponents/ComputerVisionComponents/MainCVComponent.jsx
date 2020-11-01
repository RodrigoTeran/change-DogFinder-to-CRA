import React, { useState } from "react";
import { connect } from "react-redux";

import {
  getPetProfile
} from "../../../store/reducers/user/selector";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../../store/reducers/layout/actions";

import RowImagesComponent from "./RowImagesComponent";
import CroppImages from "./CroppImages";

const MainCVComponent = ({
  // petProfile,
  updateFailureMessagesComponent,
  // updateSuccessMessagesComponent
}) => {

  const [imageSrc, setImageSrc] = useState("");
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
        ></CroppImages>
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
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCVComponent);
