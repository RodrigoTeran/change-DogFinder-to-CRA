import React, { useState } from "react";
import { connect } from "react-redux";

import { updatePetProfileAction } from "../../../store/reducers/user/actions";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../../store/reducers/layout/actions";

import { getPetProfile } from "../../../store/reducers/user/selector";

import { editProfileDogFoundedRegistration } from "../../../routes/indexDogFounded";

const RegisterDog = ({
  updatePetProfile,
  petProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
}) => {
  const [yesInstructions, setInstructions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const registerDogFounded = () => {
    setIsLoading(true);
    fetch(`${editProfileDogFoundedRegistration}/${petProfile.name}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
        isPetFromCompany: petProfile.isPetFromCompany ? true : false,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        /**
         * "no" = error
         * "yes" = se cambio
         * "already" = ya estaba
         * "mucho texto... xd" = se necesitan mas requirements
         * "noSePuede" = por las notificaciones
         */
        setIsLoading(false);
        if (data.status === "noSePuede") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: `No se puede editar el perfil ya que tienes una notificación relacionada con este perfil. Cuando elimines la notificación podrás editar este perfil.`,
          });
        } else if (data.status === "no") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: `No se pudo registrar a la mascota.`,
          });
        } else if (data.status === "yes") {
          updateSuccessMessagesComponent({
            state: true,
            title: "Registro con éxito",
            description: `La mascota se registró con éxito. Ahora se está conectando y analizando sus datos para encontrar a su dueño.
          También ya aparece en el mapa.`,
          });
          updatePetProfile({
            selectedState: "isRegistered",
            state: 2,
          });
        } else if (data.status === "already") {
          updateSuccessMessagesComponent({
            state: true,
            title: "Ya estaba con registro",
            description: `La mascota ya estaba registrada en la plataforma. Recuerda que si ya está registrada
          la mascota, cada vez que hagas cambios no es necesario pulsar en "registrar"`,
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Falta información",
            description: data.status,
          });
        }
      });
  };

  return (
    <div className="register-dog-founded-component">
      <div className="register-dog-founded-component-h1">
        Registrar reporte de perro
      </div>
      <div
        className={`image-pet-profile-instructions ${
          yesInstructions ? "open" : "close"
        }`}
        style={{
          minHeight: "25px",
          marginBottom: "0px",
          marginLeft: window.innerWidth < 1121 ? `calc(50% - 150px` : "0px",
          width: window.innerWidth < 1121 ? `300px` : "90%",
        }}
      >
        <div className="image-pet-profile-instructions-icon">
          <div
            onClick={() => {
              setInstructions(!yesInstructions);
            }}
            title="Información"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
            </svg>{" "}
            Información
          </div>
        </div>
        <div
          className={`${
            yesInstructions ? "open" : "close"
          } image-pet-profile-instructions-text`}
        >
          <div
            className={`${
              yesInstructions ? "open" : "close"
            } image-pet-profile-instructions-text-ul`}
          >
            Cuando termines de llenar los campos requeridos:
            <ul>
              <li>¿Cuándo encontraste a esta mascota?</li>
              <li>Raza</li>
              <li>¿Dónde lo hallaste?</li>
              <li>Género</li>
              <li>Color principal</li>
              <li>Edad</li>
              <li>Imágenes para el reconocimiento facial ( las 4 imágenes )</li>
              <li>Tu correo electrónico de contacto</li>
              <li>Tu número de teléfono de contacto</li>
            </ul>
            Podrás reportar este perfil como terminado, para que ahora sí
            empezemos a encontrar a su dueño.
            <br />
            No podemos empezar si no están todos los datos. Es importante
            también tener tu correo y número, ya que si se encuentra al dueño,
            este no podrá contactarse contigo; estos los puedes llenar en la
            página de tu perfil.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Nota: </span> Podrás hacer
            cambios después, y ya no tendrás que dar click en "registrar perfil"
            cada vez que hagas cambios
          </div>
        </div>
      </div>
      <div className="register-dog-founded-component-row">
        <div className="register-dog-founded-component-row-col-1">
          <div
            className="card-main-section-profile register-dog-founded-component-button"
            onClick={() => {
              if (!isLoading) {
                registerDogFounded();
              }
            }}
            style={{ width: "300px" }}
          >
            <div
              className="card-main-section-profile-content-2"
              style={{
                height: "50px",
                backgroundColor: "var(--tertiary-color)",
                marginTop: "0px",
                marginBottom: "0px",
              }}
              title="Registrar reporte de perro"
            >
              Registrar perro
            </div>
          </div>
        </div>
        <div className="register-dog-founded-component-row-col-2">
          <div className="register-dog-founded-component-row-col-2-text">
            {petProfile.isRegistered === 2 ? (
              <>Registrado</>
            ) : (
              <>No registrado</>
            )}
          </div>
          <div className="register-dog-founded-component-row-col-2-svg">
            {petProfile.isRegistered === 2 ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {isLoading ? (
        <div
          className="loader-block"
          style={{
            paddingTop: "80px",
            paddingBottom: "60px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
          </svg>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updatePetProfile: (data) => {
      dispatch(updatePetProfileAction(data));
    },
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterDog);
