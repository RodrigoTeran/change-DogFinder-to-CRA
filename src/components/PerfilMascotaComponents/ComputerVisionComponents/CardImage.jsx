import React, { useEffect, useState } from "react";

const CardImage = ({
  typeOfCard,
  changeFunction,
  srcImage,
  key,
  nothing
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

  const deleteImage = () => {
    console.log("cd");
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
              <div key={key} className={`computer-vision-col col-lg-3 col-md-4 col-sm-6`} style={{ height: widthImg }}>
                <div className={`computer-vision-col-content`}>
                  <div className="computer-vision-col-content-button">
                    <div>
                      IMAGEN
                    </div>
                  </div>
                </div>
              </div>
            ) : (
                <div key={key} className={`computer-vision-col col-lg-3 col-md-4 col-sm-6`} style={{ height: widthImg }}>
                  <div className={`computer-vision-col-content`} style={{
                    backgroundImage: "url(" + srcImage + ")"
                  }}>
                    <div className="computer-vision-col-content-button" title="Eliminar Imagen" onClick={deleteImage}>
                      <div>
                        Eliminar
                            </div>
                      <div>
                        Imagen
                            </div>
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