import React from "react";
import { connect } from "react-redux";

import {
  getPetProfile
} from "../../../store/reducers/user/selector";

import RowImagesComponent from "./RowImagesComponent";

const MainCVComponent = ({
  petProfile
}) => {

  return (
    <>
      <div className="computer-vision">
        <div className="computer-vision-title">
          Imágenes para el reconocimiento facial
        </div>
        <RowImagesComponent></RowImagesComponent>
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

export default connect(mapStateToProps)(MainCVComponent);
