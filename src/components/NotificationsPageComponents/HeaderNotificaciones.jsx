import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getJarvises } from "../../store/reducers/jarvis/selector";
import { getUserCompany } from "../../store/reducers/company/selector";

import MainSectionNotificacionesPage from "./MainSectionNotificacionesPage";

const HeaderNotificaciones = ({ jarvises, userCompany }) => {
  // Hay 4 modos
  const [IACompany, setIACompany] = useState([]);
  const [IAUser, setIAUser] = useState([]);
  const [manualCompany, setManualCompany] = useState([]);
  const [manualUser, setManualUser] = useState([]);

  // Modos
  const [isUser, setIsUser] = useState(true); // User
  const [isIA, setIsIA] = useState(true); // IA

  useEffect(() => {
    var IACompanyVAR = [];
    var IAUserVAR = [];
    var manualCompanyVAR = [];
    var manualUserVAR = [];
    for (var i = 0; i < jarvises.length; i++) {
      if (
        jarvises[i].typeObjectOfJarvis ===
        "laIAHizoComparacionPerroEncontradoEnCompaniaYPerfilPremium_YO_SOY_COMPANIA"
      ) {
        IACompanyVAR.push([i, jarvises[i].typeObjectOfJarvis]);
      } else if (
        jarvises[i].typeObjectOfJarvis ===
          "laIAHizoComparacionPerroEncontradoEnPerrosEncontradosYPerfilPremium_YO_SOY_USER_FOUNDER" ||
        jarvises[i].typeObjectOfJarvis ===
          "laIAHizoComparacionPerroEncontradoEnPerrosEncontradosYPerfilPremium_YO_SOY_USER_OWNER" ||
        jarvises[i].typeObjectOfJarvis ===
          "laIAHizoComparacionPerroEncontradoEnCompaniaYPerfilPremium_YO_SOY_USER_OWNER"
      ) {
        IAUserVAR.push([i, jarvises[i].typeObjectOfJarvis]);
      } else if (
        jarvises[i].typeObjectOfJarvis ===
          "laCompaniaApretoBotonEnElMapaAPerroPremium_YO_SOY_COMPANIA" ||
        jarvises[i].typeObjectOfJarvis ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnCompania_YO_SOY_COMPANIA"
      ) {
        manualCompanyVAR.push([i, jarvises[i].typeObjectOfJarvis]);
      } else if (
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
        manualUserVAR.push([i, jarvises[i].typeObjectOfJarvis]);
      } else {
        console.log("no entró en ninguna...");
      }
    }
    setManualUser(manualUserVAR);
    setManualCompany(manualCompanyVAR);
    setIAUser(IAUserVAR);
    setIACompany(IACompanyVAR);
  }, [jarvises]);
  return (
    <div className="notifications-page-header">
      <svg
        className="icon-header-section-1-index"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
      </svg>
      <div className="notifications-page-header-h1">
        Sección de Notificaciones
      </div>
      <div className="notifications-page-header-h2">
        En esta sección vas a poder ver las notificaciones relacionadas a cuando
        hay una conexión si encontraste o alguien encontro a tu mascota.
      </div>
      <div className="notifications-page-header-manualOrIA">
        <span>Hay dos tipos de notificaciones que te pueden llegar:</span>
        <ul>
          <li>
            Las hechas por otras personas (desde el mapa conectan con un perfil
            tuyo)
          </li>
          <li>
            O mediante nuestra Inteligencia Artificial (es un proceso
            automático)
          </li>
        </ul>
      </div>
      <div className="notifications-page-header-manualOrIA-containerButtons">
        <div className="notifications-page-header-manualOrIA-containerButtons-inside">
          <div
            className={`${
              userCompany.name
                ? "notifications-page-header-manualOrIA-containerButtons-COMPANY-hover"
                : "notifications-page-header-manualOrIA-containerButtons-COMPANY-noHOVER"
            }`}
            title="Notificaciones de Compañía"
            onClick={() => {
              if (userCompany.name) {
                setIsUser(false);
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z" />
            </svg>
            <div className="notifications-page-header-manualOrIA-containerButtons-COMPANY-cantidad">
              {manualCompany.length > 9 ? "9+" : manualCompany.length}
            </div>
          </div>
          <div
            className="notifications-page-header-manualOrIA-containerButtons-USER"
            title="Notificaciones de mi Perfil"
            onClick={() => {
              setIsUser(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
            </svg>
            <div className="notifications-page-header-manualOrIA-containerButtons-USER-cantidad">
              {manualUser.length > 9 ? "9+" : manualUser.length}
            </div>
          </div>
        </div>
        <div className="notifications-page-header-manualOrIA-containerButtons-line"></div>
      </div>
      <MainSectionNotificacionesPage
        isIA={isIA}
        isUser={isUser}
        setIsIA={setIsIA}
        manualUser={manualUser}
        manualCompany={manualCompany}
        IAUser={IAUser}
        IACompany={IACompany}
        jarvises={jarvises}
      ></MainSectionNotificacionesPage>
    </div>
  );
};
// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    jarvises: getJarvises(state),
    userCompany: getUserCompany(state),
  };
};
export default connect(mapStateToProps)(HeaderNotificaciones);
