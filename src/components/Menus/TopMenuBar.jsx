// MODULES
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { getResponsiveMenuBarBody, getLines, getTopMenuBar } from "../../store/reducers/layout/selector";
import {
  getAuth,
  getImgId,
  getUsername,
  getFirstResponseUserAPI
} from "../../store/reducers/user/selector";

// Routes
import { logout } from "../../routes/index";

// Acciones
import {
  updateResponsiveMenuBarBodyTransAction,
  updateResponsiveMenuBarBodyOpenAction,
  updateTopMenuBarActivatedAction,
  updateLinesAction,
} from "../../store/reducers/layout/actions";
import {
  updateLoginAction,
  updateLogInFirstAnimationAction,
  updateUserAction,
} from "../../store/reducers/user/actions";

// CONFIG
import { APP_NAME_CAPITALS, APP_NAME } from "../../utils/config";

const Menubar = ({
  responsiveMenuBarBodyClasses,
  line1,
  line2,
  line3,
  topMenuBar,
  auth,
  imgId,
  username,
  firstResponseUserAPI,
  updateResponsiveMenuBarBodyTrans,
  updateLogin,
  updateResponsiveMenuBarBodyOpen,
  updateTopMenuBarActivated,
  updateLines,
  updateLogInFirstAnimation,
  updateUser
}) => {
  const operateResponsiveMenuBar = (action, actionReverse) => {
    // Abrir
    updateResponsiveMenuBarBodyOpen(action);
    updateTopMenuBarActivated(actionReverse);
    updateLines({
      state_1: action,
      state_2: action,
      state_3: action,
    });
    if (actionReverse) {
      window.scroll({ top: document.scrollingElement.scrollTop + 1, left: 0, behavior: 'smooth' }); // Movemos el scroll tantito para que el TopMenuBar se actualize,
    };
  };
  const [yesRedirect, setYesRedirect] = useState(false);
  const logoutWithFetch = () => {
    fetch(logout, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token")
      }
    }).then(() => {
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
      localStorage.removeItem("token");
      setYesRedirect(true);
    });
  };
  const interactResponsiveMenuBar = () => {  // Cerrar o abrir el Responsive Menu Bar
    updateResponsiveMenuBarBodyTrans(true); // Editar su clase "transición", para que a la primera carga este div no se vea cargando.
    // Por eso hasta que tenga la clase "trans", se puede ver.
    if (responsiveMenuBarBodyClasses.open) {
      operateResponsiveMenuBar(false, true);
    } else {
      operateResponsiveMenuBar(true, false);
    };
  };
  const iniciarSesion = () => {
    updateLogInFirstAnimation(true);
    updateLogin(true);
  };
  const getNameForMenuBar = () => {
    var name = username;
    var usernameForMenuBar = "";
    const det = 7;
    for (var i = 0; i <= name.length; i++) {
      if (i <= det - 1) {
        usernameForMenuBar += name.charAt(i);
      } else {
        break;
      };
    };
    if (name.length > det) {
      return (usernameForMenuBar + "...");
    } else {
      return (usernameForMenuBar);
    };
  };
  return (
    <>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
      {/* Si top menu bar esta activado se le pone la clase, lo mismo con su clase toggled */}
      <nav className={`navbar navbar-expand-lg fixed-top Top-menu-bar ${topMenuBar.activated ? ("activated") : ("")}`} style={{ visibility: firstResponseUserAPI ? ("visible") : ("hidden") }}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="link-after-effect" title={`${APP_NAME}`}>{APP_NAME_CAPITALS}</Link>
            </li>
          </ul>
          <div className="menu-bar-collapse content-top-menu-bar">
            <ul className="navbar-nav pr-5">
              <li className="mx-3">
                <Link to="/comprar" className="link-after-effect" title="Se perdió mi perro" style={{ cursor: "pointer" }}>
                  SE PERDIÓ MI PERRO
                </Link>
              </li>
              <li className="mr-3">
                {auth ? (
                  <Link to="/registro/mascota/encontrada" className="link-after-effect" title="Encontré a un perro" style={{ cursor: "pointer" }}>
                    ENCONTRÉ A UN PERRO
                  </Link>
                ) : (
                    <div onClick={iniciarSesion} style={{ cursor: "pointer" }} className="link-after-effect" title="Encontré a un perro">ENCONTRÉ A UN PERRO</div>
                  )}
              </li>
              {auth ? (
                <li className="mr-3">
                  <Link to="/mapa" className="link-after-effect" title="Mapa" style={{ cursor: "pointer" }}>
                    MAPA
                  </Link>
                </li>
              ) : (
                  <></>
                )}
            </ul>
            <ul className={`navbar-nav ml-auto`} style={{
              paddingRight: auth ? ("80px") : ("0px"),
            }}>
              <li style={{ cursor: "pointer", marginRight: auth ? ("30px") : ("40px") }}>
                <Link to="/" style={{ cursor: "pointer" }}>
                  <div className="Top-menu-bar-image-profile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" /></svg>
                  </div>
                </Link>
              </li>
              <li className="mx-3">
                {auth ? (
                  <Link to="/adopcion" className="Top-menu-bar-button" title="Adopta a un perro" style={{ cursor: "pointer" }}>
                    ADOPCIÓN
                  </Link>
                ) : (
                    <div onClick={iniciarSesion} className="Top-menu-bar-button" title="Adopta a un perro" style={{ cursor: "pointer", paddingTop: "5px" }}>ADOPCIÓN</div>
                  )}
              </li>
              {auth ? (
                <>
                  <li className="ml-2" style={{ marginRight: "32px" }}>
                    <div className="link-after-effect" onClick={logoutWithFetch} style={{ cursor: "pointer" }} title="Cerrar sesión">
                      <div className="Top-menu-bar-image-profile">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" /></svg>
                      </div>
                    </div>
                  </li>
                  <li className="ml-3" style={{ marginRight: "32px" }} title="Notificaciones">
                    <Link to="/" className="link-after-effect" style={{ cursor: "pointer" }}>
                      <div className="Top-menu-bar-image-profile">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" /></svg>
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                  <li className="ml-3">
                    <div className="link-after-effect" style={{ cursor: "pointer", marginTop: "5px" }} title="Iniciar sesión" onClick={iniciarSesion}>INICIAR SESIÓN</div>
                  </li>
                )}
              {auth ? (
                <li className="ml-3" style={{ marginRight: "20px" }}>
                  <Link to="/perfil" title={`${username}`} style={{ cursor: "pointer" }}>
                    <div className="Top-menu-bar-image-profile">
                      <img src={`${imgId}`} alt="Perfil" className="rounded-circle img-fluid mr-2"></img>
                      <span>
                        {getNameForMenuBar()}
                      </span>
                    </div>
                  </Link>
                </li>
              ) : (
                  <></>
                )}
            </ul>
          </div>
          <div className="hamburger" title="Menu" onClick={interactResponsiveMenuBar}>
            {/* Si esta abierto el responsive menu bar content, se muestra una X, si no, la hamburger original */}
            {line1 ? (<div className="line line1 x-line-1"></div>) : (<div className="line line1"></div>)}
            {line2 ? (<div className="line line2 x-line-2"></div>) : (<div className="line line2"></div>)}
            {line3 ? (<div className="line line3 x-line-3"></div>) : (<div className="line line3"></div>)}
          </div>
        </div>
      </nav>
      {firstResponseUserAPI ? (<></>) : (<>
        <div className="loader-menubar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      </>)}
    </>
  );
};
// Las clases necesarias de REDUX
const mapStateToProps = (state) => {
  return {
    responsiveMenuBarBodyClasses: getResponsiveMenuBarBody(state),
    line1: getLines(state).x_line1,
    line2: getLines(state).x_line2,
    line3: getLines(state).x_line3,
    topMenuBar: getTopMenuBar(state),
    auth: getAuth(state),
    imgId: getImgId(state),
    username: getUsername(state),
    firstResponseUserAPI: getFirstResponseUserAPI(state)
  };
};

// Las acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateResponsiveMenuBarBodyTrans: (data) => { dispatch(updateResponsiveMenuBarBodyTransAction(data)) },
    updateLogin: (data) => { dispatch(updateLoginAction(data)) },
    updateResponsiveMenuBarBodyOpen: (data) => { dispatch(updateResponsiveMenuBarBodyOpenAction(data)) },
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
    updateLines: (data) => { dispatch(updateLinesAction(data)) },
    updateLogInFirstAnimation: (data) => { dispatch(updateLogInFirstAnimationAction(data)) },
    updateUser: (data) => { dispatch(updateUserAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menubar);