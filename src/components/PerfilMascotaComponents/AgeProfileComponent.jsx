import React from "react";
import { connect } from "react-redux";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

import ColorProfile from "./ColorProfile";

const AgeProfileComponent = ({
  petProfile
}) => {

  return (
    <div className="age-color-profile-wrapper">
      <div className={`age-profile`}>
        <div className="age-profile-title">
          Edad
        </div>
        <div className="row d-flex justify-center align-items-center age-profile-row">
          <div className="col-lg-3 col-md-4 col-sm-6 age-profile-column" title="Cachorro">
            <svg className="age-profile-svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" /></svg>
            <div>Cachorro</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 age-profile-column" title="Jóven">
            <svg className="age-profile-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" /></svg>
            <div>Jóven</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 age-profile-column" title="Adulto">
            <svg className="age-profile-svg-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" /></svg>
            <div>Adulto</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 age-profile-column" title="Anciano">
            <svg className="age-profile-svg-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z" /></svg>
            <div>Anciano</div>
          </div>
        </div>
        <div className="age-profile-result">
          {petProfile.size}
        </div>
      </div>
      <ColorProfile></ColorProfile>
    </div>
  );
};

// Clases de REDUX

const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

// Acciones de REDUX
/*const mapDispatchToProps = (dispatch) => {
  return {};
};*/
export default connect(mapStateToProps)(AgeProfileComponent);