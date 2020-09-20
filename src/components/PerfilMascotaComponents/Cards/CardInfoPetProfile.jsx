import React from "react";
import { connect } from "react-redux";

const CardInfoPetProfile = ({
  children,
  title,
  des
}) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 info-pet-profile-card">
      <div className="info-pet-profile-card-content">
        {children}
        <div className="info-pet-profile-card-content-title">
          {title}
        </div>
        <div className="info-pet-profile-card-content-des">
          {des}
        </div>
      </div>
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CardInfoPetProfile);