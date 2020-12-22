// Modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Acciones
import { updatePetProfileAction } from "../../../../store/reducers/user/actions";

const CardMainSectionProfile = ({
  petName,
  profileImage,
  updatePetProfile,
  isLost,
  isPetProfile,
  isFinished,
  canChangeProfile,

  isFromCompany,
}) => {
  const urlNameFunction = (petNameParametro) => {
    const newString = petNameParametro.replace(/ /g, "-");
    return newString;
  };
  const updateReduxPet = () => {
    updatePetProfile({
      selectedState: "name",
      state: petName,
    });
    updatePetProfile({
      selectedState: "petProfileImage",
      state: profileImage,
    });
    updatePetProfile({
      selectedState: "images",
      state: [],
    });
    updatePetProfile({
      selectedState: "isPetFromCompany",
      state: isFromCompany,
    });
    updatePetProfile({
      selectedState: "isLost",
      state: isPetProfile ? isLost : false,
    });
    updatePetProfile({
      selectedState: "isPetProfile",
      state: isPetProfile,
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
    handlePointerCoarse();
    const img = document.querySelector(".card-main-section-profile-profiles");
    var estilos = window.getComputedStyle(img, null);
    var ancho = estilos.getPropertyValue("width");
    var ancho90Width = parseInt(ancho) * 0.8;
    setWidthImage(ancho90Width);
  };

  const handlePointerCoarse = () => {
    try {
      let element = document.querySelector(
        ".card-main-section-profile-content-svg-2"
      );
      let elementStyle = window.getComputedStyle(element);
      let elementColor = elementStyle.getPropertyValue("background-color");
      if (elementColor === "rgb(254, 254, 254)") {
        setIsCoarse(true);
        setDatos(true);
      } else {
        setIsCoarse(false);
      }
    } catch {}
  };

  const [datos, setDatos] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);
  return (
    <div
      className="col-lg-3 col-md-4 col-sm-6 card-main-section-profile card-main-section-profile-profiles"
      onClick={updateReduxPet}
    >
      <Link
        to={`${
          isPetProfile
            ? `/perfil/mascota/${urlNameFunction(petName)}`
            : `${
                isCoarse
                  ? `/perro/encontrado/${urlNameFunction(petName)}`
                  : datos
                  ? "/registro/mascota/encontrada"
                  : `/perro/encontrado/${urlNameFunction(petName)}`
              }`
        }`}
      >
        <div
          className="card-main-section-profile-content"
          style={{
            backgroundColor: !canChangeProfile
              ? "rgb(45, 45, 45)"
              : "rgba(30, 30, 30, 1)",
            color: "#FFF",
          }}
        >
          {!canChangeProfile ? (
            <svg
              style={{
                width: "35px",
                height: "35px",
                fill: "#FFF",
                position: "absolute",
                zIndex: "1",
                top: "2.5px",
                right: "0px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" />
            </svg>
          ) : (
            <></>
          )}
          {isPetProfile ? (
            <></>
          ) : (
            <>
              <div
                className="card-main-section-profile-content-svg"
                onMouseOver={() => {
                  setDatos(true);
                }}
                onMouseOut={() => {
                  setDatos(false);
                }}
              >
                {isFinished === 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" />
                  </svg>
                ) : isFinished === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z" />
                  </svg>
                )}
              </div>
              <div
                className={`card-main-section-profile-content-svg-2 ${
                  datos ? "open" : "close"
                }`}
                onMouseOver={() => {
                  setDatos(true);
                }}
                onMouseOut={() => {
                  setDatos(false);
                }}
              >
                {isFinished === 1
                  ? "Listo para registrarse"
                  : isFinished === 0
                  ? "Faltan datos por llenar"
                  : "Registrado"}
              </div>
            </>
          )}
          <div
            style={{
              backgroundImage: "url(" + profileImage + ")",
              width: "90%",
              height: widthImg,
            }}
            className={`img-profile-thumbnail`}
          ></div>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              paddingLeft: isPetProfile ? "10px" : "40px",
              paddingRight: isPetProfile ? "10px" : "40px",
            }}
          >
            {petName}
          </div>
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
    updatePetProfile: (data) => {
      dispatch(updatePetProfileAction(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardMainSectionProfile);
