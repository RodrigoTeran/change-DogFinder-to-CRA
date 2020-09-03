// Modules
import React from "react";
import { Link } from "react-router-dom";

import { getWebp } from "../../../../store/reducers/user/selector";

const CardMainSectionProfile = ({
  petName,
  profileImage
}) => {
  const urlNameFunction = (petNameParametro) => {
    const newString = petNameParametro.replace(/ /g, "-");
    return newString;
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 card-main-section-profile">
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
export default CardMainSectionProfile;