import React, { useEffect, useState } from "react";

const CardImage = ({
  typeOfCard,
  changeFunction,
  srcImage,
  nothing,

  handleDeleteImage,
  randomId,
  nowSRCImage
}) => {

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [widthImg, setWidthImage] = useState("0px");

  const handleResize = () => {
    const img = document.querySelector(".computer-vision-col");
    var estilos = window.getComputedStyle(img, null);
    var ancho = estilos.getPropertyValue("width");
    setWidthImage(ancho);
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
          <>
            {nothing ? (
              <div className={`computer-vision-col col-lg-3 col-md-4 col-sm-6`} style={{ height: widthImg }}>
                <div className={`computer-vision-col-content-2`}>
                  <div className="computer-vision-col-content-button-2">
                    <div>
                      IMAGEN
                    </div>
                  </div>
                </div>
              </div>
            ) : (
                <div className={`computer-vision-col col-lg-3 col-md-4 col-sm-6`} style={{ height: widthImg }}>
                  <div className={`computer-vision-col-content`} style={{
                    backgroundImage: "url(" + srcImage + ")"
                  }}>
                    <div style={{ cursor: "pointer" }} className={`computer-vision-col-content-button`} title="Eliminar Imagen" onClick={() => nowSRCImage(srcImage)}>
                      <input onChange={handleDeleteImage} type="file" name="file" id={randomId} className="inputfile inputfileCroppr" />
                      <label htmlFor={randomId} style={{ cursor: "pointer" }}>
                        <div>
                          Cambiar
                        </div>
                        <div>
                          Imagen
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
          </>
        )}
    </>
  );
};

export default CardImage;
