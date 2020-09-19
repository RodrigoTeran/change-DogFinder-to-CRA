// Modules
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  postNewPet,
  defaultImage
} from "../../../../routes/index";

// Acciones
import {
  updatePetProfileAction
} from "../../../../store/reducers/user/actions";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../../../store/reducers/layout/actions";

const CardMainSectionNewPet = ({
  updatePetProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent
}) => {
  const getProfileData = () => {
    fetch(postNewPet, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token")
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      if (data.status === "success") {
        updateReduxPet();
        urlNameFunction(data.urlPet);
      } else {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "No se pudo crear el perfil",
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
      title: "Perfil creado",
      description: "Se creó un nuevo perfil con éxito",
    });
  };
  const updateReduxPet = () => {
    updatePetProfile({
      name: petname,
      petProfileImage: `${defaultImage}`,
      images: [],
      isLost: false
    });
  };
  return (
    <>
      {yesRedirect ? (<Redirect to={`/perfil/mascota/${petname}`}></Redirect>) : (<></>)}
      <div className="card-main-section-profile" onClick={getProfileData} style={{ width: "300px", marginLeft: "calc(50% - 150px)" }}>
        <div className="card-main-section-profile-content-2" style={{ height: "50px", backgroundColor: "var(--tertiary-color)" }} title="Nuevo Perfil">
          Nuevo Perfil
        </div>
      </div>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {};
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