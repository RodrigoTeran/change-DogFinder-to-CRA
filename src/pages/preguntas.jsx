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

const Preguntas = ({
  updateTopMenuBarActivated
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  }, []);
  return (
    <>
      <Head>
        <title>{APP_NAME} - Preguntas</title>
        <meta name="description" content={`Preguntas frecuentes de ${APP_NAME}`} />
      </Head>
      <Layout>
        <div className={`questions-page text-center`}>
          Preguntas Frecuentes
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
export default connect(mapStateToProps, mapDispatchToProps)(Preguntas);