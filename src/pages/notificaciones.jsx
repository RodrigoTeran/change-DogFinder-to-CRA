// Modulos
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Selectores
import {
  getAuth,
  getUsername,
  getFirstResponseUserAPI,
} from "../store/reducers/user/selector";

// Acciones
import { updateTopMenuBarActivatedAction } from "../store/reducers/layout/actions";

// Components
import FooterLayout from "../components/FooterLayout";

const Notifications = ({
  auth,
  updateTopMenuBarActivated,
  username,
  firstResponseUserAPI,
}) => {
  // -----------------------Hooks-----------------------
  const [firstScroll, setFirstScroll] = useState(false);
  const [yesRedirect, setYesRedirect] = useState(false);
  useEffect(() => {
    if (!firstScroll) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      setFirstScroll(true);
    }
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  }, [firstScroll]);
  useEffect(() => {
    if (firstResponseUserAPI) {
      if (!auth) {
        setYesRedirect(true);
      }
    }
  }, [firstResponseUserAPI, auth]);
  // -----------------------Funciones-----------------------
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Notificaciones`}</title>
        <meta
          name="description"
          content={`Notificaciones de ${APP_NAME}${
            username ? `para ${username}` : ""
          }`}
        />
      </Helmet>
      {yesRedirect ? <Redirect to="/"></Redirect> : <></>}
      {firstResponseUserAPI ? (
        <>
          <div className={`notifications-page space-footer-bottom`}>NOTIFÍCAME XD</div>
        </>
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
    auth: getAuth(state),
    username: getUsername(state),
    firstResponseUserAPI: getFirstResponseUserAPI(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => {
      dispatch(updateTopMenuBarActivatedAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
