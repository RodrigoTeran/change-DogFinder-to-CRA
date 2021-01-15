import React, { useState } from "react";

import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

const BannerIsEmailBad = ({
  isActive,
  isInFirstPosition,
  changeEmailUser,
  changeEmailUserWithKey,
  deleteEmailProfileKey,
  isLoading,
}) => {
  const [valueInputSetEmail, setValueInputSetEmail] = useState("");
  const [valueInputSetKey, setValueInputSetKey] = useState("");

  const onChangeInputSetEmail = (e) => {
    setValueInputSetEmail(e.target.value);
  };
  const onChangeInputSetKey = (e) => {
    setValueInputSetKey(e.target.value);
  };

  return (
    <>
      <div
        className={`banner-profile-contact-info-black-wall ${
          isActive ? "open" : ""
        }`}
      ></div>
      <div
        className={`banner-profile-contact-info ${isActive ? "open" : ""}`}
        style={{
          height: isInFirstPosition ? "465px" : "455px",
          backgroundColor: "var(--tertiary-color-light)",
        }}
      >
        {isLoading ? (
          <div className="loader-mapRightColumn" style={{ zIndex: "3" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
            </svg>
          </div>
        ) : null}
        <div
          className="banner-profile-contact-info-inner text-center"
          style={{
            height: isInFirstPosition ? "460px" : "450px",
          }}
        >
          <div
            className="banner-profile-contact-info-inner-title"
            style={{ padding: "15px" }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginTop: "20px",
              }}
            >
              Error correo
            </div>
            <div
              style={{
                display: isInFirstPosition ? "initial" : "none",
              }}
            >
              <div style={{ marginTop: "15px" }}>
                Es importante que tengamos tu correo para poder procesar los
                pagos y mandarte claves cuando hagas cambios en tu perfil. A
                veces los métodos de inicio de sesión no nos proporcionan tu
                correo porque lo tienes deshabilitado...
                <br />
                <br />
                <div style={{ color: "#fac3c3" }}>
                  Así que para poder usar la plataforma tienes que establecer un
                  correo*
                </div>
              </div>
              <input
                onChange={onChangeInputSetEmail}
                type="text"
                className="input-banner-contact-info"
                placeholder="correo"
                defaultValue=""
                id="input-banner-contact-info-1"
              />
            </div>
            <div
              style={{
                display: !isInFirstPosition ? "initial" : "none",
              }}
            >
              <div style={{ marginTop: "15px" }}>
                Pon la clave que te mandamos al correo que acabas de poner...
                <br />
                <br />
                Si se te pasó el tiempo o no te llegó el correo porque
                escribiste mal tu correo electrónico,
                <br />
                <div style={{ color: "#fac3c3" }}>
                  puedes volver a mandar tu correo al darle en regresar*
                </div>
              </div>
              <input
                onChange={onChangeInputSetKey}
                type="text"
                id="input-banner-contact-info-2"
                className="input-banner-contact-info"
                placeholder="clave"
                defaultValue=""
              />
            </div>
          </div>
          <div
            className="banner-profile-contact-info-inner-buttons"
            style={{ marginTop: "0px" }}
          >
            {isInFirstPosition ? (
              <>
                <ButtonWhiteRectangle
                  text="Enviar correo"
                  width="90%"
                  greenDif=""
                  mt="mt-0"
                  height="43px"
                  clickFunctionAnotherOne={() => {
                    changeEmailUser(valueInputSetEmail);
                  }}
                ></ButtonWhiteRectangle>
              </>
            ) : (
              <>
                <ButtonWhiteRectangle
                  text="Regresar"
                  width="90%"
                  greenDif=""
                  mt="mt-1"
                  height="43px"
                  backgroundColorRectangle="var(--tertiary-color)"
                  clickFunctionAnotherOne={() => {
                    deleteEmailProfileKey();
                  }}
                ></ButtonWhiteRectangle>
                <ButtonWhiteRectangle
                  text="Enviar clave"
                  width="90%"
                  greenDif=""
                  mt="mt-3"
                  height="43px"
                  clickFunctionAnotherOne={() => {
                    changeEmailUserWithKey(valueInputSetKey);
                  }}
                ></ButtonWhiteRectangle>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerIsEmailBad;
