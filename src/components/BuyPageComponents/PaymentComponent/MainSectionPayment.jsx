import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Selectores
import {
  getAuth,
  getKeyActiveUser,
} from "../../../store/reducers/user/selector";

import { APP_NAME } from "../../../utils/config";
import Stripe from "../Stripe";

// Routes
import {
  postPayment,
  postKeyPayment,
  eraseKeyPaymentFromAPI,
  checkDiscountCode,
} from "../../../routes/index";

import { checkFuckingHack } from "../../../utils/hacking";

// Acciones
import {
  updateLogInFirstAnimationAction,
  updateLoginAction,
  updateKeyActiveUserAction,
} from "../../../store/reducers/user/actions";
import {
  updateSuccessMessagesComponentAction,
  updateFailureMessagesComponentAction,
} from "../../../store/reducers/layout/actions";

import ButtonWhiteRectangle from "../../Buttons/ButtonWhiteRectangle";

const MainSectionPayment = ({
  auth,
  updateLogin,
  updateLogInFirstAnimation,
  updateSuccessMessagesComponent,
  updateFailureMessagesComponent,

  updateKeyActiveUser,
  keyActiveUser,
  isPremium,
}) => {
  const [product, setProduct] = useState({
    name: `Perfil de ${APP_NAME}`,
    price: 150,
    productBy: `${APP_NAME}`,
  });
  const changeLocalProductObject = () => {
    setProduct({
      name: `Perfil de ${APP_NAME}`,
      price: 135,
      productBy: `${APP_NAME}`,
    });
  };
  const changeLocalProductObjectBad = () => {
    setProduct({
      name: `Perfil de ${APP_NAME}`,
      price: 150,
      productBy: `${APP_NAME}`,
    });
  };
  const [discountCode, setDiscountCode] = useState(undefined);
  const checkCodeByServer = (code) => {
    setIsLoading2(true);
    const hack = checkFuckingHack(code, []);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Debe de introducir caracteres válidos",
      });
      setIsLoading2(false);
    } else {
      const body = {
        code,
      };
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
      };
      return fetch(checkDiscountCode, {
        method: "POST",
        headers: headers,
        credentials: "include",
        body: JSON.stringify(body),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setIsLoading2(false);
          if (data.status === "true") {
            updateSuccessMessagesComponent({
              state: true,
              title: "Se comprobó el código",
              description:
                "Se comprobó la autenticidad del código de descuento, aportando un 10% de descuento.",
            });
            setDiscountCode(code);
            changeLocalProductObject();
          } else if (data.status === "noExisting") {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description:
                "El código de descuento no existe. Vuelva a intentar.",
            });
            setDiscountCode(undefined);
            changeLocalProductObjectBad();
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description:
                "No se pudo comprobar la autenticidad del código de descuento. Actualiza la página.",
            });
            setDiscountCode(undefined);
            changeLocalProductObjectBad();
          }
        });
    }
  };
  const iniciarSesion = () => {
    updateLogInFirstAnimation(true);
    updateLogin(true);
  };
  const getTop = (component) => {
    // Función que calcula la distancia que existe de un componente y hasta arriba de la página
    return parseInt(
      document.querySelector(component).getBoundingClientRect().top +
        document.scrollingElement.scrollTop
    );
  };
  // ------------------------------------------------- Hacer Pago
  const makePayment = (token) => {
    setIsLoading(true);
    const body = {
      token,
      product,
      discountCode
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: localStorage.getItem("token"),
    };
    return fetch(postPayment, {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data.status === "Success") {
          // Poner contenedor email
          updateKeyActiveUser(data.email);
          window.scroll({
            top: getTop(".input-key-pay-rect") - 110,
            left: 0,
            behavior: "smooth",
          }); // Movemos el scroll para que cheque el input
        } else {
          // No user
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description:
              "Se ha producido un error con la compra. Vuelva a intentar.",
          });
          updateKeyActiveUser(undefined);
        }
      });
  };

  const deleteKeyFromAPI = () => {
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: localStorage.getItem("token"),
    };
    return fetch(eraseKeyPaymentFromAPI, {
      method: "DELETE",
      headers: headers,
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((_data) => {
        setIsLoading(false);
        updateKeyActiveUser(undefined);
      });
  };
  const [valueKey, setValueKey] = useState("");
  const [redirectPaymentSuccess, setRedirectPaymentSuccess] = useState(false);
  const changeInputKey = (e) => {
    setValueKey(e.target.value);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  // ------------------------------------------------- Mandar KEY
  const sendKeyPaymentAPI = () => {
    const hack = checkFuckingHack(valueKey, []);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Debe de introducir caracteres válidos",
      });
    } else {
      setIsLoading(true);
      const body = {
        key: valueKey,
      };
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
      };
      return fetch(postKeyPayment, {
        method: "POST",
        headers: headers,
        credentials: "include",
        body: JSON.stringify(body),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          if (data.status === "Success") {
            // Pago exitoso
            updateSuccessMessagesComponent({
              state: true,
              title: "Pago exitoso",
              description: "Se ha realizado el pago exitosamente.",
            });
            setRedirectPaymentSuccess(true);
            updateKeyActiveUser(undefined);
          } else if (data.status === "Key bad") {
            // Key bad
            updateFailureMessagesComponent({
              state: true,
              title: "Error con la clave",
              description:
                "La clave de acceso ya expiró, o no coincide con ninguna cuenta activa. Vuelva a intentar.",
            });
          } else {
            // Failure
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description:
                "Se ha producido un error con la compra. Vuelva a intentar.",
            });
          }
        });
    }
  };
  return (
    <div className="purchase-page-payment">
      {redirectPaymentSuccess ? <Redirect to="/perfil"></Redirect> : <></>}
      <svg
        className="icon-header-section-1-index"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" />
      </svg>
      <div>
        {auth ? (
          <>
            {isPremium ? (
              <>
                <div className="purchase-page-payment-noauth">
                  Tu cuenta ya es premium
                </div>
                <ButtonWhiteRectangle
                  text="Crear un perfil de mascota"
                  width="275px"
                  height="50px"
                  clickFunction="/perfil"
                ></ButtonWhiteRectangle>
              </>
            ) : (
              <>
                <div className="input-key-pay-rect">
                  {keyActiveUser ? (
                    <>
                      <div className="input-key-pay">
                        <div className="input-key-pay-title">
                          Poner clave para finalizar pago
                        </div>
                        <div className="input-key-pay-h1">
                          Introduzca la clave que mandamos a {keyActiveUser}
                        </div>
                        <div>
                          <input
                            onChange={changeInputKey}
                            maxLength="10"
                            className="input-key-pay-input"
                            type="text"
                          />
                          <button
                            onClick={() => {
                              if (!isLoading) {
                                sendKeyPaymentAPI();
                              }
                            }}
                            className="input-key-pay-button"
                          >
                            Enviar
                          </button>
                        </div>
                        <div className="input-key-pay-h2">
                          Si no le llego el correo vuelva a pagar y asegúrese de
                          poner el correo bien escrito. No se le va a cobrar dos
                          veces. El cargo solo se va a hacer una vez.
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              if (!isLoading) {
                                deleteKeyFromAPI();
                              }
                            }}
                            className="input-key-pay-button"
                          >
                            Volver a pagar
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="purchase-page-payment-title">
                        Pagar una cuenta Premium de por vida
                      </div>
                      <div className="discount-container">
                        <div className="discount-container-h1">
                          Código de descuento
                        </div>
                        <div className="discount-container-input-container">
                          <input
                            type="text"
                            maxLength="15"
                            placeholder="Código de descuento"
                            className="input-discount-code"
                          />
                          <div>
                            <ButtonWhiteRectangle
                              text="Aplicar"
                              width="100px"
                              height="38px"
                              mt="mt-0"
                              backgroundColorRectangle="var(--tertiary-color)"
                              clickFunctionAnotherOne={() => {
                                const code = document.querySelector(
                                  ".input-discount-code"
                                ).value;
                                checkCodeByServer(code);
                              }}
                            ></ButtonWhiteRectangle>
                          </div>
                        </div>
                        <div
                          className={`discount-container-input-container-aplica discount-container-input-container-aplica${
                            discountCode ? "-si" : "-no"
                          }`}
                        >
                          {discountCode ? (
                            <div>Aplicado el 10% de descuento</div>
                          ) : (
                            <div>Actualmente no aplicado</div>
                          )}
                          {discountCode ? (
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                              </svg>
                            </div>
                          ) : (
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 352 512"
                              >
                                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        {isLoading2 ? (
                          <div
                            className="loader-block"
                            style={{
                              paddingTop: "20px",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
                            </svg>
                          </div>
                        ) : (
                          <></>
                        )}
                        <div
                          className="discount-container-h1"
                          style={{ marginTop: "30px", marginBottom: "-20px" }}
                        >
                          Datos de la tarjeta de crédito
                        </div>
                      </div>
                      <Stripe
                        makePayment={makePayment}
                        product={product}
                      ></Stripe>
                      <div className="discount-container-stripe">
                        <div>Nuestro procesador de pago</div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z" />
                          </svg>
                        </div>
                      </div>
                      <div
                        className="discount-container-stripe"
                        style={{ marginTop: "10px", color: "#CCC" }}
                      >
                        *Actualmente no aceptamos PayPal
                      </div>
                    </>
                  )}
                </div>
                {isLoading ? (
                  <div
                    className="loader-block"
                    style={{
                      paddingTop: "80px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
                    </svg>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <div className="purchase-page-payment-noauth">
              Inicia Sesión para poder comprar un perfil
            </div>
            <ButtonWhiteRectangle
              text="Iniciar Sesión"
              width="175px"
              height="50px"
              clickFunctionAnotherOne={iniciarSesion}
            ></ButtonWhiteRectangle>
          </>
        )}
      </div>
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    auth: getAuth(state),
    keyActiveUser: getKeyActiveUser(state),
  };
};
// Las acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: (data) => {
      dispatch(updateLoginAction(data));
    },
    updateLogInFirstAnimation: (data) => {
      dispatch(updateLogInFirstAnimationAction(data));
    },
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
    updateKeyActiveUser: (data) => {
      dispatch(updateKeyActiveUserAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainSectionPayment);
