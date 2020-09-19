// Modules
import React from "react";
import { connect } from "react-redux";

// Components
import CardMainSectionProfile from "./Cards/CardMainSectionProfile";
import CardMainSectionNewPet from "./Cards/CardMainSectionNewPet";

// Selectores
import {
  getProfiles
} from "../../../store/reducers/user/selector";

const MainSectionProfilePage = ({
  profiles,
  isPremium
}) => {
  return (
    <div className="main-section-profile-page">
      <div className="main-section-profile-page-title">
        PERFILES
      </div>
      {isPremium ? (
        <>
          <div style={{ marginBottom: "50px" }}>
            <CardMainSectionNewPet></CardMainSectionNewPet>
          </div>
          <div className="row main-section-profile-page-cards-section">
            {profiles.length > 0 ? (
              <>
                {profiles.map(profile => {
                  return (
                    <CardMainSectionProfile
                      petName={profile.petName}
                      key={profile.profileId}
                      profileImage={profile.profileImage}
                      isLost={profile.isLost}
                    ></CardMainSectionProfile>
                  )
                })
                }
              </>
            ) : (
                <></>
              )}
          </div>
        </>
      ) : (
          <div>Actualmente no tienes una cuenta premium. Pulsa el botón de ser premium.</div>
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