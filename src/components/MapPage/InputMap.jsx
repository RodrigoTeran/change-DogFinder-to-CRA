import React, { useState, useCallback, useRef, useEffect } from "react";
import { connect } from "react-redux";

import {
  GoogleMap,
  OverlayView
} from "@react-google-maps/api";

import {
  TEXT_WANT_SEE_OWN_PREMIUM_PROFILES
} from "../../utils/textForBannerOkCancelAction";

import {
  updateMapArraysAction
} from "../../store/reducers/company/actions";

import {
  updateBannerRedirectWithLinkAction
} from "../../store/reducers/layout/actions";

import {
  getCompanyDataLeftPage,
  getProfileDogFoundedDataLeftPage,
  getProfilePremiumDataLeftPage
} from "../../store/reducers/leftDataMapPage/selector";
import {
  updateActualCompanyDataLeftPageAction,
  updateActualProfileDogFoundedDataLeftPageAction,
  updateActualProfilePremiumDataLeftPageAction,
  updateActualViewDataLeftPageAction
} from "../../store/reducers/leftDataMapPage/actions";

import {
  getUsername,
  getPremium
} from "../../store/reducers/user/selector";

import {
  updateLogInFirstAnimationAction,
  updateLoginAction
} from "../../store/reducers/user/actions";

import {
  getGlobalPremiumProfilesRoute,
  getGlobalCompaniesRoute,
  getGlobalDogsFoundedRoute,
  getOwnDogsFoundedRoute,
  getOwnPremiumProfilesRoute,

  getDataMapLeftProvider
} from "../../routes/company";

import {
  getGlobalCompanies,
  getGlobalDogsFounded,
  getGlobalPremiumProfiles,
  getOwnDogsFounded,
  getOwnPremiumProfiles
} from "../../store/reducers/company/selector";

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
  petProfile,

  globalCompanies,
  globalDogsFounded,
  globalPremiumProfiles,
  ownDogsFounded,
  ownPremiumProfiles,

  updateMapArrays,
  username,
  updateLogin,
  updateLogInFirstAnimation,

  updateBannerRedirectWithLink,
  premium,

  // selectores
  companyDataLeftPage,
  profileDogFoundedDataLeftPage,
  profilePremiumDataLeftPage,
  // acciones
  updateActualCompanyDataLeftPage,
  updateActualProfileDogFoundedDataLeftPage,
  updateActualProfilePremiumDataLeftPage,
  updateActualViewDataLeftPage
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(12);
  const [isButtonsContainerOpen, setButtonsContainerOpen] = useState(false);
  const [firstSuccessfulLoad, setFirstSuccessfulLoad] = useState(false);
  const [whichViewIsActive, setWhichViewIsActive] = useState("globalPremiumProfiles");
  const [actualCoordenates, setActualCoordenates] = useState({
    lat: 0,
    lng: 0
  });

  const checkIfNeedToFecthInfo = (typeOfObject, idOfObject) => {
    if (typeOfObject === "Company") {
      if (companyDataLeftPage["idProfile"]) {
        if (companyDataLeftPage["idProfile"] === idOfObject) {
          updateActualViewDataLeftPage(typeOfObject);
        } else {
          fetchInformationForLeftColumnMapPage(
            typeOfObject,
            idOfObject
          );
        };
      } else {
        fetchInformationForLeftColumnMapPage(
          typeOfObject,
          idOfObject
        );
      };
    } else if (typeOfObject === "Profile") {
      if (profilePremiumDataLeftPage["idProfile"]) {
        if (profilePremiumDataLeftPage["idProfile"] === idOfObject) {
          updateActualViewDataLeftPage(typeOfObject);
        } else {
          fetchInformationForLeftColumnMapPage(
            typeOfObject,
            idOfObject
          );
        };
      } else {
        fetchInformationForLeftColumnMapPage(
          typeOfObject,
          idOfObject
        );
      };
    } else if (typeOfObject === "ProfileDogFounded") {
      if (profileDogFoundedDataLeftPage["idProfile"]) {
        if (profileDogFoundedDataLeftPage["idProfile"] === idOfObject) {
          updateActualViewDataLeftPage(typeOfObject);
        } else {
          fetchInformationForLeftColumnMapPage(
            typeOfObject,
            idOfObject
          );
        };
      } else {
        fetchInformationForLeftColumnMapPage(
          typeOfObject,
          idOfObject
        );
      };
    };
  };

  const fetchInformationForLeftColumnMapPage = (typeOfObject, idOfObject) => {
    updateActualViewDataLeftPage("Loading"); // left page
    setIsLoading(true); // mapa
    const body = {
      idOfObject,
      typeOfObject
    };
    fetch(getDataMapLeftProvider, {
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
      setIsLoading(false); // mapa
      updateActualViewDataLeftPage(typeOfObject); // left page
      if (data.status) {
        if (typeOfObject === "Company") {
          updateActualCompanyDataLeftPage({
            name: data.information.name,
            webPage: data.information.webPage,
            location: data.information.location,
            descriptionCompany: data.information.descriptionCompany,
            logo: data.information.logo,
            idProfile: data.information.idProfile,
            arrayProfilesDogFounded: data.information.arrayProfilesDogFounded
          });
        } else if (typeOfObject === "Profile") {
          updateActualProfilePremiumDataLeftPage({
            name: data.information.name,
            whenIsLost: data.information.whenIsLost,
            breed: data.information.breed,
            location: data.information.location,
            gender: data.information.gender,
            age: data.information.age,
            color: data.information.color,
            imagesCV: data.information.imagesCV,
            idProfile: data.information.idProfile,
            profileImage: data.information.profileImage
          });
        } else if (typeOfObject === "ProfileDogFounded") {
          updateActualProfileDogFoundedDataLeftPage({
            name: data.information.name,
            whenIsFounded: data.information.whenIsFounded,
            breed: data.information.breed,
            location: data.information.location,
            gender: data.information.gender,
            age: data.information.age,
            color: data.information.color,
            imagesCV: data.information.imagesCV,
            idProfile: data.information.idProfile,
            profileImage: data.information.profileImage
          });
        };
      };
    });
  };

  useEffect(() => {
    if (actualCoordenates.lat !== 0 && !firstSuccessfulLoad) {
      setFirstSuccessfulLoad(true);
      stablishDataOfArraysInMap(whichViewIsActive);
    };
  });

  useEffect(() => {
    getActualCoordenates();
  }, [petProfile]);

  const stablishDataOfArraysInMap = (whichViewIsActiveOwnVariable) => {
    if (whichViewIsActiveOwnVariable === "globalCompanies") {
      if (globalCompanies.lastCoordenates.lat) {
        try {
          setActualCoordenates({
            lat: globalCompanies.lastCoordenates.lat,
            lng: globalCompanies.lastCoordenates.lng
          });
          panTo({
            lat: globalCompanies.lastCoordenates.lat,
            lng: globalCompanies.lastCoordenates.lng,
            zoom: globalCompanies.lastCoordenates.zoom
          });
        } catch { };
      } else {
        if (actualCoordenates.lat !== 0) {
          fetchGlobalCompanies();
        };
      };
    } else if (whichViewIsActiveOwnVariable === "globalDogsFounded") {
      if (globalDogsFounded.lastCoordenates.lat) {
        try {
          setActualCoordenates({
            lat: globalDogsFounded.lastCoordenates.lat,
            lng: globalDogsFounded.lastCoordenates.lng
          });
          panTo({
            lat: globalDogsFounded.lastCoordenates.lat,
            lng: globalDogsFounded.lastCoordenates.lng,
            zoom: globalDogsFounded.lastCoordenates.zoom
          });
        } catch { };
      } else {
        if (actualCoordenates.lat !== 0) {
          fetchGlobalDogsFounded();
        };
      };
    } else if (whichViewIsActiveOwnVariable === "globalPremiumProfiles") {
      if (globalPremiumProfiles.lastCoordenates.lat) {
        try {
          setActualCoordenates({
            lat: globalPremiumProfiles.lastCoordenates.lat,
            lng: globalPremiumProfiles.lastCoordenates.lng
          });
          panTo({
            lat: globalPremiumProfiles.lastCoordenates.lat,
            lng: globalPremiumProfiles.lastCoordenates.lng,
            zoom: globalPremiumProfiles.lastCoordenates.zoom
          });
        } catch { };
      } else {
        if (actualCoordenates.lat !== 0) {
          fetchGlobalPremiumProfiles();
        };
      };
    } else if (whichViewIsActiveOwnVariable === "ownDogsFounded") {
      if (ownDogsFounded.lastCoordenates.lat) {
        try {
          setActualCoordenates({
            lat: ownDogsFounded.lastCoordenates.lat,
            lng: ownDogsFounded.lastCoordenates.lng
          });
          panTo({
            lat: ownDogsFounded.lastCoordenates.lat,
            lng: ownDogsFounded.lastCoordenates.lng,
            zoom: ownDogsFounded.lastCoordenates.zoom
          });
        } catch { };
      } else {
        if (actualCoordenates.lat !== 0) {
          fetchOwnDogsFounded();
        };
      };
    } else if (whichViewIsActiveOwnVariable === "ownPremiumProfiles") {
      if (ownPremiumProfiles.lastCoordenates.lat) {
        try {
          setActualCoordenates({
            lat: ownPremiumProfiles.lastCoordenates.lat,
            lng: ownPremiumProfiles.lastCoordenates.lng
          });
          panTo({
            lat: ownPremiumProfiles.lastCoordenates.lat,
            lng: ownPremiumProfiles.lastCoordenates.lng,
            zoom: ownPremiumProfiles.lastCoordenates.zoom
          });
        } catch { };
      } else {
        if (actualCoordenates.lat !== 0) {
          fetchOwnPremiumProfiles();
        };
      };
    };
  };

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height + 10)
  });

  const stablishDataOfArraysInMapForRefresh = () => {
    setIsNeededToLoad(false);
    if (whichViewIsActive === "globalCompanies") {
      fetchGlobalCompanies();
    } else if (whichViewIsActive === "globalDogsFounded") {
      fetchGlobalDogsFounded();
    } else if (whichViewIsActive === "globalPremiumProfiles") {
      fetchGlobalPremiumProfiles();
    } else if (whichViewIsActive === "ownDogsFounded") {
      fetchOwnDogsFounded();
    } else if (whichViewIsActive === "ownPremiumProfiles") {
      fetchOwnPremiumProfiles();
    };
  };

  const mapRef = useRef();

  // --------------------------------------------- FETCH ---------------------------------------------
  const fetchOwnPremiumProfiles = () => {
    setIsLoading(true);
    const body = {
      coordenates: {
        lat: mapRef.current.center.lat(),
        lng: mapRef.current.center.lng()
      },
      zoomOfMap: currentZoom
    };
    fetch(getOwnPremiumProfilesRoute, {
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
      if (data.status) {
        updateMapArrays({
          selectedState: "ownPremiumProfiles",
          arrayOfInformation: data.finalArray,
          lat: data.coordenatesUser.lat,
          lng: data.coordenatesUser.lng,
          zoom: data.zoomOfMap
        });
      };
    });
  };
  const fetchOwnDogsFounded = () => {
    setIsLoading(true);
    const body = {
      coordenates: {
        lat: mapRef.current.center.lat(),
        lng: mapRef.current.center.lng()
      },
      zoomOfMap: currentZoom
    };
    fetch(getOwnDogsFoundedRoute, {
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
      if (data.status) {
        updateMapArrays({
          selectedState: "ownDogsFounded",
          arrayOfInformation: data.finalArray,
          lat: data.coordenatesUser.lat,
          lng: data.coordenatesUser.lng,
          zoom: data.zoomOfMap
        });
      };
    });
  };
  const fetchGlobalDogsFounded = () => {
    setIsLoading(true);
    const mapPageRight = document.querySelector(".map-page-right");
    var estilos = window.getComputedStyle(mapPageRight, null);
    var ancho = estilos.getPropertyValue("width");
    var anchoEnNumero = Number(ancho.slice(0, ancho.length - 2));
    const body = {
      coordenates: {
        lat: mapRef.current.center.lat(),
        lng: mapRef.current.center.lng()
      },
      zoomOfMap: currentZoom,
      widthMap: anchoEnNumero
    };
    fetch(getGlobalDogsFoundedRoute, {
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
      if (data.status) {
        updateMapArrays({
          selectedState: "globalDogsFounded",
          arrayOfInformation: data.finalArray,
          lat: data.coordenatesUser.lat,
          lng: data.coordenatesUser.lng,
          zoom: data.zoomOfMap
        });
      };
    });
  };
  const fetchGlobalCompanies = () => {
    setIsLoading(true);
    const mapPageRight = document.querySelector(".map-page-right");
    var estilos = window.getComputedStyle(mapPageRight, null);
    var ancho = estilos.getPropertyValue("width");
    var anchoEnNumero = Number(ancho.slice(0, ancho.length - 2));
    const body = {
      coordenates: {
        lat: mapRef.current.center.lat(),
        lng: mapRef.current.center.lng()
      },
      zoomOfMap: currentZoom,
      widthMap: anchoEnNumero
    };
    fetch(getGlobalCompaniesRoute, {
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
      if (data.status) {
        updateMapArrays({
          selectedState: "globalCompanies",
          arrayOfInformation: data.finalArray,
          lat: data.coordenatesUser.lat,
          lng: data.coordenatesUser.lng,
          zoom: data.zoomOfMap
        });
      };
    });
  };
  const fetchGlobalPremiumProfiles = () => {
    setIsLoading(true);
    const mapPageRight = document.querySelector(".map-page-right");
    var estilos = window.getComputedStyle(mapPageRight, null);
    var ancho = estilos.getPropertyValue("width");
    var anchoEnNumero = Number(ancho.slice(0, ancho.length - 2));
    const body = {
      coordenates: {
        lat: mapRef.current.center.lat(),
        lng: mapRef.current.center.lng()
      },
      zoomOfMap: currentZoom,
      widthMap: anchoEnNumero
    };
    fetch(getGlobalPremiumProfilesRoute, {
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
      if (data.status) {
        updateMapArrays({
          selectedState: "globalPremiumProfiles",
          arrayOfInformation: data.finalArray,
          lat: data.coordenatesUser.lat,
          lng: data.coordenatesUser.lng,
          zoom: data.zoomOfMap
        });
      };
    });
  };

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

  const onMapload = useCallback((map) => {
    mapRef.current = map;
    setCurrentZoom(mapRef.current.zoom);
  }, []);

  const onZoom = useCallback(() => {
    if (mapRef.current) {
      setCurrentZoom(mapRef.current.zoom);
      if (
        whichViewIsActive === "globalPremiumProfiles" ||
        whichViewIsActive === "globalDogsFounded" ||
        whichViewIsActive === "globalCompanies"
      ) {
        setIsNeededToLoad(true);
      };
    };
  }, []);

  const panTo = useCallback(({ lat, lng, zoom }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(zoom);
  }, []);

  const [isNeededToLoad, setIsNeededToLoad] = useState(false);
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
      {isNeededToLoad ? (
        <div className="charge-again-info-map" onClick={() => {
          stablishDataOfArraysInMapForRefresh();
        }}>
          <div className="charge-again-info-map-instructions">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z" /></svg>
            <div className="charge-again-info-map-instructions-text">
              Volver a cargar información
            </div>
          </div>
        </div>
      ) : (<></>)}
      <div className={`map-page-right-buttons-container ${isButtonsContainerOpen ? ("open") : ("close")}`}>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          // Ubicacion actual
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
                zoom: 18
              });
            },
            () => null
          );
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z" /></svg> Poner en mi ubicación actual
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          // ver mis propios perfiles
          setButtonsContainerOpen(false);
          if (!username) {
            updateLogInFirstAnimation(true);
            updateLogin(true);
          } else if (!premium) {
            updateBannerRedirectWithLink({
              fromWho: TEXT_WANT_SEE_OWN_PREMIUM_PROFILES,
              inLayout: true
            });
          } else {
            setWhichViewIsActive("ownPremiumProfiles");
            stablishDataOfArraysInMap("ownPremiumProfiles");
          };
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z" /></svg> Ver mis propios perfiles
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          // ver perros encontrados
          setButtonsContainerOpen(false);
          if (!username) {
            updateLogInFirstAnimation(true);
            updateLogin(true);
          } else {
            setWhichViewIsActive("globalDogsFounded");
            stablishDataOfArraysInMap("globalDogsFounded");
          };
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" /></svg> Ver perros encontrados
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          // ver perros perdidos
          setButtonsContainerOpen(false);
          setWhichViewIsActive("globalPremiumProfiles");
          stablishDataOfArraysInMap("globalPremiumProfiles");
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" /></svg> Ver perros perdidos
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          // ver organizaciones
          setButtonsContainerOpen(false);
          setWhichViewIsActive("globalCompanies");
          stablishDataOfArraysInMap("globalCompanies");
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z" /></svg> Ver organizaciones
        </button>
        <button className="map-page-right-buttons-container-buttons" onClick={() => {
          // Ver perros encontrados por mí
          setButtonsContainerOpen(false);
          if (!username) {
            updateLogInFirstAnimation(true);
            updateLogin(true);
          } else {
            setWhichViewIsActive("ownDogsFounded");
            stablishDataOfArraysInMap("ownDogsFounded");
          };
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z" /></svg> Ver perros encontrados por mí
        </button>
        <button className="map-page-right-buttons-container-giant-button" onClick={() => { setButtonsContainerOpen(!isButtonsContainerOpen) }}>
          <svg className={`${isButtonsContainerOpen ? ("open") : ("close")}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>
        </button>
      </div>
      <div className="which-view-active-map-page">
        {whichViewIsActive === "ownPremiumProfiles" ? (
          <>
            Mis perfiles
          </>
        ) : (whichViewIsActive === "globalPremiumProfiles" ? (
          <>
            Perros perdidos
          </>
        ) : (whichViewIsActive === "globalDogsFounded" ? (
          <>
            Perros encontrados
          </>
        ) : (whichViewIsActive === "ownDogsFounded" ? (
          <>
            Mis perros encontrados
          </>
        ) : (whichViewIsActive === "globalCompanies" ? (
          <>
            Organizaciones
          </>
        ) : (
            <></>
          )))))}
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={actualCoordenates}
        options={options}
        onClick={() => { }}
        onLoad={onMapload}
        onZoomChanged={onZoom}
        onCenterChanged={() => {
          if (
            whichViewIsActive === "globalPremiumProfiles" ||
            whichViewIsActive === "globalDogsFounded" ||
            whichViewIsActive === "globalCompanies"
          ) {
            setIsNeededToLoad(true);
          };
        }}
      >
        {whichViewIsActive === "ownPremiumProfiles" ? (
          <>
            {/*ownPremiumProfiles*/}
            {ownPremiumProfiles.arrayOfInformation.map(profile => {
              return (
                <OverlayView
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  position={{
                    lat: profile.coordenates.lat,
                    lng: profile.coordenates.lng
                  }}
                  key={profile.id}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <div className="custom-marker-map" onClick={() => {
                    checkIfNeedToFecthInfo(
                      profile.typeOfData,
                      profile.id
                    );
                  }}>
                    <div className="custom-marker-map-image" style={{
                      backgroundImage: "url(" + profile.image + ")"
                    }}>
                    </div>
                  </div>
                </OverlayView>
              )
            })}
          </>
        ) : (whichViewIsActive === "globalPremiumProfiles" ? (
          <>
            {/*globalPremiumProfiles*/}
            {globalPremiumProfiles.arrayOfInformation.map(profile => {
              return (
                <OverlayView
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  position={{
                    lat: profile.coordenates.lat,
                    lng: profile.coordenates.lng
                  }}
                  key={profile.id}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <div className="custom-marker-map" onClick={() => {
                    checkIfNeedToFecthInfo(
                      profile.typeOfData,
                      profile.id
                    );
                  }}>
                    <div className="custom-marker-map-image" style={{
                      backgroundImage: "url(" + profile.image + ")"
                    }}>
                    </div>
                  </div>
                </OverlayView>
              )
            })}
          </>
        ) : (whichViewIsActive === "globalDogsFounded" ? (
          <>
            {/*globalDogsFounded*/}
            {globalDogsFounded.arrayOfInformation.map(profile => {
              return (
                <OverlayView
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  position={{
                    lat: profile.coordenates.lat,
                    lng: profile.coordenates.lng
                  }}
                  key={profile.id}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <div className="custom-marker-map" onClick={() => {
                    checkIfNeedToFecthInfo(
                      profile.typeOfData,
                      profile.id
                    );
                  }}>
                    <div className="custom-marker-map-image" style={{
                      backgroundImage: "url(" + profile.image + ")"
                    }}>
                    </div>
                  </div>
                </OverlayView>
              )
            })}
          </>
        ) : (whichViewIsActive === "ownDogsFounded" ? (
          <>
            {/*ownDogsFounded*/}
            {ownDogsFounded.arrayOfInformation.map(profile => {
              return (
                <OverlayView
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  position={{
                    lat: profile.coordenates.lat,
                    lng: profile.coordenates.lng
                  }}
                  key={profile.id}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <div className="custom-marker-map" onClick={() => {
                    checkIfNeedToFecthInfo(
                      profile.typeOfData,
                      profile.id
                    );
                  }}>
                    <div className="custom-marker-map-image" style={{
                      backgroundImage: "url(" + profile.image + ")"
                    }}>
                    </div>
                  </div>
                </OverlayView>
              )
            })}
          </>
        ) : (whichViewIsActive === "globalCompanies" ? (
          <>
            {/*globalCompanies*/}
            {globalCompanies.arrayOfInformation.map(profile => {
              return (
                <OverlayView
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  position={{
                    lat: profile.coordenates.lat,
                    lng: profile.coordenates.lng
                  }}
                  key={profile.id}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <div className="custom-marker-map" onClick={() => {
                    checkIfNeedToFecthInfo(
                      profile.typeOfData,
                      profile.id
                    );
                  }}>
                    <div className="custom-marker-map-image" style={{
                      backgroundImage: "url(" + profile.image + ")"
                    }}>
                    </div>
                  </div>
                </OverlayView>
              )
            })}
          </>
        ) : (
            <></>
          )))))}
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
      panTo({
        lat,
        lng,
        zoom: 18
      });
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
    petProfile: getPetProfile(state),

    globalCompanies: getGlobalCompanies(state),
    globalDogsFounded: getGlobalDogsFounded(state),
    globalPremiumProfiles: getGlobalPremiumProfiles(state),
    ownDogsFounded: getOwnDogsFounded(state),
    ownPremiumProfiles: getOwnPremiumProfiles(state),

    username: getUsername(state),
    premium: getPremium(state),

    companyDataLeftPage: getCompanyDataLeftPage(state),
    profileDogFoundedDataLeftPage: getProfileDogFoundedDataLeftPage(state),
    profilePremiumDataLeftPage: getProfilePremiumDataLeftPage(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMapArrays: (data) => { dispatch(updateMapArraysAction(data)) },
    updateLogin: (data) => { dispatch(updateLoginAction(data)) },
    updateLogInFirstAnimation: (data) => { dispatch(updateLogInFirstAnimationAction(data)) },
    updateBannerRedirectWithLink: (data) => { dispatch(updateBannerRedirectWithLinkAction(data)) },

    updateActualCompanyDataLeftPage: (data) => { dispatch(updateActualCompanyDataLeftPageAction(data)) },
    updateActualProfileDogFoundedDataLeftPage: (data) => { dispatch(updateActualProfileDogFoundedDataLeftPageAction(data)) },
    updateActualProfilePremiumDataLeftPage: (data) => { dispatch(updateActualProfilePremiumDataLeftPageAction(data)) },
    updateActualViewDataLeftPage: (data) => { dispatch(updateActualViewDataLeftPageAction(data)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMap);