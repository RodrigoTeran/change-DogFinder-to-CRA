import React from "react";

// COMPONENTS
import CardHeaderBuyPage from "./Cards/CardHeaderBuyPage";

const HeaderBuyPage = () => {
  return (
    <div className="purchase-page-header">
      <div className="purchase-page-header-h1">
        La plataforma definitiva para encontrar a tu mascota
      </div>
      <div className="purchase-page-header-card-container">
        <CardHeaderBuyPage></CardHeaderBuyPage>
      </div>
    </div>
  )
};
export default HeaderBuyPage;