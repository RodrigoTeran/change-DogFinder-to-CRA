import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUserCompany } from "../../store/reducers/company/selector";
import { Redirect } from "react-router-dom";

import ChangeLogoCompany from "./CompanyMethods/ChangeLogoCompany";
import ChangeNameCompany from "./CompanyMethods/ChangeNameCompany";
import ChangeWebPageCompany from "./CompanyMethods/ChangeWebPageCompany";
import ChangeLocationCompany from "./CompanyMethods/ChangeLocationCompany";
import CredentialsCompany from "./CompanyMethods/CredentialsCompany";
import ChangeDescriptionCompany from "./CompanyMethods/ChangeDescriptionCompany";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import { ProfilePageCompanyInfo } from "../../utils/textForInstructions";

import {
  updateBannerOkCancelActionAction,
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction,
  updateBannerInstructionsAction,
} from "../../store/reducers/layout/actions";

import { getBannerOkCancelAction } from "../../store/reducers/layout/selector";

import { TEXT_WANT_GET_OUT_COMPANY } from "../../utils/textForBannerOkCancelAction";

import { deleteUserFromCompany } from "../../routes/company";

const CompanyInfo = ({
  userCompany,

  updateBannerOkCancelAction,
  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,
  bannerOkCancelAction,
  updateBannerInstructions,
}) => {
  const [stateForRender, setStateForRender] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const [isLoading, setIsLoading] = useState(false);
  const [yesRedirect, setYesRedirect] = useState(false);
  useEffect(() => {
    if (
      bannerOkCancelAction.isDisplayed.fromWho === TEXT_WANT_GET_OUT_COMPANY &&
      bannerOkCancelAction.okButton === true
    ) {
      if (!isLoading) {
        getOutOfBeingASlave();
      }
      updateBannerOkCancelAction({
        fromWho: TEXT_WANT_GET_OUT_COMPANY,
        inLayout: false,
        okButton: false,
      });
    }
  }, [bannerOkCancelAction]);
  const handleResize = () => {
    setStateForRender(!stateForRender);
  };
  const eraseUserFromCompanyFunction = () => {
    updateBannerOkCancelAction({
      fromWho: TEXT_WANT_GET_OUT_COMPANY,
      inLayout: true,
      okButton: false,
    });
  };
  const getOutOfBeingASlave = () => {
    setIsLoading(true);
    fetch(deleteUserFromCompany, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data.status === "true") {
          updateSuccessMessagesComponent({
            state: true,
            title: "Éxito",
            description: `Se salió de la empresa`,
          });
          setYesRedirect(true);
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: `No se pudo ejecutar la acción con éxito`,
          });
        }
      });
  };
  return (
    <div className="edit-company-info-container">
      {yesRedirect ? <Redirect to="/"></Redirect> : <></>}
      {stateForRender ? (
        <div style={{ display: "none" }}>.</div>
      ) : (
        <div style={{ display: "none" }}>.</div>
      )}
      <div className="edit-company-info-container-title">
        INFORMACIÓN EMPRESA
      </div>
      <div
        className={`image-pet-profile-instructions`}
        style={{
          marginTop: window.innerWidth < 768 ? "30px" : "40px",
          marginRight: `${window.innerWidth < 768 ? "0px" : "auto"}`,
          marginLeft: window.innerWidth < 768 ? "0px" : "2px",
        }}
      >
        <div className="image-pet-profile-instructions-icon">
          <div
            onClick={() => {
              updateBannerInstructions({
                state: true,
                title: "Instrucciones",
                description: ProfilePageCompanyInfo,
              });
            }}
            title="Instrucciones"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: `center`,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
            </svg>{" "}
            Instrucciones
          </div>
        </div>
      </div>
      <div className="edit-company-info-container-2">
        <div className="edit-company-info-container-2-column-left">
          <ChangeLogoCompany userCompany={userCompany}></ChangeLogoCompany>
        </div>
        <div className="edit-company-info-container-2-column-right">
          <ChangeNameCompany userCompany={userCompany}></ChangeNameCompany>
          <ChangeWebPageCompany
            userCompany={userCompany}
          ></ChangeWebPageCompany>
          <ChangeLocationCompany
            userCompany={userCompany}
          ></ChangeLocationCompany>
          <CredentialsCompany userCompany={userCompany}></CredentialsCompany>
          <ChangeDescriptionCompany
            userCompany={userCompany}
          ></ChangeDescriptionCompany>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: window.innerWidth < 1050 ? "center" : "left",
            }}
          >
            <ButtonWhiteRectangle
              text="Salir de la empresa"
              width={window.innerWidth < 1050 ? "300px" : "250px"}
              height="50px"
              mt="mt-5"
              red="redColor"
              clickFunctionAnotherOne={eraseUserFromCompanyFunction}
            >
              <svg
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </ButtonWhiteRectangle>
          </div>
          {isLoading ? (
            <div
              className="loader-block"
              style={{
                paddingTop: "80px",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
              </svg>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    userCompany: getUserCompany(state),
    bannerOkCancelAction: getBannerOkCancelAction(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBannerOkCancelAction: (data) => {
      dispatch(updateBannerOkCancelActionAction(data));
    },
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
    updateBannerInstructions: (data) => {
      dispatch(updateBannerInstructionsAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);
