import React, { useState } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

const ColYesJarvis = ({ howManyManualUser, jarvises }) => {
  const formatDate = (date) => {
    const PrototypeDate = new Date(date);
    const day = PrototypeDate.getDate();
    const month = PrototypeDate.getMonth() + 1;
    const year = PrototypeDate.getFullYear();
    const superResult = String(day) + "/" + String(month) + "/" + String(year);
    return superResult;
  };
  return (
    <>
      {howManyManualUser.map((jarvisIndex) => {
        if (jarvises[jarvisIndex].myRelationWithJarvis === "owner") {
          if (jarvises[jarvisIndex].isInOwnerLayout) {
            if (jarvises[jarvisIndex].artesanal) {
              // ARTESANAL, por lo tanto no se usa (premiumProfile)
              return (
                <div
                  className="main-section-notificaciones-page-container-col-2-yes-jarvis"
                  key={jarvisIndex}
                >
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-1">
                    {jarvises[jarvisIndex].myRelationWithJarvis === "owner"
                      ? `${
                          jarvises[jarvisIndex].typeProfile === "Premium"
                            ? "Encontraron a tu perro en el mapa"
                            : "Encontraste a tu perro en el mapa"
                        }`
                      : `${
                          jarvises[jarvisIndex].typeProfile === "Premium"
                            ? "Encontraste a este perro en el mapa"
                            : "Alguien reporto a este perro como suyo en el mapa"
                        }`}
                  </div>
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-2">
                    <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-profileImage">
                      <img
                        src={jarvises[jarvisIndex].profile.profileImage}
                        alt="Imagen de Perfil"
                      />
                    </div>
                    <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest">
                      <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                        <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-name">
                          <span>
                            {jarvises[jarvisIndex].typeProfile === "Premium"
                              ? "Nombre: "
                              : "Apodo: "}
                          </span>
                          {jarvises[jarvisIndex].profile.petName}
                        </div>
                        <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-date">
                          <span>
                            {jarvises[jarvisIndex].typeProfile === "Premium"
                              ? "¿Cuándo se perdió?: "
                              : "¿Cuándo se encontró?:"}
                          </span>
                          {formatDate(jarvises[jarvisIndex].profile.whenIsLost)}
                        </div>
                      </div>

                      <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                        <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-race">
                          <span>Raza:</span>
                          {jarvises[jarvisIndex].profile.race}
                        </div>
                        <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-gender">
                          <span>Género:</span>
                          {jarvises[jarvisIndex].profile.gender}
                        </div>
                      </div>

                      <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                        <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-age">
                          <span>Edad:</span>
                          {jarvises[jarvisIndex].profile.size}
                        </div>
                        <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-color">
                          <span>Color Principal:</span>
                          {jarvises[jarvisIndex].profile.mainColor}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-3">
                    <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                      <div
                        className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-row-3-location"
                        style={{
                          width: "100%",
                        }}
                      >
                        <span>
                          {jarvises[jarvisIndex].typeProfile === "Premium"
                            ? "¿En dónde se perdió?: "
                            : "¿En dónde se encontró?:"}
                        </span>
                        {jarvises[jarvisIndex].profile.location}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              // NO ARTESANAL
              return <></>;
            }
          } else {
            return <></>;
          }
        } else {
          if (jarvises[jarvisIndex].isInFounderLayout) {
            if (jarvises[jarvisIndex].artesanal) {
              // ARTESANAL, por lo tanto no se usa (premiumProfile)
              return (
                <div
                  className="main-section-notificaciones-page-container-col-2-yes-jarvis"
                  key={jarvisIndex}
                >
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-profileImage">
                    <img
                      src={jarvises[jarvisIndex].profile.profileImage}
                      alt="Imagen de Perfil"
                    />
                  </div>
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest">
                    {jarvises[jarvisIndex].profile.petName}
                  </div>
                </div>
              );
            } else {
              // NO ARTESANAL
              return <></>;
            }
          } else {
            return <></>;
          }
        }
      })}
    </>
  );
};

const ColYes = ({ viewManualUser, children }) => {
  const altoCol2Compu = 700;
  const altoCol2Cel = 1200;
  return (
    <div
      className="main-section-notificaciones-page-container-col-2-yes"
      style={{
        transform: `${
          window.innerWidth < 1350
            ? `translateY(-${viewManualUser * (altoCol2Cel - 90)}px)`
            : `translateY(-${viewManualUser * (altoCol2Compu - 90)}px)`
        }`,
      }}
    >
      {children}
    </div>
  );
};

const ArrowUP = ({ viewManualUser, setViewManualUser }) => {
  return (
    <div
      className="main-section-notificaciones-page-container-col-2-arrowUP"
      onClick={() => {
        if (viewManualUser > 0) {
          setViewManualUser(viewManualUser - 1);
        }
      }}
      style={{
        cursor: viewManualUser > 0 ? "pointer" : "default",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
      </svg>
    </div>
  );
};

const ArrowDOWN = ({
  howManyManualUser,
  viewManualUser,
  setViewManualUser,
}) => {
  return (
    <div
      className="main-section-notificaciones-page-container-col-2-arrowDOWN"
      onClick={() => {
        if (viewManualUser < howManyManualUser.length - 1) {
          setViewManualUser(viewManualUser + 1);
        }
      }}
      style={{
        cursor:
          viewManualUser < howManyManualUser.length - 1 ? "pointer" : "default",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
      </svg>
    </div>
  );
};

const MainSectionNotificacionesPage = ({
  isIA,
  isUser,
  howManyIAUser,
  howManyIACompany,
  howManyManualUser,
  howManyManualCompany,
  setIsIA,
  jarvises,
}) => {
  const [viewManualUser, setViewManualUser] = useState(0);
  const [viewManualCompany, setViewManualCompany] = useState(0);
  const [viewIAUser, setViewIAUser] = useState(0);
  const [viewIACompany, setViewIACompany] = useState(0);
  const altoCol2Compu = 250;
  return (
    <div className="main-section-notificaciones-page">
      <div className="main-section-notificaciones-page-h1">
        {isUser ? "Notificaciones de Usuario" : "Notificaciones de Compañía"}
      </div>
      <div className="main-section-notificaciones-page-container">
        <div className="main-section-notificaciones-page-container-col-1">
          <div className="main-section-notificaciones-page-container-hr"></div>
          <div className="main-section-notificaciones-page-container-col-1-h1">
            Tipos de Notificaciones
          </div>
          <div className="main-section-notificaciones-page-container-col-1-buttons">
            <div className="main-section-notificaciones-page-container-col-1-buttons-col">
              <ButtonWhiteRectangle
                text="Hechas por usuarios"
                width="100%"
                greenDif=""
                mt="mt-0"
                height="55px"
                relative="relative"
                clickFunctionAnotherOne={() => {
                  setIsIA(false);
                }}
              >
                <>
                  <svg
                    width="25px"
                    height="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                  </svg>
                  <div
                    className="notifications-page-header-manualOrIA-containerButtons-USER-cantidad"
                    style={{
                      color: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: ".9rem",
                    }}
                  >
                    {isUser ? (
                      <>
                        {howManyManualUser.length > 9
                          ? "+9"
                          : howManyManualUser.length}
                      </>
                    ) : (
                      <>
                        {howManyManualCompany.length > 9
                          ? "+9"
                          : howManyManualCompany.length}
                      </>
                    )}
                  </div>
                </>
              </ButtonWhiteRectangle>
            </div>
            <div className="main-section-notificaciones-page-container-col-1-buttons-col">
              <ButtonWhiteRectangle
                text="Hechas por nuestra IA"
                width="100%"
                greenDif=""
                mt="mt-0"
                height="55px"
                relative="relative"
                clickFunctionAnotherOne={() => {
                  setIsIA(true);
                }}
              >
                <>
                  <svg
                    width="25px"
                    height="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z" />
                  </svg>
                  <div
                    className="notifications-page-header-manualOrIA-containerButtons-USER-cantidad"
                    style={{
                      color: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: ".9rem",
                    }}
                  >
                    {isUser ? (
                      <>
                        {howManyIAUser.length > 9 ? "+9" : howManyIAUser.length}
                      </>
                    ) : (
                      <>
                        {howManyIACompany.length > 9
                          ? "+9"
                          : howManyIACompany.length}
                      </>
                    )}
                  </div>
                </>
              </ButtonWhiteRectangle>
            </div>
          </div>
          <div className="main-section-notificaciones-page-container-col-1-h2">
            {isIA ? "Por Inteligencia Artificial" : "Por usuarios"}
          </div>
        </div>
        {isUser ? (
          <>
            {isIA ? (
              <>
                {howManyIAUser.length === 0 ? (
                  <div
                    className="main-section-notificaciones-page-container-col-2"
                    style={{ height: `${altoCol2Compu}px` }}
                  >
                    <div className="main-section-notificaciones-page-container-col-2-nothing">
                      No tienes notificaciones hechas por nuestra IA de tu
                      perfil
                    </div>
                  </div>
                ) : (
                  <div className="main-section-notificaciones-page-container-col-2">
                    <div className="main-section-notificaciones-page-container-col-2-yes">
                      rumba
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {howManyManualUser.length === 0 ? (
                  <div
                    className="main-section-notificaciones-page-container-col-2"
                    style={{ height: `${altoCol2Compu}px` }}
                  >
                    <div className="main-section-notificaciones-page-container-col-2-nothing">
                      No tienes notificaciones hechas por las personas de tu
                      perfil
                    </div>
                  </div>
                ) : (
                  <div className="main-section-notificaciones-page-container-col-2">
                    <ArrowUP
                      viewManualUser={viewManualUser}
                      setViewManualUser={setViewManualUser}
                    ></ArrowUP>
                    <ColYes viewManualUser={viewManualUser}>
                      <ColYesJarvis
                        howManyManualUser={howManyManualUser}
                        jarvises={jarvises}
                      ></ColYesJarvis>
                    </ColYes>
                    <ArrowDOWN
                      howManyManualUser={howManyManualUser}
                      viewManualUser={viewManualUser}
                      setViewManualUser={setViewManualUser}
                    ></ArrowDOWN>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <>
            {isIA ? (
              <>
                {howManyIACompany.length === 0 ? (
                  <div
                    className="main-section-notificaciones-page-container-col-2"
                    style={{ height: `${altoCol2Compu}px` }}
                  >
                    <div className="main-section-notificaciones-page-container-col-2-nothing">
                      No tienes notificaciones hechas por nuestra IA de tu
                      compañía
                    </div>
                  </div>
                ) : (
                  <div className="main-section-notificaciones-page-container-col-2">
                    <div className="main-section-notificaciones-page-container-col-2-yes">
                      rumba
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {howManyManualCompany.length === 0 ? (
                  <div
                    className="main-section-notificaciones-page-container-col-2"
                    style={{ height: `${altoCol2Compu}px` }}
                  >
                    <div className="main-section-notificaciones-page-container-col-2-nothing">
                      No tienes notificaciones hechas por las personas de tu
                      compañía
                    </div>
                  </div>
                ) : (
                  <div className="main-section-notificaciones-page-container-col-2">
                    <div className="main-section-notificaciones-page-container-col-2-yes">
                      rumba
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default MainSectionNotificacionesPage;
