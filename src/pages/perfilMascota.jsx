import React, { useEffect, useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Componentes
import FooterLayout from "../components/FooterLayout";
import ButtonWhiteRectangle from "../components/Buttons/ButtonWhiteRectangle";


import {
  eraseProfile
} from "../routes/index";

const PerfilMascota = () => {
  let location = useLocation();
  const [mascotaName, setMascotaName] = useState("");
  const [yesRedirect, setYesRedirect] = useState(false);
  useEffect(() => {
    const pathName = location.pathname;
    const mascotaStringFeo = pathName.substr(16, pathName.length - 1);
    const mascota = mascotaStringFeo.replace(/-/gi, " ");
    setMascotaName(mascota);
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
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - ${mascotaName}`}</title>
        <meta name="description" content={`Perfil de ${mascotaName}`} />
      </Helmet>
      {yesRedirect ? (<Redirect to="/"></Redirect>) : (<></>)}
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
      <FooterLayout styleForm="with-absolute"></FooterLayout>
    </>
  );
};
export default PerfilMascota;
