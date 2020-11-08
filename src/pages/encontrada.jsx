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

import {
  updateProfilesDogFoundedAction
} from "../store/reducers/user/actions";

// Routes
import { getFoundDogDataRoute } from "../routes/index";

import HeaderDogFoundedPage from "../components/DogFoundedPageComponents/HeaderDogFoundedPage";
import MainSectionDogFoundedPage from "../components/DogFoundedPageComponents/MainSectionDogFoundedPage";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";

const DogFounded = ({
  username,
  updateTopMenuBarActivated,
  updateProfilesDogFounded
}) => {
  // -----------------------Hooks-----------------------
  useEffect(() => {
    getFoundDogData();
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });
  // -----------------------Funciones-----------------------
  const [yesRedirect, setYesRedirect] = useState(false);
  const [yesDataAPI, setYesDataAPI] = useState(false);

  const getFoundDogData = () => {
    if (!yesDataAPI) {
      fetch(getFoundDogDataRoute, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "token": localStorage.getItem("token")
        }
      }).then(res => {
        return res.json();
      }).then(data => {
        if (!data.username) {
          // No auth
          setYesRedirect(true);
        } else {
          updateProfilesDogFounded(data.profilesDogFounded);
          setYesDataAPI(true);
        };
      });
    };
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Registro perro encontrado`}</title>
        <meta name="description" content={`Sección para que ${username} registre una mascota perdida en ${APP_NAME}`} />
      </Helmet>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
      {yesDataAPI ? (
        <div className={`dog-founded-page text-center space-footer-bottom`}>
          <HeaderDogFoundedPage></HeaderDogFoundedPage>
          <MainSectionDogFoundedPage></MainSectionDogFoundedPage>
        </div>
      ) : (
          <div className="loader-pages">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
          </div>
        )}
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
    updateProfilesDogFounded: (data) => { dispatch(updateProfilesDogFoundedAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DogFounded);