// Modulos
import { Link } from "react-router-dom";
// Modules
import React from "react";

const FooterLayout = ({ style }) => {
  return (
    <footer className={`${style === "without-absolute" ? ("footer-layout") : ("footer-layout-other-pages")}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/contactanos">
                <a className="link-after-effect" title="Contáctanos">Contáctanos</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/preguntas">
                <a className="link-after-effect" title="Preguntas frecuentes">Preguntas frecuentes</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/terminos">
                <a className="link-after-effect" title="Terminos y condiciones">Terminos y condiciones</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="container-link-footer-layout">
              <Link to="/politicas">
                <a className="link-after-effect" title="Políticas de privacidad">Políticas de privacidad</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterLayout;