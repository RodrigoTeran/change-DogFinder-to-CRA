// Modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const [widthImg, setWidthImage] = useState("0px");
  const handleResize = () => {
    const img = document.querySelector(".card-main-section-profile-profiles");
    var estilos = window.getComputedStyle(img, null);
    var ancho = estilos.getPropertyValue("width");
    var ancho90Width = parseInt(ancho) * .8;
    setWidthImage(ancho90Width);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 card-main-section-profile card-main-section-profile-profiles" onClick={updateReduxPet}>
      <Link to={`/perfil/mascota/${urlNameFunction(petName)}`}>
        <div className="card-main-section-profile-content">
          <div style={{
            backgroundImage: "url(" + profileImage + ")",
            width: "90%",
            height: widthImg
          }}
            className={`img-profile-thumbnail`}>
          </div>
          <div style={{
            marginTop: "20px",
            marginBottom: "20px",
            paddingLeft: "10px",
            paddingRight: "10px"
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