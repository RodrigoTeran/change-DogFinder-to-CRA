// Modules
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// Components
import CardMainSectionProfile from "./Cards/CardMainSectionProfile";
import CardMainSectionNewPet from "./Cards/CardMainSectionNewPet";

import { ProfilePageCreateProfilesPremium } from "../../../utils/textForInstructions";
import { updateBannerInstructionsAction } from "../../../store/reducers/layout/actions";

// Selectores
import { getProfiles } from "../../../store/reducers/user/selector";

import { getUserCompany } from "../../../store/reducers/company/selector";

const MainSectionProfilePage = ({
  profiles,
  isPremium,
  userCompany,

  isViewOnCompany,
  updateBannerInstructions,
}) => {
  const [stateForRender, setStateForRender] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    setStateForRender(!stateForRender);
  };
  return (
    <>
      {!userCompany.name ? (
        <div className="main-section-profile-page">
          {stateForRender ? (
            <div style={{ display: "none" }}>.</div>
          ) : (
            <div style={{ display: "none" }}>.</div>
          )}
          <div className="main-section-profile-page-title">MASCOTAS</div>
          {isPremium ? (
            <>
              <div>
                <CardMainSectionNewPet></CardMainSectionNewPet>
              </div>
              <div className="main-section-profile-page-instructions">
                <div
                  className={`image-pet-profile-instructions`}
                  style={{ marginTop: "20px" }}
                >
                  <div className="image-pet-profile-instructions-icon">
                    <div
                      onClick={() => {
                        updateBannerInstructions({
                          state: true,
                          title: "Instrucciones",
                          description: ProfilePageCreateProfilesPremium,
                        });
                      }}
                      title="Instrucciones"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="image-pet-profile-instructions-text-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                      </svg>{" "}
                      Instrucciones
                    </div>
                  </div>
                </div>
              </div>
              <div className="row main-section-profile-page-cards-section">
                {profiles.length > 0 ? (
                  <>
                    {profiles.map((profile) => {
                      return (
                        <CardMainSectionProfile
                          petName={profile.petName}
                          key={profile.profileId}
                          profileImage={profile.profileImage}
                          isLost={profile.isLost}
                          isPetProfile={true}
                          canChangeProfile={profile.canChangeProfile}
                        ></CardMainSectionProfile>
                      );
                    })}
                  </>
                ) : (
                  <div style={{ paddingBottom: "200px" }}></div>
                )}
              </div>
            </>
          ) : (
            <div style={{ paddingBottom: "200px" }}>
              Actualmente no tienes una cuenta premium. Pulsa el botón de ser
              premium.
            </div>
          )}
        </div>
      ) : (
        <>
          {isViewOnCompany ? (
            <></>
          ) : (
            <div className="main-section-profile-page">
              {stateForRender ? (
                <div style={{ display: "none" }}>.</div>
              ) : (
                <div style={{ display: "none" }}>.</div>
              )}
              <div className="main-section-profile-page-title">MASCOTAS</div>
              {isPremium ? (
                <>
                  <div>
                    <CardMainSectionNewPet></CardMainSectionNewPet>
                  </div>
                  <div className="main-section-profile-page-instructions">
                    <div
                      className={`image-pet-profile-instructions`}
                      style={{ marginTop: "20px" }}
                    >
                      <div className="image-pet-profile-instructions-icon">
                        <div
                          onClick={() => {
                            updateBannerInstructions({
                              state: true,
                              title: "Instrucciones",
                              description: ProfilePageCreateProfilesPremium,
                            });
                          }}
                          title="Instrucciones"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="image-pet-profile-instructions-text-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                          </svg>{" "}
                          Instrucciones
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row main-section-profile-page-cards-section">
                    {profiles.length > 0 ? (
                      <>
                        {profiles.map((profile) => {
                          return (
                            <CardMainSectionProfile
                              petName={profile.petName}
                              key={profile.profileId}
                              profileImage={profile.profileImage}
                              isLost={profile.isLost}
                              isPetProfile={true}
                              canChangeProfile={profile.canChangeProfile}
                            ></CardMainSectionProfile>
                          );
                        })}
                      </>
                    ) : (
                      <div style={{ paddingBottom: "200px" }}></div>
                    )}
                  </div>
                </>
              ) : (
                <div style={{ paddingBottom: "200px" }}>
                  Actualmente no tienes una cuenta premium. Pulsa el botón de
                  ser premium.
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    profiles: getProfiles(state),
    userCompany: getUserCompany(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateBannerInstructions: (data) => {
      dispatch(updateBannerInstructionsAction(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSectionProfilePage);
