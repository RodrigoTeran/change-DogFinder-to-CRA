import React, { useEffect, useState } from "react";

const CardImage = ({
  typeOfCard
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
      <div className="computer-vision-col col-lg-3 col-md-4 col-sm-6" style={{
        height: widthImg
      }}>
        <div className={`computer-vision-col-content ${typeOfCard === "addImage" ? ("computer-vision-col-content-add-image") : ("")}`}
        title={`${typeOfCard === "addImage" ? ("Añadir imagen") : ("")}`}>
          {typeOfCard === "addImage" ? (
            <div className="computer-vision-col-content-add-image-text">
              AÑADIR IMAGEN
            </div>
          ) : (<>
            otro texto
          </>)}
        </div>
      </div>
    </>
  );
};

export default CardImage;
