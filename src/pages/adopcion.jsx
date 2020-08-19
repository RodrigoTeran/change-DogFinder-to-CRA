// Modulos
import { useEffect } from "react";
import React from "react";
import { Helmet } from "react-helmet"
import { connect } from "react-redux";

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

const Adopt = ({
  username,
  updateTopMenuBarActivated,
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  }, []);
  return (
    <>
      <Helmet>
        <title>{APP_NAME} - Adopción</title>
        <meta name="description" content={`Adopta una mascota en ${APP_NAME}`} />
      </Helmet>
      <div className={`adopt-page text-center`}>
        ¡Página para que {username} adopte una mascota!
        </div>
      <FooterLayout style="with-absolute"></FooterLayout>
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