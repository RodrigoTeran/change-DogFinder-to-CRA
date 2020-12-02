// Modules
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// Components
import CardMainSectionProfile from "./Cards/CardMainSectionProfile";
import CardMainSectionNewPet from "./Cards/CardMainSectionNewPet";

// Selectores
import {
  getProfiles
} from "../../../store/reducers/user/selector";

import {
  getUserCompany
} from "../../../store/reducers/company/selector";

const MainSectionProfilePage = ({
  profiles,
  isPremium,
  userCompany,

  isViewOnCompany
}) => {
  const [yesInstructions, setInstructions] = useState(false);
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
      {!userCompany ? (
        <div className="main-section-profile-page">
          {stateForRender ? (
            <div style={{ display: "none" }}>.</div>
          ) : (
              <div style={{ display: "none" }}>.</div>
            )}
          <div className="main-section-profile-page-title">
            MASCOTAS
            </div>
          {isPremium ? (
            <>
              <div>
                <CardMainSectionNewPet></CardMainSectionNewPet>
              </div>
              <div className="main-section-profile-page-instructions">
                <div className={`image-pet-profile-instructions ${yesInstructions ? ("open") : ("close")}`} style={{
                  width: window.innerWidth < 768 ? ("300px") : ("50%")
                }}>
                  <div className="image-pet-profile-instructions-icon">
                    <div onClick={() => { setInstructions(!yesInstructions) }} title="Instrucciones" style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: window.innerWidth < 768 ? (yesInstructions ? ("left") : ("center")) : ("left")
                    }} className="image-pet-profile-instructions-text-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Instrucciones
                    </div>
                  </div>
                  <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`}>
                    Crea perfiles de tu(s) mascota(s) para poder registrar su información y ayudarte si se extravían.
                    </div>
                </div>
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
                          isPetProfile={true}
                        ></CardMainSectionProfile>
                      )
                    })
                    }
                  </>
                ) : (
                    <div style={{ paddingBottom: "200px" }}>
                    </div>
                  )}
              </div>
            </>
          ) : (
              <div
                style={{ paddingBottom: "200px" }}
              >Actualmente no tienes una cuenta premium. Pulsa el botón de ser premium.</div>
            )
          }
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
                  <div className="main-section-profile-page-title">
                    MASCOTAS
                </div>
                  {isPremium ? (
                    <>
                      <div>
                        <CardMainSectionNewPet></CardMainSectionNewPet>
                      </div>
                      <div className="main-section-profile-page-instructions">
                        <div className={`image-pet-profile-instructions ${yesInstructions ? ("open") : ("close")}`} style={{
                          width: window.innerWidth < 768 ? ("300px") : ("50%")
                        }}>
                          <div className="image-pet-profile-instructions-icon">
                            <div onClick={() => { setInstructions(!yesInstructions) }} title="Instrucciones" style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: window.innerWidth < 768 ? (yesInstructions ? ("left") : ("center")) : ("left")
                            }} className="image-pet-profile-instructions-text-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Instrucciones
                        </div>
                          </div>
                          <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`}>
                            Crea perfiles de tu(s) mascota(s) para poder registrar su información y ayudarte si se extravían.
                        </div>
                        </div>
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
                                  isPetProfile={true}
                                ></CardMainSectionProfile>
                              )
                            })
                            }
                          </>
                        ) : (
                            <div style={{ paddingBottom: "200px" }}>
                            </div>
                          )}
                      </div>
                    </>
                  ) : (
                      <div
                        style={{ paddingBottom: "200px" }}
                      >Actualmente no tienes una cuenta premium. Pulsa el botón de ser premium.</div>
                    )
                  }
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
    userCompany: getUserCompany(state)
  };
};

export default connect(mapStateToProps)(MainSectionProfilePage);