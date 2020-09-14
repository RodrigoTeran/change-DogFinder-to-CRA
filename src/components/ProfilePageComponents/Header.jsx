// Modules
import React from "react";

// Components
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
const HeaderProfilePage = ({
  username,
  email,
  imgId,
  isPremium
}) => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div style={{ fontSize: "1rem" }} className="col-lg-6 col-md-6 col-sm-10 my-3">
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
      <div className="col-lg-6 col-md-6 col-sm-10 text-center my-3">
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
  );
};
export default HeaderProfilePage;