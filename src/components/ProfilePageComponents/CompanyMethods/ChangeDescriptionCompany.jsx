import React, { useState, useEffect } from "react";
import ButtonWhiteRectangle from "../../Buttons/ButtonWhiteRectangle";

import { connect } from "react-redux";
import {
  updateUserCompanyAction
} from "../../../store/reducers/company/actions";

import {
  checkFuckingHack
} from "../../../utils/hacking";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../../store/reducers/layout/actions";

import {
  editCompanyDescription
} from "../../../routes/company";

const ChangeDescriptionCompany = ({
  userCompany,
  updateUserCompany,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent
}) => {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [hasChanged, setHasChanged] = useState(false);
  const [textInfo, setTextInfo] = useState(userCompany.informationCompania);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setTotalCharacters(userCompany.informationCompania.length);
    } catch {

    };
  }, [userCompany]);

  const changeInfoCompany = () => {
    setIsLoading(true);
    const body = {
      newInfoCompany: textInfo
    };
    const hack = checkFuckingHack(textInfo, [
      ",",
      ".",
      ":",
      ";",
      '"',
      "(",
      ")",
      "@",
      "#"
    ]);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error al cambiar la descripción",
        description: `Debe de introducir caracteres especiales válidos. Solo se admiten estos ( , . : ; " ( ) @ # ). Se restringen más caracteres por motivos de seguridad de la plataforma.`,
      });
      setIsLoading(false);
    } else {
      fetch(`${editCompanyDescription}`, {
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
          setHasChanged(false);
          updateUserCompany({
            selectedState: "informationCompania",
            state: body.newInfoCompany
          });
          updateSuccessMessagesComponent({
            state: true,
            title: "Se cambió la descripción",
            description: `Se cambió la descripción de la compañía con éxito`,
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error al cambiar la descripción",
            description: `Error al cambiar la descripción de la compañía`,
          });
        }
      });
    }

  };
  return (
    <div className="change-description-textarea-company">
      <div className="change-description-textarea-company-title">
        Descripción de tu compañía
      </div>
      <div style={{
        marginBottom: "10px",
        color: "rgba(200, 200, 200, 1)"
      }}>
        Describe brevemente tu compañía, para que los usuarios te puedan conocer mejor.
      </div>
      <textarea maxLength={900} id="textarea-company-description" onChange={(e) => {
        setTextInfo(e.target.value);
        setTotalCharacters(e.target.value.length);
        setHasChanged(true);
      }} defaultValue={userCompany.informationCompania}
        rows="10"
      >
      </textarea>
      <div className="change-description-textarea-company-numberChar">
        <div>
          Número de caracteres: {totalCharacters}
        </div>
        <div>
          Máximo número de caracteres: 900
        </div>
      </div>
      {hasChanged ? (
        <div className="change-description-textarea-company-hasChanged">
          <ButtonWhiteRectangle
            text="Guardar cambios"
            width={window.innerWidth < 768 ? ("100%") : ("45%")}
            height="50px"
            mt="mt-0"
            clickFunctionAnotherOne={() => {
              if (!isLoading) {
                changeInfoCompany();
              };
            }} 
          ></ButtonWhiteRectangle>
          <ButtonWhiteRectangle
            text="Cancelar cambios"
            width={window.innerWidth < 768 ? ("100%") : ("45%")}
            height="50px"
            mt="mt-0"
            clickFunctionAnotherOne={() => {
              setHasChanged(false);
              setTotalCharacters(userCompany.informationCompania.length);
              document.querySelector("#textarea-company-description").value = userCompany.informationCompania;

            }}
          ></ButtonWhiteRectangle>
        </div>
      ) : (<></>)}
      {isLoading ? (
        <div className="loader-block" style={{
          paddingTop: "15px",
          marginBottom: "60px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDescriptionCompany);