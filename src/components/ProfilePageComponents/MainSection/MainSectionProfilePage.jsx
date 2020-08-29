// Modules
import React from "react";
import { connect } from "react-redux";

// Components
import CardMainSectionProfile from "./Cards/CardMainSectionProfile";

// Selectores
import {
  getProfiles
} from "../../../store/reducers/user/selector";

const MainSectionProfilePage = ({
  profiles
}) => {
  return (
    <div className="main-section-profile-page">
      <div className="main-section-profile-page-title">
        PERFILES
      </div>
      {profiles.length > 0 ? (
        <div className="row main-section-profile-page-cards-section">
          {profiles.map(profile => {
            return (
              <CardMainSectionProfile petName={profile.petName} key={profile.profileId}></CardMainSectionProfile>
            )
          })}
        </div>
      ) : (
          <div>Actualmente no tienes ningún perfil de mascota registrado. Pulsa el botón de adquirir perfil.</div>
        )}
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    profiles: getProfiles(state),
  };
};

export default connect(mapStateToProps)(MainSectionProfilePage);