import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getUserCompany
} from "../../store/reducers/company/selector";

const CompanyInfo = ({
  userCompany
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
    <div className="edit-company-info-container">
      {stateForRender ? (
        <div style={{ display: "none" }}>.</div>
      ) : (
          <div style={{ display: "none" }}>.</div>
        )}
      <div className="edit-company-info-container-title">
        INFORMACIÓN DE LA EMPRESA
      </div>
      <div className={`image-pet-profile-instructions ${yesInstructions ? ("open") : ("close")}`} style={{
        marginTop: window.innerWidth < 768 ? ("10px") : ("0px"),
        width: window.innerWidth < 768 ? ("300px") : ("50%"),
        marginRight: `${window.innerWidth < 768 ? ("0px") : ("auto")}`, marginLeft: window.innerWidth < 768 ? ("0px") : ("2px"), marginBottom: `${window.innerWidth < 768 ? ("30px") : ("0px")}`,
      }}
      >
        <div className="image-pet-profile-instructions-icon">
          <div onClick={() => { setInstructions(!yesInstructions) }} title="Instrucciones" style={{
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
          Aquí puedes ver y editar la información de tu empresa. Esta información saldrá en el mapa y en la página de adopción para que las personas conozcan mejor tu empresa.
          Si se necesita subir a la plataforma un perro perdido que encontraron o un perro que dan en adopción, al igual como si fuera un cliente normal, deben de tener llenos los
          espacios de correo y número de teléfono, para garantizar que las personas los puedan contactar cuando se requiera.
        </div>
      </div>
    </div>
  )
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    userCompany: getUserCompany(state)
  };
};
export default connect(mapStateToProps)(CompanyInfo);