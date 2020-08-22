// Modulos
import { useEffect, useState } from "react";
import React from "react";
import { Helmet } from "react-helmet";
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

const DogFounded = ({
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
        <title>{`${APP_NAME} - Registro perro encontrado`}</title>
        <meta name="description" content={`Sección para que ${username} registre una mascota perdida en ${APP_NAME}`} />
      </Helmet>
      {userRedirect ? (
        <>
          <Redirect to="/"></Redirect>
        </>) : (<></>)
      }
      <div className={`dog-founded-page text-center`}>
        Sección para que {username} registre a un perro perdido que encontró
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
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DogFounded);