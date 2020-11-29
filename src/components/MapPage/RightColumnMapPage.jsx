import React, { } from "react";
import { connect } from "react-redux";
import InputMap from "./InputMap";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

const RightColumnMapPage = ({
  petProfile
}) => {
  return (
    <InputMap></InputMap>
  )
}

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

export default connect(mapStateToProps)(RightColumnMapPage);