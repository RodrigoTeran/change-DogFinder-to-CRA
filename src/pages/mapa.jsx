// Modulos
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Selectores
import { getUsername } from "../store/reducers/user/selector";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";

const Map = ({
  username,
  updateTopMenuBarActivated,
}) => {
  // -----------------------Hooks-----------------------
  const [userRedirect, setUserRedirect] = useState(false);
  useEffect(() => {
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
    if (!username) {
      setUserRedirect(true);
    };
  });
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Mapa`}</title>
        <meta name="description" content={`Sección de mapa de ${APP_NAME} para ${username}`} />
      </Helmet>
      {userRedirect ? (
        <>
          <Redirect to="/"></Redirect>
        </>) : (<></>)
      }
      <div className={`map-page text-center`}>
        Sección de mapa para {username}
      </div>
      <FooterLayout styleForm="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Map);