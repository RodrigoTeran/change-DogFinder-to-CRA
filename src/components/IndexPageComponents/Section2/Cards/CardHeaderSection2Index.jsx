// MODULES
import { connect } from "react-redux";
import { getAnimations } from "../../../../store/reducers/indexPage/selector";
// Modules
import React from "react";

import { getWebp } from "../../../../store/reducers/user/selector";

const CardHeaderSection2Index = ({
  animations,
  webp,
  id,
  title,
  text,
  setImgSrc,
  setYes,
}) => {
  return (
    <div
      id={`${id}`}
      className={`col-lg-4 col-md-6 col-sm-10 mt-4 cardHeaderSection2Index ${
        animations[`#${id}`] ? "animationCard-header-section-2-index" : ""
      }`}
      style={{ cursor: "pointer" }}
      onClick={() => {
        var srcWanted = "";
        if (webp) {
          if (id === "card-index-section-2-1") {
            srcWanted = "/Images/perfil-captura.webp";
          } else if (id === "card-index-section-2-2") {
            srcWanted = "/Images/mapa-captura.webp";
          } else {
            srcWanted = "/Images/company-captura.webp";
          }
        } else {
          if (id === "card-index-section-2-1") {
            srcWanted = "/Images/perfil-captura.jpg";
          } else if (id === "card-index-section-2-2") {
            srcWanted = "/Images/mapa-captura.jpg";
          } else {
            srcWanted = "/Images/company-captura.jpg";
          }
        }
        setImgSrc(srcWanted);
        setYes(true);
      }}
    >
      {webp ? (
        /*WEBP*/
        <img
          src={`/Images/${
            id === "card-index-section-2-1"
              ? "perfil-captura.webp"
              : id === "card-index-section-2-2"
              ? "mapa-captura.webp"
              : "company-captura.webp"
          }`}
          alt="Sección de la App"
        ></img>
      ) : (
        /*PNG*/
        <img
          src={`/Images/${
            id === "card-index-section-2-1"
              ? "perfil-captura.jpg"
              : id === "card-index-section-2-2"
              ? "mapa-captura.jpg"
              : "company-captura.jpg"
          }`}
          alt="Sección de la App"
        ></img>
      )}
      <section className="container-header-section-2-index-info">
        <div className="container-header-section-2-index-title">{title}</div>
        {text}
      </section>
    </div>
  );
};
// Las animaciones de REDUX
const mapStateToProps = (state) => {
  return {
    animations: getAnimations(state),
    webp: getWebp(state),
  };
};
export default connect(mapStateToProps)(CardHeaderSection2Index);
