import React from "react";

const CardHeaderBuyPage = () => {
  return (
    <div className="purchase-page-header-card">
      <div className="purchase-page-header-card-title">
        Servicios:
      </div>
      <div className="row purchase-page-header-card-row">
        <div className="purchase-page-header-card-free col-lg-4 col-md-6">
          <div className="purchase-page-header-card-free-h1">
            Gratuitos (solo con iniciar sesión):
          </div>
          <div className="purchase-page-header-card-free-element">
            uso del mapa (solo ver la información)
          </div>
          <div className="purchase-page-header-card-free-element">
            adopción (con uso de la app de mensajes)
          </div>
          <div className="purchase-page-header-card-free-element">
            poder registrar un perro que encontró (se podrá poner en contacto con su dueño con el uso de la app de mensajes)
          </div>          
        </div>
        <div className="purchase-page-header-card-premium col-lg-4 col-md-6">
          <div className="purchase-page-header-card-premium-h1">
            Premium ($100 un perfil):
          </div>
          <div className="purchase-page-header-card-premium-element">
            búsqueda de tu mascota con inteligencia artificial
          </div>
          <div className="purchase-page-header-card-premium-element">
            poder registrar su mascota perdida (se podrá poner en contacto con el usuario de la plataforma que encontró a su mascota con el uso de la app de mensajes)
          </div>          
          <div className="purchase-page-header-card-premium-element">
            uso del mapa (tu mascota se anuncia en caso de extraviarse)
          </div>
          <div className="purchase-page-header-card-premium-element">
            publicaciones en redes sociales (en caso de extraviarse tu mascota)
          </div>
          <div className="purchase-page-header-card-premium-element">
            búsqueda por medio de bots en todo el Internet (en caso de extraviarse tu mascota)
          </div>                    
          <div className="purchase-page-header-card-premium-element">
            contactos con organizaciones responsables (tu mascota se reporta perdida en caso de extraviarse)
          </div>            
        </div>
      </div>
    </div>
  )
};
export default CardHeaderBuyPage;