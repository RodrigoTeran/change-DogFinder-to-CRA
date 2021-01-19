import React, { useState, useEffect } from "react";
import FormsCardComponent from "./FormsCardComponent";

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

const FAQComponentCardSmall = ({
  colAmount,
  question,
  children,
  animationScreenOpen,
  delayAnimation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`faqComponent-screen-card-small ${colAmount} ${
          animationScreenOpen ? "open" : ""
        }`}
        style={{
          transitionDelay: delayAnimation,
        }}
      >
        <div className={`faqComponent-screen-card-small-inner`}>
          <div className={`faqComponent-screen-card-small-inner-first-row`}>
            <div
              className={`faqComponent-screen-card-small-inner-q`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {question}
            </div>
            <div className={`faqComponent-screen-card-small-inner-svg`}>
              <svg
                className={`${isOpen ? "open" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </div>
          </div>

          <div
            className={`faqComponent-screen-card-small-inner-a ${
              isOpen ? "open" : ""
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

const FAQComponent = () => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const [stateForRender, setStateForRender] = useState(false);

  const handleResize = () => {
    setStateForRender(!stateForRender);
  };
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

  const [whereItCameFrom, setWhereItCameFrom] = useState(1);
  /**
   * 1 = solicitud de caracteristicas
   * 2 = preguntas de negocios
   * 3 = mapa still getting issues
   * 4 = notificaciones still getting issues
   * 5 = pagos still getting issues
   * 6 = problemas comunes still getting issues
   * 7 = Error misceláneo
   * 8 = Error severo
   */

  const distanceBetweenAnimations = 0.08;
  const transitionDuration = 0.1;
  const numberScreenOfForms = 10;

  const howManyScreen1 = 6;
  const howManyScreen2 = 4;
  const howManyScreen3 = 3;
  const howManyScreen4 = 3;
  const howManyScreen5 = 4;
  const howManyScreen6 = 2;
  const howManyScreen7 = 5;
  const howManyScreen8 = 5;
  const howManyScreen9 = 2;
  const howManyScreen10 = 1;

  /**
   * screen 1 = index
   * screen 2 = producto
   * screen 3 = mapa
   * screen 4 = IA
   * screen 5 = General
   * screen 6 = Notificaciones
   * screen 7 = Pagos
   * screen 8 = Problemas comunes
   * screen 9 = Bugs
   * screen 10 = FORMS CARD
   */

  return (
    <div className="faqComponent">
      {stateForRender ? (
        <div style={{ display: "none" }}>.</div>
      ) : (
        <div style={{ display: "none" }}>.</div>
      )}
      <div className="faqComponent-h1">Preguntas Frecuentes</div>
      <div className="faqComponent-hr"></div>
      <div className="faqComponent-h2">
        Si tienes una pregunta o estas experimentando algun problema con la
        plataforma puedes mandarnos un mensaje y/o checar las preguntas más
        frecuentes.
      </div>
      <div className="faqComponent-ask">¿En qué te puedo ayudar?</div>
      <div className="faqComponent-whereIAM">
        {screen !== 1 ? (
          <>
            <div
              className="faqComponent-whereIAM-link"
              onClick={() => {
                if (screen === 2) {
                  cambiarScreenPrimero(
                    // howManyScreen2 por screen 2
                    howManyScreen2 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 3) {
                  cambiarScreenPrimero(
                    // howManyScreen3 por screen 3
                    howManyScreen3 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 4) {
                  cambiarScreenPrimero(
                    // howManyScreen4 por screen 4
                    howManyScreen4 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 5) {
                  cambiarScreenPrimero(
                    // howManyScreen5 por screen 5
                    howManyScreen5 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 6) {
                  cambiarScreenPrimero(
                    // howManyScreen6 por screen 6
                    howManyScreen6 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 7) {
                  cambiarScreenPrimero(
                    // howManyScreen7 por screen 7
                    howManyScreen7 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 8) {
                  cambiarScreenPrimero(
                    // howManyScreen8 por screen 8
                    howManyScreen8 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 9) {
                  cambiarScreenPrimero(
                    // howManyScreen9 por screen 9
                    howManyScreen9 * transitionDuration * 1000,
                    1
                  );
                } else if (screen === 10) {
                  cambiarScreenPrimero(
                    // howManyScreen10 por screen 10
                    howManyScreen10 * transitionDuration * 1000,
                    1
                  );
                }
              }}
            >
              Índice
            </div>
            {screen === 2 ? (
              <>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                  </svg>
                </div>
                <div>Producto</div>
              </>
            ) : (
              <>
                {screen === 3 ? (
                  <>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                      </svg>
                    </div>
                    <div
                      className="faqComponent-whereIAM-link"
                      onClick={() => {
                        cambiarScreenPrimero(
                          // howManyScreen3 por screen 3
                          howManyScreen3 * transitionDuration * 1000,
                          2
                        );
                      }}
                    >
                      Producto
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                      </svg>
                    </div>
                    <div>Mapa</div>
                  </>
                ) : (
                  <>
                    {screen === 4 ? (
                      <>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                          </svg>
                        </div>
                        <div
                          className="faqComponent-whereIAM-link"
                          onClick={() => {
                            cambiarScreenPrimero(
                              // howManyScreen4 por screen 4
                              howManyScreen4 * transitionDuration * 1000,
                              2
                            );
                          }}
                        >
                          Producto
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                          </svg>
                        </div>
                        <div>Inteligencia Artificial</div>
                      </>
                    ) : (
                      <>
                        {screen === 5 ? (
                          <>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                              </svg>
                            </div>
                            <div
                              className="faqComponent-whereIAM-link"
                              onClick={() => {
                                cambiarScreenPrimero(
                                  // howManyScreen5 por screen 5
                                  howManyScreen5 * transitionDuration * 1000,
                                  2
                                );
                              }}
                            >
                              Producto
                            </div>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                              </svg>
                            </div>
                            <div>General</div>
                          </>
                        ) : (
                          <>
                            {screen === 6 ? (
                              <>
                                <div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                  >
                                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                  </svg>
                                </div>
                                <div
                                  className="faqComponent-whereIAM-link"
                                  onClick={() => {
                                    cambiarScreenPrimero(
                                      // howManyScreen6 por screen 6
                                      howManyScreen6 *
                                        transitionDuration *
                                        1000,
                                      2
                                    );
                                  }}
                                >
                                  Producto
                                </div>
                                <div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                  >
                                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                  </svg>
                                </div>
                                <div>Notificaciones</div>
                              </>
                            ) : (
                              <>
                                {screen === 7 ? (
                                  <>
                                    <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                      >
                                        <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                      </svg>
                                    </div>
                                    <div>Pagos</div>
                                  </>
                                ) : (
                                  <>
                                    {screen === 8 ? (
                                      <>
                                        <div>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                          >
                                            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                          </svg>
                                        </div>
                                        <div>Problemas comunes</div>
                                      </>
                                    ) : (
                                      <>
                                        {screen === 9 ? (
                                          <>
                                            <div>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                              >
                                                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                              </svg>
                                            </div>
                                            <div>Informe de errores</div>
                                          </>
                                        ) : (
                                          <>
                                            {/* Screen 10 */}
                                            <div>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                              >
                                                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                              </svg>
                                            </div>
                                            <div>
                                              {
                                                whereItCameFrom === 1
                                                  ? "Solicitud de caracteristicas"
                                                  : whereItCameFrom === 2
                                                  ? "Preguntas de negocios"
                                                  : whereItCameFrom === 3
                                                  ? "Mapa errores"
                                                  : whereItCameFrom === 4
                                                  ? "Notificaciones errores"
                                                  : whereItCameFrom === 5
                                                  ? "Pagos errores"
                                                  : whereItCameFrom === 6
                                                  ? "Problemas comunes errores"
                                                  : whereItCameFrom === 7
                                                  ? "Error misceláneo"
                                                  : "Error de seguridad"
                                                /**
                                                 * 1 = solicitud de caracteristicas
                                                 * 2 = preguntas de negocios
                                                 * 3 = mapa still getting issues
                                                 * 4 = notificaciones still getting issues
                                                 * 5 = pagos still getting issues
                                                 * 6 = problemas comunes still getting issues
                                                 * 7 = Error misceláneo
                                                 * 8 = Error severo
                                                 */
                                              }
                                            </div>
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="faqComponent-screen">
        <div className="row">
          {screen === 1 ? (
            /*SCREEN 1 INDEX*/
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
                    7
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
                    8
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
                    9
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
                  setWhereItCameFrom(1);
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    numberScreenOfForms
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
                  setWhereItCameFrom(2);
                  cambiarScreenPrimero(
                    howManyScreen1 * transitionDuration * 1000,
                    numberScreenOfForms
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
              {screen === 2 ? (
                /*SCREEN 2 PRODUCTO*/
                <>
                  <FAQComponentCardBig
                    colAmount="col-lg-4 col-md-6 col-sm-12"
                    title="Mapa"
                    animationScreenOpen={animationScreenOpen}
                    delayAnimation={`${distanceBetweenAnimations * 0}s`}
                    functionClick={() => {
                      cambiarScreenPrimero(
                        howManyScreen2 * transitionDuration * 1000,
                        3
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
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
                        4
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" />
                    </svg>
                  </FAQComponentCardBig>
                  <FAQComponentCardBig
                    colAmount="col-lg-4 col-md-6 col-sm-12"
                    title="General"
                    animationScreenOpen={animationScreenOpen}
                    delayAnimation={`${distanceBetweenAnimations * 2}s`}
                    functionClick={() => {
                      cambiarScreenPrimero(
                        howManyScreen2 * transitionDuration * 1000,
                        5
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                    </svg>
                  </FAQComponentCardBig>
                  <FAQComponentCardBig
                    colAmount="col-lg-12 col-md-6 col-sm-12"
                    title="Notificaciones"
                    animationScreenOpen={animationScreenOpen}
                    delayAnimation={`${distanceBetweenAnimations * 3}s`}
                    functionClick={() => {
                      cambiarScreenPrimero(
                        howManyScreen2 * transitionDuration * 1000,
                        6
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" />
                    </svg>
                  </FAQComponentCardBig>
                </>
              ) : (
                <>
                  {screen === 3 ? (
                    /*SCREEN 3 MAPA*/
                    <>
                      <FAQComponentCardSmall
                        colAmount="col-12"
                        question="¿Por qué tengo que dar a conocer mi ubicación actual?"
                        animationScreenOpen={animationScreenOpen}
                        delayAnimation={`${distanceBetweenAnimations * 0}s`}
                      >
                        Porque así podremos mostrarte la información más
                        relevante para ti. No compartiremos tu ubicación con
                        nadie.
                      </FAQComponentCardSmall>
                      <FAQComponentCardSmall
                        colAmount="col-12"
                        question="¿Por qué no me carga el mapa?"
                        animationScreenOpen={animationScreenOpen}
                        delayAnimation={`${distanceBetweenAnimations * 1}s`}
                      >
                        Lo más probable es porque bloqueaste el uso de compartir
                        la ubicación. Si no es así... mándanos mensaje en la
                        sección de errores.
                      </FAQComponentCardSmall>
                      <FAQComponentCardSmall
                        colAmount="col-12"
                        question="¿Por qué no puedo ver la información de contacto en el mapa?"
                        animationScreenOpen={animationScreenOpen}
                        delayAnimation={`${distanceBetweenAnimations * 2}s`}
                      >
                        Mantenemos en privado la información de cada quien hasta
                        que realmente se necesite. Cuando hagas "match" con
                        algún usuario se le notificará a esa persona. De esta
                        manera cada quien sabe quien esta viendo su información.
                      </FAQComponentCardSmall>
                      <div className="still-getting-issues">
                        <div>
                          ¿Sigues teniendo problemas o quieres informar algo?
                        </div>
                        <div
                          className="faqComponent-whereIAM-link"
                          onClick={() => {
                            setWhereItCameFrom(3);
                            cambiarScreenPrimero(
                              howManyScreen3 * transitionDuration * 1000,
                              numberScreenOfForms
                            );
                          }}
                        >
                          Contáctenos.
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {screen === 4 ? (
                        /*SCREEN 4 IA*/
                        <>
                          <FAQComponentCardSmall
                            colAmount="col-12"
                            question="¿Qué tan eficiente es la IA?"
                            animationScreenOpen={animationScreenOpen}
                            delayAnimation={`${distanceBetweenAnimations * 0}s`}
                          >
                            Es demasiado eficiente. La tecnología de
                            reconocimiento facial con los filtros (color,
                            raza... etc) tienen una taza de efectividad superior
                            al 95%
                          </FAQComponentCardSmall>
                          <FAQComponentCardSmall
                            colAmount="col-12"
                            question="¿La IA no busca información privada mía en redes sociales?"
                            animationScreenOpen={animationScreenOpen}
                            delayAnimation={`${distanceBetweenAnimations * 1}s`}
                          >
                            La IA que se desarrolló para esta plataforma. A
                            futuro, implementaremos bots que rastren información
                            de perros perdidos en las redes sociales. Pero jamás
                            buscaremos información privada.
                          </FAQComponentCardSmall>
                          <FAQComponentCardSmall
                            colAmount="col-12"
                            question="¿Qué tan rápido se comparan los datos?"
                            animationScreenOpen={animationScreenOpen}
                            delayAnimation={`${distanceBetweenAnimations * 2}s`}
                          >
                            La capacidad de computación de la IA es de la más
                            avanzada. Esta estructurada con las mejores
                            tecnologías actuales.
                          </FAQComponentCardSmall>
                        </>
                      ) : (
                        <>
                          {screen === 5 ? (
                            /*SCREEN 5 GENERAL*/
                            <>
                              <FAQComponentCardSmall
                                colAmount="col-12"
                                question="¿Habrá más funcionalidades en la plataforma?"
                                animationScreenOpen={animationScreenOpen}
                                delayAnimation={`${
                                  distanceBetweenAnimations * 0
                                }s`}
                              >
                                Claro, a lo largo del 2021 saldrán más
                                herramientas que faciliten el encontrar a los
                                perros perdidos.
                              </FAQComponentCardSmall>
                              <FAQComponentCardSmall
                                colAmount="col-12"
                                question="¿Si ya tenía el premium y salen nuevas cosas, podré acceder a ellas?"
                                animationScreenOpen={animationScreenOpen}
                                delayAnimation={`${
                                  distanceBetweenAnimations * 1
                                }s`}
                              >
                                Claro, una vez que tienes cuenta premium es
                                acceso para toda la vida a funcionalidades
                                avanzadas. Esto aunque el precio por la cuenta
                                premium suba.
                              </FAQComponentCardSmall>
                              <FAQComponentCardSmall
                                colAmount="col-12"
                                question="¿Cómo registro a mi empresa en el mapa?"
                                animationScreenOpen={animationScreenOpen}
                                delayAnimation={`${
                                  distanceBetweenAnimations * 2
                                }s`}
                              >
                                En esta página, en el recuadro de "Preguntas de
                                negocios"... ahí saldrá el forms para que nos
                                puedas enviar un correo.
                              </FAQComponentCardSmall>
                              <FAQComponentCardSmall
                                colAmount="col-12"
                                question="¿Qué información ven las personas de mí?"
                                animationScreenOpen={animationScreenOpen}
                                delayAnimation={`${
                                  distanceBetweenAnimations * 3
                                }s`}
                              >
                                Solo la información que pones de contacto... No
                                la de tu cuenta. Y claro, los perfiles que hagas
                                son públicos.
                              </FAQComponentCardSmall>
                            </>
                          ) : (
                            <>
                              {screen === 6 ? (
                                /*SCREEN 6 NOTIFICACIONES*/
                                <>
                                  <FAQComponentCardSmall
                                    colAmount="col-12"
                                    question="Me salen alertas rojas en la plataforma"
                                    animationScreenOpen={animationScreenOpen}
                                    delayAnimation={`${
                                      distanceBetweenAnimations * 0
                                    }s`}
                                  >
                                    Estas alertas o notificaciones son un
                                    seguimiento a cada acción que haces en la
                                    plataforma. Si te ha salido una de color
                                    rojo significa que algo hiciste mal, o que
                                    el tipo de dato que se espera que pongas fue
                                    el incorrecto. Si el error persiste,
                                    escribenos en la sección de "Informe de
                                    errores"
                                  </FAQComponentCardSmall>
                                  <FAQComponentCardSmall
                                    colAmount="col-12"
                                    question="¿Al dar mi correo y número me llegará publicidad?"
                                    animationScreenOpen={animationScreenOpen}
                                    delayAnimation={`${
                                      distanceBetweenAnimations * 1
                                    }s`}
                                  >
                                    No, no utlizamos estos medios para hacer
                                    publicidad o spam... El propósito es que se
                                    te pueda contactar siempre cuando otro
                                    usuario de la plataforma lo necesite.
                                  </FAQComponentCardSmall>
                                  <div className="still-getting-issues">
                                    <div>
                                      ¿Sigues teniendo problemas o quieres
                                      informar algo?
                                    </div>
                                    <div
                                      className="faqComponent-whereIAM-link"
                                      onClick={() => {
                                        setWhereItCameFrom(4);
                                        cambiarScreenPrimero(
                                          howManyScreen6 *
                                            transitionDuration *
                                            1000,
                                          numberScreenOfForms
                                        );
                                      }}
                                    >
                                      Contáctenos.
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {screen === 7 ? (
                                    /*SCREEN 7 PAGOS*/
                                    <>
                                      <FAQComponentCardSmall
                                        colAmount="col-12"
                                        question="¿Dónde consigo los descuentos?"
                                        animationScreenOpen={
                                          animationScreenOpen
                                        }
                                        delayAnimation={`${
                                          distanceBetweenAnimations * 0
                                        }s`}
                                      >
                                        Con las empresas afiliadas a nuestra
                                        plataforma (las que ves en el mapa). Al
                                        interactuar con esas empresas te
                                        ofrecerán un código de descuento en la
                                        plataforma. Solo aplica el 10%. Si te
                                        ofrecen más o menos descuento es un
                                        engaño.
                                      </FAQComponentCardSmall>
                                      <FAQComponentCardSmall
                                        colAmount="col-12"
                                        question="¿Cuál es su política de reembolso?"
                                        animationScreenOpen={
                                          animationScreenOpen
                                        }
                                        delayAnimation={`${
                                          distanceBetweenAnimations * 1
                                        }s`}
                                      >
                                        No ofrecemos reembolsos bajo ninguna
                                        circunstancia. Puedes probar nuestra
                                        plataforma en su contenido gratuito para
                                        decidir si le das el visto bueno al
                                        servicio.
                                      </FAQComponentCardSmall>
                                      <FAQComponentCardSmall
                                        colAmount="col-12"
                                        question="Mi pago está siendo rechazado. ¿Cómo puedo comprar?"
                                        animationScreenOpen={
                                          animationScreenOpen
                                        }
                                        delayAnimation={`${
                                          distanceBetweenAnimations * 2
                                        }s`}
                                      >
                                        Si se rechaza su pago, es probable que
                                        se deba a que su cuenta bancaria no está
                                        configurada para manejar pagos
                                        internacionales. Si persiste el error,
                                        desafortunadamente, no hay nada que
                                        podamos hacer para ayudar, ya que las
                                        transacciones son manejadas enteramente
                                        por Stripe, nuestro procesador de pago.
                                      </FAQComponentCardSmall>
                                      <FAQComponentCardSmall
                                        colAmount="col-12"
                                        question="¿Puedo comprar el premium (para una empresa, por ejemplo)?"
                                        animationScreenOpen={
                                          animationScreenOpen
                                        }
                                        delayAnimation={`${
                                          distanceBetweenAnimations * 3
                                        }s`}
                                      >
                                        Actualmente no ofrecemos esas
                                        funcionalidades. Solo se puede comprar
                                        el premium por cuenta.
                                      </FAQComponentCardSmall>
                                      <FAQComponentCardSmall
                                        colAmount="col-12"
                                        question="¿Puedo obtener un recibo de mi compra?"
                                        animationScreenOpen={
                                          animationScreenOpen
                                        }
                                        delayAnimation={`${
                                          distanceBetweenAnimations * 4
                                        }s`}
                                      >
                                        Debería recibir un recibo por correo
                                        electrónico en la compra del premium. Si
                                        no lo tiene, desafortunadamente, no hay
                                        nada que podamos hacer para ayudar, ya
                                        que las transacciones son manejadas
                                        enteramente por Stripe, nuestro
                                        procesador de pago.
                                      </FAQComponentCardSmall>
                                      <div className="still-getting-issues">
                                        <div>
                                          ¿Sigues teniendo problemas o quieres
                                          informar algo?
                                        </div>
                                        <div
                                          className="faqComponent-whereIAM-link"
                                          onClick={() => {
                                            setWhereItCameFrom(5);
                                            cambiarScreenPrimero(
                                              howManyScreen7 *
                                                transitionDuration *
                                                1000,
                                              numberScreenOfForms
                                            );
                                          }}
                                        >
                                          Contáctenos.
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {screen === 8 ? (
                                        /*SCREEN 8 PROBLEMAS COMUNES*/
                                        <>
                                          <FAQComponentCardSmall
                                            colAmount="col-12"
                                            question="Compré el premium, pero cuando inicio sesión, no me sale el premium"
                                            animationScreenOpen={
                                              animationScreenOpen
                                            }
                                            delayAnimation={`${
                                              distanceBetweenAnimations * 0
                                            }s`}
                                          >
                                            Es probable que haya iniciado sesión
                                            con una cuenta diferente a la que
                                            tenía cuando compró. La cuenta con
                                            la que inició sesión cuando compra
                                            es aquella a la que está vinculado
                                            su acceso premium.
                                          </FAQComponentCardSmall>
                                          <FAQComponentCardSmall
                                            colAmount="col-12"
                                            question="Me desconectó automáticamente de mi cuenta. ¿Por qué?"
                                            animationScreenOpen={
                                              animationScreenOpen
                                            }
                                            delayAnimation={`${
                                              distanceBetweenAnimations * 1
                                            }s`}
                                          >
                                            Empleamos tecnología de inicio de
                                            sesión único que solo le permite
                                            iniciar sesión en su cuenta desde un
                                            dispositivo activo en un momento
                                            dado.
                                          </FAQComponentCardSmall>
                                          <FAQComponentCardSmall
                                            colAmount="col-12"
                                            question="¿Puedo iniciar sesión de forma diferente que Google o Facebook?"
                                            animationScreenOpen={
                                              animationScreenOpen
                                            }
                                            delayAnimation={`${
                                              distanceBetweenAnimations * 2
                                            }s`}
                                          >
                                            No, no admitimos combinaciones
                                            personalizadas de nombre de usuario
                                            y contraseña. Nuestro sistema
                                            aprovecha la seguridad y la
                                            simplicidad de la autenticación de
                                            Google y Facebook. Nunca
                                            interactuamos con sus contraseñas.
                                          </FAQComponentCardSmall>
                                          <FAQComponentCardSmall
                                            colAmount="col-12"
                                            question="Quiero cambiar el inicio de sesión de mi cuenta. ¿Como lo puedo hacer?"
                                            animationScreenOpen={
                                              animationScreenOpen
                                            }
                                            delayAnimation={`${
                                              distanceBetweenAnimations * 3
                                            }s`}
                                          >
                                            Actualmente no se puede transferir
                                            las cuentas.
                                          </FAQComponentCardSmall>
                                          <FAQComponentCardSmall
                                            colAmount="col-12"
                                            question="No me llegó alguna clave que se supone me envió la página."
                                            animationScreenOpen={
                                              animationScreenOpen
                                            }
                                            delayAnimation={`${
                                              distanceBetweenAnimations * 4
                                            }s`}
                                          >
                                            Lo más probable es porque el correo
                                            lo hayas escrito mal. También puede
                                            ser que la clave le llegó a spam. Si
                                            el problema continúa, contáctenos.
                                          </FAQComponentCardSmall>
                                          <div className="still-getting-issues">
                                            <div>
                                              ¿Sigues teniendo problemas o
                                              quieres informar algo?
                                            </div>
                                            <div
                                              className="faqComponent-whereIAM-link"
                                              onClick={() => {
                                                setWhereItCameFrom(6);
                                                cambiarScreenPrimero(
                                                  howManyScreen8 *
                                                    transitionDuration *
                                                    1000,
                                                  numberScreenOfForms
                                                );
                                              }}
                                            >
                                              Contáctenos.
                                            </div>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          {screen === 9 ? (
                                            /*SCREEN 9 ERRORES*/
                                            <>
                                              <FAQComponentCardBig
                                                colAmount="col-lg-6 col-md-6 col-sm-12"
                                                title="Error misceláneo"
                                                animationScreenOpen={
                                                  animationScreenOpen
                                                }
                                                delayAnimation={`${
                                                  distanceBetweenAnimations * 0
                                                }s`}
                                                functionClick={() => {
                                                  setWhereItCameFrom(7);
                                                  cambiarScreenPrimero(
                                                    howManyScreen9 *
                                                      transitionDuration *
                                                      1000,
                                                    numberScreenOfForms
                                                  );
                                                }}
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z" />
                                                </svg>
                                              </FAQComponentCardBig>
                                              <FAQComponentCardBig
                                                colAmount="col-lg-6 col-md-6 col-sm-12"
                                                title="Error de seguridad (programa de recompensas por errores)"
                                                animationScreenOpen={
                                                  animationScreenOpen
                                                }
                                                delayAnimation={`${
                                                  distanceBetweenAnimations * 1
                                                }s`}
                                                functionClick={() => {
                                                  setWhereItCameFrom(8);
                                                  cambiarScreenPrimero(
                                                    howManyScreen9 *
                                                      transitionDuration *
                                                      1000,
                                                    numberScreenOfForms
                                                  );
                                                }}
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 448 512"
                                                >
                                                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
                                                </svg>
                                              </FAQComponentCardBig>
                                            </>
                                          ) : (
                                            <>
                                              {/* SCREEN 10 */}
                                              <FormsCardComponent
                                                whereItCameFrom={
                                                  whereItCameFrom
                                                }
                                                colAmount="col-12"
                                                animationScreenOpen={
                                                  animationScreenOpen
                                                }
                                                delayAnimation={`${
                                                  distanceBetweenAnimations * 0
                                                }s`}
                                              ></FormsCardComponent>
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
