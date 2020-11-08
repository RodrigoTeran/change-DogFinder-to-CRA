// Modules
import React from "react";
import { connect } from "react-redux";

// Components
import CardMainSectionProfile from "../ProfilePageComponents/MainSection/Cards/CardMainSectionProfile";
import CardMainSectionNewPet from "../ProfilePageComponents/MainSection/Cards/CardMainSectionNewPet";

// Selectores
import {
  getProfilesDogFounded
} from "../../store/reducers/user/selector";

const MainSectionDogFoundedPage = ({
  profilesDogFounded
}) => {
  return (
    <div className="main-section-profile-page">
      <div className="main-section-profile-page-title" style={{ marginTop: "30px" }}>
        PERROS ENCONTRADOS POR TI
      </div>
      <div>
        <CardMainSectionNewPet
          isDogFounded={true}
        ></CardMainSectionNewPet>
      </div>
      <div className="row main-section-profile-page-cards-section">
        {profilesDogFounded.length > 0 ? (
          <>
            {profilesDogFounded.map(profile => {
              return (
                <CardMainSectionProfile
                  petName={profile.petName}
                  key={profile.profileId}
                  profileImage={profile.profileImage}
                  isPetProfile={false}
                ></CardMainSectionProfile>
              )
            })
            }
          </>
        ) : (
            <></>
          )}
      </div>
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    profilesDogFounded: getProfilesDogFounded(state),
  };
};

export default connect(mapStateToProps)(MainSectionDogFoundedPage);