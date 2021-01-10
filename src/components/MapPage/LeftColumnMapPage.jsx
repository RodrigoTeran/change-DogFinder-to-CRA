import React from "react";
import { connect } from "react-redux";
import {
  getActualViewData,
  getCompanyDataLeftPage,
  getProfileDogFoundedDataLeftPage,
  getProfilePremiumDataLeftPage,
} from "../../store/reducers/leftDataMapPage/selector";
import {
  updateActualProfileDogFoundedDataLeftPageAction,
  updateActualViewDataLeftPageAction,
} from "../../store/reducers/leftDataMapPage/actions";
import { getUserCompany } from "../../store/reducers/company/selector";
import { getDataMapLeftProvider } from "../../routes/company";
import { updatePushJarvisInfoAction } from "../../store/reducers/jarvis/actions";
import {
  getEmailForContact,
  getNumberOfTelephoneForContact,
  getAuth,
} from "../../store/reducers/user/selector";
import {
  updateLogInFirstAnimationAction,
  updateLoginAction,
} from "../../store/reducers/user/actions";
import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../store/reducers/layout/actions";
import { createMatchJarvis } from "../../routes/jarvisRoutes";

const MatchComponent = ({
  // Selectores
  emailForContact,
  numberOfTelephoneForContact,
  auth,

  // Acciones
  updateLogInFirstAnimation,
  updateLogin,
  textButton,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,

  typeProfile,
  idProfile,
  updateActualViewDataLeftPage,

  // BANNER
  userCompany,
  updatePushJarvisInfo,
}) => {
  const doActualFetch = (siEmpresa) => {
    // Hacer contacto /fetch
    updateActualViewDataLeftPage("Loading");
    const body = {
      idProfile,
      typeProfile,
      siEmpresa,
    };
    fetch(createMatchJarvis, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (typeProfile === "Premium") {
          updateActualViewDataLeftPage("Profile");
        } else if (typeProfile === "CompanyDogFounded") {
          updateActualViewDataLeftPage("CompanyProfile");
        } else {
          updateActualViewDataLeftPage("ProfileDogFounded");
        }
        if (data.status === "true") {
          updatePushJarvisInfo(data.jarvisInfo);
          updateSuccessMessagesComponent({
            state: true,
            title: "Se conectó",
            description: "Se conectó al perfil exitósamente.",
          });
        } else if (data.status === "mismo") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "No puedes conectar con tu mismo perfil.",
          });
        } else if (data.status === "yaConRegistro") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "Ya estas conectado con este perfil.",
          });
        } else if (data.status === "teFaltaCalle") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description:
              "No puedes contactar a este usuario/empresa ya que no cuentas con tu propia información de contacto... En la página de tu perfil podrás llenar los requerimientos (mail y teléfono). Esto lo hacemos para asegurar que ellos también te puedan contactar.",
          });
        } else if (data.status === "error") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description:
              "Hubo un error al conectar... Intenta actualizar la página.",
          });
        }
      });
  };
  const checkIfItCanDoMatch = (companyXd) => {
    if (!auth) {
      updateLogInFirstAnimation(true);
      updateLogin(true);
    } else {
      var siEmpresa = false;
      if (companyXd && textButton === "Encontré a esta perro") {
        siEmpresa = true;
      } else {
        siEmpresa = false;
      }
      if (
        emailForContact === "No se ha establecido" ||
        numberOfTelephoneForContact === "No se ha establecido"
      ) {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description:
            "No puedes contactar a este usuario/empresa ya que no cuentas con tu propia información de contacto... En la página de tu perfil podrás llenar los requerimientos (mail y teléfono). Esto lo hacemos para asegurar que ellos también te puedan contactar.",
        });
      } else {
        doActualFetch(siEmpresa);
      }
    }
  };
  return (
    <div className="match-container">
      Conectar con el usuario
      <div
        className="match-button"
        onClick={() => {
          checkIfItCanDoMatch(false);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
        </svg>{" "}
        {textButton}
        <div className="match-button-special">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
          </svg>{" "}
          {textButton}
        </div>
      </div>
      {userCompany.name && textButton === "Encontré a esta perro" ? (
        <div
          className="match-button"
          onClick={() => {
            checkIfItCanDoMatch(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
          </svg>{" "}
          Mi empresa lo encontró
          <div className="match-button-special">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
            </svg>{" "}
            Mi empresa lo encontró
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const LeftColumnMapPage = ({
  // selectores
  actualViewData,
  companyDataLeftPage,
  profileDogFoundedDataLeftPage,
  profilePremiumDataLeftPage,

  // acciones
  updateActualProfileDogFoundedDataLeftPage,
  updateActualViewDataLeftPage,

  // Selectores
  emailForContact,
  numberOfTelephoneForContact,
  auth,

  // Acciones
  updateLogInFirstAnimation,
  updateLogin,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,

  // BANNER
  userCompany,
  updatePushJarvisInfo,
}) => {
  const fetchInformationForLeftColumnMapPage = (typeOfObject, idOfObject) => {
    updateActualViewDataLeftPage("Loading"); // left page
    const body = {
      idOfObject,
      typeOfObject,
    };
    fetch(getDataMapLeftProvider, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status) {
          updateActualViewDataLeftPage("CompanyProfile");
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
            profileImage: data.information.profileImage,
          });
        }
      });
  };
  const checkIfNeedToFecthInfo = (idOfObject) => {
    if (profileDogFoundedDataLeftPage["idProfile"]) {
      if (profileDogFoundedDataLeftPage["idProfile"] === idOfObject) {
        updateActualViewDataLeftPage("CompanyProfile");
      } else {
        fetchInformationForLeftColumnMapPage("ProfileDogFounded", idOfObject);
      }
    } else {
      fetchInformationForLeftColumnMapPage("ProfileDogFounded", idOfObject);
    }
  };
  const formatDate = (date) => {
    const PrototypeDate = new Date(date);
    const day = PrototypeDate.getDate();
    const month = PrototypeDate.getMonth() + 1;
    const year = PrototypeDate.getFullYear();
    const superResult = String(day) + "/" + String(month) + "/" + String(year);
    return superResult;
  };
  return (
    <div className="map-page-left" style={{
      marginTop: "5px"
    }}>
      <div className="map-page-left-h1">
        <svg
          className="icon-header-section-1-index-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
        </svg>{" "}
        Información
      </div>
      {actualViewData === "Nothing" ? (
        <div className="map-page-left-nothing">
          <div className="map-page-left-nothing-title">Busca en el mapa:</div>
          <ul>
            <li>Cuáles perros están perdidos</li>
            <li>Cuáles ya se encontraron y aún no encuentran al dueño</li>
            <li>Cuáles son tus perfiles de perros perdidos y encontrados</li>
            <li>Cuáles son las organizaciones cerca de donde vives</li>
            <li>
              Al hacer click en los íconos del mapa se mostrara toda su
              información correspondiente del perfil u organización
            </li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
        </div>
      ) : actualViewData === "Company" ? (
        <div className="map-page-left-premiumProfile">
          <div className="map-page-left-premiumProfile-info">Compañía</div>
          <div className="map-page-left-premiumProfile-profileImage">
            Logo:
            <img src={companyDataLeftPage.logo} alt="Logo compañía" />
          </div>
          <div className="map-page-left-premiumProfile-title">
            Información sobre esta compañía:
          </div>
          <div className="map-page-left-premiumProfile-images-row2">
            <div className="map-page-left-premiumProfile-name">
              Nombre:{" "}
              <span>
                {companyDataLeftPage.name === "No se ha establecido"
                  ? "-----"
                  : companyDataLeftPage.name}
              </span>
            </div>
            <div className="map-page-left-premiumProfile-whenIsLost">
              Página Web:
              {companyDataLeftPage.webPage === "No se ha establecido" ? (
                <span>-----</span>
              ) : (
                <a target="blank" href={companyDataLeftPage.webPage}>
                  {companyDataLeftPage.webPage}
                </a>
              )}
            </div>
          </div>
          <div className="map-page-left-premiumProfile-location">
            Localización:{" "}
            <span>
              {companyDataLeftPage.location === "No se ha establecido"
                ? "-----"
                : companyDataLeftPage.location}
            </span>
          </div>
          <div className="map-page-left-premiumProfile-images-row2">
            <div
              className="map-page-left-premiumProfile-age"
              style={{
                width: "calc(100% - 20px)",
              }}
            >
              Descripción de la companía:{" "}
              <span>
                {companyDataLeftPage.descriptionCompany ===
                "No se ha establecido"
                  ? "-----"
                  : companyDataLeftPage.descriptionCompany}
              </span>
            </div>
          </div>
          <div className="map-page-left-companyArray">
            Perros rescatados por la empresa:
            {companyDataLeftPage.arrayProfilesDogFounded.length > 0 ? (
              <>
                <div
                  style={{
                    fontWeight: "normal",
                    fontSize: ".9rem",
                    color: "#DDD",
                    marginBottom: "30px",
                  }}
                >
                  dale click para ver más información...
                </div>
                {companyDataLeftPage.arrayProfilesDogFounded.map((profile) => {
                  return (
                    <div
                      key={profile.idProfile}
                      className="map-page-left-companyArray-profile"
                      onClick={() => {
                        checkIfNeedToFecthInfo(profile.idProfile);
                      }}
                    >
                      <div className="map-page-left-companyArray-profile-column">
                        <img
                          src={profile.profileImage}
                          alt="Imagen de Perfil"
                        />
                      </div>
                      <div className="map-page-left-companyArray-profile-column2">
                        <div>
                          Cuándo se encontró:{" "}
                          <span>{formatDate(profile.whenIsFounded)}</span>
                        </div>
                        <div>
                          Raza: <span>{profile.breed}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div
                style={{
                  marginTop: "10px",
                  fontWeight: "normal",
                  fontSize: ".9rem",
                  color: "#DDD",
                }}
              >
                -----
              </div>
            )}
          </div>
        </div>
      ) : actualViewData === "Profile" ? (
        <>
          <div className="map-page-left-premiumProfile">
            <div className="map-page-left-premiumProfile-info">
              Mascota perdida
            </div>
            <div className="map-page-left-premiumProfile-profileImage">
              Imagen de perfil:
              <img
                src={profilePremiumDataLeftPage.profileImage}
                alt="Imagen de Perfil"
              />
            </div>
            <div className="map-page-left-premiumProfile-title">
              Información sobre esta mascota perdida:
            </div>
            <div className="map-page-left-premiumProfile-images-row2">
              <div className="map-page-left-premiumProfile-name">
                Nombre: <span>{profilePremiumDataLeftPage.name}</span>
              </div>
              <div className="map-page-left-premiumProfile-whenIsLost">
                Cuándo se perdió:{" "}
                <span>{formatDate(profilePremiumDataLeftPage.whenIsLost)}</span>
              </div>
            </div>
            <div className="map-page-left-premiumProfile-images-row2">
              <div className="map-page-left-premiumProfile-breed">
                Raza: <span>{profilePremiumDataLeftPage.breed}</span>
              </div>
              <div className="map-page-left-premiumProfile-gender">
                Género: <span>{profilePremiumDataLeftPage.gender}</span>
              </div>
            </div>
            <div className="map-page-left-premiumProfile-location">
              Localización: <span>{profilePremiumDataLeftPage.location}</span>
            </div>
            <div className="map-page-left-premiumProfile-images-row2">
              <div className="map-page-left-premiumProfile-age">
                Edad: <span>{profilePremiumDataLeftPage.age}</span>
              </div>
              <div className="map-page-left-premiumProfile-color">
                Color principal: <span>{profilePremiumDataLeftPage.color}</span>
              </div>
            </div>
            <div className="map-page-left-premiumProfile-images">
              Imágenes de reconocimiento facial:
              <div className="map-page-left-premiumProfile-images-row">
                {profilePremiumDataLeftPage.imagesCV.map((image, index) => {
                  if (index < 2) {
                    return (
                      <img
                        key={image.srcImage}
                        src={image.srcImage}
                        alt={`Imagen de ${profilePremiumDataLeftPage.name}`}
                      />
                    );
                  }
                })}
              </div>
              <div className="map-page-left-premiumProfile-images-row">
                {profilePremiumDataLeftPage.imagesCV.map((image, index) => {
                  if (index > 1) {
                    return (
                      <img
                        key={image.srcImage}
                        src={image.srcImage}
                        alt={`Imagen de ${profilePremiumDataLeftPage.name}`}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <MatchComponent
            emailForContact={emailForContact}
            numberOfTelephoneForContact={numberOfTelephoneForContact}
            auth={auth}
            updateLogInFirstAnimation={updateLogInFirstAnimation}
            updateLogin={updateLogin}
            textButton={"Encontré a esta perro"}
            updateFailureMessagesComponent={updateFailureMessagesComponent}
            typeProfile="Premium"
            idProfile={profilePremiumDataLeftPage.idProfile}
            updateActualViewDataLeftPage={updateActualViewDataLeftPage}
            userCompany={userCompany}
            updatePushJarvisInfo={updatePushJarvisInfo}
            updateSuccessMessagesComponent={updateSuccessMessagesComponent}
          ></MatchComponent>
        </>
      ) : actualViewData === "ProfileDogFounded" ||
        actualViewData === "CompanyProfile" ? (
        <>
          <div className="map-page-left-premiumProfile">
            {actualViewData === "CompanyProfile" ? (
              <div
                className="map-page-left-volver"
                onClick={() => {
                  updateActualViewDataLeftPage("Company");
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
                </svg>{" "}
                Volver
              </div>
            ) : (
              <></>
            )}
            <div className="map-page-left-premiumProfile-info">
              Mascota encontrada
            </div>
            <div className="map-page-left-premiumProfile-profileImage">
              Imagen de perfil:
              <img
                src={profileDogFoundedDataLeftPage.profileImage}
                alt="Imagen de Perfil"
              />
            </div>
            <div className="map-page-left-premiumProfile-title">
              Información sobre esta mascota encontrada:
            </div>
            <div className="map-page-left-premiumProfile-images-row2">
              <div className="map-page-left-premiumProfile-name">
                Apodo: <span>{profileDogFoundedDataLeftPage.name}</span>
              </div>
              <div className="map-page-left-premiumProfile-whenIsLost">
                Cuándo se encontró:{" "}
                <span>
                  {formatDate(profileDogFoundedDataLeftPage.whenIsFounded)}
                </span>
              </div>
            </div>
            <div className="map-page-left-premiumProfile-images-row2">
              <div className="map-page-left-premiumProfile-breed">
                Raza: <span>{profileDogFoundedDataLeftPage.breed}</span>
              </div>
              <div className="map-page-left-premiumProfile-gender">
                Género: <span>{profileDogFoundedDataLeftPage.gender}</span>
              </div>
            </div>
            <div className="map-page-left-premiumProfile-location">
              Localización:{" "}
              <span>{profileDogFoundedDataLeftPage.location}</span>
            </div>
            <div className="map-page-left-premiumProfile-images-row2">
              <div className="map-page-left-premiumProfile-age">
                Edad: <span>{profileDogFoundedDataLeftPage.age}</span>
              </div>
              <div className="map-page-left-premiumProfile-color">
                Color principal:{" "}
                <span>{profileDogFoundedDataLeftPage.color}</span>
              </div>
            </div>
            <div className="map-page-left-premiumProfile-images">
              Imágenes de reconocimiento facial:
              <div className="map-page-left-premiumProfile-images-row">
                {profileDogFoundedDataLeftPage.imagesCV.map((image, index) => {
                  if (index < 2) {
                    return (
                      <img
                        key={image.srcImage}
                        src={image.srcImage}
                        alt={`Imagen de ${profileDogFoundedDataLeftPage.name}`}
                      />
                    );
                  }
                })}
              </div>
              <div className="map-page-left-premiumProfile-images-row">
                {profileDogFoundedDataLeftPage.imagesCV.map((image, index) => {
                  if (index > 1) {
                    return (
                      <img
                        key={image.srcImage}
                        src={image.srcImage}
                        alt={`Imagen de ${profileDogFoundedDataLeftPage.name}`}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <MatchComponent
            emailForContact={emailForContact}
            numberOfTelephoneForContact={numberOfTelephoneForContact}
            auth={auth}
            updateLogInFirstAnimation={updateLogInFirstAnimation}
            updateLogin={updateLogin}
            textButton={"Soy el dueño de este perro"}
            updateFailureMessagesComponent={updateFailureMessagesComponent}
            typeProfile={
              actualViewData === "CompanyProfile"
                ? "CompanyDogFounded"
                : "DogFounded"
            }
            idProfile={profileDogFoundedDataLeftPage.idProfile}
            updateActualViewDataLeftPage={updateActualViewDataLeftPage}
            userCompany={userCompany}
            updatePushJarvisInfo={updatePushJarvisInfo}
            updateSuccessMessagesComponent={updateSuccessMessagesComponent}
          ></MatchComponent>
        </>
      ) : (
        <>
          {/*Loading*/}
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
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    actualViewData: getActualViewData(state),
    companyDataLeftPage: getCompanyDataLeftPage(state),
    profileDogFoundedDataLeftPage: getProfileDogFoundedDataLeftPage(state),
    profilePremiumDataLeftPage: getProfilePremiumDataLeftPage(state),

    emailForContact: getEmailForContact(state),
    numberOfTelephoneForContact: getNumberOfTelephoneForContact(state),
    auth: getAuth(state),
    userCompany: getUserCompany(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActualProfileDogFoundedDataLeftPage: (data) => {
      dispatch(updateActualProfileDogFoundedDataLeftPageAction(data));
    },
    updateActualViewDataLeftPage: (data) => {
      dispatch(updateActualViewDataLeftPageAction(data));
    },
    updateLogInFirstAnimation: (data) => {
      dispatch(updateLogInFirstAnimationAction(data));
    },
    updateLogin: (data) => {
      dispatch(updateLoginAction(data));
    },
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
    updatePushJarvisInfo: (data) => {
      dispatch(updatePushJarvisInfoAction(data));
    },
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftColumnMapPage);
