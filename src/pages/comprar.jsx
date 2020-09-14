// Modulos
import { useEffect, useState } from "react";
import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Selectores
import { getUsername, getPremium } from "../store/reducers/user/selector";

// Acciones
import {
  updateTopMenuBarActivatedAction
} from "../store/reducers/layout/actions";

// -----------------------Componentes-----------------------
import FooterLayout from "../components/FooterLayout";
import HeaderBuyPage from "../components/BuyPageComponents/Header/HeaderBuyPage";
import MainSectionPayment from "../components/BuyPageComponents/PaymentComponent/MainSectionPayment";

const Purchase = ({
  username,
  updateTopMenuBarActivated,
  premium
}) => {
  // -----------------------Hooks-----------------------
  const [firstScroll, setFirstScroll] = useState(false);
  useEffect(() => {
    if (!firstScroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      setFirstScroll(true);
    };
    updateTopMenuBarActivated(true); // Para que el topMenuBar siempre esté con color
  });
  // -----------------------Funciones-----------------------
  return (
    <>
      <Helmet>
        <title>{`${APP_NAME} - Comprar`}</title>
        <meta name="description" content={`Comprar perfiles de ${APP_NAME}${username ? (`para ${username}`) : ("")}`} />
      </Helmet>
      <div className={`purchase-page text-center space-footer-bottom`}>
        <HeaderBuyPage></HeaderBuyPage>
        <MainSectionPayment isPremium={premium}></MainSectionPayment>
      </div>
      <FooterLayout styleForm="with-absolute"></FooterLayout>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
    premium: getPremium(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Purchase);