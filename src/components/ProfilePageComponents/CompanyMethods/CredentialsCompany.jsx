import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ProfilePageDiscountCodeCompany } from "../../../utils/textForInstructions";
import { updateBannerInstructionsAction } from "../../../store/reducers/layout/actions";
const CardsForCredentialsCompany = ({ title, text, children }) => {
  return (
    <div className="card-credentials-company">
      <div className="card-credentials-company-cols-2">
        <div className="card-credentials-company-col-2">{children}</div>
        <div className="card-credentials-company-col-2 card-credentials-company-col-2-title">
          {title}
        </div>
      </div>
      <div className="card-credentials-company-cols">{text}</div>
    </div>
  );
};

const CredentialsCompany = ({ userCompany, updateBannerInstructions }) => {
  const [stateForRender, setStateForRender] = useState(false);
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
      <div className="card-credentials-company-container">
        {stateForRender ? (
          <div style={{ display: "none" }}>.</div>
        ) : (
          <div style={{ display: "none" }}>.</div>
        )}
        <CardsForCredentialsCompany
          title={"Código de Descuento"}
          text={`Den este código a sus clientes, así tendrán un 10% de descuento en la plataforma: ${userCompany.codigoDescuento}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z" />
          </svg>
        </CardsForCredentialsCompany>
        <CardsForCredentialsCompany
          title={"Nuevos usuarios"}
          text={`Esta es la cantidad de usuarios que usaron su código de descuento en este mes: ${userCompany.usersQueUsaronElCodigoDeDescuento}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
          </svg>
        </CardsForCredentialsCompany>
      </div>
      <div
        className={`image-pet-profile-instructions image-pet-profile-instructions-2`}
        style={{
          marginTop: "10px",
          marginLeft: `${
            window.innerWidth < 1050 ? "calc(50% - 150px)" : "0px"
          }`,
          marginBottom: `${window.innerWidth < 1050 ? "30px" : "0px"}`,
        }}
      >
        <div className="image-pet-profile-instructions-icon">
          <div
            onClick={() => {
              updateBannerInstructions({
                state: true,
                title: "Instrucciones",
                description: ProfilePageDiscountCodeCompany,
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
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateBannerInstructions: (data) => {
      dispatch(updateBannerInstructionsAction(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CredentialsCompany);
