import React from "react";
import { connect } from "react-redux";

import {
  getPetProfile
} from "../../../store/reducers/user/selector";

import CardImage from "./CardImage";

const RowImagesComponent = ({
  petProfile
}) => {

  return (
    <>
      <div className="computer-vision-row row">
        <CardImage
          typeOfCard="addImage"
        ></CardImage>
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
