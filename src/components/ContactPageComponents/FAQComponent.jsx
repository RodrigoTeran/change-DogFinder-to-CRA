import React, { useState } from "react";

const FAQComponentCardBig = ({
  colAmount,
  title,
  children,
  functionClick,
  animationScreenOpen,
  delayAnimation,
}) => {
  return (
    <>
      <div
        className={`faqComponent-screen-card-big ${colAmount} ${
          animationScreenOpen ? "open" : ""
        }`}
        style={{
          transitionDelay: delayAnimation,
        }}
      >
        <div
          className={`faqComponent-screen-card-big-inner`}
          onClick={functionClick}
        >
          <div>{children}</div>
          <div>{title}</div>
        </div>
      </div>
    </>
  );
};

const FAQComponent = () => {
  const [screen, setScreen] = useState(1);
  const [animationScreenOpen, setAnimationScreenOpen] = useState(true);
  const cambiarScreen = (numero) => {
    setTimeout(() => {
      setAnimationScreenOpen(true);
    }, 50);
    setScreen(numero);
  };

  const cambiarScreenPrimero = (delay, numero) => {
    // Que se cierre todo
    setAnimationScreenOpen(false);
    setTimeout(() => {
      cambiarScreen(numero);
    }, delay);
  };

  const distanceBetweenAnimations = 0.08;
  const howManyScreen1 = 6;
  const howManyScreen2 = 4;
  const transitionDuration = 0.1;

  return (
    <div className="faqComponent">
      <div className="faqComponent-whereIAM">
        {screen !== 1 ? (
          <>
            <div className="faqComponent-whereIAM-link"
              onClick={() => {
                if (screen === 2) {
                  cambiarScreenPrimero(
                    // howManyScreen2 por screen 2
                    howManyScreen2 * transitionDuration * 1000,
                    1
                  );
                }
              }}
            >
              Índice
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
              </svg>
            </div>
            <div>{screen === 2 ? "Producto" : ""}</div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="faqComponent-screen">
        <div className="row">
          {screen === 1 ? (
            <>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Producto"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 0}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    2
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Pagos"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 1}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    2
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0v320zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-32zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8v-16zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Problemas comunes"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 2}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    2
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Informe de errores"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 3}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    2
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Solicitud de características"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 4}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    2
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                  <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Preguntas de negocios"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 5}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    2
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
                </svg>
              </FAQComponentCardBig>
            </>
          ) : (
            <>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Mapa"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 0}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen2 * transitionDuration * 1000,
                    1
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Inteligencia Artificial"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 1}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen2 * transitionDuration * 1000,
                    1
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0v320zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-32zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8v-16zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Más contenido"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 2}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen2 * transitionDuration * 1000,
                    1
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                </svg>
              </FAQComponentCardBig>
              <FAQComponentCardBig
                colAmount="col-lg-4 col-md-6 col-sm-12"
                title="Notificaciones"
                animationScreenOpen={animationScreenOpen}
                delayAnimation={`${distanceBetweenAnimations * 3}s`}
                functionClick={() => {
                  cambiarScreenPrimero(
                    howManyScreen2 * transitionDuration * 1000,
                    1
                  );
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z" />
                </svg>
              </FAQComponentCardBig>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
