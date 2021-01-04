// MODULES
import { connect } from "react-redux";
import { getResponsiveMenuBarBody } from "../../store/reducers/layout/selector";
// Modules
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getJarvises } from "../../store/reducers/jarvis/selector";

import { Link } from "react-router-dom";
import {
  getAuth,
  getImgId,
  getUsername,
} from "../../store/reducers/user/selector";
import {
  updateLoginAction,
  updateLogInFirstAnimationAction,
  updateUserAction,
  updateFirstResponseAPIAction,
} from "../../store/reducers/user/actions";

// Routes
import { logout } from "../../routes/index";

// Acciones
import {
  updateResponsiveMenuBarBodyOpenAction,
  updateTopMenuBarActivatedAction,
  updateLinesAction,
} from "../../store/reducers/layout/actions";

const ResponsiveMenuBar = ({
  responsiveMenuBarBodyClasses,
  auth,
  imgId,
  username,
  updateLogin,
  updateLogInFirstAnimation,
  updateResponsiveMenuBarBodyOpen,
  updateTopMenuBarActivated,
  updateLines,
  updateUser,

  updateFirstResponseAPI,
  jarvises,
}) => {
  const [jarvisesLengthVar, setJarvisesLengthVar] = useState(0);
  const getJarvisesLength = () => {
    var getJarvisesLengthVar = 0;
    for (var i = 0; i < jarvises.length; i++) {
      if (
        jarvises[i].typeObjectOfJarvis ===
          "laIAHizoComparacionPerroEncontradoEnCompaniaYPerfilPremium_YO_SOY_COMPANIA" ||
        jarvises[i].typeObjectOfJarvis ===
          "laIAHizoComparacionPerroEncontradoEnPerrosEncontradosYPerfilPremium_YO_SOY_USER_FOUNDER" ||
        jarvises[i].typeObjectOfJarvis ===
          "laIAHizoComparacionPerroEncontradoEnPerrosEncontradosYPerfilPremium_YO_SOY_USER_OWNER" ||
        jarvises[i].typeObjectOfJarvis ===
          "laIAHizoComparacionPerroEncontradoEnCompaniaYPerfilPremium_YO_SOY_USER_OWNER" ||
        jarvises[i].typeObjectOfJarvis ===
          "laCompaniaApretoBotonEnElMapaAPerroPremium_YO_SOY_COMPANIA" ||
        jarvises[i].typeObjectOfJarvis ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnCompania_YO_SOY_COMPANIA" ||
        jarvises[i].typeObjectOfJarvis ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnCompania_YO_SOY_USER_OWNER" ||
        jarvises[i].typeObjectOfJarvis ===
          "laCompaniaApretoBotonEnElMapaAPerroPremium_YO_SOY_USER_OWNER" ||
        jarvises[i].typeObjectOfJarvis ===
          "personaApretoElBotonEnElMapaAPerroPremium_YO_SOY_USER_FOUNDER" ||
        jarvises[i].typeObjectOfJarvis ===
          "personaApretoElBotonEnElMapaAPerroPremium_YO_SOY_USER_OWNER" ||
        jarvises[i].typeObjectOfJarvis ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnPerrosPerdidos_YO_SOY_USER_FOUNDER" ||
        jarvises[i].typeObjectOfJarvis ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnPerrosPerdidos_YO_SOY_USER_OWNER"
      ) {
        getJarvisesLengthVar += 1;
      }
    }
    setJarvisesLengthVar(getJarvisesLengthVar);
  };
  useEffect(() => {
    getJarvisesLength();
  }, [jarvises]);
  const iniciarSesion = () => {
    updateLogInFirstAnimation(true);
    updateLogin(true);
  };
  const [yesRedirect, setYesRedirect] = useState(false);
  const logoutWithFetch = () => {
    updateFirstResponseAPI(false);
    fetch(logout, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
      },
    }).then(() => {
      updateFirstResponseAPI(true);
      updateUser({
        selectedState: "username",
        state: null,
      });
      updateUser({
        selectedState: "email",
        state: null,
      });
      updateUser({
        selectedState: "imgId",
        state: null,
      });
      updateUser({
        selectedState: "auth",
        state: false,
      });
      updateUser({
        selectedState: "premium",
        state: false,
      });
      updateUser({
        selectedState: "emailForContact",
        state: undefined,
      });
      updateUser({
        selectedState: "numberOfTelephoneForContact",
        state: undefined,
      });
      updateUser({
        selectedState: "emailForContactActiveKey",
        state: false,
      });
      localStorage.removeItem("token");
      setYesRedirect(true);
    });
  };
  const closeResponsiveMenuBar = () => {
    // Cerrar
    updateResponsiveMenuBarBodyOpen(false);
    updateTopMenuBarActivated(true);
    updateLines({
      state_1: false,
      state_2: false,
      state_3: false,
    });
    window.scroll({
      top: document.scrollingElement.scrollTop + 1,
      left: 0,
      behavior: "smooth",
    }); // Movemos el scroll tantito para que el TopMenuBar se actualize,
    // ya que el Responsive Menu Bar lo pone desactivado... se mueve el scroll para que el Index lo actualice automáticamente
  };
  const getNameForMenuBar = () => {
    var name = username;
    var usernameForMenuBar = "";
    const det = 14;
    try {
      for (var i = 0; i <= name.length; i++) {
        if (i <= det - 1) {
          usernameForMenuBar += name.charAt(i);
        } else {
          break;
        }
      }
      if (name.length > det) {
        return usernameForMenuBar + "...";
      } else {
        return usernameForMenuBar;
      }
    } catch {
      return <></>;
    }
  };
  return (
    <>
      {yesRedirect ? <Redirect to="/"></Redirect> : <></>}
      {/* Si el reponsive menu bar body tiene alguna de esas dos clases, se le ponen */}
      <div
        className={`Responsive-menu-bar-body ${
          responsiveMenuBarBodyClasses.open ? "open" : ""
        } ${responsiveMenuBarBodyClasses.trans ? "trans" : ""}`}
      >
        <div className={`Responsive-menu-bar-content`}>
          {auth ? (
            <>
              <div onClick={closeResponsiveMenuBar}>
                {/* Perfil */}
                <Link to="/perfil">
                  <div className="Responsive-menu-bar-content-profile">
                    <img
                      src={`${imgId}`}
                      alt="Perfil"
                      className="rounded-circle img-fluid"
                      style={{ width: "8vw", marginRight: "3vw" }}
                    ></img>
                    <span>{getNameForMenuBar()}</span>
                  </div>
                </Link>
              </div>
              <div
                className="Responsive-menu-bar-content-profile Responsive-menu-bar-content-profile-svgs"
                onClick={closeResponsiveMenuBar}
              >
                {/* Inicio */}
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                  </svg>
                </Link>
                {/* Mapa */}
                <Link to="/mapa">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                </Link>
                {/* Notificaciones */}
                <Link to="/notificaciones">
                  <div className="notificaciones-container-bottom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" />
                    </svg>
                    {jarvisesLengthVar === 0 ? (
                      <></>
                    ) : (
                      <div className="notificaciones-container-bottom-svg">
                        {jarvisesLengthVar > 9 ? "9+" : jarvisesLengthVar}
                      </div>
                    )}
                  </div>
                </Link>
                {/* Cerrar sesión */}
                <div onClick={logoutWithFetch} style={{ cursor: "pointer" }}>
                  <svg
                    style={{ marginRight: 0 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
                  </svg>
                </div>
              </div>
              <div onClick={closeResponsiveMenuBar}>
                <Link to="/comprar">
                  <div className="Responsive-menu-bar-content-profile">
                    {" "}
                    {/* Se perdió mi perro */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
                    </svg>{" "}
                    Se perdió mi perro
                  </div>
                </Link>
              </div>
              <div onClick={closeResponsiveMenuBar}>
                <Link to="/registro/mascota/encontrada">
                  <div className="Responsive-menu-bar-content-profile">
                    {" "}
                    {/* Encontré un perro */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
                    </svg>{" "}
                    Encontré a un perro
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div onClick={closeResponsiveMenuBar}>
                <Link to="/">
                  <div className="Responsive-menu-bar-content-profile">
                    {" "}
                    {/* Inicio */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                    </svg>{" "}
                    Inicio
                  </div>
                </Link>
              </div>
              <div
                className="Responsive-menu-bar-content-profile"
                onClick={iniciarSesion}
              >
                {" "}
                {/* Iniciar Sesión */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z" />
                </svg>{" "}
                Iniciar Sesión
              </div>
              <div onClick={closeResponsiveMenuBar}>
                <Link to="/mapa">
                  <div className="Responsive-menu-bar-content-profile">
                    {" "}
                    {/* Mapa */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                    </svg>{" "}
                    Mapa
                  </div>
                </Link>
              </div>
              <div onClick={closeResponsiveMenuBar}>
                <Link to="/comprar">
                  <div className="Responsive-menu-bar-content-profile">
                    {" "}
                    {/* Se perdió mi perro */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
                    </svg>{" "}
                    Se perdió mi perro
                  </div>
                </Link>
              </div>
              <div
                className="Responsive-menu-bar-content-profile"
                onClick={iniciarSesion}
              >
                {" "}
                {/* Encontré un perro */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
                </svg>{" "}
                Encontré a un perro
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
// Las clases de REDUX
const mapStateToProps = (state) => {
  return {
    responsiveMenuBarBodyClasses: getResponsiveMenuBarBody(state),
    auth: getAuth(state),
    imgId: getImgId(state),
    username: getUsername(state),
    jarvises: getJarvises(state),
  };
};
// Las acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: (data) => {
      dispatch(updateLoginAction(data));
    },
    updateLogInFirstAnimation: (data) => {
      dispatch(updateLogInFirstAnimationAction(data));
    },
    updateResponsiveMenuBarBodyOpen: (data) => {
      dispatch(updateResponsiveMenuBarBodyOpenAction(data));
    },
    updateTopMenuBarActivated: (data) => {
      dispatch(updateTopMenuBarActivatedAction(data));
    },
    updateLines: (data) => {
      dispatch(updateLinesAction(data));
    },
    updateUser: (data) => {
      dispatch(updateUserAction(data));
    },
    updateFirstResponseAPI: (data) => {
      dispatch(updateFirstResponseAPIAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveMenuBar);
