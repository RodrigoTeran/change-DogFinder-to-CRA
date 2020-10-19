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

import {
  updateFailureMessagesComponentAction,
  updateTopMenuBarActivatedAction,
  updateSuccessMessagesComponentAction
} from "../store/reducers/layout/actions";
import DeletePerfilMascota from "../components/PerfilMascotaComponents/DeletePerfilMascota";

import {
  getPetProfile
} from "../store/reducers/user/selector";

import {
  updatePetProfileAction
} from "../store/reducers/user/actions";

import {
  getpetProfileDataRoute
} from "../routes/index";

import PerfilMascotaHeader from "../components/PerfilMascotaComponents/PerfilMascotaHeader";

const PerfilMascota = ({
  updateTopMenuBarActivated,
  updateFailureMessagesComponent,
  updatePetProfile,
  petProfile
}) => {
  let location = useLocation();
  const [yesRedirect, setYesRedirect] = useState(false);
  const [yesDataAPI, setYesDataAPI] = useState(false);
  useEffect(() => {
    handleResize();
    getPetProfileDataFunction();  // Get data
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
    };
  };

  const getURL = () => {
    if (!petProfile.name || petProfile.name === "") {
      const pathName = location.pathname;
      const mascotaStringFeo = pathName.substr(16, pathName.length - 1);
      const mascota = mascotaStringFeo.replace(/-/gi, " ");
      return mascota;
    } else {
      return petProfile.name;
    };
  };

  // Data Pet Profile
  const getPetProfileDataFunction = () => {
    if (!yesDataAPI) {
      fetch(`${getpetProfileDataRoute}/${getURL()}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "token": localStorage.getItem("token")
        }
      }).then(res => {
        return res.json();
      }).then(data => {
        if (data.status) { // todo bien
          setYesDataAPI(true);
          updatePetProfile({
            name: data.profilePet.petName,
            petProfileImage: data.profilePet.profileImage,
            images: data.profilePet.images,
            isLost: data.profilePet.isLost,
            race: data.profilePet.race,
            location: data.profilePet.location,
            coordenates: data.profilePet.coordenates,
            size: data.profilePet.size,
            mainColor: data.profilePet.mainColor,
            gender: data.profilePet.gender,
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error con el contacto con el perfil",
            description: `Vuelva a intentarlo.`,
          });
          setYesRedirect(true);
        };
      });
    };
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - ${petProfile.name}`}</title>
        <meta name="description" content={`Perfil de ${petProfile.name}`} />
      </Helmet>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
      {yesDataAPI ? (
        <div className={`pet-profile-page space-footer-bottom ${isMobile ? ("column-pet-profile-page") : ("row-pet-profile-page")}`}>
          {isMobile ? (
            <>
              <ChangeNameProfile></ChangeNameProfile>
              <PerfilMascotaHeader></PerfilMascotaHeader>
              <ChangeImageProfile getURL={getURL}></ChangeImageProfile>
              <ControlMainPetProfile isMobile={isMobile}></ControlMainPetProfile>
              <DeletePerfilMascota setYesRedirectProp={() => {
                setYesRedirect(true);
              }} getURL={getURL}></DeletePerfilMascota>
              <InfoPetProfile></InfoPetProfile>
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
                  <DeletePerfilMascota setYesRedirectProp={() => {
                    setYesRedirect(true);
                  }} getURL={getURL}></DeletePerfilMascota>
                  <InfoPetProfile></InfoPetProfile>
                </div>
              </>
            )}
        </div>
      ) : (
          <div className="loader-pages">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
          </div>
        )}
      <FooterLayout styleForm="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updatePetProfile: (data) => { dispatch(updatePetProfileAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PerfilMascota);