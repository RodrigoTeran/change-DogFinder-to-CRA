// Modulos
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import React from "react";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";
import LeftColumnMapPage from "../components/MapPage/LeftColumnMapPage";
import RightColumnMapPage from "../components/MapPage/RightColumnMapPage";

const Map = ({
  updateTopMenuBarActivated
}) => {
  // -----------------------Hooks-----------------------
  const [firstScroll, setFirstScroll] = useState(false);
  useEffect(() => {
    if (!firstScroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      setFirstScroll(true);
    };
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  }, [firstScroll]);
  // -----------------------Funciones-----------------------
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Mapa`}</title>
        <meta name="description" content={`Sección de mapa de ${APP_NAME}`} />
      </Helmet>
      <div className={`map-page text-center space-footer-bottom`}>
        <LeftColumnMapPage></LeftColumnMapPage>
        <RightColumnMapPage></RightColumnMapPage>
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
export default connect(mapStateToProps, mapDispatchToProps)(Map);