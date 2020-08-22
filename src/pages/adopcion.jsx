// Modulos
import { useEffect, useState } from "react";
import React from "react";
import { Helmet } from "react-helmet"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Selectores
import { getUsername } from "../store/reducers/user/selector";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Routes
import { getAdoptDataRoute } from "../routes/index";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";

const Adopt = ({
  username,
  updateTopMenuBarActivated,
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    getAdoptData();
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });
  // -----------------------Funciones-----------------------
  const [yesRedirect, setYesRedirect] = useState(false);
  const getAdoptData = () => {
    fetch(getAdoptDataRoute, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "https://dogfinderapp.vercel.app"
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      if (!data.username) {
        setYesRedirect(true);
      };
    });
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Adopción`}</title>
        <meta name="description" content={`Adopta una mascota en ${APP_NAME}`} />
      </Helmet>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
      <div className={`adopt-page text-center`}>
        ¡Página para que {username} adopte una mascota!
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
export default connect(mapStateToProps, mapDispatchToProps)(Adopt);