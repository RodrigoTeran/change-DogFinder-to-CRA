import React from "react";

const CardHeaderBuyPage = () => {
  return (
    <div className="purchase-page-header-card">
      <div className="purchase-page-header-card-title">Servicios:</div>
      <div className="row purchase-page-header-card-row">
        <div className="purchase-page-header-card-free col-lg-4 col-md-6">
          <div className="purchase-page-header-card-free-h1">
            Gratuitos (solo con iniciar sesión):
          </div>
          <div className="purchase-page-header-card-free-element">
            uso del mapa
          </div>
          <div className="purchase-page-header-card-free-element">
            poder registrar inlimitadamente a perros encontrados
          </div>
          <div className="purchase-page-header-card-free-element">
            interactuar con notificaciones
          </div>
          <div className="purchase-page-header-card-free-element">
            crear empresa
          </div>
        </div>
        <div className={`purchase-page-header-card-premium col-lg-4 col-md-6`}>
          <div className="purchase-page-header-card-premium-h1">
            Premium $150, IVA incluido:
          </div>
          <div className="purchase-page-header-card-premium-element">
            todo lo que ofrecemos en el servicio gratuito
          </div>
          <div className="purchase-page-header-card-premium-element">
            búsqueda de tu mascota con inteligencia artificial
          </div>
          <div className="purchase-page-header-card-premium-element">
            poder registrar su mascota perdida (se podrá poner en contacto con
            el usuario de la plataforma que encontró a su mascota)
          </div>
          <div className="purchase-page-header-card-premium-element">
            poder crear perfiles inlimitados de mascotas perdidas
          </div>
          <div className="purchase-page-header-card-premium-element">
            uso del mapa (tu mascota se anuncia en caso de extraviarse)
          </div>
          <div className="purchase-page-header-card-premium-element">
            publicaciones en redes sociales (en caso de extraviarse tu mascota)
          </div>
          <div className="purchase-page-header-card-premium-element">
            contactos con organizaciones (tu mascota se reporta perdida en caso
            de extraviarse)
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardHeaderBuyPage;
