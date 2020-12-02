import React from "react";
import { connect } from "react-redux";
import {
  getUserCompany
} from "../../store/reducers/company/selector";

const CompanyInfo = ({
  userCompany
}) => {
  return (
    <div className="edit-company-info-container">
      vacio
      {userCompany.name}
    </div>
  )
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    userCompany: getUserCompany(state)
  };
};
export default connect(mapStateToProps)(CompanyInfo);