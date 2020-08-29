import React, { useState } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Redirect } from "react-router-dom";
// Selectores
import {
  getAuth
} from "../../../store/reducers/user/selector";

import { APP_NAME, STRIPE_KEY } from "../../../utils/config";

// Routes
import { postPayment } from "../../../routes/index";

// Acciones
import {
  updateLogInFirstAnimationAction,
  updateLoginAction
} from "../../../store/reducers/user/actions";
import {
  updateSuccessMessagesComponentAction,
  updateFailureMessagesComponentAction
} from "../../../store/reducers/layout/actions";

import ButtonWhiteRectangle from "../../Buttons/ButtonWhiteRectangle";

const MainSectionPayment = ({
  auth,
  updateLogin,
  updateLogInFirstAnimation,
  updateSuccessMessagesComponent,
  updateFailureMessagesComponent
}) => {
  const product = {
    name: `Perfil de ${APP_NAME}`,
    price: 100,
    productBy: `${APP_NAME}`
  };
  const iniciarSesion = () => {
    updateLogInFirstAnimation(true);
    updateLogin(true);
  };
  const [redirectPaymentSuccess, setRedirectPaymentSuccess] = useState(false);
  const makePayment = token => {
    const body = {
      token,
      product
    };
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "token": localStorage.getItem("token")
    };
    return fetch(postPayment, {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: JSON.stringify(body)
    }).then(res => {
      return res.json();
    }).then(data => {
      if (data.status === "Success") {
        updateSuccessMessagesComponent({
          state: true,
          title: "Pago",
          description: "Se ha realizado el pago con éxito",
        });
        setRedirectPaymentSuccess(true);
      } else if (data.status === "Email") {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "El correo electrónico de la compra no coincide con el de la cuenta de la sesión actual",
        });
      } else if (data.status === "Failure") {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "Error con el pago",
        });
      };
    });
  };
  return (
    <div className="purchase-page-payment">
      {redirectPaymentSuccess ? (<Redirect to="/perfil"></Redirect>) : (<></>)}
      <svg className="icon-header-section-1-index" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" /></svg>
      <div>
        {auth ? (
          <>
            <StripeCheckout
              stripeKey={STRIPE_KEY}
              token={makePayment}
              name={`Compra de un perfil`}
              amount={product.price * 100}
              currency="MXN"
            >
              <ButtonWhiteRectangle text={`Comprar un perfil por $${product.price}`}
                width="275px"
                height="50px"
                mt="mt-0"
                noClick={true}
              ></ButtonWhiteRectangle>
            </StripeCheckout>
          </>
        ) : (
            <>
              <div className="purchase-page-payment-noauth">
                Inicia Sesión para poder comprar un perfil
            </div>
              <ButtonWhiteRectangle text="Iniciar Sesión"
                width="175px"
                height="50px"
                clickFunctionAnotherOne={iniciarSesion}
              ></ButtonWhiteRectangle>
            </>
          )}
      </div>
    </div>
  )
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    auth: getAuth(state),
  };
};
// Las acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: (data) => { dispatch(updateLoginAction(data)) },
    updateLogInFirstAnimation: (data) => { dispatch(updateLogInFirstAnimationAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainSectionPayment);