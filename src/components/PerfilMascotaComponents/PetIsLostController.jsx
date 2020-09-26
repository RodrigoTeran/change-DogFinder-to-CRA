import React, { useState } from "react";
import { connect } from "react-redux";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

import {
  updatePetProfileAction
} from "../../store/reducers/user/actions";

import {
  editPetProfileStatus
} from "../../routes/index";

const PetIsLostController = ({
  isMobile,
  petProfile,
  updatePetProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const editStatusFunction = (isLostVar) => {
    setIsLoading(true);
    let body = {
      isLost: isLostVar
    };
    fetch(`${editPetProfileStatus}/${petProfile.name}`, {
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
      setIsLoading(false);
      if (!data.status) {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "No se pudo actualizar el estado de tu mascota",
        });
        updatePetProfile({
          name: petProfile.name,
          petProfileImage: petProfile.petProfileImage,
          images: petProfile.images,
          isLost: petProfile.isLost
        });
      } else {
        updateSuccessMessagesComponent({
          state: true,
          title: "Se cambió el estado con éxito",
          description: "Sí se pudo actualizar el estado de tu mascota",
        });
        updatePetProfile({
          name: petProfile.name,
          petProfileImage: petProfile.petProfileImage,
          images: petProfile.images,
          isLost: isLostVar
        });
      };
    });
  };
  return (
    <div>
      <div className={`control-pet-profile-petislost ${isMobile ? ("column-petislost") : ("row-petislost")}`}>
        <div className={`control-pet-profile-petislost-h1 ${isMobile ? ("column-h1") : ("row-h1")}`}>
          Estado de tu mascota
        </div>
        <div className={`control-pet-profile-petislost-buttons ${isMobile ? ("column-buttons") : ("row-buttons")}`}>
          <ButtonWhiteRectangle text="En casa"
            width={`${isMobile ? ("80%") : ("50%")}`}
            greenDif={`${petProfile.isLost ? ("") : ("greenColor-2")}`}
            mt="mt-0"
            height="50px"
            clickFunctionAnotherOne={() => {
              editStatusFunction(false);
            }}
          >
            <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" /></svg>
          </ButtonWhiteRectangle>
          <ButtonWhiteRectangle text="Perdido"
            width={`${isMobile ? ("80%") : ("50%")}`}
            mt={`${isMobile ? ("mt-3") : ("mt-0")}`}
            height="50px"
            sad={`${petProfile.isLost ? ("sadColor") : ("")}`}
            clickFunctionAnotherOne={() => {
              editStatusFunction(true);
            }}
          >
            <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z" /></svg>
          </ButtonWhiteRectangle>
        </div>
      </div>
      {isLoading ? (
        <div className="loader-block" style={{
          paddingTop: "20px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}
      <div className={`control-pet-profile-petislost-label ${isMobile ? ("column-label") : ("row-label")}`}>
        Es importante para nosotros saber si necesitas que busquemos a tu mascota. Actualiza su estado para avisarle a nuestra Inteligencia Artificial si la intenta buscar o no.
      </div>
    </div >
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
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PetIsLostController);