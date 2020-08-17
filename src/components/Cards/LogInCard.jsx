// MODULES
import { connect } from "react-redux";
import { APP_NAME } from "../../config";

// COMPONENTS
import ButtonLogIn from "../Buttons/ButtonLogIn";

// Acciones
import {
  updateLoginAction
} from "../../store/reducers/user/actions";

const LogInCard = ({
  logInActivated,
  updateLogin,
  logInFirstAnimation
}) => {
  const closeLogIn = () => {
    updateLogin(false);
  };
  return (
    <div className={`card-log-in ${logInActivated ? ("open") : ("")} ${logInFirstAnimation ? ("first") : ("")}`}>
      <div className="card-log-in-inner text-center">
        <div className="text-right">
          <svg className="card-log-in-inner-svg" onClick={closeLogIn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
        </div>
        <h3 style={{ fontSize: "1.8rem", color: "#FFFFFF" }}>Iniciar Sesión en</h3>
        <h3 className="mt-2" style={{ fontSize: "1.8rem", color: "#FFFFFF" }}>{APP_NAME}</h3>
        <section className="container mt-4 mb-4 px-3" style={{ color: "#F0F0F0" }}>
          Inicia sesión para poder crear perfiles y disfrutar de todos los servicios gratuitos de {APP_NAME}.
          </section>
        <div className="d-flex justify-content-center align-items-center mt-3" style={{ flexDirection: "column" }}>
          <ButtonLogIn click={closeLogIn} color="#FFFFFF" name="Google">
            <svg width="30" height="30" fill="#0069F6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
          </ButtonLogIn>
          <ButtonLogIn click={closeLogIn} color="#0069F6" name="Facebook">
            <svg width="30" height="30" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
          </ButtonLogIn>
        </div>
      </div>
    </div>
  );
};
// Clases de REDUX
const mapStateToProps = (state) => {
  return {};
};
// Las acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: (data) => { dispatch(updateLoginAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogInCard);