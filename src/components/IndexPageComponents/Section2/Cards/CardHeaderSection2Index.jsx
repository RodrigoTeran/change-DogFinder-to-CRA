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
        if (id === "card-index-section-2-1") {
          srcWanted = "/Images/perfil-captura.jpg";
        } else if (id === "card-index-section-2-2") {
          srcWanted = "/Images/mapa-captura.jpg";
        } else {
          srcWanted = "/Images/company-captura.jpg";
        }
        setImgSrc(srcWanted);
        setYes(true);
      }}
    >
      <div className="cardHeaderSection2Index-anima">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" />
        </svg>
      </div>
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
