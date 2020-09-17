import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Componentes
import FooterLayout from "../components/FooterLayout";
import ButtonWhiteRectangle from "../components/Buttons/ButtonWhiteRectangle";
import ChangeImageProfile from "../components/PerfilMascotaComponents/ChangeImageProfile";

import {
  updateFailureMessagesComponentAction,
  updateTopMenuBarActivatedAction,
  updateSuccessMessagesComponentAction
} from "../store/reducers/layout/actions";

import {
  getPetProfile
} from "../store/reducers/user/selector";

import {
  updatePetProfileAction
} from "../store/reducers/user/actions";

import {
  eraseProfile,
  getpetProfileDataRoute
} from "../routes/index";

import PerfilMascotaHeader from "../components/PerfilMascotaComponents/PerfilMascotaHeader";

const PerfilMascota = ({
  updateTopMenuBarActivated,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,

  updatePetProfile,
  petProfile
}) => {
  let location = useLocation();
  const [yesRedirect, setYesRedirect] = useState(false);
  const [yesDataAPI, setYesDataAPI] = useState(false);
  useEffect(() => {
    getPetProfileDataFunction();  // Get data
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });

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

  const eraseProfileFunction = () => {
    fetch(`${eraseProfile}/${getURL()}`, {
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
      updateSuccessMessagesComponent({
        state: true,
        title: "Se borro el perfil",
        description: `Se borro el perfil con éxito`,
      })
      setYesRedirect(true);
    });
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
            images: data.profilePet.images
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
        <div className={`pet-profile-page space-footer-bottom`}>
          <PerfilMascotaHeader></PerfilMascotaHeader>
          <ChangeImageProfile></ChangeImageProfile>
          <div>
            <ButtonWhiteRectangle text="Borrar Perfil"
              width="175px"
              height="50px"
              clickFunctionAnotherOne={eraseProfileFunction}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" /></svg>
            </ButtonWhiteRectangle>
          </div>
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