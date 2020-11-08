import React from "react";
import { connect } from "react-redux";

import {
  getPetProfile,
  getWebp
} from "../../store/reducers/user/selector";

import {
  updatePetProfileAction
} from "../../store/reducers/user/actions";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

import {
  editPetProfileColor
} from "../../routes/index";

import {
  editPetProfileDogFoundedColor
} from "../../routes/indexDogFounded";

const ColorProfile = ({
  petProfile,
  isWebp,
  changeLoader,
  updatePetProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent
}) => {

  const editColorProfile = (newColor) => {
    changeLoader(true);
    const body = {
      newColor
    };
    fetch(`${petProfile.isPetProfile ? (`${editPetProfileColor}/${petProfile.name}`) : (`${editPetProfileDogFoundedColor}/${petProfile.name}`)}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token")
      },
      body: JSON.stringify(body)
    }).then(res => {
      return res.json();
    }).then(data => {
      changeLoader(false);
      if (data.status) {
        updatePetProfile({
          selectedState: "mainColor",
          state: newColor
        });
        updateSuccessMessagesComponent({
          state: true,
          title: "Se ha cambiado el color",
          description: "Se ha cambiado el color principal de tu mascota con éxito",
        });
      } else {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "No se ha podido cambiar el color principal de tu mascota",
        });
      };
    });
  };

  return (
    <div className={`color-profile`}>
      <div className={`color-profile-content`}>
        <div className={`color-profile-title`}>
          Color principal
        </div>
        <div className="row d-flex justify-center align-items-center color-profile-row">
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Negro">
            <div className={`color-profile-circle color-profile-circle-black`} onClick={() => { editColorProfile("Negro") }}>

              {petProfile.mainColor === "Negro" ? (
                <div className={`color-profile-circle-answer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
                </div>
              ) : (<></>)}

            </div>
            <div className={`color-profile-circle-text`}>
              Negro
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Blanco">
            <div className={`color-profile-circle color-profile-circle-white`} onClick={() => { editColorProfile("Blanco") }}>

              {petProfile.mainColor === "Blanco" ? (
                <div className={`color-profile-circle-answer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
                </div>
              ) : (<></>)}

            </div>
            <div className={`color-profile-circle-text`}>
              Blanco
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Gris">
            <div className={`color-profile-circle color-profile-circle-gray`} onClick={() => { editColorProfile("Gris") }}>

              {petProfile.mainColor === "Gris" ? (
                <div className={`color-profile-circle-answer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
                </div>
              ) : (<></>)}

            </div>
            <div className={`color-profile-circle-text`}>
              Gris
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Café">
            <div className={`color-profile-circle color-profile-circle-brown`} onClick={() => { editColorProfile("Café") }}>

              {petProfile.mainColor === "Café" ? (
                <div className={`color-profile-circle-answer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
                </div>
              ) : (<></>)}

            </div>
            <div className={`color-profile-circle-text`}>
              Café
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Amarillo">
            <div className={`color-profile-circle color-profile-circle-yellow`} onClick={() => { editColorProfile("Amarillo") }}>

              {petProfile.mainColor === "Amarillo" ? (
                <div className={`color-profile-circle-answer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
                </div>
              ) : (<></>)}

            </div>
            <div className={`color-profile-circle-text`}>
              Amarillo
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Mezcla">
            <div className={`color-profile-circle color-profile-circle-mix-${isWebp ? ("webp") : ("jpg")}`} onClick={() => { editColorProfile("Mezcla") }}>

              {petProfile.mainColor === "Mezcla" ? (
                <div className={`color-profile-circle-answer`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
                </div>
              ) : (<></>)}

            </div>
            <div className={`color-profile-circle-text`}>
              Mezcla
            </div>
          </div>
        </div>
        <div className={`color-profile-result`}>
          {petProfile.mainColor}
        </div>
      </div>
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state),
    isWebp: getWebp(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updatePetProfile: (data) => { dispatch(updatePetProfileAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ColorProfile);