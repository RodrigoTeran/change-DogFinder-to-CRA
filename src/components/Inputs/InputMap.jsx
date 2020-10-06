import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

import {
  getCoordenatesAPI
} from "../../routes/index";

const InputMap = ({
  isActivated,
  closeFunction,
  petProfile
}) => {
  const [actualCoordenates, setActualCoordenates] = useState({
    latitude: undefined,
    longitude: undefined
  });
  useEffect(() => {
    if (petProfile.coordenates) {
      setActualCoordenates({
        latitude: petProfile.coordenates.latitude,
        longitude: petProfile.coordenates.longitude
      });
    } else {
      getActualCoordenates();
    };
  }, [])
  const getActualCoordenates = () => {
    setActualCoordenates({
      latitude: "loading...",
      longitude: "loading..."
    });
    fetch(getCoordenatesAPI, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      setActualCoordenates({
        latitude: data.latitude,
        longitude: data.longitude
      });
    });
  };
  return (
    <>
      <div className={`map-input ${isActivated ? ("") : ("closed")}`}>
        <button onClick={closeFunction} className="map-input-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
        </button>
          Coordenadas de API:
        <ul>
          <li>
            {actualCoordenates.latitude}
          </li>
          <li>
            {actualCoordenates.longitude}
          </li>
        </ul>
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(InputMap);