import React, { useState } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import { deleteJarvisFromUser } from "../../routes/jarvisRoutes";
import { updatePushJarvisInfoAction } from "../../store/reducers/jarvis/actions";
import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
} from "../../store/reducers/layout/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
}) => {
  const [yesRedirect, setYesRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const deleteUserInJarvis = (idJarvis, typeUser) => {
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
      if (inWhatView === "viewIAUser") {
        numeroView = viewIAUser + 1;
      } else if (inWhatView === "viewManualUser") {
        numeroView = viewManualUser + 1;
      } else if (inWhatView === "viewIACompany") {
        numeroView = viewIACompany + 1;
      } else if (inWhatView === "viewManualCompany") {
        numeroView = viewManualCompany + 1;
      }
      document.querySelector(
        ".main-section-notificaciones-page-container-hr"
      ).style.height = "420px";
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
          <ButtonWhiteRectangle
            text="Borrar esta notificación"
            width="100%"
            height="50px"
            redDif="redColor-2"
            clickFunctionAnotherOne={() => {
              if (!isLoading) {
                deleteUserInJarvis(idJarvis, typeUser);
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
  return {};
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Col1SmartComponent);
