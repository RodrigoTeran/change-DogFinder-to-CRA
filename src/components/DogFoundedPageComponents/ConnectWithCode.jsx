import React, { useEffect, useState } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import InputTextComponent from "../Inputs/InputTextComponent";
import { createMatchJarvis } from "../../routes/jarvisRoutes";
import { checkFuckingHack, checkHackInBlankSpaces } from "../../utils/hacking";
import { connect } from "react-redux";
import {
  updateSuccessMessagesComponentAction,
  updateFailureMessagesComponentAction,
} from "../../store/reducers/layout/actions";
import { updatePushJarvisInfoAction } from "../../store/reducers/jarvis/actions";

const ConnectWithCode = ({
  isViewOnCompany,
  updateSuccessMessagesComponent,
  updateFailureMessagesComponent,
  updatePushJarvisInfo,
}) => {
  const [isInputActivated, setIsInputActivated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [body, setBody] = useState({
    idProfile: "",
    typeProfile: "Premium",
    siEmpresa: isViewOnCompany,
  });
  useEffect(() => {
    setBody({
      idProfile: body.idProfile,
      typeProfile: "Premium",
      siEmpresa: isViewOnCompany,
    });
  }, [isViewOnCompany]);
  const openInput = () => {
    setIsInputActivated(true);
  };
  const closeInput = () => {
    setIsInputActivated(false);
  };
  const changeInput = (e) => {
    setBody({
      idProfile: e.target.value,
      typeProfile: "Premium",
      siEmpresa: isViewOnCompany,
    });
  };
  const getConnectionWithCode = () => {
    const hack = checkFuckingHack(body.idProfile, []);
    const hackSpaces = checkHackInBlankSpaces(body.idProfile);
    setIsLoading(true);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Por favor pon caracteres válidos.",
      });
      setIsLoading(false);
    } else if (hackSpaces) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Por favor no dejes espacios en blanco innecesarios.",
      });
      setIsLoading(false);
    } else {
      fetch(createMatchJarvis, {
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
          setIsLoading(false);
          if (data.status === "true") {
            updatePushJarvisInfo(data.jarvisInfo);
            updateSuccessMessagesComponent({
              state: true,
              title: "Se conectó",
              description: "Se conectó al perfil exitósamente.",
            });
          } else if (data.status === "mismo") {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "No puedes conectar con tu mismo perfil.",
            });
          } else if (data.status === "yaConRegistro") {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "Ya estas conectado con este perfil.",
            });
          } else if (data.status === "teFaltaCalle") {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description:
                "No puedes contactar a este usuario/empresa ya que no cuentas con tu propia información de contacto... En la página de tu perfil podrás llenar los requerimientos (mail y teléfono). Esto lo hacemos para asegurar que ellos también te puedan contactar.",
            });
          } else if (data.status === "error") {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description:
                "Hubo un error al conectar... Intenta actualizar la página. Probablemente no exista ya ese código",
            });
          }
        });
    }
  };
  return (
    <>
      <div className="connect-with-code-container">
        <div className="connect-with-code-container-mode">
          <div className="connect-with-code-container-mode-h1">
            Modalidad Actual
          </div>
          <div>
            {isViewOnCompany ? "Perfil de Compañía" : "Perfil de Usuario"}
          </div>
        </div>
        <InputTextComponent
          closeInput={closeInput}
          closeStyle={!isInputActivated}
          maxLenghtInput={30}
          onChangeFunction={changeInput}
          clickFunction={() => {
            if (!isLoading) {
              closeInput();
              getConnectionWithCode();
            }
          }}
        >
          <div className="input-layout-text-title">
            Escribe el código de la mascota para conectar con su dueño
          </div>
          <div className="input-layout-text-subtitle">
            Máximo número de caracteres: 30
          </div>
        </InputTextComponent>
        <div className="connect-with-code-container-button">
          <ButtonWhiteRectangle
            backgroundColorRectangle="#000"
            text="Conectar con código"
            clickFunctionAnotherOne={() => {
              openInput();
            }}
            width="100%"
            height="50px"
            mt="mt-0"
          >
            <svg
              width="20px"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
            </svg>
          </ButtonWhiteRectangle>
        </div>
      </div>
      {isLoading ? (
        <div
          className="loader-block"
          style={{
            paddingTop: "20px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
          </svg>
        </div>
      ) : (
        <></>
      )}
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
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
    updatePushJarvisInfo: (data) => {
      dispatch(updatePushJarvisInfoAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectWithCode);
