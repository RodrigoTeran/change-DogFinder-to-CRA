// Modulos
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import React from "react";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Acciones
import { updateTopMenuBarActivatedAction } from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";
import HeaderLegalPage from "../components/LegalStuffComponents/HeaderLegalPage";
import LegalText from "../components/LegalStuffComponents/LegalText";

const Terminos = ({ updateTopMenuBarActivated }) => {
  // -----------------------Hooks-----------------------
  const [firstScroll, setFirstScroll] = useState(false);
  useEffect(() => {
    updateTopMenuBarActivated(false); // Para que el topMenuBar no este con color
  });

  useEffect(() => {
    if (!firstScroll) {
      if (document.scrollingElement.scrollTop > 0) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        }); // Movemos el scroll tantito para que el TopMenuBar se actualize
      } else {
        window.scroll({
          top: document.scrollingElement.scrollTop + 1,
          left: 0,
          behavior: "smooth",
        }); // Movemos el scroll tantito para que el TopMenuBar se actualize
      }
      setFirstScroll(true);
    }
    // poner estado...
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstScroll]);

  const handleScroll = () => {
    if (document.scrollingElement.scrollTop >= 400) {
      updateTopMenuBarActivated(true);
    } else {
      updateTopMenuBarActivated(false); // Para que el topMenuBar no este con color
    }
  };
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Términos y Condiciones`}</title>
        <meta
          name="description"
          content={`Términos y condiciones de ${APP_NAME}`}
        />
      </Helmet>
      <div className={`terms-page text-center space-footer-bottom`}>
        <HeaderLegalPage></HeaderLegalPage>
        <LegalText></LegalText>
      </div>
      <FooterLayout styleForm="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => {
      dispatch(updateTopMenuBarActivatedAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Terminos);
