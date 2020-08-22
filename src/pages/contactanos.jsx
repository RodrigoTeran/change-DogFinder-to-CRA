// Modulos
import { useEffect } from "react";
import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";

const Contactanos = ({
  updateTopMenuBarActivated,
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });

  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Contáctanos`}</title>
        <meta name="description" content={`Contacta a ${APP_NAME}`} />
      </Helmet>
      <div className={`contact-us-page text-center`}>
        Contáctanos
        </div>
      <FooterLayout styleForm="with-absolute"></FooterLayout>
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
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contactanos);