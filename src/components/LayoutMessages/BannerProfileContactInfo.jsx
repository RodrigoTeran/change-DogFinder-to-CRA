import React, { useState } from "react";
import { connect } from "react-redux";

import {
  getBannerProfileContactInfo
} from "../../store/reducers/layout/selector";

import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";

import {
  updateBannerProfileContactInfoAction
} from "../../store/reducers/layout/actions";

const BannerProfileContactInfo = ({
  bannerProfileContactInfo,
  updateBannerProfileContactInfo
}) => {
  const closeBanner = () => {
    document.querySelector(".input-banner-contact-info").value = "";
    setValueInput("");
    updateBannerProfileContactInfo({
      fromWho: bannerProfileContactInfo.isDisplayed.fromWho,
      inLayout: false,
      okButton: false,
      inputInfoFromBanner: undefined
    });
  };

  const continueButtonBanner = () => {
    document.querySelector(".input-banner-contact-info").value = "";
    updateBannerProfileContactInfo({
      fromWho: bannerProfileContactInfo.isDisplayed.fromWho,
      inLayout: false,
      okButton: true,
      inputInfoFromBanner: valueInput
    });
    setValueInput("");
  };

  const [valueInput, setValueInput] = useState("");

  const onChangeInput = e => {
    setValueInput(e.target.value);
  };

  return (
    <>
      <div className={`banner-profile-contact-info-black-wall ${bannerProfileContactInfo.isDisplayed.inLayout ? ("open") : ("")}`} onClick={closeBanner}></div>
      <div className={`banner-profile-contact-info ${bannerProfileContactInfo.isDisplayed.inLayout ? ("open") : ("")} ${bannerProfileContactInfo.firstAnimation ? ("first") : ("")}`}
        style={{
          height: bannerProfileContactInfo.isDisplayed.fromWho === "Mail" ? ("385px") : ("407.5px")
        }}
      >
        <div className="banner-profile-contact-info-inner text-center"
          style={{
            height: bannerProfileContactInfo.isDisplayed.fromWho === "Mail" ? ("380px") : ("402.5px")
          }}
        >
          <div className="text-right" title="Cerrar">
            <svg className="banner-profile-contact-info-inner-svg" onClick={closeBanner} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
          </div>
          <div className="banner-profile-contact-info-inner-title">
            {bannerProfileContactInfo.isDisplayed.fromWho === "Mail" ?
              (<>
                <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Información de contacto por correo
                </div>
                <div style={{ marginTop: "20px" }}>
                  Escribe el correo que quieras para que las personas te puedan contactar por este medio
                </div>
                <input onChange={onChangeInput} type="text" className="input-banner-contact-info" />
              </>)
              :
              (<>
                <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Información de contacto por Whatsapp
                </div>
                <div style={{ marginTop: "20px" }}>
                  Escribe tu número de teléfono que quieras para que las personas te puedan contactar por este medio. Incluir LADA.
                </div>
                <div className="input-banner-contact-info-lada-container">
                  <input maxLength={13} onChange={onChangeInput} type="text" className="input-banner-contact-info" />
                </div>
              </>)
            }
          </div>
          <div className="banner-profile-contact-info-inner-buttons">
            <ButtonWhiteRectangle text="Cancelar cambios"
              width="80%"
              sad="sadColor"
              mt="mt-0"
              height="43px"
              clickFunctionAnotherOne={() => {
                closeBanner()
              }}
            ></ButtonWhiteRectangle>
            <ButtonWhiteRectangle text="Guardar cambios"
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
    bannerProfileContactInfo: getBannerProfileContactInfo(state)
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateBannerProfileContactInfo: (data) => { dispatch(updateBannerProfileContactInfoAction(data)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BannerProfileContactInfo);
