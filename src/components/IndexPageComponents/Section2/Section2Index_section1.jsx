// COMPONENTS
import CardSection2Section1Index from "./Cards/CardSection2Section1Index";
// Modules
import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../../store/reducers/user/selector";
import {
  updateLogInFirstAnimationAction,
  updateLoginAction,
} from "../../../store/reducers/user/actions";

const Section2Index_section1 = ({
  auth,
  updateLogInFirstAnimation,
  updateLogin,
}) => {
  const iniciarSesion = () => {
    updateLogInFirstAnimation(true);
    updateLogin(true);
  };
  return (
    <div className="container text-center">
      <svg
        className="icon-header-section-1-index"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
      </svg>
      <h3 className="title-section2-section2-index">
        USOS DE NUESTRA PLATAFORMA
      </h3>
      <div className="row justify-content-around" style={{ marginTop: "70px" }}>
        <CardSection2Section1Index
          id="card-index-section-2-section-1-1"
          number="1"
          title="ENCONTRÉ A UN PERRO, PERO NO SÉ SI ESTÁ PERDIDO"
          description="Si te llegas a encontrar a un perro en la calle, pero no
           estas seguro si está perdido, entonces puedes checar nuestro mapa en tiempo real para saber cuáles son los perros que estan perdidos 
           por tu localización."
          button="Mapa de tu zona"
          clickToLink="/mapa"
        >
          <svg
            width="50px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
        </CardSection2Section1Index>
        <CardSection2Section1Index
          id="card-index-section-2-section-1-2"
          number="2"
          title="SE PERDIÓ MI PERRO"
          description="Si llegas a perder a tu perro, puedes crear un 
          perfil de tu mascota y actualizarlo a estado de “perdido”. De esta manera nuestra inteligencia artificial va a 
          buscar en nuestra plataforma si alguien ya halló a tu mascota."
          button="Perfil"
          clickToLink={auth ? "/perfil" : undefined}
          clickFunction={() => {
            iniciarSesion();
          }}
        >
          <svg
            width="50px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z" />
          </svg>
        </CardSection2Section1Index>
        <CardSection2Section1Index
          id="card-index-section-2-section-1-3"
          number="3"
          title="ENCONTRÉ A UN PERRO PERDIDO"
          description="Si encontraste a un perro, sube unas fotos de la
           mascota a nuestro espacio de mascotas rescatadas, y así si el dueño ya reportó su desaparición en nuestra aplicación, 
           te vas a poder poner en contacto con su dueño."
          button="Perros rescatados"
          clickToLink={auth ? "/registro/mascota/encontrada" : undefined}
          clickFunction={() => {
            iniciarSesion();
          }}
        >
          <svg
            width="50px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
        </CardSection2Section1Index>
      </div>
    </div>
  );
};
// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    auth: getAuth(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: (data) => {
      dispatch(updateLoginAction(data));
    },
    updateLogInFirstAnimation: (data) => {
      dispatch(updateLogInFirstAnimationAction(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section2Index_section1);
