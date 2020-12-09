import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  getBannerRedirectWithLink
} from "../../store/reducers/layout/selector";

import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

import {
  updateBannerRedirectWithLinkAction
} from "../../store/reducers/layout/actions";

const BannerRedirectWithLink = ({
  bannerRedirectWithLink,
  updateBannerRedirectWithLink
}) => {
  useEffect(() => {
    if (bannerRedirectWithLink.isDisplayed.inLayout) {
      setYesRedirect(false);
    };
  }, [bannerRedirectWithLink]);
  const closeBanner = () => {
    updateBannerRedirectWithLink({
      fromWho: bannerRedirectWithLink.isDisplayed.fromWho,
      inLayout: false
    });
    setYesRedirect(false);
  };
  const [yesRedirect, setYesRedirect] = useState(false);

  return (
    <>
      <div className={`banner-ok-cancel-action-black-wall ${bannerRedirectWithLink.isDisplayed.inLayout ? ("open") : ("")}`} onClick={closeBanner}></div>
      {yesRedirect ? (
        <Redirect to="/comprar"></Redirect>
      ) : (<></>)}
      <div className={`banner-ok-cancel-action ${bannerRedirectWithLink.isDisplayed.inLayout ? ("open") : ("")} ${bannerRedirectWithLink.firstAnimation ? ("first") : ("")}`}>
        <div className="banner-ok-cancel-action-inner text-center">
          <div className="text-right" title="Cerrar">
            <svg className="banner-ok-cancel-action-inner-svg" onClick={closeBanner} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
          </div>
          <h3 style={{ fontSize: "1.8rem", color: "#FFFFFF" }}>¡ALTO!</h3>
          <div className="banner-ok-cancel-action-inner-title">
            {bannerRedirectWithLink.isDisplayed.fromWho}
          </div>
          <div className="banner-ok-cancel-action-inner-buttons">
            <ButtonWhiteRectangle text="Cancelar"
              width="240px"
              sad="sadColor"
              mt="mt-0"
              height="43px"
              clickFunctionAnotherOne={() => {
                closeBanner()
              }}
            ></ButtonWhiteRectangle>
            <ButtonWhiteRectangle text="Continuar"
              width="240px"
              greenDif=""
              mt="mt-3"
              height="43px"
              clickFunctionAnotherOne={() => {
                closeBanner();
                setYesRedirect(true);
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
    bannerRedirectWithLink: getBannerRedirectWithLink(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateBannerRedirectWithLink: (data) => { dispatch(updateBannerRedirectWithLinkAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BannerRedirectWithLink);
