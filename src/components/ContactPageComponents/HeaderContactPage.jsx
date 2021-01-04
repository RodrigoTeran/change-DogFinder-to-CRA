import React from "react";
import { connect } from "react-redux";

import { getWebp } from "../../store/reducers/user/selector";

const HeaderContactPage = ({ isWebp }) => {
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
          Hola, mi nombre es Rodrigo Terán
        </div>
        <div className="contact-us-page-image-text-h2">
          el fundador de la plataforma...
        </div>        
      </div>
      <div
        className="contact-us-page-me-div"
        style={{
          backgroundImage: isWebp
            ? "url(/Images/contact-page-me.webp)"
            : "url(/Images/contact-page-me.jpg)",
        }}
      ></div>
    </>
  );
};
// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    isWebp: getWebp(state),
  };
};

export default connect(mapStateToProps)(HeaderContactPage);
