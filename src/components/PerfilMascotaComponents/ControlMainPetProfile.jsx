import React from "react";
import { connect } from "react-redux";
import PetIsLostController from "./PetIsLostController";

const ControlMainPetProfile = ({
  isMobile
}) => {

  return (
    <>
      <div className="control-pet-profile">
        <PetIsLostController isMobile={isMobile}></PetIsLostController>
      </div>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ControlMainPetProfile);