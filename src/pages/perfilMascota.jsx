import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Componentes
import FooterLayout from "../components/FooterLayout";
import ChangeImageProfile from "../components/PerfilMascotaComponents/ChangeImageProfile";
import ControlMainPetProfile from "../components/PerfilMascotaComponents/ControlMainPetProfile";
import ChangeNameProfile from "../components/PerfilMascotaComponents/ChangeNameProfile";
import InfoPetProfile from "../components/PerfilMascotaComponents/InfoPetProfile";
import AgeProfileComponent from "../components/PerfilMascotaComponents/AgeProfileComponent";
import MainCVComponent from "../components/PerfilMascotaComponents/ComputerVisionComponents/MainCVComponent";
import RegisterDog from "../components/PerfilMascotaComponents/SpecificDogFounded/RegisterDog";

import {
  updateFailureMessagesComponentAction,
  updateTopMenuBarActivatedAction,
  updateSuccessMessagesComponentAction,
} from "../store/reducers/layout/actions";
import DeletePerfilMascota from "../components/PerfilMascotaComponents/DeletePerfilMascota";

import { getPetProfile } from "../store/reducers/user/selector";

import { updatePetProfileAction } from "../store/reducers/user/actions";

import { getpetProfileDataRoute } from "../routes/index";

import { getPetProfileDogFoundedProvider } from "../routes/indexDogFounded";

import PerfilMascotaHeader from "../components/PerfilMascotaComponents/PerfilMascotaHeader";

const PerfilMascota = ({
  updateTopMenuBarActivated,
  updateFailureMessagesComponent,
  updatePetProfile,
  petProfile,
}) => {
  let location = useLocation();
  const [yesRedirect, setYesRedirect] = useState(false);
  const [yesDataAPI, setYesDataAPI] = useState(false);
  useEffect(() => {
    handleResize();
    getPetProfileDataFunction(); // Get data
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 1121) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const getURL = () => {
    const pathName = location.pathname;
    const isPetProfileXd = pathName[4];
    const mascotaStringFeo = pathName.substr(
      isPetProfileXd === "f" ? 16 : 18,
      pathName.length - 1
    );
    const mascota = mascotaStringFeo.replace(/-/gi, " ");
    return mascota;
  };

  // Data Pet Profile
  const getPetProfileDataFunction = () => {
    const pathName = location.pathname;
    const isPetProfileXd = pathName[4];
    if (!yesDataAPI) {
      fetch(
        `${
          isPetProfileXd === "f"
            ? `${getpetProfileDataRoute}/${getURL()}`
            : `${getPetProfileDogFoundedProvider}/${getURL()}`
        }`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            token: localStorage.getItem("token"),
            isPetFromCompany: petProfile.isPetFromCompany ? true : false,
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status) {
            // todo bien
            setYesDataAPI(true);
            updatePetProfile({
              selectedState: "isPetProfile",
              state: data.isPetProfile,
            });
            updatePetProfile({
              selectedState: "name",
              state: data.profilePet.petName,
            });
            updatePetProfile({
              selectedState: "petProfileImage",
              state: data.profilePet.profileImage,
            });
            updatePetProfile({
              selectedState: "images",
              state: data.profilePet.images,
            });
            updatePetProfile({
              selectedState: "isLost",
              state: isPetProfileXd === "f" ? data.profilePet.isLost : false,
            });
            updatePetProfile({
              selectedState: "dogBreed",
              state: data.profilePet.race,
            });
            updatePetProfile({
              selectedState: "location",
              state: data.profilePet.location,
            });
            updatePetProfile({
              selectedState: "coordenates",
              state: data.profilePet.coordenates,
            });
            if (isPetProfileXd !== "f") {
              updatePetProfile({
                selectedState: "isRegistered",
                state: data.profilePet.isRegistered,
              });
            }
            updatePetProfile({
              selectedState: "size",
              state: data.profilePet.size,
            });
            updatePetProfile({
              selectedState: "isPetFromCompany",
              state: data.profilePet.isPetFromCompany,
            });
            updatePetProfile({
              selectedState: "mainColor",
              state: data.profilePet.mainColor,
            });
            updatePetProfile({
              selectedState: "gender",
              state: data.profilePet.gender,
            });
            if (data.profilePet.whenIsLost) {
              updatePetProfile({
                selectedState: "whenIsLost",
                state: data.profilePet.whenIsLost,
              });
            }
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error con el contacto con el perfil",
              description: `Vuelva a intentarlo.`,
            });
            setYesRedirect(true);
          }
        });
    }
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - ${petProfile.name}`}</title>
        <meta name="description" content={`Perfil de ${petProfile.name}`} />
      </Helmet>
      {yesRedirect ? <Redirect to="/"></Redirect> : <></>}
      {yesDataAPI ? (
        <div
          className={`pet-profile-page space-footer-bottom ${
            isMobile ? "column-pet-profile-page" : "row-pet-profile-page"
          }`}
        >
          {isMobile ? (
            <>
              <div className="pet-profile-first-div-mobile-mode">
                <div>
                  <ChangeNameProfile></ChangeNameProfile>
                  <PerfilMascotaHeader></PerfilMascotaHeader>
                  <ChangeImageProfile getURL={getURL}></ChangeImageProfile>
                </div>
                <div>
                  <ControlMainPetProfile
                    isMobile={isMobile}
                  ></ControlMainPetProfile>
                </div>
              </div>
              <div>
                <InfoPetProfile></InfoPetProfile>
                <AgeProfileComponent></AgeProfileComponent>
                <MainCVComponent></MainCVComponent>
                <DeletePerfilMascota
                  setYesRedirectProp={() => {
                    setYesRedirect(true);
                  }}
                  getURL={getURL}
                ></DeletePerfilMascota>
                {petProfile.isPetProfile ? <></> : <RegisterDog></RegisterDog>}
              </div>
            </>
          ) : (
            <>
              <div className={`pet-profile-page-1`}>
                <PerfilMascotaHeader></PerfilMascotaHeader>
                <ChangeImageProfile getURL={getURL}></ChangeImageProfile>
              </div>
              <div className={`pet-profile-page-2`}>
                <ChangeNameProfile></ChangeNameProfile>
                <ControlMainPetProfile></ControlMainPetProfile>
                <DeletePerfilMascota
                  setYesRedirectProp={() => {
                    setYesRedirect(true);
                  }}
                  getURL={getURL}
                ></DeletePerfilMascota>
                <InfoPetProfile></InfoPetProfile>
                <AgeProfileComponent></AgeProfileComponent>
                <MainCVComponent></MainCVComponent>
                {petProfile.isPetProfile ? <></> : <RegisterDog></RegisterDog>}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="loader-pages">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
          </svg>
        </div>
      )}
      <FooterLayout styleForm="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => {
      dispatch(updateTopMenuBarActivatedAction(data));
    },
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
    updatePetProfile: (data) => {
      dispatch(updatePetProfileAction(data));
    },
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PerfilMascota);
