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
  height: window.innerWidth < 1121 ? ("calc(100vh - 300px)") : ("calc(100vh - 100px)"),
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: mapStyles
};

const InputMap = ({
  petProfile
}) => {

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
    <>
      <div>
        <Search
          panTo={panTo}
          actualCoordenates={actualCoordenates}
        ></Search>
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
    </>
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