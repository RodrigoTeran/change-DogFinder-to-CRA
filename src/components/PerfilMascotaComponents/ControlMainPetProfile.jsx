import React from "react";
import { connect } from "react-redux";
import PetIsLostController from "./PetIsLostController";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

const ControlMainPetProfile = ({
  isMobile,
  petProfile
}) => {

  return (
    <>
      {petProfile.isPetProfile ? (
        <div className="control-pet-profile">
          <PetIsLostController isMobile={isMobile}></PetIsLostController>
        </div>
      ) : (<></>)}
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

export default connect(mapStateToProps)(ControlMainPetProfile);