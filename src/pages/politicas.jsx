// Modulos
import { useEffect } from "react";
import Head from "next/head";
import React from "react";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../config";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import Layout from "../components/Layout";
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
      <Head>
        <title>{APP_NAME} - Políticas de Privacidad</title>
        <meta name="description" content={`Políticas de Privacidad de ${APP_NAME}`} />
      </Head>
      <Layout>
        <div className={`privacy-page text-center`}>
          Políticas de Privacidad
        </div>
        <FooterLayout style="with-absolute"></FooterLayout>
      </Layout>
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