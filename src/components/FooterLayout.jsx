// Modulos
import { Link } from "react-router-dom";
// Modules
import React from "react";

const FooterLayout = ({ styleForm }) => {
  return (
    <footer className={`${styleForm === "without-absolute" ? ("footer-layout") : ("footer-layout-other-pages")}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/contactanos" className="link-after-effect" title="Contáctanos">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/preguntas" className="link-after-effect" title="Preguntas frecuentes">
                Preguntas frecuentes
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/terminos" className="link-after-effect" title="Terminos y condiciones">
                Términos y condiciones
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/politicas" className="link-after-effect" title="Políticas de privacidad">
                Políticas de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterLayout;