// Modulos
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import React from "react";

// Selectores
import { getUsername, getImgId } from "../store/reducers/user/selector";

// Configuraciones
import { APP_NAME } from "../utils/config";

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
  imgId
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  }, []);
  return (
    <>
      <Helmet>
        <title>{APP_NAME} - {username}</title>
        <meta name="description" content={`Perfil ${APP_NAME} de ${username}`} />
      </Helmet>
      <div className={`profile-page`}>
        <HeaderProfilePage username={username} email={"r@gmail.com"} imgId={imgId}></HeaderProfilePage>
        <MainSectionProfilePage></MainSectionProfilePage>
      </div>
      <FooterLayout style="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
    imgId: getImgId(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);