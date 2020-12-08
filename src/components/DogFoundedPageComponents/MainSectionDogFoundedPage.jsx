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

import {
  getUserCompany
} from "../../store/reducers/company/selector";

const MainSectionDogFoundedPage = ({
  profilesDogFounded,
  userCompany,
  isViewOnCompany
}) => {
  return (
    <div className="main-section-profile-page" style={{
      paddingBottom: "75px"
    }}>
      <div className="main-section-profile-page-title" style={{ marginTop: "30px" }}>
        Perros encontrados {isViewOnCompany && userCompany.name ? ("por la empresa") : ("por ti")}
      </div>
      <div>
        <CardMainSectionNewPet
          isDogFounded={true}
          isViewOnCompany={isViewOnCompany}
        ></CardMainSectionNewPet>
      </div>
      <div className="row main-section-profile-page-cards-section">
        {profilesDogFounded.length > 0 ? (
          <>
            {profilesDogFounded.map(profile => {
              if (userCompany.name) {
                if (isViewOnCompany && profile.isFromCompany) {
                  return (
                    <CardMainSectionProfile
                      petName={profile.petName}
                      key={profile.profileId}
                      profileImage={profile.profileImage}
                      isPetProfile={false}
                      isFinished={profile.isFinished}
                      isFromCompany={profile.isFromCompany}
                    ></CardMainSectionProfile>
                  )
                } else if (!profile.isFromCompany && !isViewOnCompany) {
                  return (
                    <CardMainSectionProfile
                      petName={profile.petName}
                      key={profile.profileId}
                      profileImage={profile.profileImage}
                      isPetProfile={false}
                      isFinished={profile.isFinished}
                      isFromCompany={profile.isFromCompany}
                    ></CardMainSectionProfile>
                  )
                };
              } else {
                return (
                  <CardMainSectionProfile
                    petName={profile.petName}
                    key={profile.profileId}
                    profileImage={profile.profileImage}
                    isPetProfile={false}
                    isFinished={profile.isFinished}
                    isFromCompany={profile.isFromCompany}
                  ></CardMainSectionProfile>
                )
              };
            })
            }
          </>
        ) : (
            <></>
          )}
      </div>
    </div >
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    profilesDogFounded: getProfilesDogFounded(state),
    userCompany: getUserCompany(state)
  };
};

export default connect(mapStateToProps)(MainSectionDogFoundedPage);