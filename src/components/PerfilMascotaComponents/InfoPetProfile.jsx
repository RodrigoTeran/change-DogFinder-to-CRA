import React from "react";
import { connect } from "react-redux";

const InfoPetProfile = ({

}) => {

  return (
    <>
      <div className={`info-pet-profile`}>
        <div className={`info-pet-profile-input`}><span>Raza:</span> Border Collie
        </div>
        <div className={`info-pet-profile-input`}><span>Lugar de residencia:</span> México, Querétaro, Querétaro. Dolore del Río 202 / A int. 16. Cp: 76180
        </div>
        <div className={`info-pet-profile-input`}><span>Edad:</span> 3 meses
        </div>
      </div>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(InfoPetProfile);