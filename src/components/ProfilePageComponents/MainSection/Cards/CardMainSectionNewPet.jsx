// Modules
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  postNewPet,
  defaultImage
} from "../../../../routes/index";

import {
  createProfileDogFounded
} from "../../../../routes/indexDogFounded";

// Acciones
import {
  updatePetProfileAction
} from "../../../../store/reducers/user/actions";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../../../store/reducers/layout/actions";

import {
  getUserCompany
} from "../../../../store/reducers/company/selector";

const CardMainSectionNewPet = ({
  updatePetProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  isDogFounded,

  isViewOnCompany,
  userCompany
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const getProfileData = () => {
    setIsLoading(true);
    fetch(isDogFounded ? (createProfileDogFounded) : (postNewPet), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token"),
        "isPetFromCompany": isViewOnCompany && userCompany.name ? (true) : (false)
      },
    }).then(res => {
      return res.json();
    }).then(data => {
      setIsLoading(false);
      if (data.status === "success") {
        updateReduxPet();
        urlNameFunction(data.urlPet);
      } else {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: isDogFounded ? ("No se pudo crear un reporte de mascota perdida") : ("No se pudo crear el perfil")
        });
      };
    });
  };
  const [yesRedirect, setYesRedirect] = useState(false);
  const [petname, setPetname] = useState(false);

  const urlNameFunction = (petNameParametro) => {
    const newString = petNameParametro.replace(/ /g, "-");
    setPetname(newString);
    setYesRedirect(true);
    updateSuccessMessagesComponent({
      state: true,
      title: isDogFounded ? ("Reporte de mascota perdida creado") : ("Perfil creado"),
      description: isDogFounded ? ("Se creó un nuevo reporte de mascota perdida con éxito") : ("Se creó un nuevo perfil con éxito")
    });
  };
  const updateReduxPet = () => {
    updatePetProfile({
      selectedState: "name",
      state: petname
    });
    updatePetProfile({
      selectedState: "petProfileImage",
      state: `${defaultImage}`
    });
    updatePetProfile({
      selectedState: "isPetFromCompany",
      state: isViewOnCompany && userCompany.name ? (true) : (false)
    });
    updatePetProfile({
      selectedState: "images",
      state: []
    });
    updatePetProfile({
      selectedState: "isLost",
      state: false
    });
    updatePetProfile({
      selectedState: "isPetProfile",
      state: isDogFounded ? (false) : (true)
    });
  };
  return (
    <>
      {yesRedirect ? (<Redirect to={`${isDogFounded ? (`/perro/encontrado/${petname}`) : (`/perfil/mascota/${petname}`)}`}></Redirect>) : (<></>)}
      <div className="card-main-section-profile" onClick={getProfileData} style={{ width: "300px", marginLeft: "calc(50% - 150px)" }}>
        <div className="card-main-section-profile-content-2" style={{ height: "50px", backgroundColor: "var(--tertiary-color)" }} title={`${isDogFounded ? ("Reportar mascota encontrada") : ("Nuevo Perfil")}`}>
          {isDogFounded ? ("Reportar mascota encontrada") : ("Nuevo Perfil")}
        </div>
      </div>
      {isLoading ? (
        <div className="loader-block" style={{
          paddingTop: "20px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    userCompany: getUserCompany(state)
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
export default connect(mapStateToProps, mapDispatchToProps)(CardMainSectionNewPet);