import React, { useEffect, useState } from "react";

const CardImage = ({
  typeOfCard,
  changeFunction,
  srcImage,
  key
}) => {

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const [widthImg, setWidthImage] = useState("0px");
  const [widthImgImg, setWidthImageImg] = useState("0px");
  const handleResize = () => {
    const img = document.querySelector(".computer-vision-col");
    var estilos = window.getComputedStyle(img, null);
    var ancho = estilos.getPropertyValue("width");
    setWidthImage(ancho);
    handleResizeImages();
  };

  const handleResizeImages = () => {
    const img = document.querySelector(".computer-vision-col-content");
    var estilos = window.getComputedStyle(img, null);
    var ancho = estilos.getPropertyValue("width");
    setWidthImageImg(ancho);
  };

  return (
    <>
      {typeOfCard === "addImage" ? (
        <>
          <input onChange={changeFunction} type="file" name="file" id="fileNewImageXd" className="inputfile inputfileCroppr" />
          <label htmlFor="fileNewImageXd" className="computer-vision-col-add-image" style={{
            width: window.innerWidth < 1121 ? ("100%") : ("300px")
          }} >
            <div className={`computer-vision-col-content computer-vision-col-content-add-image`} title="Añadir imagen">
              <div className="computer-vision-col-content-add-image-text">
                AÑADIR IMAGEN
              </div>
            </div>
          </label>
        </>
      ) : (
          <div key={key} className={`computer-vision-col col-lg-3 col-md-4 col-sm-6`} style={{ height: widthImg }}>
            <div className={`computer-vision-col-content`} style={{
              backgroundImage: "url(" + srcImage + ")"
            }}>
              <div>

              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default CardImage;
