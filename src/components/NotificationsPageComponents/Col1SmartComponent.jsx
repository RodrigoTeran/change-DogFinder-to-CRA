import React from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

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
}) => {
  var createdAt = "---";
  var indexJarvis = undefined;
  var noLength = false;
  var numeroView = undefined;
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
            clickFunctionAnotherOne={() => {}}
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
  );
};

export default Col1SmartComponent;
