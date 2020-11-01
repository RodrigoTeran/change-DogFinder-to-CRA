import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import ButtonWhiteRectangle from "../../Buttons/ButtonWhiteRectangle";

const CroppImages = ({
  srcImageYes,
  imageSrc,
  setImageSrc
}) => {
  const [imageDestination, setImageDestination] = useState("");
  const [firstScroll, setFirstScroll] = useState(false);

  const cropperRef = useRef();

  const _crop = () => {
    setImageDestination(cropperRef.current.getCroppedCanvas().toDataURL("image/png"));
  }

  const getTop = (component) => {
    return (parseInt(document.querySelector(component).getBoundingClientRect().top + document.scrollingElement.scrollTop - 110));
  };

  const onCropperInit = (cropper) => {
    cropperRef.current = cropper;
  };

  useEffect(() => {
    if (!firstScroll && srcImageYes) {
      window.scroll({ top: getTop(".cropper-container-my"), left: 0, behavior: 'smooth' });
      setFirstScroll(true);
    };
  })

  return (
    <div className="cropper-container-my" style={{
      paddingBottom: srcImageYes ? ("20px") : ("0px")
    }}>
      {srcImageYes ? (
        <>
          <div className="cropper-container-my-title">
            Recorta la imagen para que solo se vea su rostro
          </div>
          <div className="cropper-container-my-container-images">
            <div>
              <Cropper
                src={imageSrc}
                style={{
                  height: "300px",
                  width: "300px",
                }}
                initialAspectRatio={1}
                guides={true}
                aspectRatio={1}
                crop={_crop}
                onInitialized={onCropperInit}
                movable={false}
                viewMode={2}
              ></Cropper>
            </div>
            <div className="cropper-container-my-container-images-image">
              <img src={imageDestination}
                style={{
                  width: "300px",
                  height: "300px"
                }} alt="Imagen Recortada" />
            </div>
          </div>
          <div className="cropper-container-my-container-buttons">
            <ButtonWhiteRectangle text="Cancelar"
              width="300px"
              height="50px"
              mt="mt-3"
              red="redColor"
              clickFunctionAnotherOne={() => {
                setImageSrc()
                setFirstScroll(false);
              }}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
            </ButtonWhiteRectangle>
            <ButtonWhiteRectangle text="Subir imagen"
              width="300px"
              height="50px"
              mt="mt-3"
              green="greenColor"
              marginLeft={`${window.innerWidth < 1121 ? ("0px") : ("40px")}`}
              clickFunctionAnotherOne={() => { }}
            >
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" /></svg>
            </ButtonWhiteRectangle>
          </div>
        </>
      ) : (
          <div>
          </div>
        )}
    </div>
  );
}
export default CroppImages;