import React, { useState } from "react";
import { connect } from "react-redux";
import CardInfoPetProfile from "./Cards/CardInfoPetProfile";
import InputDataList from "../Inputs/InputDataList";
import dogBreeds from "../../utils/dataDogBreeds";

import InputMap from "../Inputs/InputMap";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../store/reducers/layout/actions";

import { getPetProfile } from "../../store/reducers/user/selector";

import { updatePetProfileAction } from "../../store/reducers/user/actions";

import { editPetProfileRace, editPetProfileGender } from "../../routes/index";

import {
  editPetProfileDogFoundedBreed,
  editPetProfileDogFoundedGender,
} from "../../routes/indexDogFounded";

const InfoPetProfile = ({
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  petProfile,
  updatePetProfile,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const changeDogBreed = (dogBreed) => {
    setIsLoading(true);
    const body = {
      dogBreed,
    };
    if (dogBreed === "Buscar") {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description:
          "Primero debe de escoger una raza para poder guardar cambios",
      });
      setIsLoading(false);
    } else {
      fetch(
        `${
          petProfile.isPetProfile
            ? `${editPetProfileRace}/${petProfile.name}`
            : `${editPetProfileDogFoundedBreed}/${petProfile.name}`
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
            updateSuccessMessagesComponent({
              state: true,
              title: "Se cambió la raza con éxito",
              description: petProfile.isPetProfile
                ? "Se cambió la raza de su mascota con éxito"
                : "Se cambió la raza del perrito con éxito",
            });
            updatePetProfile({
              selectedState: "dogBreed",
              state: dogBreed,
            });
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "No se pudo cambiar la raza del perro",
            });
          }
        });
    }
  };

  const [isInputActivatedDogBreed, setIsInputActivatedDogBreed] = useState(
    false
  );
  const [isInputActivatedDogGender, setIsInputActivatedDogGender] = useState(
    false
  );
  const changeDogGender = (dogGender) => {
    setIsLoading(true);
    const body = {
      newGender: dogGender,
    };
    if (dogGender === "Buscar") {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description:
          "Primero debe de escoger un género para poder guardar cambios",
      });
      setIsLoading(false);
    } else {
      fetch(
        `${
          petProfile.isPetProfile
            ? `${editPetProfileGender}/${petProfile.name}`
            : `${editPetProfileDogFoundedGender}/${petProfile.name}`
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
            updateSuccessMessagesComponent({
              state: true,
              title: "Se cambió el género con éxito",
              description: petProfile.isPetProfile
                ? "Se cambió el género de su mascota con éxito"
                : "Se cambió el género del perrito con éxito",
            });
            updatePetProfile({
              selectedState: "gender",
              state: dogGender,
            });
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "No se pudo cambiar el género del perro",
            });
          }
        });
    }
  };

  const [isInputActivatedMap, setIsInputActivatedMap] = useState(false);
  return (
    <>
      <InputDataList
        title={`${
          petProfile.isPetProfile
            ? "Escoje la raza de tu mascota"
            : "Escoje la raza del perro extraviado"
        }`}
        subtext="Pulsa el botón de Buscar"
        closeFunction={() => {
          setIsInputActivatedDogBreed(!isInputActivatedDogBreed);
        }}
        isInputActivated={isInputActivatedDogBreed}
        sendFunction={(dog) => {
          if (!isLoading) {
            changeDogBreed(dog);
          }
        }}
        initialDATA={dogBreeds}
      ></InputDataList>
      <InputDataList
        title={`${
          petProfile.isPetProfile
            ? "Escoje el género de tu mascota"
            : "Escoje el género del perro extraviado"
        }`}
        subtext="Pulsa el botón de Buscar"
        closeFunction={() => {
          setIsInputActivatedDogGender(!isInputActivatedDogGender);
        }}
        isInputActivated={isInputActivatedDogGender}
        sendFunction={(dogGender) => {
          if (!isLoading) {
            changeDogGender(dogGender);
          }
        }}
        initialDATA={["Macho", "Hembra"]}
      ></InputDataList>
      <InputMap
        isActivated={isInputActivatedMap}
        closeFunction={() => {
          setIsInputActivatedMap(false);
        }}
      ></InputMap>
      {window.innerWidth >= 1121 ? (
        <></>
      ) : (
        <div className={`pet-profile-page-delete-info text-center`}>
          {`${
            petProfile.isPetProfile
              ? `Información de tu mascota`
              : `Información del perro extraviado`
          }`}
        </div>
      )}
      <div className={`info-pet-profile row`}>
        <CardInfoPetProfile title="Raza" des={`${petProfile.dogBreed}`}>
          <svg
            onClick={() => {
              setIsInputActivatedDogBreed(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
          </svg>
        </CardInfoPetProfile>
        <CardInfoPetProfile
          title={`${
            petProfile.isPetProfile ? "Residencia" : "¿Dónde lo hallaste?"
          }`}
          des={`${petProfile.location}`}
        >
          <svg
            onClick={() => {
              setIsInputActivatedMap(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
          </svg>
        </CardInfoPetProfile>
        <CardInfoPetProfile title="Género" des={`${petProfile.gender}`}>
          <svg
            onClick={() => {
              setIsInputActivatedDogGender(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
          </svg>
        </CardInfoPetProfile>
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
    updatePetProfile: (data) => {
      dispatch(updatePetProfileAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoPetProfile);
