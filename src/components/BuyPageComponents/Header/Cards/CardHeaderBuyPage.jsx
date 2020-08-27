import React from "react";
import { APP_NAME } from "../../../../utils/config";

const CardHeaderBuyPage = () => {
  return (
    <div className="purchase-page-header-card">
      <div className="purchase-page-header-card-h1">
        Un perfil de {APP_NAME}
      </div>
      <div className="purchase-page-header-card-precio">
        $100
      </div>
      <div className="purchase-page-header-card-precio-service">
        Servicio de por vida
      </div>            
    </div>
  )
};
export default CardHeaderBuyPage;