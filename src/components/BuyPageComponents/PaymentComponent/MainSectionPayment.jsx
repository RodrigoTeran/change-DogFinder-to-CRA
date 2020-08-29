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
  const [keyInput, setKeyInput] = useState(true);
  const [email, setEmail] = useState("a01704108@itesm.mx");
  const getTop = (component) => {	// Función que calcula la distancia que existe de un componente y hasta arriba de la página
    return (parseInt(document.querySelector(component).getBoundingClientRect().top + document.scrollingElement.scrollTop));
  };
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
      /*
      Posibles status:
      (No user) no hay usuario... no auth
      (Success) se mando el correo con la key    
      */
      if (data.status === "Success") {
        // Poner contenedor email
        setEmail(data.email);
        setKeyInput(true);
        window.scroll({ top: getTop(".input-key-pay"), left: 0, behavior: 'smooth' }); // Movemos el scroll para que cheque el input
      } else {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "Se ha producido un error con la compra. Vuelva a intentar.",
        });
        setKeyInput(false);
      };
      // setRedirectPaymentSuccess(true);
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
            <div>
              {keyInput ? (
                <>
                  <div className="input-key-pay">
                    <div className="input-key-pay-h1">
                      Introduzca la clave que te mandamos a {email}
                    </div>
                    <div>
                    <input id="input-key-pay" maxLength="10" className="input-key-pay-input" type="text" />
                      <button className="input-key-pay-button">Enviar</button>
                    </div>
                  </div>
                </>
              ) : (<></>)}
            </div>
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