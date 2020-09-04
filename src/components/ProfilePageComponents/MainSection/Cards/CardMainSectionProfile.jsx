// Modules
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getWebp } from "../../../../store/reducers/user/selector";

// Acciones
import {
  updatePetProfileAction
} from "../../../../store/reducers/user/actions";

const CardMainSectionProfile = ({
  petName,
  profileImage,
  updatePetProfile
}) => {
  const urlNameFunction = (petNameParametro) => {
    const newString = petNameParametro.replace(/ /g, "-");
    return newString;
  };
  const updateReduxPet = () => {
    updatePetProfile({
      name: petName,
      petProfileImage: profileImage,
      images: []
    });
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 card-main-section-profile" onClick={updateReduxPet}>
      <Link to={`/perfil/mascota/${urlNameFunction(petName)}`}>
        <div className="card-main-section-profile-content">
          <img src={`/Images/${profileImage}.${getWebp ? ("webp") : ("png")}`} alt="Perfil" />
          <div style={{
            marginTop: "20px",
            marginBottom: "20px"
          }}>{petName}</div>
        </div>
      </Link>
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
    updatePetProfile: (data) => { dispatch(updatePetProfileAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardMainSectionProfile);