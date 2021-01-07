// Modulos
import { useEffect, useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Acciones
import { updateTopMenuBarActivatedAction } from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";
import HeaderPrivacyPage from "../components/PrivacyPolicyComponents/HeaderPrivacyPage";
import PrivacyPolicyText from "../components/PrivacyPolicyComponents/PrivacyPolicyText";

const Politicas = ({ updateTopMenuBarActivated }) => {
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
        <title>{`${APP_NAME} - Políticas de Privacidad`}</title>
        <meta
          name="description"
          content={`Políticas de Privacidad de ${APP_NAME}`}
        />
      </Helmet>
      <div className={`privacy-page text-center space-footer-bottom`}>
        <HeaderPrivacyPage></HeaderPrivacyPage>
        <PrivacyPolicyText></PrivacyPolicyText>
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
export default connect(mapStateToProps, mapDispatchToProps)(Politicas);
