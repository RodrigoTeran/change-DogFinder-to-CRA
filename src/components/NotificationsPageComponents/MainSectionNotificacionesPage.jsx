import React from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

const MainSectionNotificacionesPage = ({
  isIA,
  isUser,
  howManyIAUser,
  howManyIACompany,
  howManyManualUser,
  howManyManualCompany,
  setIsIA,
}) => {
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
        </div>
        <div className="main-section-notificaciones-page-container-col-2">
          {isUser ? (
            <>{isIA ? <>Mi perfil IA</> : <>Mi perfil manual</>}</>
          ) : (
            <>{isIA ? <>Compañía IA</> : <>Compañía manual</>}</>
          )}
        </div>
      </div>
    </div>
  );
};
export default MainSectionNotificacionesPage;
