import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import Calendar from "react-calendar";

import { getPetProfile } from "../../store/reducers/user/selector";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
  updateBannerInstructionsAction,
} from "../../store/reducers/layout/actions";

import { updatePetProfileAction } from "../../store/reducers/user/actions";
import { PetProfilePageIsLostPremium } from "../../utils/textForInstructions";

import {
  editPetProfileStatus,
  editPetProfileWhenIsLost,
} from "../../routes/index";

const PetIsLostController = ({
  isMobile,
  petProfile,
  updatePetProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  updateBannerInstructions,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const editStatusFunction = (isLostVar) => {
    setIsLoading(true);
    let body = {
      isLost: isLostVar,
      newDate: new Date(),
    };
    fetch(`${editPetProfileStatus}/${petProfile.name}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
        isPetFromCompany: petProfile.isPetFromCompany ? true : false,
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data.status === "false") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "No se pudo actualizar el estado de tu mascota",
          });
        } else if (data.status === "faltan") {
          updateFailureMessagesComponent({
            state: true,
            title: "Faltan cosas por editar",
            description: data.text,
          });
        } else if (data.status === "noSePuede") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description:
              "No se puede editar el perfil ya que tienes una notificación relacionada con este perfil. Cuando elimines la notificación podrás editar este perfil.",
          });
        } else if (data.status === "true") {
          updateSuccessMessagesComponent({
            state: true,
            title: "Se cambió el estado con éxito",
            description: "Sí se pudo actualizar el estado de tu mascota",
          });
          updatePetProfile({
            selectedState: "whenIsLost",
            state: new Date(),
          });
          updatePetProfile({
            selectedState: "isLost",
            state: isLostVar,
          });
        }
      });
  };
  const [heightCalendar, setHeightCalendar] = useState(0);
  const [firstAnimCalendar, setFirstAnimCalendar] = useState(false);

  const editWhenIsLost = (newDate) => {
    setIsLoading(true);
    let body = {
      newDate,
    };
    fetch(`${editPetProfileWhenIsLost}/${petProfile.name}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
        isPetFromCompany: petProfile.isPetFromCompany ? true : false,
      },
      body: JSON.stringify(body),
    })
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
        } else if (data.status === "true") {
          updateSuccessMessagesComponent({
            state: true,
            title: "Se cambió el perfil con éxito",
            description: "Sí se pudo actualizar cuando se perdió tu mascota",
          });
          updatePetProfile({
            selectedState: "whenIsLost",
            state: newDate,
          });
        } else if (data.status === "noPosible") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description:
              "La fecha no es posible. Debe de ser una fecha actual o pasada.",
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "No se pudo actualizar cuando se perdió tu mascota",
          });
        }
      });
  };
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (heightCalendar > 0) {
      setFirstAnimCalendar(true);
      if (counter < 50) {
        setHeightCalendar(
          parseInt(document.querySelector(".calendar").clientHeight) +
            (window.innerWidth < 1121 ? 75 : 45)
        );
        setCounter(counter + 1);
      }
    } else {
      setHeightCalendar(
        parseInt(document.querySelector(".calendar").clientHeight) +
          (window.innerWidth < 1121 ? 75 : 45)
      );
    }
  }, [heightCalendar, counter]);

  return (
    <div className="control-pet-profile-petislost-daddy">
      <div
        className={`control-pet-profile-petislost ${
          isMobile ? "column-petislost" : "row-petislost"
        }`}
      >
        <div
          className={`control-pet-profile-petislost-h1 ${
            isMobile ? "column-h1" : "row-h1"
          }`}
        >
          Estado de tu mascota
        </div>
        <div
          className={`control-pet-profile-petislost-buttons ${
            isMobile ? "column-buttons" : "row-buttons"
          }`}
        >
          <ButtonWhiteRectangle
            text="En casa"
            width={`${isMobile ? "250px" : "50%"}`}
            greenDif={`${petProfile.isLost ? "" : "greenColor-2"}`}
            mt="mt-0"
            height="50px"
            clickFunctionAnotherOne={() => {
              if (!isLoading) {
                editStatusFunction(false);
              }
            }}
          >
            <svg
              width="30px"
              height="30px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
            </svg>
          </ButtonWhiteRectangle>
          <ButtonWhiteRectangle
            text="Perdido"
            width={`${isMobile ? "250px" : "50%"}`}
            mt={`${isMobile ? "mt-3" : "mt-0"}`}
            height="50px"
            sad={`${petProfile.isLost ? "sadColor" : ""}`}
            clickFunctionAnotherOne={() => {
              if (!isLoading) {
                editStatusFunction(true);
              }
            }}
          >
            <svg
              width="30px"
              height="30px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z" />
            </svg>
          </ButtonWhiteRectangle>
        </div>
      </div>
      <div
        className={`calendar-container ${firstAnimCalendar ? "yes" : ""} `}
        style={{
          height: petProfile.isLost ? `${heightCalendar}px` : "0px",
          marginTop: petProfile.isLost ? `20px` : "0px",
          marginBottom: petProfile.isLost ? `20px` : "0px",
        }}
      >
        <div
          className={`calendar-animation ${petProfile.isLost ? "open" : ""}`}
        >
          <div className={`calendar-title`}>
            ¿Desde cuándo esta perdida tu mascota?
          </div>
          <Calendar
            className={`calendar`}
            onChange={(date) => {
              setHeightCalendar(
                parseInt(document.querySelector(".calendar").clientHeight) +
                  (window.innerWidth < 1121 ? 75 : 45)
              );
              if (!isLoading) {
                editWhenIsLost(date);
              }
            }}
            onViewChange={() => {
              setHeightCalendar(
                parseInt(document.querySelector(".calendar").clientHeight) +
                  (window.innerWidth < 1121 ? 75 : 45)
              );
            }}
            onActiveStartDateChange={() => {
              setHeightCalendar(
                parseInt(document.querySelector(".calendar").clientHeight) +
                  (window.innerWidth < 1121 ? 75 : 45)
              );
            }}
            value={new Date(petProfile.whenIsLost)}
          ></Calendar>
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
      <div className={`control-pet-profile-petislost-label`}>
        <div
          onClick={() => {
            updateBannerInstructions({
              state: true,
              title: "Información",
              description: PetProfilePageIsLostPremium,
            });
          }}
          title="Información"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          className="control-pet-profile-petislost-label-info"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
          </svg>{" "}
          Información
        </div>
      </div>
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
    updateBannerInstructions: (data) => {
      dispatch(updateBannerInstructionsAction(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetIsLostController);
