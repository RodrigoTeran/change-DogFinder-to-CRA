import React, { useState } from "react";
import { connect } from "react-redux";

import {
  updatePetProfileAction
} from "../../../store/reducers/user/actions";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../../store/reducers/layout/actions";

import {
  getPetProfile
} from "../../../store/reducers/user/selector";

import {
  editProfileDogFoundedRegistration
} from "../../../routes/indexDogFounded";

const RegisterDog = ({
  updatePetProfile,
  petProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent
}) => {
  const [yesInstructions, setInstructions] = useState(false);

  const registerDogFounded = () => {
    fetch(`${editProfileDogFoundedRegistration}/${petProfile.name}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token")
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      /**
       * "no" = error
       * "yes" = se cambio
       * "already" = ya estaba
       * "mucho texto... xd" = se necesitan mas requirements
       */
      if (data.status === "no") {
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
          state: 2
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
          description: data.status
        });
      };
    });
  };

  return (
    <div className="register-dog-founded-component">
      <div className="register-dog-founded-component-h1">
        Registrar reporte de perro
      </div>
      <div className={`image-pet-profile-instructions ${yesInstructions ? ("open") : ("close")}`}
        style={{
          minHeight: "25px",
          marginBottom: "0px",
          marginLeft: window.innerWidth < 1121 ? (`calc(50% - 150px`) : ("0px"),
          width: window.innerWidth < 1121 ? (`300px`) : ("90%"),
        }}>
        <div className="image-pet-profile-instructions-icon">
          <div onClick={() => { setInstructions(!yesInstructions) }} title="Información" style={{
            display: "flex",
            alignItems: "center"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Información
            </div>
        </div>
        <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`}>
          Cuando termines de llenar los campos requeridos:
          <ul className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text-ul`}>
            <li>
              ¿Cuándo encontraste a esta mascota?
            </li>
            <li>
              Raza
            </li>
            <li>
              ¿Dónde lo hallaste?
            </li>
            <li>
              Género
            </li>
            <li>
              Color principal
            </li>
            <li>
              Edad
            </li>
            <li>
              Imágenes para el reconocimiento facial ( las 4 imágenes )
            </li>
            <li>
              Tu correo electrónico de contacto
            </li>
            <li>
              Tu número de teléfono de contacto
            </li>
          </ul>
          Podrás reportar este perfil como terminado, para que ahora sí empezemos a encontrar a su dueño.
          <br />
          No podemos empezar si no están todos los datos. Es importante también tener tu correo y número, ya que
          si se encuentra al dueño, este no podrá contactarse contigo; estos los puedes llenar en la página de tu perfil.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Nota: </span> Podrás hacer cambios después, y ya no tendrás que dar click en "registrar perfil" cada vez que hagas cambios
        </div>
      </div>
      <div>
        {petProfile.isRegistered === 2 ? (<>Registrado</>) : (<>No Registrado</>)}
      </div>
      <div className="card-main-section-profile register-dog-founded-component-button" onClick={registerDogFounded} style={{ width: "300px" }}>
        <div className="card-main-section-profile-content-2" style={{ height: "50px", backgroundColor: "var(--tertiary-color)" }} title="Registrar reporte de perro">
          Registrar perro
        </div>
      </div>
    </div>
  )
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterDog);