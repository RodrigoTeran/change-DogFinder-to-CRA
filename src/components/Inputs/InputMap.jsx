import React, { useState, useCallback, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { GoogleMap, OverlayView } from "@react-google-maps/api";

import { APP_NAME } from "../../utils/config";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { Combobox, ComboboxInput } from "@reach/combobox";
import "@reach/combobox/styles.css";

import { getPetProfile } from "../../store/reducers/user/selector";

import mapStyles from "../../utils/mapStyles";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../store/reducers/layout/actions";

import { updatePetProfileAction } from "../../store/reducers/user/actions";

import { editCoordenates } from "../../routes/index";

import { editPetProfileDogFoundedCoordenates } from "../../routes/indexDogFounded";

function getUrlForReverseGeoCoding(LAT, LNG) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  return url;
}
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: mapStyles,
};

const InputMap = ({
  isActivated,
  closeFunction,
  petProfile,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  updatePetProfile,
}) => {
  const [actualCoordenates, setActualCoordenates] = useState({});

  useEffect(() => {
    getActualCoordenates();
  }, [petProfile]);
  const getActualCoordenates = () => {
    try {
      if (petProfile.coordenates.latitude !== "undefined") {
        setActualCoordenates({
          lat: petProfile.coordenates.latitude,
          lng: petProfile.coordenates.longitude,
        });
        setMarker({
          lat: petProfile.coordenates.latitude,
          lng: petProfile.coordenates.longitude,
        });
      } else {
        // ------------------------------ PRIMERA VEZ ------------------------------
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setActualCoordenates({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setMarker({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }
    } catch (error) {}
  };

  const [marker, setMarker] = useState({});
  const [userWantsAddMarker, setUserWantsAddMarker] = useState(false);

  const onMapClick = useCallback(
    (event) => {
      if (userWantsAddMarker) {
        setMarker({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
      }
    },
    [userWantsAddMarker]
  );

  const [isLoading, setIsLoading] = useState(false);
  const changeCoordenates = () => {
    setIsLoading(true);
    // Get Address
    const url = getUrlForReverseGeoCoding(marker.lat, marker.lng);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const body = {
          latitude: marker.lat,
          longitude: marker.lng,
          location: data.results[0].formatted_address,
        };
        fetch(
          `${
            petProfile.isPetProfile
              ? `${editCoordenates}/${petProfile.name}`
              : `${editPetProfileDogFoundedCoordenates}/${petProfile.name}`
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
            closeFunction();
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
                title: "Se cambió la localización",
                description: petProfile.isPetProfile
                  ? "Se cambió la localización de tu mascota con éxito"
                  : "Se cambió la localización del perrito con éxito",
              });
              updatePetProfile({
                selectedState: "location",
                state: body.location,
              });
              updatePetProfile({
                selectedState: "coordenates",
                state: {
                  latitude: marker.lat,
                  longitude: marker.lng,
                },
              });
            } else {
              updateFailureMessagesComponent({
                state: true,
                title: "Error",
                description: petProfile.isPetProfile
                  ? "No se pudo cambiar la localización de tu mascota"
                  : "No se pudo cambiar la localización del perrito",
              });
            }
          });
      });
  };

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height + 10),
  });

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
      <div
        className={`map-input ${isActivated ? "" : "closed"}`}
        style={{
          backgroundColor: isActivated ? "#000" : "transparent",
        }}
      >
        {isActivated ? (
          <>
            <button onClick={closeFunction} className="map-input-close-button">
              <svg
                style={{
                  fill: "#000",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </button>
            {isLoading ? (
              <div className="loader-entirePage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
                </svg>
              </div>
            ) : (
              <></>
            )}
            <button
              className="map-input-fixed-button-finish"
              onClick={() => {
                if (!isLoading) {
                  changeCoordenates();
                }
              }}
            >
              Guardar cambios
            </button>
            <button
              className="map-input-fixed-button-marker"
              onClick={() => {
                setUserWantsAddMarker(!userWantsAddMarker);
              }}
            >
              {userWantsAddMarker
                ? "Quitar modo editar marcador"
                : "Editar posición marcador"}
            </button>
            <button
              className="map-input-fixed-button-location"
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    setActualCoordenates({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    });
                    panTo({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    });
                  },
                  () => null
                );
              }}
            >
              Poner en mi ubicación actual
            </button>
            <div className="map-input-fixed-div">
              <h2>Mapa de {APP_NAME}</h2>
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
                <OverlayView
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  position={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <div className="custom-marker-map">
                    <div
                      className="custom-marker-map-image"
                      style={{
                        backgroundImage:
                          "url(" + petProfile.petProfileImage + ")",
                      }}
                    ></div>
                  </div>
                </OverlayView>
              ) : (
                <></>
              )}
            </GoogleMap>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const Search = ({ panTo, actualCoordenates }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => actualCoordenates.lat,
        lng: () => actualCoordenates.lng,
      },
      radius: 200 * 1000,
    },
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
    }
  };

  return (
    <div className="map-input-fixed-div-search">
      <Combobox>
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Buscar una localización"
        ></ComboboxInput>
        <div className="map-input-fixed-div-search-special">
          <ul>
            {status === "OK" &&
              data.map((dataAddress) => (
                <li
                  key={dataAddress.place_id}
                  onClick={() => {
                    handleSelect(dataAddress.description);
                  }}
                >
                  {dataAddress.description}
                </li>
              ))}
          </ul>
        </div>
      </Combobox>
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

export default connect(mapStateToProps, mapDispatchToProps)(InputMap);
