import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { checkFuckingHack, checkHackInBlankSpaces } from "../../utils/hacking";

import { getPetProfile } from "../../store/reducers/user/selector";

import InputTextComponent from "../Inputs/InputTextComponent";
import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../store/reducers/layout/actions";

import { editPetName } from "../../routes/index";

import { editPetsDogFoundedName } from "../../routes/indexDogFounded";

const ChangeNameProfile = ({
  petProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
}) => {
  const [isInputActivated, setIsInputActivated] = useState(false);
  const openInput = () => {
    setIsInputActivated(true);
  };
  const closeInput = () => {
    setIsInputActivated(false);
  };
  let body = {
    newName: "",
  };
  const changeInput = (e) => {
    body = {
      newName: e.target.value,
    };
  };

  const [isLoading, setIsLoading] = useState(false);
  const editPetNameFunction = () => {
    closeInput();
    setIsLoading(true);
    const hack = checkFuckingHack(body.newName, []);
    const hackSPaces = checkHackInBlankSpaces(body.newName);

    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error al cambiar el nombre",
        description: `Debe de introducir caracteres válidos`,
      });
      setIsLoading(false);
    } else if (hackSPaces) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error al cambiar el nombre",
        description: `No ponga muchos espacios en blanco seguidos o al principio`,
      });
      setIsLoading(false);
    } else {
      if (body.newName === "") {
        updateFailureMessagesComponent({
          state: true,
          title: "Error al cambiar el nombre",
          description: `El nombre debe contener al menos 1 caracter`,
        });
        setIsLoading(false);
      } else {
        fetch(
          `${
            petProfile.isPetProfile
              ? `${editPetName}/${petProfile.name}`
              : `${editPetsDogFoundedName}/${petProfile.name}`
          }`,
          {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              token: localStorage.getItem("token"),
              isPetFromCompany: petProfile.isPetFromCompany ? true : false,
            },
            body: JSON.stringify(body),
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setIsLoading(false);
            if (data.status === "noSePuede") {
              updateFailureMessagesComponent({
                state: true,
                title: "Error",
                description: `No se puede editar el perfil ya que tienes una notificación relacionada con este perfil. Cuando elimines la notificación podrás editar este perfil.`,
              });
            } else if (data.status) {
              // todo bien
              setYesRedirect(true);
              updateSuccessMessagesComponent({
                state: true,
                title: "Cambio con éxito",
                description: petProfile.isPetProfile
                  ? `Se cambió el nombre de tu mascota con éxito`
                  : `Se cambió el apodo del perro con éxito`,
              });
            } else {
              updateFailureMessagesComponent({
                state: true,
                title: "Error al cambiar el nombre",
                description: petProfile.isPetProfile
                  ? `Ese nombre ya lo tiene registrado en otra de sus mascotas`
                  : `Ese apodo ya lo tienes registrado, pon otro diferente.`,
              });
            }
          });
      }
    }
  };
  const [yesRedirect, setYesRedirect] = useState(false);
  return (
    <>
      {yesRedirect ? (
        <Redirect
          to={`${
            petProfile.isPetProfile ? `/perfil` : `/registro/mascota/encontrada`
          }`}
        ></Redirect>
      ) : (
        <></>
      )}
      <InputTextComponent
        closeInput={closeInput}
        closeStyle={!isInputActivated}
        maxLenghtInput={20}
        onChangeFunction={changeInput}
        clickFunction={() => {
          if (!isLoading) {
            editPetNameFunction();
          }
        }}
      >
        <div className="input-layout-text-title">
          {`${
            petProfile.isPetProfile
              ? `Escribe el nuevo nombre de tu mascota`
              : `Escribe el nuevo apodo del perro perdido`
          }`}
        </div>
        <div className="input-layout-text-subtitle">
          Máximo número de caracteres: 20
        </div>
      </InputTextComponent>
      <div className="pet-profile-page-header-h1">
        {`${
          petProfile.isPetProfile
            ? `Nombre de tu mascota: `
            : `Apodo del perrito: `
        }`}
        <span>{petProfile.name}</span>
        <div
          title={`${
            petProfile.isPetProfile
              ? "Cambiar nombre de mascota"
              : `Cambiar apodo del perrito`
          }`}
          onClick={openInput}
        >
          <svg
            className="pet-profile-page-header-h1-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
          </svg>
        </div>
      </div>
      {isLoading ? (
        <div
          className="loader-block"
          style={{
            paddingTop: "20px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
          </svg>
        </div>
      ) : (
        <></>
      )}
    </>
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
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeNameProfile);
