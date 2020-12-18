import React, { useState, useEffect } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import { connect } from "react-redux";
import { eraseProfile } from "../../routes/index";
import { deletePetDogFounded } from "../../routes/indexDogFounded";
import {
  updateSuccessMessagesComponentAction,
  updateBannerOkCancelActionAction,
  updateFailureMessagesComponentAction,
} from "../../store/reducers/layout/actions";

import { getPetProfile } from "../../store/reducers/user/selector";

import { getBannerOkCancelAction } from "../../store/reducers/layout/selector";

import { TEXT_WANT_DELETE_PET_PROFILE } from "../../utils/textForBannerOkCancelAction";

const DeletePerfilMascota = ({
  getURL,
  updateSuccessMessagesComponent,
  setYesRedirectProp,

  updateBannerOkCancelAction,
  updateFailureMessagesComponent,
  bannerOkCancelAction,

  petProfile,
}) => {
  useEffect(() => {
    if (
      bannerOkCancelAction.isDisplayed.fromWho ===
        TEXT_WANT_DELETE_PET_PROFILE &&
      bannerOkCancelAction.okButton === true
    ) {
      if (!isLoading) {
        eraseProfileFunctionYes();
      }
      updateBannerOkCancelAction({
        fromWho: TEXT_WANT_DELETE_PET_PROFILE,
        inLayout: false,
        okButton: false,
      });
    }
  }, [bannerOkCancelAction]);
  const [isLoading, setIsLoading] = useState(false);
  const eraseProfileFunctionYes = () => {
    setIsLoading(true);
    fetch(
      `${
        petProfile.isPetProfile
          ? `${eraseProfile}/${getURL()}`
          : `${deletePetDogFounded}/${getURL()}`
      }`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          token: localStorage.getItem("token"),
          isPetFromCompany: petProfile.isPetFromCompany ? true : false,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data.msg === "msg") {
          updateSuccessMessagesComponent({
            state: true,
            title: "Se borro el perfil",
            description: `Se borro el perfil con éxito`,
          });
          setYesRedirectProp();
        } else if (data.msg === "noSePuede") {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: `No se puede borrar el perfil ya que tienes una notifiación relacionada con este perfil. Cuando elimines la notificación podrás borrar este perfil.`,
          });
        } else {
          updateFailureMessagesComponent({
            state: true,
            title: "Error",
            description: `No se pudo borrar el perfil`,
          });
        }
      });
  };
  const eraseProfileFunction = () => {
    updateBannerOkCancelAction({
      fromWho: TEXT_WANT_DELETE_PET_PROFILE,
      inLayout: true,
      okButton: false,
    });
  };
  return (
    <>
      <div className={`pet-profile-page-delete`}>
        {window.innerWidth < 1121 ? (
          <></>
        ) : (
          <div className={`pet-profile-page-delete-info`}>
            {`${
              petProfile.isPetProfile
                ? `Información de tu mascota`
                : `Informacíon del perro extraviado`
            }`}
          </div>
        )}
        <ButtonWhiteRectangle
          text="Borrar Perfil"
          width={`${window.innerWidth < 1121 ? "250px" : "175px"}`}
          height="50px"
          mt={`${window.innerWidth < 1121 ? "mt-3" : "mt-0"}`}
          redDif="redColor-2"
          clickFunctionAnotherOne={eraseProfileFunction}
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
            paddingTop: "0px",
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
  return {
    bannerOkCancelAction: getBannerOkCancelAction(state),
    petProfile: getPetProfile(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateSuccessMessagesComponent: (data) => {
      dispatch(updateSuccessMessagesComponentAction(data));
    },
    updateBannerOkCancelAction: (data) => {
      dispatch(updateBannerOkCancelActionAction(data));
    },
    updateFailureMessagesComponent: (data) => {
      dispatch(updateFailureMessagesComponentAction(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePerfilMascota);
