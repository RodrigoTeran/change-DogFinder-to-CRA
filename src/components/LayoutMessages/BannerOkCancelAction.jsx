import React from "react";
import { connect } from "react-redux";

import {
  getBannerOkCancelAction
} from "../../store/reducers/layout/selector";

import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

import {
  updateBannerOkCancelActionAction
} from "../../store/reducers/layout/actions";

const BannerOkCancelAction = ({
  bannerOkCancelAction,
  updateBannerOkCancelAction
}) => {
  const closeBanner = () => {
    updateBannerOkCancelAction({
      fromWho: bannerOkCancelAction.isDisplayed.fromWho,
      inLayout: false,
      okButton: false
    });
  };

  const continueButtonBanner = () => {
    updateBannerOkCancelAction({
      fromWho: bannerOkCancelAction.isDisplayed.fromWho,
      inLayout: false,
      okButton: true
    });
  };

  return (
    <>
      <div className={`banner-ok-cancel-action-black-wall ${bannerOkCancelAction.isDisplayed.inLayout ? ("open") : ("")}`} onClick={closeBanner}></div>
      <div className={`banner-ok-cancel-action ${bannerOkCancelAction.isDisplayed.inLayout ? ("open") : ("")} ${bannerOkCancelAction.firstAnimation ? ("first") : ("")}`}>
        <div className="banner-ok-cancel-action-inner text-center">
          <div className="text-right" title="Cerrar">
            <svg className="banner-ok-cancel-action-inner-svg" onClick={closeBanner} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
          </div>
          <h3 style={{ fontSize: "1.8rem", color: "#FFFFFF" }}>¡ALTO!</h3>
          <div className="banner-ok-cancel-action-inner-title">
            piensalo dos veces...
            <br />
            <br/>
            {bannerOkCancelAction.isDisplayed.fromWho}
          </div>
          <div className="banner-ok-cancel-action-inner-buttons">
            <ButtonWhiteRectangle text="Cancelar"
              width="80%"
              sad="sadColor"
              mt="mt-0"
              height="43px"
              clickFunctionAnotherOne={() => {
                closeBanner()
              }}
            ></ButtonWhiteRectangle>
            <ButtonWhiteRectangle text="Continuar"
              width="80%"
              greenDif=""
              mt="mt-3"
              height="43px"
              clickFunctionAnotherOne={() => {
                continueButtonBanner()
              }}
            ></ButtonWhiteRectangle>
          </div>
        </div>
      </div>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    bannerOkCancelAction: getBannerOkCancelAction(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateBannerOkCancelAction: (data) => { dispatch(updateBannerOkCancelActionAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BannerOkCancelAction);
