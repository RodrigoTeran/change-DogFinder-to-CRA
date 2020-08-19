// Modulos
import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";

const Politicas = ({
  updateTopMenuBarActivated,
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  }, []);
  return (
    <>
      <Helmet>
        <title>{APP_NAME} - Políticas de Privacidad</title>
        <meta name="description" content={`Políticas de Privacidad de ${APP_NAME}`} />
      </Helmet>
      <div className={`privacy-page text-center`}>
        Políticas de Privacidad
        </div>
      <FooterLayout style="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Politicas);