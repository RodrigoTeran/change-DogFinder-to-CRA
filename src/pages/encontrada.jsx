// Modulos
import { useEffect } from "react";
import React from "react";
import Head from "next/head";
import { connect } from "react-redux";

// Selectores
import { getUsername } from "../../../store/reducers/user/selector";

// Configuraciones
import { APP_NAME } from "../../../config";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../../../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import Layout from "../../../components/Layout";
import FooterLayout from "../../../components/FooterLayout";

const DogFounded = ({
  username,
  updateTopMenuBarActivated,
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  }, []);
  return (
    <>
      <Head>
        <title>{APP_NAME} - Registro perro encontrado</title>
        <meta name="description" content={`Sección para que ${username} registre una mascota perdida en ${APP_NAME}`} />
      </Head>
      <Layout>
        <div className={`dog-founded-page text-center`}>
          Sección para que {username} registre a un perro perdido que encontró
        </div>
        <FooterLayout style="with-absolute"></FooterLayout>
      </Layout>
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