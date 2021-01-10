import React, { useState, useEffect } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import {
  deleteJarvisFromUser,
  updateAnswerIAJarvis,
} from "../../routes/jarvisRoutes";
import { updatePushJarvisInfoAction } from "../../store/reducers/jarvis/actions";
import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
  updateBannerOkCancelActionAction,
} from "../../store/reducers/layout/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { TEXT_WANT_DELETE_NOTIFICATION } from "../../utils/textForBannerOkCancelAction";
import { getBannerOkCancelAction } from "../../store/reducers/layout/selector";

const Col1SmartComponent = ({
  viewIAUser,
  viewManualUser,
  viewIACompany,
  viewManualCompany,
  inWhatView,
  jarvises,
  jarvisesIAUser,
  jarvisesManualUser,
  jarvisesIACompany,
  jarvisesManualCompany,

  updatePushJarvisInfo,
  updateSuccessMessagesComponent,
  updateFailureMessagesComponent,

  updateBannerOkCancelAction,
  bannerOkCancelAction,
}) => {
  const [yesRedirect, setYesRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (
      bannerOkCancelAction.isDisplayed.fromWho ===
        TEXT_WANT_DELETE_NOTIFICATION &&
      bannerOkCancelAction.okButton === true
    ) {
      deleteUserInJarvis();
      updateBannerOkCancelAction({
        fromWho: TEXT_WANT_DELETE_NOTIFICATION,
        inLayout: false,
        okButton: false,
      });
    }
  }, [bannerOkCancelAction]);

  const askIfWantDelete = () => {
    updateBannerOkCancelAction({
      fromWho: TEXT_WANT_DELETE_NOTIFICATION,
      inLayout: true,
      okButton: false,
    });
  };

  const updateJarvis = (answer) => {
    setIsLoading(true);
    const body = {
      idJarvis,
      answer,
    };
    fetch(updateAnswerIAJarvis, {
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
        setIsLoading(false);
        if (data.status === "true") {
          updatePushJarvisInfo(data.arrayJarvisesWithInfo);
          updateSuccessMessagesComponent({
            state: true,
            title: "Notificación actualizada",
            description: "Notificación actualizada exitosamente.",
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "No se pudo actualizar la notificación",
          });
        }
      });
  };

  const deleteUserInJarvis = () => {
    setIsLoading(true);
    const body = {
      idJarvis,
      typeUser,
    };
    fetch(deleteJarvisFromUser, {
      method: "DELETE",
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
        setIsLoading(false);
        if (data.status) {
          setYesRedirect(true);
          updatePushJarvisInfo(data.arrayJarvisesWithInfo);
          updateSuccessMessagesComponent({
            state: true,
            title: "Notificación eliminada",
            description: "Notificación eliminada exitosamente.",
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "No se pudo eliminar la notificación",
          });
        }
      });
  };

  var createdAt = "---";
  var indexJarvis = undefined;
  var noLength = false;
  var numeroView = undefined;

  var idJarvis = undefined;
  var typeUser = undefined;

  var isArtesanal = undefined;
  var numeroIA = undefined;

  const getJarvisInfo = () => {
    if (inWhatView === "viewIAUser") {
      if (jarvisesIAUser.length > 0) {
        indexJarvis = jarvisesIAUser[viewIAUser][0];
      } else {
        noLength = true;
      }
    } else if (inWhatView === "viewManualUser") {
      if (jarvisesManualUser.length > 0) {
        indexJarvis = jarvisesManualUser[viewManualUser][0];
      } else {
        noLength = true;
      }
    } else if (inWhatView === "viewIACompany") {
      if (jarvisesIACompany.length > 0) {
        indexJarvis = jarvisesIACompany[viewIACompany][0];
      } else {
        noLength = true;
      }
    } else if (inWhatView === "viewManualCompany") {
      if (jarvisesManualCompany.length > 0) {
        indexJarvis = jarvisesManualCompany[viewManualCompany][0];
      } else {
        noLength = true;
      }
    }
    if (!noLength) {
      idJarvis = jarvises[indexJarvis].idJarvis;
      typeUser = jarvises[indexJarvis].typeUser;

      createdAt = formatDate(jarvises[indexJarvis].createdAt);
      numeroIA = jarvises[indexJarvis].answerIAJarvis;
      isArtesanal = jarvises[indexJarvis].artesanal;

      if (inWhatView === "viewIAUser") {
        numeroView = viewIAUser + 1;
      } else if (inWhatView === "viewManualUser") {
        numeroView = viewManualUser + 1;
      } else if (inWhatView === "viewIACompany") {
        numeroView = viewIACompany + 1;
      } else if (inWhatView === "viewManualCompany") {
        numeroView = viewManualCompany + 1;
      }
      if (!isArtesanal && numeroIA === 0) {
        document.querySelector(
          ".main-section-notificaciones-page-container-hr"
        ).style.height = "630px";
      } else {
        document.querySelector(
          ".main-section-notificaciones-page-container-hr"
        ).style.height = "420px";
      }
    } else {
      try {
        document.querySelector(
          ".main-section-notificaciones-page-container-hr"
        ).style.height = "250px";
      } catch {}
      createdAt = "---";
      numeroView = "---";
    }
  };
  const formatDate = (date) => {
    const PrototypeDate = new Date(date);
    const day = PrototypeDate.getDate();
    const month = PrototypeDate.getMonth() + 1;
    const year = PrototypeDate.getFullYear();
    const hours = PrototypeDate.getHours();
    const minutes = PrototypeDate.getMinutes();
    const seconds = PrototypeDate.getSeconds();
    const superResult =
      String(day) +
      "/" +
      String(month) +
      "/" +
      String(year) +
      ` Hora: ${hours}:${minutes}:${seconds}`;
    return superResult;
  };
  getJarvisInfo();
  return (
    <div className="main-section-notificaciones-page-container-col-1-smart">
      {yesRedirect ? <Redirect to="/"></Redirect> : <></>}
      {createdAt === "---" ? (
        <></>
      ) : (
        <div className="main-section-notificaciones-page-container-col-1-smart-view">
          Número de notificación: {numeroView}
        </div>
      )}
      {createdAt === "---" ? (
        <></>
      ) : (
        <div className="main-section-notificaciones-page-container-col-1-smart-date">
          Fecha de creación de la notificación: <span>{createdAt}</span>
        </div>
      )}
      {createdAt === "---" ? (
        <></>
      ) : (
        <div className="main-section-notificaciones-page-container-col-1-smart-delete">
          {isArtesanal || (numeroIA === 1 && !isArtesanal) ? (
            <div>
              {!isArtesanal && typeUser === "owner" ? (
                <div style={{ marginTop: "30px" }}>
                  Cuando elimines esta notificación lo mejor es poner a tu
                  perfil de tu mascota como en casa para que no te vuelva a
                  mandar la notificación.
                </div>
              ) : (
                <></>
              )}
              <ButtonWhiteRectangle
                text="Borrar esta notificación"
                width="100%"
                height="50px"
                redDif="redColor-2"
                clickFunctionAnotherOne={() => {
                  if (!isLoading) {
                    askIfWantDelete();
                  }
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                >
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>
              </ButtonWhiteRectangle>
            </div>
          ) : (
            <div style={{ marginTop: "30px" }}>
              Para ver la información de contacto del otro usuario/empresa...
              primero tienes que especificar lo siguiente.
              <br />
              <br />
              <span style={{ color: "#CCC" }}>
                Si ya no llegas a ver este mensaje es porque el otro
                usuario/empresa ya calificó a la IA.
              </span>
              <ButtonWhiteRectangle
                text="La IA acertó"
                width="100%"
                height="50px"
                greenDif="greenColor"
                clickFunctionAnotherOne={() => {
                  if (!isLoading) {
                    updateJarvis(true);
                  }
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                </svg>
              </ButtonWhiteRectangle>
              <ButtonWhiteRectangle
                text="La IA no acertó"
                width="100%"
                height="50px"
                redDif="redColor"
                mt="mt-2"
                clickFunctionAnotherOne={() => {
                  if (!isLoading) {
                    updateJarvis(false);
                  }
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                >
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>
              </ButtonWhiteRectangle>
            </div>
          )}
        </div>
      )}
      {isLoading ? (
        <div
          className="loader-block"
          style={{
            paddingTop: "30px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
          </svg>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    bannerOkCancelAction: getBannerOkCancelAction(state),
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
    updatePushJarvisInfo: (data) => {
      dispatch(updatePushJarvisInfoAction(data));
    },
    updateBannerOkCancelAction: (data) => {
      dispatch(updateBannerOkCancelActionAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Col1SmartComponent);
