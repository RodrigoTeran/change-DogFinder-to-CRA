import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";

// Modulos
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { isWebpSupported } from "react-image-webp/dist/utils";

// Routes
import { getUser } from "./routes/index";
import {
  updateUserCompanyAction
} from "./store/reducers/company/actions";

// Selectores
import {
  getlogInActivated,
  getLogInFirstAnimation
} from "./store/reducers/user/selector";

// Componentes
import TopMenuBar from "./components/Menus/TopMenuBar";
import ResponsiveMenuBar from "./components/Menus/ResponsiveMenuBar";
import LogInCard from "./components/Cards/LogInCard";
import FailureMessagesComponent from "./components/LayoutMessages/FailureMessagesComponent";
import SuccessMessagesComponent from "./components/LayoutMessages/SuccessMessagesComponent";
import BannerOkCancelAction from "./components/LayoutMessages/BannerOkCancelAction";
import BannerProfileContactInfo from "./components/LayoutMessages/BannerProfileContactInfo";
import BannerRedirectWithLink from "./components/LayoutMessages/BannerRedirectWithLink";

// Pages
import Index from "./pages/index";
import Profile from "./pages/perfil";
import Adpotion from "./pages/adopcion";
import Buy from "./pages/comprar";
import ContactUs from "./pages/contactanos";
import Map from "./pages/mapa";
import Politics from "./pages/politicas";
import Questions from "./pages/preguntas";
import Terms from "./pages/terminos";
import DogFounded from "./pages/encontrada";
import PerfilMascota from "./pages/perfilMascota";


// Acciones
import {
  updateResponsiveMenuBarBodyOpenAction,
  updateTopMenuBarActivatedAction,
  updateLinesAction,
} from "./store/reducers/layout/actions";

// Acciones
import {
  updateFirstResponseAPIAction,
  updateKeyActiveUserAction
} from "./store/reducers/user/actions";

import { updateLoginAction, updateWebpAction, updateUserAction } from "./store/reducers/user/actions";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const App = ({
  logInActivated,
  logInFirstAnimation,
  updateLogin,
  updateWebp,
  updateResponsiveMenuBarBodyOpen,
  updateTopMenuBarActivated,
  updateLines,
  updateUser,
  updateFirstResponseAPI,
  updateKeyActiveUser,
  updateUserCompany
}) => {
  useEffect(() => {
    getUserData();
    updateWebp(isWebpSupported());
    window.addEventListener("resize", resizeTopLayoutBodyContainer);
    window.addEventListener("scroll", scrollGoUpArrow);
    return () => {
      window.removeEventListener("resize", resizeTopLayoutBodyContainer);
      window.removeEventListener("scroll", scrollGoUpArrow);
    };
  });

  // -----------------------Funciones-----------------------
  const [arrowAppear, setArrowAppear] = useState(false);
  const scrollGoUpArrow = () => {
    if (document.scrollingElement.scrollTop > window.innerHeight - 100) {
      setArrowAppear(true);
    } else { setArrowAppear(false); }
  };
  const getUserData = () => {
    fetch(getUser, {
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
      updateFirstResponseAPI(true);
      if (data.username) {
        updateUser({
          selectedState: "username",
          state: data.username
        });
        updateUser({
          selectedState: "email",
          state: data.email
        });
        updateUser({
          selectedState: "imgId",
          state: data.profileImg
        });
        updateUser({
          selectedState: "auth",
          state: true
        });
        updateUser({
          selectedState: "premium",
          state: data.premium
        });
        updateUser({
          selectedState: "emailForContact",
          state: data.emailForContact
        });
        updateUser({
          selectedState: "numberOfTelephoneForContact",
          state: data.numberOfTelephoneForContact
        });
        updateUser({
          selectedState: "emailForContactActiveKey",
          state: data.emailForContactActiveKey
        });
        updateUser({
          selectedState: "telephoneForContactActiveKey",
          state: data.numberForContactActiveKey
        });
        updateKeyActiveUser(data.compraActiva);
        // COMPANY
        try {
          updateUserCompany({
            selectedState: "name",
            state: data.isUserInCompany.name
          });


          updateUserCompany({
            selectedState: "correoCompaniaEspacioParaKey",
            state: data.isUserInCompany.keyEmailCompany
          });
          updateUserCompany({
            selectedState: "numeroCompaniaEspacioParaKey",
            state: data.isUserInCompany.keyNumberCompany
          });


          updateUserCompany({
            selectedState: "location",
            state: data.isUserInCompany.location
          });
          updateUserCompany({
            selectedState: "coordenates",
            state: data.isUserInCompany.coordenates
          });
          updateUserCompany({
            selectedState: "webPage",
            state: data.isUserInCompany.webPage
          });
          updateUserCompany({
            selectedState: "logo",
            state: data.isUserInCompany.logo
          });
          updateUserCompany({
            selectedState: "informationCompania",
            state: data.isUserInCompany.informationCompania
          });
          updateUserCompany({
            selectedState: "codigoDescuento",
            state: data.isUserInCompany.codigoDescuento
          });
          updateUserCompany({
            selectedState: "usersQueUsaronElCodigoDeDescuento",
            state: data.isUserInCompany.usersQueUsaronElCodigoDeDescuento
          });
          updateUserCompany({
            selectedState: "correoCompania",
            state: data.isUserInCompany.correoCompania
          });
          updateUserCompany({
            selectedState: "numeroTelefonoCompania",
            state: data.isUserInCompany.numeroTelefonoCompania
          });
        } catch {
          updateUserCompany({
            selectedState: "name",
            state: undefined
          });
          updateUserCompany({
            selectedState: "correoCompaniaEspacioParaKey",
            state: false
          });
          updateUserCompany({
            selectedState: "numeroCompaniaEspacioParaKey",
            state: false
          });
          updateUserCompany({
            selectedState: "location",
            state: undefined
          });
          updateUserCompany({
            selectedState: "coordenates",
            state: undefined
          });
          updateUserCompany({
            selectedState: "webPage",
            state: undefined
          });
          updateUserCompany({
            selectedState: "logo",
            state: undefined
          });
          updateUserCompany({
            selectedState: "informationCompania",
            state: undefined
          });
          updateUserCompany({
            selectedState: "codigoDescuento",
            state: undefined
          });
          updateUserCompany({
            selectedState: "usersQueUsaronElCodigoDeDescuento",
            state: undefined
          });
          updateUserCompany({
            selectedState: "correoCompania",
            state: undefined
          });
          updateUserCompany({
            selectedState: "numeroTelefonoCompania",
            state: undefined
          });
        };
      } else {
        updateUser({
          selectedState: "username",
          state: null
        });
        updateUser({
          selectedState: "email",
          state: null
        });
        updateUser({
          selectedState: "imgId",
          state: null
        });
        updateUser({
          selectedState: "auth",
          state: false
        });
        updateUser({
          selectedState: "premium",
          state: false
        });
        updateUser({
          selectedState: "emailForContact",
          state: undefined
        });
        updateUser({
          selectedState: "numberOfTelephoneForContact",
          state: undefined
        });
        updateUser({
          selectedState: "emailForContactActiveKey",
          state: false
        });
        updateKeyActiveUser(undefined);

        // COMPANY
        updateUserCompany({
          selectedState: "name",
          state: undefined
        });
        updateUserCompany({
          selectedState: "location",
          state: undefined
        });
        updateUserCompany({
          selectedState: "correoCompaniaEspacioParaKey",
          state: false
        });
        updateUserCompany({
          selectedState: "numeroCompaniaEspacioParaKey",
          state: false
        });
        updateUserCompany({
          selectedState: "coordenates",
          state: undefined
        });
        updateUserCompany({
          selectedState: "webPage",
          state: undefined
        });
        updateUserCompany({
          selectedState: "logo",
          state: undefined
        });
        updateUserCompany({
          selectedState: "informationCompania",
          state: undefined
        });
        updateUserCompany({
          selectedState: "codigoDescuento",
          state: undefined
        });
        updateUserCompany({
          selectedState: "usersQueUsaronElCodigoDeDescuento",
          state: undefined
        });
        updateUserCompany({
          selectedState: "correoCompania",
          state: undefined
        });
        updateUserCompany({
          selectedState: "numeroTelefonoCompania",
          state: undefined
        });
      };
    });
  };
  const resizeTopLayoutBodyContainer = () => {
    if (window.innerWidth >= 1121) {  // Esto se ejecuta cuando el Menu ya no debería estar en "Mobile Mode",
      // entonces si el responsive-menu-bar está activado, se desactiva automáticamente
      updateResponsiveMenuBarBodyOpen(false);
      updateTopMenuBarActivated(true);
      window.scroll({ top: document.scrollingElement.scrollTop + 1, left: 0, behavior: "smooth" }); // Como el Top-menu se desactivaba
      // cuando el responsive-menu-bar esta activado, se mueve el scroll tantito, así la función de scroll se activa,
      // y el top-menu-bar se acomoda como debería estarlo
      updateLines({
        state_1: false,
        state_2: false,
        state_3: false,
      });
    };
  };
  const goUp = () => {  // Mover el scroll hasta el principio
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  const closeLogIn = () => {
    updateLogin(false);
  };
  return (
    <Router history={history}>
      <a className="skip-link" href="#maincontent">.</a>
      {/* Cuando este en orientación normal */}
      <div id="div-for-portrait">
        <TopMenuBar />
        <ResponsiveMenuBar />
        <div className={`wall-log-in-banner ${logInActivated ? ("open") : ("")}`} onClick={closeLogIn}></div>
        <LogInCard logInActivated={logInActivated} logInFirstAnimation={logInFirstAnimation}></LogInCard>
        <BannerOkCancelAction></BannerOkCancelAction>
        <BannerProfileContactInfo></BannerProfileContactInfo>
        <BannerRedirectWithLink></BannerRedirectWithLink>
        <div>
          <Switch>
            <Route path="/perfil/mascota"><PerfilMascota></PerfilMascota></Route>
            <Route path="/perro/encontrado"><PerfilMascota></PerfilMascota></Route>
            <Route path="/perfil/"><Profile></Profile></Route>
            <Route path="/adopcion"><Adpotion></Adpotion></Route>
            <Route path="/comprar"><Buy></Buy></Route>
            <Route path="/contactanos"><ContactUs></ContactUs></Route>
            <Route path="/mapa"><Map></Map></Route>
            <Route path="/politicas"><Politics></Politics></Route>
            <Route path="/preguntas"><Questions></Questions></Route>
            <Route path="/terminos"><Terms></Terms></Route>
            <Route path="/registro/mascota/encontrada"><DogFounded></DogFounded></Route>
            <Route exact path="/"><Index></Index></Route>
            <Route path="/">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div>
        <FailureMessagesComponent></FailureMessagesComponent>
        <SuccessMessagesComponent></SuccessMessagesComponent>
        <button className={`up-button-layout ${arrowAppear ? ("") : ("closed")}`} onClick={goUp} title="Principio">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" /></svg>
        </button>
      </div>
      <div id="div-for-landscape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z" /></svg>
        <span>
          ¡Gira la pantalla de tu dispositivo!
        </span>
      </div>
    </Router>
  );
};
// Las clases de REDUX
const mapStateToProps = (state) => {
  return {
    logInActivated: getlogInActivated(state),
    logInFirstAnimation: getLogInFirstAnimation(state),
  };
};

// Las acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: (data) => { dispatch(updateLoginAction(data)) },
    updateWebp: (data) => { dispatch(updateWebpAction(data)) },
    updateResponsiveMenuBarBodyOpen: (data) => { dispatch(updateResponsiveMenuBarBodyOpenAction(data)) },
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
    updateLines: (data) => { dispatch(updateLinesAction(data)) },
    updateUser: (data) => { dispatch(updateUserAction(data)) },
    updateFirstResponseAPI: (data) => { dispatch(updateFirstResponseAPIAction(data)) },
    updateKeyActiveUser: (data) => { dispatch(updateKeyActiveUserAction(data)) },
    updateUserCompany: (data) => { dispatch(updateUserCompanyAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
