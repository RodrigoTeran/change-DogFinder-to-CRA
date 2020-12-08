// Modules
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  updateBannerProfileContactInfoAction,
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

import CompanyInfo from "./CompanyInfo";

import {
  getUserCompany
} from "../../store/reducers/company/selector";

import {
  postUserInCompany
} from "../../routes/company";

import {
  updateUserAction
} from "../../store/reducers/user/actions";

import {
  updateUserCompanyAction
} from "../../store/reducers/company/actions";

import {
  editKeyForMailForContactUser,
  editMailForContactUser,

  editKeyForTelephoneForContactUser,
  editTelephoneForContactUser
} from "../../routes/index";

import {
  editCompanyEmail,
  editCompanyEmailWithToken,

  editCompanyTelephone,
  editCompanyTelephoneWithToken
} from "../../routes/company";

import {
  checkFuckingHack
} from "../../utils/hacking";

import {
  getBannerProfileContactInfo
} from "../../store/reducers/layout/selector";

import {
  getNumberOfTelephoneForContact,
  getEmailForContact,
  getEmailForContactActiveKey,
  getTelephoneForContactActiveKey
} from "../../store/reducers/user/selector";

// Components
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
const HeaderProfilePage = ({
  username,
  email,
  imgId,
  isPremium,

  bannerProfileContactInfo,
  updateBannerProfileContactInfo,

  numberOfTelephoneForContact,
  emailForContact,

  updateFailureMessagesComponent,
  updateSuccessMessagesComponent,

  emailForContactActiveKey,
  telephoneForContactActiveKey,

  updateUser,

  userCompany,
  updateUserCompany,

  isViewOnCompany,
  children
}) => {
  const [yesInstructions, setInstructions] = useState(false);
  const [yesInstructions2, setInstructions2] = useState(false);
  const [stateForRender, setStateForRender] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const [valueInputMailKey, setValueInputMailKey] = useState("");
  const [valueInputTelephoneKey, setValueInputTelephoneKey] = useState("");

  const onChangeInputKeyMail = e => {
    setValueInputMailKey(e.target.value);
  };

  const onChangeInputKeyTelephone = e => {
    setValueInputTelephoneKey(e.target.value);
  };

  const editMailForContact = () => {
    const hack = checkFuckingHack(valueInputMailKey, []);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Debe de introducir caracteres válidos"
      });
    } else {
      setIsLoading(true);
      const body = {
        key: valueInputMailKey
      };
      fetch(
        isViewOnCompany && userCompany.name ? (
          editCompanyEmailWithToken
        ) : (
            editMailForContactUser
          )
        , {
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
            updateSuccessMessagesComponent({
              state: true,
              title: "Éxito",
              description: `Se editó el correo de contacto público`
            });
            if (isViewOnCompany && userCompany.name) {
              updateUserCompany({
                selectedState: "correoCompaniaEspacioParaKey",
                state: false
              });
              updateUserCompany({
                selectedState: "correoCompania",
                state: data.newEmail
              });
            } else {
              updateUser({
                selectedState: "emailForContact",
                state: data.newEmail
              });
              updateUser({
                selectedState: "emailForContactActiveKey",
                state: false
              });
            };
          } else if (data.status === "expiro") {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "La clave ya expiró o no coincide. Vuelva a intentarlo o envie de nuevo el correo"
            });
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "La clave no coincide"
            });
          };
        });
    };
  };

  const editTelephoneForContact = () => {
    const hack = checkFuckingHack(valueInputTelephoneKey, []);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Debe de introducir caracteres válidos"
      });
    } else {
      setIsLoading(true);
      const body = {
        key: valueInputTelephoneKey
      };
      fetch(
        isViewOnCompany && userCompany.name ? (
          editCompanyTelephoneWithToken
        ) : (
            editTelephoneForContactUser
          )
        , {
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
            updateSuccessMessagesComponent({
              state: true,
              title: "Éxito",
              description: `Se editó el teléfono de contacto público`
            });
            if (isViewOnCompany && userCompany.name) {
              updateUserCompany({
                selectedState: "numeroCompaniaEspacioParaKey",
                state: false
              });
              updateUserCompany({
                selectedState: "numeroTelefonoCompania",
                state: data.newTelephone
              });
            } else {
              updateUser({
                selectedState: "numberOfTelephoneForContact",
                state: data.newTelephone
              });
              updateUser({
                selectedState: "telephoneForContactActiveKey",
                state: false
              });
            };
          } else if (data.status === "expiro") {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "La clave ya expiró o no coincide. Vuelva a intentarlo o envie de nuevo el teléfono"
            });
          } else {
            updateFailureMessagesComponent({
              state: true,
              title: "Error",
              description: "La clave no coincide"
            });
          };
        });
    };
  };

  const editKeyForMail = (email) => {
    setIsLoading(true);
    const body = {
      email
    };
    fetch(
      isViewOnCompany && userCompany.name ? (
        editCompanyEmail
      ) : (
          editKeyForMailForContactUser
        )
      , {
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
          updateSuccessMessagesComponent({
            state: true,
            title: "Éxito",
            description: `Se envió al correo: ${bannerProfileContactInfo.inputInfoFromBanner}, la clave para verificar que este correo es suyo`
          });
          if (isViewOnCompany && userCompany.name) {
            updateUserCompany({
              selectedState: "correoCompaniaEspacioParaKey",
              state: true
            });
          } else {
            updateUser({
              selectedState: "emailForContactActiveKey",
              state: true
            });
          };
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "El correo no es válido, puede ser que lo hayas escrito mal"
          });
        };
      });
  };

  const editKeyForTelephone = (telephone) => {
    setIsLoading(true);
    const body = {
      telephone
    };
    fetch(
      isViewOnCompany && userCompany.name ? (
        editCompanyTelephone
      ) : (
          editKeyForTelephoneForContactUser
        ), {
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
        updateSuccessMessagesComponent({
          state: true,
          title: "Éxito",
          description: `Se envió al teléfono: ${telephone}, la clave para verificar que este teléfono es suyo`
        });
        if (isViewOnCompany && userCompany.name) {
          updateUserCompany({
            selectedState: "numeroCompaniaEspacioParaKey",
            state: true
          });
        } else {
          updateUser({
            selectedState: "telephoneForContactActiveKey",
            state: true
          });
        };
      } else {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "El teléfono no es válido, puede ser que lo hayas escrito mal"
        });
      };
    });
  };

  const [valueInputForCompanyRegister, setValueInputForCompanyRegister] = useState("");

  const onChangeInputForCompanyRegister = (e) => {
    setValueInputForCompanyRegister(e.target.value);
  };

  const postNewUserInCompany = () => {
    const hack = checkFuckingHack(valueInputForCompanyRegister, []);
    if (hack) {
      updateFailureMessagesComponent({
        state: true,
        title: "Error",
        description: "Debe de introducir caracteres válidos"
      });
    } else {
      setIsLoading2(true);
      const body = {
        codeUser: valueInputForCompanyRegister
      };
      fetch(postUserInCompany, {
        method: "POST",
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
        setIsLoading2(false);
        if (data.status === "malCode") { // codigo erroneo
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "No exsite ese identificador para registrarse"
          });
        } else if (data.status === "true") { // correcto todo
          updateSuccessMessagesComponent({
            state: true,
            title: "Éxito",
            description: `Se registró correctamente en la compañía`
          });
          updateUserCompany({
            selectedState: "name",
            state: data.companyInfo.name
          });
          updateUserCompany({
            selectedState: "location",
            state: data.companyInfo.location
          });
          updateUserCompany({
            selectedState: "coordenates",
            state: data.companyInfo.coordenates
          });
          updateUserCompany({
            selectedState: "webPage",
            state: data.companyInfo.webPage
          });
          updateUserCompany({
            selectedState: "logo",
            state: data.companyInfo.logo
          });
          updateUserCompany({
            selectedState: "informationCompania",
            state: data.companyInfo.informationCompania
          });
          updateUserCompany({
            selectedState: "codigoDescuento",
            state: data.companyInfo.codigoDescuento
          });
          updateUserCompany({
            selectedState: "usersQueUsaronElCodigoDeDescuento",
            state: data.companyInfo.usersQueUsaronElCodigoDeDescuento
          });
          updateUserCompany({
            selectedState: "correoCompania",
            state: data.companyInfo.correoCompania
          });
          updateUserCompany({
            selectedState: "numeroTelefonoCompania",
            state: data.companyInfo.numeroTelefonoCompania
          });
        } else if (data.status === "yaEstaConOtra") { // ya esta en otra
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "Ya estas registrado en una organización"
          });
        };
      });
    };
  };

  useEffect(() => {
    if (bannerProfileContactInfo.isDisplayed.fromWho === "Mail" && bannerProfileContactInfo.okButton === true) {
      const hack = checkFuckingHack(bannerProfileContactInfo.inputInfoFromBanner, ["@", "."]);
      let status = false;
      if (hack) {
        status = true;
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "Debe de introducir caracteres válidos"
        });
      } else if (bannerProfileContactInfo.inputInfoFromBanner === "") {
        status = true;
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "El correo debe contener al menos 1 caracter"
        });
      } else {
        let arroba = false;
        for (var i = 0; i < bannerProfileContactInfo.inputInfoFromBanner.length; i++) {
          if (bannerProfileContactInfo.inputInfoFromBanner[i] === "@") {
            arroba = true;
          };
        };
        if (!arroba) {
          status = true;
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: "El correo debe de ser válido"
          });
        };
      };

      // El nombre debe contener al menos 1 caracter
      if (!status) {
        if (!isLoading && !isLoading2) {
          editKeyForMail(bannerProfileContactInfo.inputInfoFromBanner)
        };
      };

      // Al final
      updateBannerProfileContactInfo({
        fromWho: bannerProfileContactInfo.isDisplayed.fromWho,
        inLayout: false,
        okButton: false,
        inputInfoFromBanner: undefined
      });
    };
    if (bannerProfileContactInfo.isDisplayed.fromWho === "Whatsapp" && bannerProfileContactInfo.okButton === true) {

      const hack = checkFuckingHack(bannerProfileContactInfo.inputInfoFromBanner, ["+"]);
      let status = false;
      if (hack) {
        status = true;
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "Debe de introducir caracteres válidos"
        });
      } else if (bannerProfileContactInfo.inputInfoFromBanner === "") {
        status = true;
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "El número debe contener al menos 1 caracter"
        });
      };

      // El nombre debe contener al menos 1 caracter
      if (!status) {
        if (!isLoading && !isLoading2) {
          editKeyForTelephone(bannerProfileContactInfo.inputInfoFromBanner)
        };
      };

      // Al final
      updateBannerProfileContactInfo({
        fromWho: bannerProfileContactInfo.isDisplayed.fromWho,
        inLayout: false,
        okButton: false,
        inputInfoFromBanner: undefined
      });
    };
  }, [bannerProfileContactInfo]);

  const ProfileContactWhatsapp = () => {
    updateBannerProfileContactInfo({
      fromWho: "Whatsapp",
      inLayout: true,
      okButton: false,
      inputInfoFromBanner: undefined
    });
  };

  const ProfileContactMail = () => {
    updateBannerProfileContactInfo({
      fromWho: "Mail",
      inLayout: true,
      okButton: false,
      inputInfoFromBanner: undefined
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    setStateForRender(!stateForRender);
  };
  return (
    <>
      <div className="d-flex row justify-content-around align-items-center row-header-profile-page">
        {stateForRender ? (
          <div style={{ display: "none" }}>.</div>
        ) : (
            <div style={{ display: "none" }}>.</div>
          )}
        <div style={{ fontSize: "1rem" }} className="col-lg-6 col-md-6 col-sm-10 my-3 row-header-profile-page-col">
          <div className="d-flex justify-content-center">
            <img className="rounded-circle img-fluid mr-3" src={`${imgId}`} alt={`${username}`} style={{ width: "4.5rem", height: "4.5rem" }}></img>
            <div className="d-flex justify-content-center text-left" style={{ flexDirection: "column" }}>
              {username}
              {email ? (
                <span style={{ fontSize: ".85rem", wordBreak: "break-word" }}> Correo: <span style={{ textDecoration: "underline" }}>{email}</span></span>
              ) : (<></>)}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 text-center my-3 row-header-profile-page-col-2">
          <div>
            {!isPremium ? (
              <ButtonWhiteRectangle text={`Ser premium`} width="190px" height="50px" fontSize="1rem" clickFunction="/comprar" mt="mt-0">
                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z" /></svg>
              </ButtonWhiteRectangle>
            ) : (
                <ButtonWhiteRectangle text={`Ya cuentas con premium`} width="250px" height="50px" fontSize="1rem" noClick={true} mt="mt-0">
                  <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" /></svg>
                </ButtonWhiteRectangle>
              )}
          </div>
        </div>
      </div>
      <div className="actual-contact-info-profile-page">
        <div className="actual-contact-info-profile-page-card">
          <div className="actual-contact-info-profile-page-card-title">
            Correo electrónico
          </div>
          <div className="actual-contact-info-profile-page-card-text">
            {userCompany.name ? (
              <>
                {isViewOnCompany ? (
                  <>
                    {userCompany.correoCompania}
                  </>
                ) : (
                    <>
                      {emailForContact}
                    </>
                  )}
              </>
            ) : (
                <>
                  {emailForContact}
                </>
              )}
          </div>
        </div>
        <div className="actual-contact-info-profile-page-card">
          <div className="actual-contact-info-profile-page-card-title">
            Número de teléfono
          </div>
          <div className="actual-contact-info-profile-page-card-text">
            {userCompany.name ? (
              <>
                {isViewOnCompany ? (
                  <>
                    {userCompany.numeroTelefonoCompania}
                  </>
                ) : (
                    <>
                      {numberOfTelephoneForContact}
                    </>
                  )}
              </>
            ) : (
                <>
                  {numberOfTelephoneForContact}
                </>
              )}
          </div>
        </div>
      </div>
      {children}
      {!userCompany.name ? (<>
        <div className="turn-into-company-container">
          <div className="turn-into-company-container-input">
            <input maxLength="15" type="text" onChange={onChangeInputForCompanyRegister} />
          </div>
          <ButtonWhiteRectangle
            backgroundColorRectangle="#232323"
            text={` Registrarse en una empresa`} width="295px" height="50px" fontSize="1rem" clickFunctionAnotherOne={
              () => {
                if (!isLoading && !isLoading2) {
                  postNewUserInCompany();
                };
              }
            } mt="mt-0">
            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z" /></svg>
          </ButtonWhiteRectangle>
        </div>
        {isLoading2 ? (
          <div className="loader-block" style={{
            paddingTop: "30px"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
          </div>
        ) : (<></>)}
        <div className={`image-pet-profile-instructions ${yesInstructions2 ? ("open") : ("close")}`} style={{
          marginTop: "20px",
          width: window.innerWidth < 768 ? ("300px") : ("50%"),
          marginRight: `${window.innerWidth < 768 ? ("0px") : ("auto")}`, marginLeft: `${window.innerWidth < 768 ? ("") : ("calc(5% + 20px)")}`, marginBottom: `${window.innerWidth < 768 ? ("30px") : ("20px")}`,
        }}
        >
          <div className="image-pet-profile-instructions-icon">
            <div onClick={() => { setInstructions2(!yesInstructions2) }} title="Información" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: `${window.innerWidth < 768 ? (yesInstructions2 ? ("left") : ("center")) : ("left")
                }`
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Información
            </div>
          </div>
          <div className={`${yesInstructions2 ? ("open") : ("close")} image-pet-profile-instructions-text`}>
            Si es empleado de una organización, veterinaria, estética canina u otra empresa afiliada a la plataforma contacte con su empresa para obtener el código de su organización
            y así registrarse como usuario en la plataforma de tal empresa. Si usted quiere registrar a su empresa en la plataforma para gozar de los beneficios
            únicos como códigos de descuento a sus clientes, un lugar único en el mapa y adopción. En la página de "contáctanos" nos puede mandar un correo.
          </div>
        </div>
      </>) : (<></>)}
      <div className="profile-page-contact-profile">
        <div className="profile-page-contact-profile-title">
          <div>
            {isViewOnCompany && userCompany.name ? (
              <>
                Cambiar información de contacto de empresa
              </>
            ) : (
                <>
                  Cambiar información de contacto
                </>
              )}
          </div>
        </div>
        <div className="profile-page-contact-profile-contacts-container">
          <div className="profile-page-contact-profile-contacts-container-row">
            <div className="profile-page-contact-profile-contacts-container-col">
              <ButtonWhiteRectangle text={`Correo electrónico`} width="100%" height="50px" fontSize="1rem" clickFunctionAnotherOne={ProfileContactMail} mt="mt-0"
                backgroundColorRectangle={"#0078D4"}
              >
                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
              </ButtonWhiteRectangle>
            </div>
            <div className="profile-page-contact-profile-contacts-container-col profile-page-contact-profile-contacts-container-col-2">
              <ButtonWhiteRectangle text={`Número de teléfono`} width="100%" height="50px" fontSize="1rem" clickFunctionAnotherOne={ProfileContactWhatsapp} mt="mt-0"
                backgroundColorRectangle={"#4CED69"}
                colorText={"#000"}
                bold={"bold"}
              >
                <svg style={{ fill: "#000" }} width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
              </ButtonWhiteRectangle>
            </div>
          </div>
        </div>
      </div>
      <div className={`image-pet-profile-instructions ${yesInstructions ? ("open") : ("close")}`} style={{
        marginTop: "0px",
        width: window.innerWidth < 768 ? ("300px") : ("50%"),
        marginRight: `${window.innerWidth < 768 ? ("0px") : ("auto")}`, marginLeft: `${window.innerWidth < 768 ? ("") : ("calc(5% + 20px)")}`, marginBottom: `${window.innerWidth < 768 ? ("30px") : ("0px")}`,
      }}
      >
        <div className="image-pet-profile-instructions-icon">
          <div onClick={() => { setInstructions(!yesInstructions) }} title="Instrucciones" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: `${window.innerWidth < 768 ? (yesInstructions ? ("left") : ("center")) : ("left")
              }`
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg> Instrucciones
        </div>
        </div>
        <div className={`${yesInstructions ? ("open") : ("close")} image-pet-profile-instructions-text`}>
          {isViewOnCompany && userCompany.name ? (
            <>
              Debes de llenar estos dos campos antes de poder reportar a un perro desaparecido en tu organización. Estos datos los van a poder ver las personas
              cuando te intenten contactar, y te saldrá una notificación. Es decir, cuando alguien vea tus datos de contacto, se te notificará de inmediato para
              que puedas contactar con ellos.
            </>
          ) : (
              <>
                Debes de llenar estos dos campos antes de poder poner un perfil de tu mascota como perdido o reportar a un perro desaparecido. Estos datos los van a poder ver las personas
                que hayan encontrado tu mascota y viceversa. Cuando alguien vea estos datos de contacto, se te notificará de inmediato para
                que puedas contactar con ellos. No van a poder ver tu correo electrónico de tu cuenta de usuario.
              </>
            )}
        </div>
      </div>
      <div className={`banner-email-contact-key-input ${isViewOnCompany && userCompany.name ? (
        userCompany.correoCompaniaEspacioParaKey ? ("open") : ("close")
      ) : (
          emailForContactActiveKey ? ("open") : ("close")
        )
        }`}>
        <div className="banner-email-contact-key-input-title">
          Clave para verificar autenticidad de correo
        </div>
        <div className="banner-email-contact-key-input-info">
          Introduce la clave que te llego al correo. Si no te ha llegado el correo, lo más probable es que lo hayas escrito mal. Si es así, solo vuelve a mandarlo. La clave expira en 10 minutos.
        </div>
        <div className="banner-email-contact-key-input-input-container">
          <div>
            <input onChange={onChangeInputKeyMail} type="text" maxLength={10} />
          </div>
          <div className="banner-email-contact-key-input-input-container-2">
            <ButtonWhiteRectangle text={`Enviar`} width="280px" height="50px" fontSize="1rem" clickFunctionAnotherOne={
              () => {
                if (!isLoading && !isLoading2) {
                  editMailForContact();
                };
              }
            } mt="mt-0"
              backgroundColorRectangle={"#000000"}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" /></svg>
            </ButtonWhiteRectangle>
          </div>
        </div>
      </div>
      <div className={`banner-email-contact-key-input ${isViewOnCompany && userCompany.name ? (
        userCompany.numeroCompaniaEspacioParaKey ? ("open") : ("close")
      ) : (
          telephoneForContactActiveKey ? ("open") : ("close")
        )
        }`}>
        <div className="banner-email-contact-key-input-title">
          Clave para verificar autenticidad de número de teléfono
                    </div>
        <div className="banner-email-contact-key-input-info">
          Introduce la clave que te llego al teléfono. Si no te ha llegado el mensaje, lo más probable es que lo hayas escrito mal. Si es así, solo vuelve a mandarlo. La clave expira en 10 minutos.
                    </div>
        <div className="banner-email-contact-key-input-input-container">
          <div>
            <input onChange={onChangeInputKeyTelephone} type="text" maxLength={10} />
          </div>
          <div className="banner-email-contact-key-input-input-container-2">
            <ButtonWhiteRectangle text={`Enviar`} width="280px" height="50px" fontSize="1rem" clickFunctionAnotherOne={
              () => {
                if (!isLoading && !isLoading2) {
                  editTelephoneForContact();
                };
              }
            } mt="mt-0"
              backgroundColorRectangle={"#000000"}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" /></svg>
            </ButtonWhiteRectangle>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loader-block" style={{
          paddingTop: "30px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}

      {isViewOnCompany && userCompany.name ? (
        <CompanyInfo></CompanyInfo>
      ) : (
          <>
          </>
        )}
    </>
  );
};
// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    bannerProfileContactInfo: getBannerProfileContactInfo(state),
    numberOfTelephoneForContact: getNumberOfTelephoneForContact(state),
    emailForContact: getEmailForContact(state),
    emailForContactActiveKey: getEmailForContactActiveKey(state),
    telephoneForContactActiveKey: getTelephoneForContactActiveKey(state),
    userCompany: getUserCompany(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateBannerProfileContactInfo: (data) => { dispatch(updateBannerProfileContactInfoAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
    updateUser: (data) => { dispatch(updateUserAction(data)) },
    updateUserCompany: (data) => { dispatch(updateUserCompanyAction(data)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfilePage);