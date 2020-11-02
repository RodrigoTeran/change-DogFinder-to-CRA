// Modules
import React, { useState, useEffect } from "react";

// Components
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
const HeaderProfilePage = ({
  username,
  email,
  imgId,
  isPremium
}) => {
  const [yesInstructions, setInstructions] = useState(false);
  const [stateForRender, setStateForRender] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    setStateForRender(!stateForRender);
  };
  return (
    <>
      <div className="d-flex row justify-content-around align-items-center row-header-profile-page">
        {stateForRender ? (
          <div style={{ display: "none" }}>.</div>
        ) : (
            <div style={{ display: "none" }}>.</div>
          )}
        <div style={{ fontSize: "1rem" }} className="col-lg-6 col-md-6 col-sm-10 my-3 row-header-profile-page-col">
          <div className="d-flex justify-content-center">
            <img className="rounded-circle img-fluid mr-3" src={`${imgId}`} alt={`${username}`} style={{ width: "4.5rem", height: "4.5rem" }}></img>
            <div className="d-flex justify-content-center text-left" style={{ flexDirection: "column" }}>
              {username}
              {email ? (
                <span style={{ fontSize: ".85rem", wordBreak: "break-word" }}> Correo: <span style={{ textDecoration: "underline" }}>{email}</span></span>
              ) : (<></>)}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 text-center my-3 row-header-profile-page-col-2">
          <div>
            {!isPremium ? (
              <ButtonWhiteRectangle text={`Ser premium`} width="190px" height="50px" fontSize="1rem" clickFunction="/comprar" mt="mt-0">
                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z" /></svg>
              </ButtonWhiteRectangle>
            ) : (
                <ButtonWhiteRectangle text={`Ya cuentas con premium`} width="250px" height="50px" fontSize="1rem" noClick={true} mt="mt-0">
                  <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" /></svg>
                </ButtonWhiteRectangle>
              )}
          </div>
        </div>
      </div>
      <div className="profile-page-contact-profile">
        <div className="profile-page-contact-profile-title">
          <div>
            Información de tu cuenta
          </div>
        </div>
        <div className="profile-page-contact-profile-contacts-container">
          <div className="profile-page-contact-profile-contacts-container-row">
            <div className="profile-page-contact-profile-contacts-container-col">
              <ButtonWhiteRectangle text={`Correo electrónico`} width="100%" height="50px" fontSize="1rem" noClick={true} mt="mt-0"
                backgroundColorRectangle={"#0078D4"}
              >
                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
              </ButtonWhiteRectangle>
            </div>
            <div className="profile-page-contact-profile-contacts-container-col profile-page-contact-profile-contacts-container-col-2">
              <ButtonWhiteRectangle text={`Número de teléfono`} width="100%" height="50px" fontSize="1rem" noClick={true} mt="mt-0"
                backgroundColorRectangle={"#4CED69"}
                colorText={"#000"}
                bold={"bold"}
              >
                <svg style={{ fill: "#000" }} width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
              </ButtonWhiteRectangle>
            </div>
          </div>
        </div>
      </div>
      <div className={`image-pet-profile-instructions ${yesInstructions ? ("open") : ("close")}`} style={{
        marginTop: "0px",
        width: "300px",
        marginRight: `${window.innerWidth < 768 ? ("0px") : ("auto")}`, marginLeft: `${window.innerWidth < 768 ? ("") : ("calc(5% + 20px)")}`, marginBottom: `${window.innerWidth < 768 ? ("30px") : ("0px")}`,
      }}>
        <div className="image-pet-profile-instructions-icon">
          <div onClick={() => { setInstructions(!yesInstructions) }} title="Información" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: `${
              window.innerWidth < 768 ? (yesInstructions ? ("left") : ("center")) : ("left")
              }`
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Instrucciones
            </div>
        </div>
        <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`}>
          Debes de llenar estos dos campos antes de poder poner un perfil de tu mascota como perdido o reportar a un perro desaparecido.
        </div>
      </div>
    </>
  );
};
export default HeaderProfilePage;