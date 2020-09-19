import React from "react";
import { connect } from "react-redux";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

const PetIsLostController = ({

}) => {

  return (
    <>
      <div className="control-pet-profile-petislost">
        <div className="control-pet-profile-petislost-h1">
          Estado de tu mascota
        </div>
        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-lg-4 col-md-8 col-sm-10" style={{ display: "flex", justifyContent: "center" }}>
            <ButtonWhiteRectangle text="En casa"
              width="100%"
              height="60px"
              green="greenColor"
              clickFunctionAnotherOne={() => { }}
            >
              <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
            </ButtonWhiteRectangle>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10" style={{ display: "flex", justifyContent: "center" }}>
            <ButtonWhiteRectangle text="Perdido"
              width="100%"
              height="60px"
              clickFunctionAnotherOne={() => { }}
            >
              <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"/></svg>
            </ButtonWhiteRectangle>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PetIsLostController);