// MODULES
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getWebp } from "../../store/reducers/user/selector";
import { getBackgroundPagesImage } from "../../store/reducers/indexPage/selector";
import ButtonWhite from "../Buttons/ButtonWhite";

const BackgroundImage = ({
  backgroundPagesImage,
  webp
}) => {
  const [display, setDisplay] = useState(false);

  const placeIndex = () => {  // Para poner al cliente en la primera sección de Index
    window.scroll({ top: window.innerHeight - 95, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    setDisplay(true);
  }, [])
  return (
    <>
      {/* Componente ya cargado*/}
      <div className={`background-pages-image 
        ${backgroundPagesImage.background_pages_image_1 ? (webp ? ("background-pages-image-1") : ("background-pages-image-1-png")) : ("")} ${backgroundPagesImage.background_pages_image_2 ? (webp ? ("background-pages-image-2") : ("background-pages-image-2-png")) : ("")} ${backgroundPagesImage.background_pages_image_3 ? (webp ? ("background-pages-image-3") : ("background-pages-image-3-png")) : ("")} ${!display ? ("display") : ("")}`}>
        <div className="row justify-content-center align-items-center" style={{
          height: "100%"
        }}
        >
          <div className="col text-center">
            <div className="container text-center d-flex align-items-center justify-content-center" style={{ flexDirection: "column" }}>
              <h1 className="text-back-h1">
                CUANDO UN PERRO SE PIERDE, TIENE UN 80% DE POSIBILIDAD DE <span className="span-text-back-h1">NUNCA</span> VOLVER A CASA...
                </h1>
              {backgroundPagesImage.background_pages_image_1 ? (
                <ButtonWhite text="¿Quiénes somos?" width="240px" height="60px" clickFunction={placeIndex}>
                  <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
                </ButtonWhite>
              ) : (<></>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// Las clases de REDUX
const mapStateToProps = (state) => {
  return {
    backgroundPagesImage: getBackgroundPagesImage(state),
    webp: getWebp(state)
  };
};
export default connect(mapStateToProps)(BackgroundImage);