import React from "react";
import {
  connect
} from "react-redux";
import {
  getActualViewData,
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

const LeftColumnMapPage = ({
  // selectores
  actualViewData,
  companyDataLeftPage,
  profileDogFoundedDataLeftPage,
  profilePremiumDataLeftPage,
  // acciones
  updateActualCompanyDataLeftPage,
  updateActualProfileDogFoundedDataLeftPage,
  updateActualProfilePremiumDataLeftPage,
  updateActualViewDataLeftPage
}) => {
  const formatDate = (date) => {
    const PrototypeDate = new Date(date);
    const day = PrototypeDate.getDate();
    const month = PrototypeDate.getMonth() + 1;
    const year = PrototypeDate.getFullYear();
    const superResult = String(day) + "/" + String(month) + "/" + String(year);
    return superResult;
  };
  return (
    <div className="map-page-left">
      <div className="map-page-left-h1">
        <svg className="icon-header-section-1-index-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" /></svg> Información
      </div>
      {
        actualViewData === "Nothing" ? (
          <div className="map-page-left-nothing">
            <div className="map-page-left-nothing-title">
              Busca en el mapa:
            </div>
            <ul>
              <li>
                Cuáles perros están perdidos
              </li>
              <li>
                Cuáles ya se encontraron y aún no encuentran al dueño
              </li>
              <li>
                Cuáles son tus perfiles de perros perdidos y encontrados
              </li>
              <li>
                Cuáles son las organizaciones cerca de donde vives
              </li>
              <li>
                Al hacer click en los íconos del mapa se mostrara toda su información correspondiente del perfil u organización
              </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
          </div>
        ) : (
            actualViewData === "Company" ? (
              <>
              </>
            ) : (
                actualViewData === "CompanyProfile" ? (
                  <>
                  </>
                ) : (
                    actualViewData === "Profile" ? (
                      <div className="map-page-left-premiumProfile">
                        <div className="map-page-left-premiumProfile-profileImage">
                          Imagen de perfil:
                          <img src={profilePremiumDataLeftPage.profileImage} alt="Imagen de Perfil" />
                        </div>
                        <div className="map-page-left-premiumProfile-title">
                          Información sobre esta mascota:
                        </div>
                        <div className="map-page-left-premiumProfile-images-row2">
                          <div className="map-page-left-premiumProfile-name">
                            Nombre: <span>{profilePremiumDataLeftPage.name}</span>
                          </div>
                          <div className="map-page-left-premiumProfile-whenIsLost">
                            Cuándo se perdió: <span>{formatDate(profilePremiumDataLeftPage.whenIsLost)}</span>
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
                                  <img key={image.srcImage} src={image.srcImage} alt={`Imagen de ${profilePremiumDataLeftPage.name}`} />
                                )
                              }
                            })}
                          </div>
                          <div className="map-page-left-premiumProfile-images-row">
                            {profilePremiumDataLeftPage.imagesCV.map((image, index) => {
                              if (index > 1) {
                                return (
                                  <img key={image.srcImage} src={image.srcImage} alt={`Imagen de ${profilePremiumDataLeftPage.name}`} />
                                )
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                        actualViewData === "ProfileDogFounded" ? (
                          <>
                          </>
                        ) : (
                            <>
                              {/*Loading*/}
                              <div className="loader-block" style={{
                                paddingTop: "20px"
                              }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
                              </div>
                            </>
                          )
                      )
                  )
              )
          )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    actualViewData: getActualViewData(state),
    companyDataLeftPage: getCompanyDataLeftPage(state),
    profileDogFoundedDataLeftPage: getProfileDogFoundedDataLeftPage(state),
    profilePremiumDataLeftPage: getProfilePremiumDataLeftPage(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActualCompanyDataLeftPage: (data) => { dispatch(updateActualCompanyDataLeftPageAction(data)) },
    updateActualProfileDogFoundedDataLeftPage: (data) => { dispatch(updateActualProfileDogFoundedDataLeftPageAction(data)) },
    updateActualProfilePremiumDataLeftPage: (data) => { dispatch(updateActualProfilePremiumDataLeftPageAction(data)) },
    updateActualViewDataLeftPage: (data) => { dispatch(updateActualViewDataLeftPageAction(data)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftColumnMapPage);