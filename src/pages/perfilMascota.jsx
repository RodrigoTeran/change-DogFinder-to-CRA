import React, { useEffect, useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Componentes
import FooterLayout from "../components/FooterLayout";
import ButtonWhiteRectangle from "../components/Buttons/ButtonWhiteRectangle";

import {
  updateFailureMessagesComponentAction,
  updateTopMenuBarActivatedAction,
} from "../store/reducers/layout/actions";


import {
  eraseProfile,
  getpetProfileDataRoute
} from "../routes/index";

const PerfilMascota = ({
  updateTopMenuBarActivated,
  updateFailureMessagesComponent
}) => {
  let location = useLocation();
  const [mascotaName, setMascotaName] = useState("");
  const [yesRedirect, setYesRedirect] = useState(false);
  const [yesDataAPI, setYesDataAPI] = useState(false);
  useEffect(() => {
    const pathName = location.pathname;
    const mascotaStringFeo = pathName.substr(16, pathName.length - 1);
    const mascota = mascotaStringFeo.replace(/-/gi, " ");
    setMascotaName(mascota);
    getPetProfileDataFunction();  // Get data
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });
  const eraseProfileFunction = () => {
    fetch(`${eraseProfile}/${mascotaName}`, {
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
      setYesRedirect(true);
    });
  };
  
  // Data Pet Profile
  const getPetProfileDataFunction = () => {
    fetch(`${getpetProfileDataRoute}/${mascotaName}`, {
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
      if (data.status) { // todo bien
        setYesDataAPI(true);
      } else {
        updateFailureMessagesComponent({
          state: true,
          title: "Error con el contacto con el perfil",
          description: `Vuelva a intentarlo.`,
        });
        setYesRedirect(true);
      };
    });
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - ${mascotaName}`}</title>
        <meta name="description" content={`Perfil de ${mascotaName}`} />
      </Helmet>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
      {yesDataAPI ? (
        <div className={`pet-profile-page space-footer-bottom`}>
          <div>
            {mascotaName}
          </div>
          <div>
            <ButtonWhiteRectangle text="Borrar Perfil"
              width="175px"
              height="50px"
              clickFunctionAnotherOne={eraseProfileFunction}
            ></ButtonWhiteRectangle>
          </div>
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
  return {};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PerfilMascota);