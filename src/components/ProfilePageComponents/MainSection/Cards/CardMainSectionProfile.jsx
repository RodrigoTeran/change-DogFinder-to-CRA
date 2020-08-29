// Modules
import React from "react";

const CardMainSectionProfile = ({
  petName
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 card-main-section-profile">
      <div className="card-main-section-profile-content">
        {petName}
      </div>
    </div>
  );
};
export default CardMainSectionProfile;