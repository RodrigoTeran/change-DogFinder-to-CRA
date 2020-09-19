import React from "react";
import { connect } from "react-redux";
import PetIsLostController from "./PetIsLostController";

const ControlMainPetProfile = ({

}) => {

  return (
    <>
      <div className="control-pet-profile row">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <PetIsLostController></PetIsLostController>
        </div>
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