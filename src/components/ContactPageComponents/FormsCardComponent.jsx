import React, { useState } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import { connect } from "react-redux";
import {
  updateLoginAction,
  updateLogInFirstAnimationAction,
} from "../../store/reducers/user/actions";
import { getAuth } from "../../store/reducers/user/selector";
import { checkFuckingHack, checkHackInBlankSpaces } from "../../utils/hacking";
import {
  updateSuccessMessagesComponentAction,
  updateFailureMessagesComponentAction,
} from "../../store/reducers/layout/actions";
import { contactCompany } from "../../routes/contact";
const FormsCardComponent = ({
  whereItCameFrom,
  animationScreenOpen,
  delayAnimation,
  colAmount,
  updateLogInFirstAnimation,
  updateLogin,

  auth,
  updateSuccessMessagesComponent,
  updateFailureMessagesComponent,
}) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const iniciarSesion = () => {
    updateLogInFirstAnimation(true);
    updateLogin(true);
  };
  const sendMessage = () => {
    const hackName = checkFuckingHack(nameInput, []);
    const hackEmail = checkFuckingHack(emailInput, ["@", "."]);
    const hackMessage = checkFuckingHack(messageInput, [
      "/",
      ".",
      "_",
      "-",
      ":",
      ",",
      ";",
      '"',
      "(",
      ")",
      "@",
      "#",
    ]);

    const hackNameSpaces = checkHackInBlankSpaces(nameInput);
    const hackEmailSpaces = checkHackInBlankSpaces(emailInput);
    const hackMessageSpaces = checkHackInBlankSpaces(messageInput);

    if (hackName) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Por favor, pon caractéres válidos en el nombre.",
      });
    } else if (hackEmail) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: `Por favor, pon caractéres válidos en el correo a excepción por el @ y el "."`,
      });
    } else if (hackMessage) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Por favor, pon caractéres válidos en el mensaje.",
      });
    } else if (hackNameSpaces) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description:
          "Por favor, no dejes espacios en blanco innecesarios en el nombre.",
      });
    } else if (hackEmailSpaces) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description:
          "Por favor, no dejes espacios en blanco innecesarios en el correo.",
      });
    } else if (hackMessageSpaces) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description:
          "Por favor, no dejes espacios en blanco innecesarios en el mensaje.",
      });
    } else if (nameInput.length === 0) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Falta el nombre.",
      });
    } else if (emailInput.length === 0) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Falta el correo.",
      });
    } else if (messageInput.length === 0) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Falta el mensaje.",
      });
    } else {
      // POR FIN
      var theme = "";
      if (whereItCameFrom === 1) {
        theme = "Solicitud de caracteristicas";
      } else if (whereItCameFrom === 2) {
        theme = "Preguntas de negocios";
      } else if (whereItCameFrom === 3) {
        theme = "Mapa errores";
      } else if (whereItCameFrom === 4) {
        theme = "Notificaciones errores";
      } else if (whereItCameFrom === 5) {
        theme = "Pagos errores";
      } else if (whereItCameFrom === 6) {
        theme = "Problemas comunes errores";
      } else if (whereItCameFrom === 7) {
        theme = "Error misceláneo";
      } else {
        theme = "Error de seguridad";
      }

      const body = {
        theme,
        name: nameInput,
        email: emailInput,
        message: messageInput,
      };
      fetch(contactCompany, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status === "true") {
            updateSuccessMessagesComponent({
              state: true,
              title: "Acción realizada con éxito",
              description: "Se envió el mensaje con éxito",
            });
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "No se pudo mandar el correo.",
            });
          }
        });
    }
  };
  return (
    <div
      style={{
        transitionDelay: delayAnimation,
      }}
      className={`faqComponent-forms-card ${
        animationScreenOpen ? "open" : ""
      } ${colAmount}`}
    >
      <div className={`faqComponent-forms-card-inner`}>
        {auth ? (
          <></>
        ) : (
          <div className={`faqComponent-forms-card-inner-wall`}>
            <div
              className={`faqComponent-forms-card-inner-wall-special`}
              onClick={iniciarSesion}
            >
              Inicia sesión
            </div>
            <div>para contactarnos</div>
          </div>
        )}
        <div className={`faqComponent-forms-card-inner-row-1`}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
            </svg>
          </div>
          <div>Contáctanos</div>
        </div>
        <div className={`faqComponent-forms-card-inner-row-2`}>
          <div>
            {whereItCameFrom === 1
              ? "Por favor usa este medio solo para contarnos sobre nuevas características o mejoras que quisieras ver en la plataforma."
              : whereItCameFrom === 2
              ? "Por favor usa este medio solo para establecer negocios con nuestra plataforma. No respondemos a otra cosa."
              : whereItCameFrom === 3
              ? "Por favor usa este medio solo para contarnos sobre errores relacionados al mapa. No respondemos a otra cosa."
              : whereItCameFrom === 4
              ? "Por favor usa este medio solo para contarnos sobre errores relacionados a las notificaciones. No respondemos a otra cosa."
              : whereItCameFrom === 5
              ? "Por favor usa este medio solo para contarnos sobre errores relacionados a los pagos. No respondemos a otra cosa."
              : whereItCameFrom === 6
              ? "Por favor usa este medio solo para contarnos sobre errores generales en la plataforma. No respondemos a otra cosa."
              : whereItCameFrom === 7
              ? "Por favor usa este medio solo para contarnos sobre errores o bugs que hay en la plataforma. Por favor ser lo más descriptivo posible. Antes de reportar un bug, favor de revisar nuestras preguntas frecuentes."
              : "Por favor usa este medio solo para contarnos sobre errores de seguridad graves en la plataforma. Por favor ser lo más descriptivo posible. Dependiendo del error, puedes recibir una recompensa monetaria."}
          </div>
          {whereItCameFrom === 3 ||
          whereItCameFrom === 4 ||
          whereItCameFrom === 5 ||
          whereItCameFrom === 6 ? (
            <div className={`faqComponent-forms-card-inner-row-2-note`}>
              Nota: Primero checa nuestras preguntas frecuentes antes de
              contactarnos sobre un error.
            </div>
          ) : (
            <></>
          )}
          <div className={`faqComponent-forms-card-inner-row-2-note`}>
            Nota: Debido a que podemos estar llenos de mensajes no garantizamos
            una respuesta inmediata. Pero es seguro que responderemos lo más
            pronto posible.
          </div>
          <div className={`faqComponent-forms-card-inner-row-2-inputs`}>
            <div className={`faqComponent-forms-card-inner-row-2-inputs-name`}>
              <div>Nombre:</div>
              <div>
                <input
                  onChange={(e) => {
                    setNameInput(e.target.value);
                  }}
                  type="text"
                  placeholder="Sheldon Cooper"
                />
              </div>
            </div>
            <div className={`faqComponent-forms-card-inner-row-2-inputs-email`}>
              <div>Correo electrónico:</div>
              <div>
                <input
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                  }}
                  type="text"
                  placeholder="sheldoncooper@gmail.com"
                />
              </div>
            </div>
            <div className={`faqComponent-forms-card-inner-row-2-inputs-text`}>
              <div>Mensaje:</div>
              <div>
                <textarea
                  onChange={(e) => {
                    setMessageInput(e.target.value);
                  }}
                  maxLength={10000}
                  rows="10"
                  placeholder="Bazinga..."
                ></textarea>
              </div>
            </div>
            <div
              className={`faqComponent-forms-card-inner-row-2-inputs-button`}
            >
              <ButtonWhiteRectangle
                text="Enviar"
                width="100%"
                height="50px"
                clickFunctionAnotherOne={() => {
                  sendMessage();
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                </svg>
              </ButtonWhiteRectangle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: getAuth(state),
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormsCardComponent);

// whereItCameFrom === 1
//   ? "Solicitud de caracteristicas"
//   : whereItCameFrom === 2
//   ? "Preguntas de negocios"
//   : whereItCameFrom === 3
//   ? "Mapa errores"
//   : whereItCameFrom === 4
//   ? "Notificaciones errores"
//   : whereItCameFrom === 5
//   ? "Pagos errores"
//   : whereItCameFrom === 6
//   ? "Problemas comunes errores"
//   : whereItCameFrom === 7
//   ? "Error misceláneo"
//   : "Error de seguridad";
