import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  updatePetProfileAction
} from "../../store/reducers/user/actions";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

import InputTextComponent from "../InputTextComponent";
import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

import {
  editPetName
} from "../../routes/index";

const ChangeNameProfile = ({
  petProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent
}) => {
  const [isInputActivated, setIsInputActivated] = useState(false);
  const openInput = () => {
    setIsInputActivated(true);
  };
  const closeInput = () => {
    setIsInputActivated(false);
  };
  let body = {
    newName: ""
  };
  const changeInput = e => {
    body = {
      newName: e.target.value
    };
  };
  // Data Pet Profile
  const editPetNameFunction = () => {
    closeInput();
    if (body.newName === "") {
      updateFailureMessagesComponent({
        state: true,
        title: "Error al cambiar el nombre",
        description: `El nombre debe contener al menos 1 caracter`,
      });
    } else {
      fetch(`${editPetName}/${petProfile.name}`, {
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
        if (data.status) { // todo bien
          setYesRedirect(true);
          updateSuccessMessagesComponent({
            state: true,
            title: "Cambio con éxito",
            description: `Se cambió el nombre de tu mascota con éxito`,
          })
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error al cambiar el nombre",
            description: `Ese nombre ya lo tiene registrado en otra de sus mascotas`,
          });
        };
      });
    };
  };
  const [yesRedirect, setYesRedirect] = useState(false);
  return (
    <>
      {yesRedirect ? (<Redirect to="/perfil"></Redirect>) : (<></>)}
      <InputTextComponent
        closeInput={closeInput}
        closeStyle={!isInputActivated}
        maxLenghtInput={20}
        onChangeFunction={changeInput}
        clickFunction={editPetNameFunction}
      >
        <div className="input-layout-text-title">Escribe el nuevo nombre de tu mascota</div>
        <div className="input-layout-text-subtitle">Máximo número de caracteres: 20</div>
      </InputTextComponent>
      <div className="pet-profile-page-header-h1">
        Nombre de tu mascota: <span>{petProfile.name}</span>
        <div title="Cambiar nombre de mascota" onClick={openInput}>
          <svg className="pet-profile-page-header-h1-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" /></svg>
        </div>
      </div>
    </>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(ChangeNameProfile);