import React, { useState } from "react";
import { connect } from "react-redux";
import {
  updateUserCompanyAction
} from "../../../store/reducers/company/actions";
import InputTextComponent from "../../Inputs/InputTextComponent";

import {
  checkFuckingHack,
  checkHackInBlankSpaces
} from "../../../utils/hacking";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../../store/reducers/layout/actions";

import {
  editCompanyWebPage
} from "../../../routes/company";

const ChangeWebPageCompany = ({
  userCompany,
  updateUserCompany,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent
}) => {
  const [isInputActivated, setIsInputActivated] = useState(false);
  let body = {
    newWebPageCompany: ""
  };
  const changeInput = e => {
    body = {
      newWebPageCompany: e.target.value
    };
  };

  const [isLoading, setIsLoading] = useState(false);
  const changeWebPageFetch = () => {
    setIsInputActivated(false);
    const hack = checkFuckingHack(body.newWebPageCompany, [
      "/",
      ".",
      "_",
      "-",
      ":"
    ]);
    const hackSPaces = checkHackInBlankSpaces(body.newWebPageCompany);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error al cambiar la página web",
        description: `Debe de introducir caracteres válidos, ejemplo: https://www.example.com`,
      });
      setIsLoading(false);
    } else if (hackSPaces) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error al cambiar la página web",
        description: `No ponga muchos espacios en blanco seguidos o al principio`,
      });
      setIsLoading(false);
    } else {
      if (body.newWebPageCompany === "") {
        updateFailureMessagesComponent({
          state: true,
          title: "Error al cambiar página web",
          description: `La página web debe contener al menos 1 caracter`,
        });
        setIsLoading(false);
      } else {
        fetch(`${editCompanyWebPage}`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "token": localStorage.getItem("token")
          },
          body: JSON.stringify(body)
        }).then(res => {
          return res.json();
        }).then(data => {
          setIsLoading(false);
          if (data.status === "true") {
            updateUserCompany({
              selectedState: "webPage",
              state: body.newWebPageCompany
            });
            updateSuccessMessagesComponent({
              state: true,
              title: "Se cambió la página web",
              description: `Se cambió la página web de la compañía con éxito`,
            });
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error al cambiar la página web",
              description: `Error al cambiar la página web de la compañía`,
            });
          }
        });
      };
    };
  };
  return (
    <>
      <InputTextComponent
        closeInput={() => { setIsInputActivated(false) }}
        closeStyle={!isInputActivated}
        maxLenghtInput={50}
        onChangeFunction={changeInput}
        clickFunction={changeWebPageFetch}
      >
        <div className="input-layout-text-title">
          Escribe la página web de la compañía
        </div>
        <div className="input-layout-text-subtitle">Máximo número de caracteres: 50</div>
      </InputTextComponent>
      <div className="change-company-webPage">
        Página Web: <span>{userCompany.webPage}</span><svg onClick={() => { setIsInputActivated(true) }} className="change-company-webPage-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" /></svg>
      </div>
      {isLoading ? (
        <div className="loader-block" style={{
          paddingTop: "15px",
          marginBottom: "60px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}
    </>
  )
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserCompany: (data) => { dispatch(updateUserCompanyAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeWebPageCompany);