// Modulos
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import React from "react";

import { Redirect } from "react-router-dom";
// Selectores
import { getUsername, getImgId, getEmail, getPremium } from "../store/reducers/user/selector";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Routes
import { getProfileDataRoute } from "../routes/index";

// Acciones
import {
  updateTopMenuBarActivatedAction,
  updateFailureMessagesComponentAction
} from "../store/reducers/layout/actions";


// Acciones
import {
  updateProfilesAction
} from "../store/reducers/user/actions";

// -----------------------Componentes-----------------------
import HeaderProfilePage from "../components/ProfilePageComponents/Header";
import FooterLayout from "../components/FooterLayout";
import MainSectionProfilePage from "../components/ProfilePageComponents/MainSection/MainSectionProfilePage";
import { useLocation } from "react-router-dom";

const Profile = ({
  username,
  updateTopMenuBarActivated,
  imgId,
  email,
  premium,
  updateProfiles,
  updateFailureMessagesComponent
}) => {
  // -----------------------Hooks-----------------------
  let location = useLocation();
  const [firstScroll, setFirstScroll] = useState(false);
  useEffect(() => {
    if (!firstScroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      setFirstScroll(true);
    };
    try {
      // Se acaba de registrar
      const badToken = location.search;
      const pathName = location.pathname;
      if (pathName === "/perfil/newSession/") { // MAIL
        updateFailureMessagesComponent({
          state: true,
          title: "Error con la sesión",
          description: `Esta sesión esta abierta en otro dispositivo. Por seguridad te mandamos un correo para que puedas permitir o rechazar el acceso a este dispositivo.`,
        });
      };
      const realToken = badToken.substr(7, badToken.length - 1);
      if (realToken.length > 20) {
        localStorage.setItem("token", realToken);
      };
    } catch { };
    getProfileData();
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });
  // -----------------------Funciones-----------------------
  const [yesRedirect, setYesRedirect] = useState(false);
  const [yesDataAPI, setYesDataAPI] = useState(false);

  const getProfileData = () => {
    if (!yesDataAPI) {
      fetch(getProfileDataRoute, {
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
        if (!data.username) {
          setYesRedirect(true);
        } else {
          updateProfiles(data.profiles);
          setYesDataAPI(true);
        };
      });
    };
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - ${username}`}</title>
        <meta name="description" content={`Perfil ${APP_NAME} de ${username}`} />
      </Helmet>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
      {yesDataAPI ? (
        <div className={`profile-page space-footer-bottom`}>
          <HeaderProfilePage isPremium={premium} username={username} email={email} imgId={imgId}></HeaderProfilePage>
          <MainSectionProfilePage isPremium={premium}></MainSectionProfilePage>
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
    username: getUsername(state),
    imgId: getImgId(state),
    email: getEmail(state),
    premium: getPremium(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
    updateProfiles: (data) => { dispatch(updateProfilesAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);