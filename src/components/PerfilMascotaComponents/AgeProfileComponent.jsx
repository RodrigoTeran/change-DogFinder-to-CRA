import React, { useState } from "react";
import { connect } from "react-redux";

import { getPetProfile } from "../../store/reducers/user/selector";

import ColorProfile from "./ColorProfile";

import { updatePetProfileAction } from "../../store/reducers/user/actions";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../store/reducers/layout/actions";

import { editPetProfileSize } from "../../routes/index";

import { editPetProfileDogFoundedSize } from "../../routes/indexDogFounded";

const AgeProfileComponent = ({
  petProfile,
  updatePetProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const editSizeProfile = (newSize) => {
    setIsLoading(true);
    const body = {
      newSize,
    };
    fetch(
      `${
        petProfile.isPetProfile
          ? `${editPetProfileSize}/${petProfile.name}`
          : `${editPetProfileDogFoundedSize}/${petProfile.name}`
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
            description: `No se puede editar el perfil ya que tienes una notifiación relacionada con este perfil. Cuando elimines la notificación podrás editar este perfil.`,
          });
        } else if (data.status) {
          updatePetProfile({
            selectedState: "size",
            state: newSize,
          });
          updateSuccessMessagesComponent({
            state: true,
            title: "Se ha cambiado la edad",
            description: petProfile.isPetProfile
              ? "Se ha cambiado la edad de tu mascota con éxito"
              : "Se ha cambiado la edad del perro con éxito",
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: petProfile.isPetProfile
              ? "No se ha podido cambiar la edad de tu mascota"
              : "No se ha podido cambiar la edad del perro",
          });
        }
      });
  };

  return (
    <>
      <div className="age-color-profile-wrapper">
        <div className={`age-profile`}>
          <div className="age-profile-title">Edad</div>
          <div className="row d-flex justify-center align-items-center age-profile-row">
            <div
              className="col-lg-3 col-md-4 col-sm-6 age-profile-column"
              title="Cachorro"
              onClick={() => {
                if (!isLoading) {
                  editSizeProfile("Cachorro");
                }
              }}
            >
              <svg
                className={`age-profile-svg-1 ${
                  petProfile.size === "Cachorro" ? "pink" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" />
              </svg>
              <div>Cachorro</div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 age-profile-column"
              title="Joven"
              onClick={() => {
                if (!isLoading) {
                  editSizeProfile("Joven");
                }
              }}
            >
              <svg
                className={`age-profile-svg-2 ${
                  petProfile.size === "Joven" ? "pink" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" />
              </svg>
              <div>Joven</div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 age-profile-column"
              title="Adulto"
              onClick={() => {
                if (!isLoading) {
                  editSizeProfile("Adulto");
                }
              }}
            >
              <svg
                className={`age-profile-svg-3 ${
                  petProfile.size === "Adulto" ? "pink" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" />
              </svg>
              <div>Adulto</div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 age-profile-column"
              title="Anciano"
              onClick={() => {
                if (!isLoading) {
                  editSizeProfile("Anciano");
                }
              }}
            >
              <svg
                className={`age-profile-svg-4 ${
                  petProfile.size === "Anciano" ? "pink" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" />
              </svg>
              <div>Anciano</div>
            </div>
          </div>
          <div className="age-profile-result">{petProfile.size}</div>
        </div>
        <ColorProfile
          changeLoader={(loader) => {
            setIsLoading(loader);
          }}
          isLoading={isLoading}
        ></ColorProfile>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeProfileComponent);
