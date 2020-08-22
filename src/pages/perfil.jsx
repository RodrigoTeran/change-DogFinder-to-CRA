// Modulos
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import React from "react";

import { Redirect } from "react-router-dom";
// Selectores
import { getUsername, getImgId, getEmail } from "../store/reducers/user/selector";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Routes
import { getProfileDataRoute } from "../routes/index";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import HeaderProfilePage from "../components/ProfilePageComponents/Header";
import FooterLayout from "../components/FooterLayout";
import MainSectionProfilePage from "../components/ProfilePageComponents/MainSection/MainSectionProfilePage";

const Profile = ({
  username,
  updateTopMenuBarActivated,
  imgId,
  email
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    getProfileData();
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });
  // -----------------------Funciones-----------------------
  const [yesRedirect, setYesRedirect] = useState(false);
  const getProfileData = () => {
    fetch(getProfileDataRoute, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      console.log(`DATA PERFIL: ${JSON.stringify(data)}`);
      if (!data.username) {
        setYesRedirect(true);
      };
    });
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - ${username}`}</title>
        <meta name="description" content={`Perfil ${APP_NAME} de ${username}`} />
      </Helmet>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
      <div className={`profile-page`}>
        <HeaderProfilePage username={username} email={email} imgId={imgId}></HeaderProfilePage>
        <MainSectionProfilePage></MainSectionProfilePage>
      </div>
      <FooterLayout styleForm="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
    imgId: getImgId(state),
    email: getEmail(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);