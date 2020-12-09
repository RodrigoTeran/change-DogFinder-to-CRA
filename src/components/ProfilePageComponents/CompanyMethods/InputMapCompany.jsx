import React, { useState, useCallback, useRef, useEffect } from "react";
import { connect } from "react-redux";

import {
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import {
  APP_NAME
} from "../../../utils/config";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import mapStyles from "../../../utils/mapStyles";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../../store/reducers/layout/actions";

import {
  updateUserCompanyAction
} from "../../../store/reducers/company/actions";

import {
  editCompanyLocation
} from "../../../routes/company";


function getUrlForReverseGeoCoding(LAT, LNG) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  return url;
};

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: mapStyles
};

const InputMapCompany = ({
  isActivated,
  closeFunction,
  userCompany,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  updateUserCompany
}) => {


  const [actualCoordenates, setActualCoordenates] = useState({});

  useEffect(() => {
    getActualCoordenates();

  }, [userCompany]);
  const getActualCoordenates = () => {
    try {
      if (userCompany.coordenates.lat !== "undefined") {
        setActualCoordenates({
          lat: userCompany.coordenates.lat,
          lng: userCompany.coordenates.lng
        });
        setMarker({
          lat: userCompany.coordenates.lat,
          lng: userCompany.coordenates.lng
        });
      } else {
        // ------------------------------ PRIMERA VEZ ------------------------------
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setActualCoordenates({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            setMarker({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          () => null
        );
      };
    } catch (error) {
    };
  };

  const [marker, setMarker] = useState({});
  const [selected, setSelected] = useState(false);
  const [userWantsAddMarker, setUserWantsAddMarker] = useState(false);


  const onMapClick = useCallback((event) => {
    if (userWantsAddMarker) {
      setMarker({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    };
  }, [userWantsAddMarker]);

  const [isLoading, setIsLoading] = useState(false);

  const changeCoordenates = () => {
    setIsLoading(true);
    // Get Address
    const url = getUrlForReverseGeoCoding(marker.lat, marker.lng);

    fetch(url)
      .then(res => {
        return res.json();
      }).then(data => {
        const body = {
          newLocationCompany: data.results[0].formatted_address,
          newCoordenatesCompany: {
            lat: marker.lat,
            lng: marker.lng,
          }
        };
        fetch(`${editCompanyLocation}`, {
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
          closeFunction();

          if (data.status) { // todo bien
            updateSuccessMessagesComponent({
              state: true,
              title: "Se cambió la localización",
              description: "Se cambió la localización de la empresa con éxito"
            });
            updateUserCompany({
              selectedState: "coordenates",
              state: {
                lat: marker.lat,
                lng: marker.lng
              }
            });
            updateUserCompany({
              selectedState: "location",
              state: body.newLocationCompany
            });
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "No se pudo cambiar la localización de la empresa"
            });
          };
        });
      });
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
      <div className={`map-input ${isActivated ? ("") : ("closed")}`}
        style={{
          backgroundColor: isActivated ? ("#000") : ("transparent")
        }}>
        {isActivated ? (
          <>
            <button onClick={closeFunction} className="map-input-close-button">
              <svg style={{
                fill: "#000"
              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
            </button>
            {isLoading ? (
              <div className="loader-entirePage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
              </div>
            ) : (<></>)}
            <button className="map-input-fixed-button-finish" onClick={() => {
              if (!isLoading) {
                changeCoordenates();
              };
            }}>
              Guardar cambios
            </button>
            <button className="map-input-fixed-button-marker" onClick={() => {
              setUserWantsAddMarker(!userWantsAddMarker);
            }}>
              {userWantsAddMarker ? ("Quitar modo editar marcador") : ("Editar posición marcador")}
            </button>
            <button className="map-input-fixed-button-location" onClick={() => {
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
            <div className="map-input-fixed-div">
              <h2>
                Mapa de {APP_NAME}
              </h2>
            </div>
            <Search
              panTo={panTo}
              actualCoordenates={actualCoordenates}
            ></Search>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={12}
              center={actualCoordenates}
              options={options}
              onClick={onMapClick}
              onLoad={onMapload}
            >
              {marker.lat ? (
                <>
                  {userCompany.logo !== "No se ha establecido" ? (
                    <Marker
                      position={{
                        lat: marker.lat,
                        lng: marker.lng,
                      }}
                      icon={{
                        url: userCompany.logo,
                        scaledSize: new window.google.maps.Size(40, 40),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(20, 20)
                      }}
                      onClick={() => {
                        setSelected(true);
                      }}
                    ></Marker>
                  ) : (
                      <Marker
                        position={{
                          lat: marker.lat,
                          lng: marker.lng,
                        }}
                        onClick={() => {
                          setSelected(true);
                        }}
                      ></Marker>
                    )}
                </>

              ) : (<></>)}
              {selected ? (
                <InfoWindow
                  position={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                  onCloseClick={() => {
                    setSelected(false);
                  }}
                >
                  <div style={{ color: "#000" }}>
                    <h2>
                      Tu empresa
                    </h2>
                    <div>
                      {userCompany.name}
                    </div>
                  </div>
                </InfoWindow>) : (<></>)}
            </GoogleMap>
          </>
        ) : (<></>)}
      </div>
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
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <div className="map-input-fixed-div-search">
      <Combobox>
        <ComboboxInput value={value} onChange={(e) => {
          setValue(e.target.value);
        }}
          disabled={!ready}
          placeholder="Buscar una localización"
        ></ComboboxInput>
        <div className="map-input-fixed-div-search-special">
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
  return {};
};
// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
    updateUserCompany: (data) => { dispatch(updateUserCompanyAction(data)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMapCompany);