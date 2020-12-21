import React, { useState } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

const ImageInBigView = ({ imgSrc, setYes, yes }) => {
  return (
    <>
      <div className={`image-view-notification ${yes ? "" : "closed"}`}>
        <button
          title="Cerrar"
          onClick={() => {
            setYes(false);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </button>
        <img
          src={imgSrc}
          alt="Imagen de CV"
          style={{
            width:
              window.innerWidth > window.innerHeight
                ? "calc(100vh - 40px)"
                : "calc(100vw - 40px)",
          }}
        />
      </div>
    </>
  );
};

const ColYesJarvis = ({
  theRequiredJarvisArray,
  jarvises,

  setImgSrc,
  setYes,
}) => {
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
      {theRequiredJarvisArray.map((jarvisIndex) => {
        var titulo = undefined;
        var apodoOName = undefined;
        var cuandoSeEncontroOCuandoSePerdio = undefined;
        var enDondeSeEncontroOEnDondeSePerdio = undefined;
        var quienLaHalloODeQuienEs = undefined;
        var ownerOrFounder = undefined;
        var profileObject = undefined;

        if (
          jarvisIndex[1] ===
          "laCompaniaApretoBotonEnElMapaAPerroPremium_YO_SOY_COMPANIA"
        ) {
          titulo = "Tu Compañía encontró a un perro perdido en el mapa";
          apodoOName = "Nombre:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se perdió?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se perdió?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de su dueño:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].owner.email,
            telephone: jarvises[jarvisIndex[0]].owner.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "laCompaniaApretoBotonEnElMapaAPerroPremium_YO_SOY_USER_OWNER"
        ) {
          titulo = "Una Compañía encontró a tu perro perdido en el mapa";
          apodoOName = "Nombre:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se perdió?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se perdió?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de la compañía que lo encontró:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].founder.email,
            telephone: jarvises[jarvisIndex[0]].founder.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnCompania_YO_SOY_COMPANIA"
        ) {
          titulo = "El dueño de esta mascota la reclamó como suya en el mapa";
          apodoOName = "Apodo:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se encontró?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se encontró?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de su dueño:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].owner.email,
            telephone: jarvises[jarvisIndex[0]].owner.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnCompania_YO_SOY_USER_OWNER"
        ) {
          titulo =
            "Esta es la mascota que reclamaste como tuya en la compañía del mapa";
          apodoOName = "Apodo:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se encontró?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se encontró?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de la compañía que lo encontró:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].founder.email,
            telephone: jarvises[jarvisIndex[0]].founder.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "personaApretoElBotonEnElMapaAPerroPremium_YO_SOY_USER_FOUNDER"
        ) {
          titulo = "Esta es la mascota que encontraste en el mapa";
          apodoOName = "Nombre:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se perdió?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se perdió?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de su dueño:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].owner.email,
            telephone: jarvises[jarvisIndex[0]].owner.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "personaApretoElBotonEnElMapaAPerroPremium_YO_SOY_USER_OWNER"
        ) {
          titulo = "Una persona encontró a tu perro perdido en el mapa";
          apodoOName = "Nombre:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se perdió?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se perdió?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de la persona que lo encontró:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].founder.email,
            telephone: jarvises[jarvisIndex[0]].founder.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnPerrosPerdidos_YO_SOY_USER_FOUNDER"
        ) {
          titulo =
            "Una persona reclamó suya esta mascota encontrada por ti en el mapa";
          apodoOName = "Apodo:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se encontró?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se encontró?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto del dueño:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].owner.email,
            telephone: jarvises[jarvisIndex[0]].owner.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "elDuenoApretoElBotonEnElMapaASuPerroPerdidoEnPerrosPerdidos_YO_SOY_USER_OWNER"
        ) {
          titulo = "Esta es la mascota que reclamaste como tuya en el mapa";
          apodoOName = "Apodo:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se encontró?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se encontró?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto del que lo encontró:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].founder.email,
            telephone: jarvises[jarvisIndex[0]].founder.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "laIAHizoComparacionPerroEncontradoEnPerrosEncontradosYPerfilPremium_YO_SOY_USER_FOUNDER"
        ) {
          titulo =
            "Nuestra Inteligencia Artificial halló un perfil similar de una mascota perdida igual a la que pusiste como encontrada";
          apodoOName = "Nombre:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se perdió?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se perdió?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto del dueño de esta mascota:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].owner.email,
            telephone: jarvises[jarvisIndex[0]].owner.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].premiumProfile;
        } else if (
          jarvisIndex[1] ===
          "laIAHizoComparacionPerroEncontradoEnPerrosEncontradosYPerfilPremium_YO_SOY_USER_OWNER"
        ) {
          titulo =
            "Nuestra Inteligencia Artificial halló un perfil similar de una mascota encontrada igual a tu perro perdido";
          apodoOName = "Apodo:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se encontró?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se encontró?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de la persona que halló a tu mascota:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].founder.email,
            telephone: jarvises[jarvisIndex[0]].founder.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        } else if (
          jarvisIndex[1] ===
          "laIAHizoComparacionPerroEncontradoEnCompaniaYPerfilPremium_YO_SOY_COMPANIA"
        ) {
          titulo =
            "Nuestra Inteligencia Artificial halló un perfil similar de una mascota perdida igual al perro que encontró tu compañía";
          apodoOName = "Nombre:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se perdió?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se perdió?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto del dueño de esta mascota:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].owner.email,
            telephone: jarvises[jarvisIndex[0]].owner.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].premiumProfile;
        } else if (
          jarvisIndex[1] ===
          "laIAHizoComparacionPerroEncontradoEnCompaniaYPerfilPremium_YO_SOY_USER_OWNER"
        ) {
          titulo =
            "Nuestra Inteligencia Artificial halló un perfil similar de una mascota encontrada de una compañía igual a tu perro perdido";
          apodoOName = "Apodo:";
          cuandoSeEncontroOCuandoSePerdio = "¿Cuándo se encontró?:";
          enDondeSeEncontroOEnDondeSePerdio = "¿En dónde se encontró?:";
          quienLaHalloODeQuienEs =
            "Esta es la información de contacto de la compañía:";
          ownerOrFounder = {
            email: jarvises[jarvisIndex[0]].founder.email,
            telephone: jarvises[jarvisIndex[0]].founder.telephone,
          };
          profileObject = jarvises[jarvisIndex[0]].profile;
        }

        return (
          <div
            className="main-section-notificaciones-page-container-col-2-yes-jarvis"
            key={`${jarvisIndex[0]}${jarvisIndex[1]}`}
          >
            <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-1">
              {titulo}
            </div>
            <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-2">
              <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-profileImage">
                <img src={profileObject.profileImage} alt="Imagen de Perfil" />
              </div>
              <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest">
                <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-name">
                    <span>{apodoOName}</span>
                    {profileObject.petName}
                  </div>
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-date">
                    <span>{cuandoSeEncontroOCuandoSePerdio}</span>
                    {formatDate(profileObject.whenIsLost)}
                  </div>
                </div>

                <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-race">
                    <span>Raza:</span>
                    {profileObject.race}
                  </div>
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-gender">
                    <span>Género:</span>
                    {profileObject.gender}
                  </div>
                </div>

                <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-age">
                    <span>Edad:</span>
                    {profileObject.size}
                  </div>
                  <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-color">
                    <span>Color Principal:</span>
                    {profileObject.mainColor}
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
                  <span>{enDondeSeEncontroOEnDondeSePerdio}</span>
                  {profileObject.location}
                </div>
              </div>
            </div>
            <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-4">
              <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-4-h1">
                Imágenes de reconocimiento facial
              </div>
              <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-4-click">
                Dale click para verlas en grande
              </div>
              <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-4-images-container">
                <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-4-images-container-2">
                  <img
                    onClick={() => {
                      setImgSrc(profileObject.images[0].srcImage);
                      setYes(true);
                    }}
                    src={profileObject.images[0].srcImage}
                    alt="Imagen de IA"
                  />
                  <img
                    onClick={() => {
                      setImgSrc(profileObject.images[1].srcImage);
                      setYes(true);
                    }}
                    src={profileObject.images[1].srcImage}
                    alt="Imagen de IA"
                  />
                </div>
                <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-4-images-container-2">
                  <img
                    onClick={() => {
                      setImgSrc(profileObject.images[2].srcImage);
                      setYes(true);
                    }}
                    src={profileObject.images[2].srcImage}
                    alt="Imagen de IA"
                  />
                  <img
                    onClick={() => {
                      setImgSrc(profileObject.images[3].srcImage);
                      setYes(true);
                    }}
                    src={profileObject.images[3].srcImage}
                    alt="Imagen de IA"
                  />
                </div>
              </div>
            </div>
            <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-5">
              <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-row-5-h1">
                {quienLaHalloODeQuienEs}
              </div>
              <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-super">
                <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-age">
                  <span>Correo:</span>
                  {ownerOrFounder.email}
                </div>
                <div className="main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container main-section-notificaciones-page-container-col-2-yes-jarvis-rest-container-color">
                  <span>Teléfono:</span>
                  {ownerOrFounder.telephone}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ColYes = ({ viewRightNow, children }) => {
  const altoCol2Compu = 720;
  const altoCol2Cel = 1400;
  return (
    <div
      className="main-section-notificaciones-page-container-col-2-yes"
      style={{
        transform: `${
          window.innerWidth < 1350
            ? `translateY(-${viewRightNow * (altoCol2Cel - 90)}px)`
            : `translateY(-${viewRightNow * (altoCol2Compu - 90)}px)`
        }`,
      }}
    >
      {children}
    </div>
  );
};

const ArrowUP = ({ viewRightNow, setViewRightNow }) => {
  return (
    <div
      className="main-section-notificaciones-page-container-col-2-arrowUP"
      onClick={() => {
        if (viewRightNow > 0) {
          setViewRightNow(viewRightNow - 1);
        }
      }}
      style={{
        cursor: viewRightNow > 0 ? "pointer" : "default",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
      </svg>
    </div>
  );
};

const ArrowDOWN = ({ viewRightNow, setViewRightNow, howManyRightNow }) => {
  return (
    <div
      className="main-section-notificaciones-page-container-col-2-arrowDOWN"
      onClick={() => {
        if (viewRightNow < howManyRightNow.length - 1) {
          setViewRightNow(viewRightNow + 1);
        }
      }}
      style={{
        cursor:
          viewRightNow < howManyRightNow.length - 1 ? "pointer" : "default",
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
  setIsIA,

  manualUser,
  manualCompany,
  IAUser,
  IACompany,
  jarvises,
}) => {
  // Lo de las flechas de cada uno
  const [viewManualUser, setViewManualUser] = useState(0);
  const [viewManualCompany, setViewManualCompany] = useState(0);
  const [viewIAUser, setViewIAUser] = useState(0);
  const [viewIACompany, setViewIACompany] = useState(0);

  const altoCol2Compu = 250;

  // Poner imágenes en grande
  const [yes, setYes] = useState(false);
  const [imgSrc, setImgSrc] = useState(undefined);
  return (
    <>
      <ImageInBigView
        setYes={setYes}
        yes={yes}
        imgSrc={imgSrc}
      ></ImageInBigView>
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
                        <>{manualUser.length > 9 ? "9+" : manualUser.length}</>
                      ) : (
                        <>
                          {manualCompany.length > 9
                            ? "9+"
                            : manualCompany.length}
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
                        <>{IAUser.length > 9 ? "9+" : IAUser.length}</>
                      ) : (
                        <>{IACompany.length > 9 ? "9+" : IACompany.length}</>
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
                  {IAUser.length === 0 ? (
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
                        <ArrowUP
                          viewRightNow={viewIAUser}
                          setViewRightNow={setViewIAUser}
                        ></ArrowUP>
                        <ColYes viewRightNow={viewIAUser}>
                          <ColYesJarvis
                            setImgSrc={setImgSrc}
                            setYes={setYes}
                            theRequiredJarvisArray={IAUser}
                            jarvises={jarvises}
                          ></ColYesJarvis>
                        </ColYes>
                        <ArrowDOWN
                          viewRightNow={viewIAUser}
                          setViewRightNow={setViewIAUser}
                          howManyRightNow={IAUser}
                        ></ArrowDOWN>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {manualUser.length === 0 ? (
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
                        viewRightNow={viewManualUser}
                        setViewRightNow={setViewManualUser}
                      ></ArrowUP>
                      <ColYes viewRightNow={viewManualUser}>
                        <ColYesJarvis
                          setImgSrc={setImgSrc}
                          setYes={setYes}
                          theRequiredJarvisArray={manualUser}
                          jarvises={jarvises}
                        ></ColYesJarvis>
                      </ColYes>
                      <ArrowDOWN
                        viewRightNow={viewManualUser}
                        setViewRightNow={setViewManualUser}
                        howManyRightNow={manualUser}
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
                  {IACompany.length === 0 ? (
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
                        <ArrowUP
                          viewRightNow={viewIACompany}
                          setViewRightNow={setViewIACompany}
                        ></ArrowUP>
                        <ColYes viewRightNow={viewIACompany}>
                          <ColYesJarvis
                            setImgSrc={setImgSrc}
                            setYes={setYes}
                            theRequiredJarvisArray={IACompany}
                            jarvises={jarvises}
                          ></ColYesJarvis>
                        </ColYes>
                        <ArrowDOWN
                          viewRightNow={viewIACompany}
                          setViewRightNow={setViewIACompany}
                          howManyRightNow={IACompany}
                        ></ArrowDOWN>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {manualCompany.length === 0 ? (
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
                        <ArrowUP
                          viewRightNow={viewManualCompany}
                          setViewRightNow={setViewManualCompany}
                        ></ArrowUP>
                        <ColYes viewRightNow={viewManualCompany}>
                          <ColYesJarvis
                            setImgSrc={setImgSrc}
                            setYes={setYes}
                            theRequiredJarvisArray={manualCompany}
                            jarvises={jarvises}
                          ></ColYesJarvis>
                        </ColYes>
                        <ArrowDOWN
                          viewRightNow={viewManualCompany}
                          setViewRightNow={setViewManualCompany}
                          howManyRightNow={manualCompany}
                        ></ArrowDOWN>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default MainSectionNotificacionesPage;
