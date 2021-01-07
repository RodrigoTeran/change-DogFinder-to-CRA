import React from "react";
import { connect } from "react-redux";

import { getWebp } from "../../store/reducers/user/selector";

const HeaderPrivacyPage = ({ isWebp }) => {
  return (
    <>
      <div
        className="contact-us-page-image"
        style={{
          backgroundImage: isWebp
            ? "url(/Images/image-contact-page-1.webp)"
            : "url(/Images/image-contact-page-1.jpg)",
        }}
      ></div>
      <div className="contact-us-page-image-text">
        <div className="contact-us-page-image-text-h1">
          <span
            style={{
              textDecoration: "line-through",
              marginRight: "10px",
              fontWeight: "normal",
            }}
          >
            Aburridas
          </span>
          Políticas de Privacidad
        </div>
        <div className="contact-us-page-image-text-h2">
          Porque la tenemos que tener.
        </div>
      </div>
    </>
  );
};
// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    isWebp: getWebp(state),
  };
};

export default connect(mapStateToProps)(HeaderPrivacyPage);
