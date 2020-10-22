import React from "react";
import { connect } from "react-redux";

import {
  getPetProfile,
  getWebp
} from "../../store/reducers/user/selector";

const ColorProfile = ({
  petProfile,
  isWebp
}) => {

  return (
    <div className={`color-profile`}>
      <div className={`color-profile-content`}>
        <div className={`color-profile-title`}>
          Color principal
        </div>
        <div className="row d-flex justify-center align-items-center color-profile-row">
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Negro">
            <div className={`color-profile-circle color-profile-circle-black`}></div>
            <div className={`color-profile-circle-text`}>
              Negro
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Blanco">
            <div className={`color-profile-circle color-profile-circle-white`}></div>
            <div className={`color-profile-circle-text`}>
              Blanco
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Gris">
            <div className={`color-profile-circle color-profile-circle-gray`}></div>
            <div className={`color-profile-circle-text`}>
              Gris
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Café">
            <div className={`color-profile-circle color-profile-circle-brown`}></div>
            <div className={`color-profile-circle-text`}>
              Café
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Amarillo">
            <div className={`color-profile-circle color-profile-circle-yellow`}></div>
            <div className={`color-profile-circle-text`}>
              Amarillo
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 color-profile-column" title="Mezcla">
            <div className={`color-profile-circle color-profile-circle-mix-${isWebp ? ("webp") : ("jpg")}`}></div>
            <div className={`color-profile-circle-text`}>
              Mezcla
            </div>
          </div>
        </div>
        <div className={`color-profile-result`}>
          {petProfile.mainColor}
        </div>
      </div>
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state),
    isWebp: getWebp(state)
  };
};

// Acciones de REDUX
/*const mapDispatchToProps = (dispatch) => {
  return {};
};*/
export default connect(mapStateToProps)(ColorProfile);