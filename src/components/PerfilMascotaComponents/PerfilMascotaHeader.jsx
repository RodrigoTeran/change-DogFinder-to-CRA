import React from "react";
import { connect } from "react-redux";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

const PerfilMascotaHeader = ({
  petProfile
}) => {
  return (
    <div className="pet-profile-page-header">
      <div style={{
        backgroundImage: "url(" + petProfile.petProfileImage + ")",
        width: "250px",
        height: "250px",
      }}
        className={`img-profile-thumbnail pet-profile-page-header-profile-image`}>
      </div>
    </div>
  )
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

export default connect(mapStateToProps)(PerfilMascotaHeader);
