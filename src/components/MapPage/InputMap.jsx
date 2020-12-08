import React, { useState, useCallback, useRef, useEffect } from "react";
import { connect } from "react-redux";

import {
  GoogleMap,
  // Marker,
  // InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

import mapStyles from "../../utils/mapStyles";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: mapStyles
};

const InputMap = ({
  petProfile
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonsContainerOpen, setButtonsContainerOpen] = useState(false);
  const [actualCoordenates, setActualCoordenates] = useState({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    getActualCoordenates();
  }, [petProfile]);
  const getActualCoordenates = () => {
    try {
      // ------------------------------ PRIMERA VEZ ------------------------------
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setActualCoordenates({
            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude)
          });
        },
        () => null
      );
    } catch {
    };
  };

  const mapRef = useRef();
  const onMapload = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
  }, []);

  return (
    <div className="map-page-right">
      {isLoading ? (
        <div className="loader-mapRightColumn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}
      <Search
        panTo={panTo}
        actualCoordenates={actualCoordenates}
      ></Search>
      <div className={`map-page-right-buttons-container ${isButtonsContainerOpen ? ("open") : ("close")}`}>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          setButtonsContainerOpen(false);
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setActualCoordenates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}>
          Poner en mi ubicación actual
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          setButtonsContainerOpen(false);
        }}>
          Ver mis propios perfiles
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          setButtonsContainerOpen(false);
        }}>
          Ver perros encontrados
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          setButtonsContainerOpen(false);
        }}>
          Ver perros perdidos
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          setButtonsContainerOpen(false);
        }}>
          Ver perros organizaciones
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          setButtonsContainerOpen(false);
        }}>
          Ver perros encontrados por mí
        </button>
        <button className="map-page-right-buttons-container-giant-button" onClick={() => { setButtonsContainerOpen(!isButtonsContainerOpen) }}>
          <svg className={`${isButtonsContainerOpen ? ("open") : ("close")}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={actualCoordenates}
        options={options}
        onClick={() => { }}
        onLoad={onMapload}
      >
      </GoogleMap>
    </div>
  );
};

const Search = ({
  panTo,
  actualCoordenates
}) => {
  const {
    ready,
    value,
    suggestions: {
      status,
      data
    },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => actualCoordenates.lat,
        lng: () => actualCoordenates.lng
      },
      radius: 200 * 1000
    }
  });

  const handleSelect = async (address) => {
    try {
      setValue(address, false);
      clearSuggestions();
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch {
    };
  };

  return (
    <div className="map-page-right-fixed-div-search">
      <Combobox>
        <ComboboxInput value={value} onChange={(e) => {
          setValue(e.target.value);
        }}
          disabled={!ready}
          placeholder="Buscar una localización"
        ></ComboboxInput>
        <div className="map-page-right-fixed-div-search-special">
          <ul>
            {status === "OK" &&
              data.map((dataAddress) => (
                <li key={dataAddress.place_id}
                  onClick={() => { handleSelect(dataAddress.description) }}
                >{dataAddress.description}</li>
              ))}
          </ul>
        </div>
      </Combobox>
    </div>
  )
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

export default connect(mapStateToProps)(InputMap);