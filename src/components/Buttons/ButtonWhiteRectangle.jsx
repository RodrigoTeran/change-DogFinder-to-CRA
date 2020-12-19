// Modules
import React from "react";
import { Link } from "react-router-dom";

const ButtonWhiteRectangle = ({
  clickFunction,
  mb,
  mt,
  width,
  marginLeft,
  height,
  children,
  text,
  fontSize,
  clickFunctionAnotherOne,
  noClick,
  red,
  redDif,
  green,
  greenDif,
  sad,
  backgroundColorRectangle,
  colorText,
  bold,
  relative,
}) => {
  return (
    <>
      {noClick ? (
        <button
          className={`buttonWhiteRectangleStyles ${mb} ${mt} ${red} ${green} ${greenDif} ${sad} ${redDif}`}
          style={{
            fontSize: fontSize || "1.2rem",
            width: width,
            height: height,
            marginLeft: marginLeft,
            backgroundColor: backgroundColorRectangle,
            color: colorText,
            fontWeight: bold,
            position: relative,
          }}
        >
          <div className="buttonWhiteRectangleStyles-container">
            {children ? (
              <div className="buttonWhiteRectangleStyles-container-svg">
                {children}
              </div>
            ) : (
              <></>
            )}
            {children ? (
              <div className="buttonWhiteRectangleStyles-container-span">
                <span>{text}</span>
              </div>
            ) : (
              <div className="buttonWhiteRectangleStyles-container-span">
                <span style={{ marginLeft: "0px" }}>{text}</span>
              </div>
            )}
          </div>
        </button>
      ) : (
        <>
          {clickFunctionAnotherOne ? (
            <button
              onClick={clickFunctionAnotherOne}
              className={`buttonWhiteRectangleStyles ${mb} ${mt} ${red} ${green} ${greenDif} ${sad} ${redDif}`}
              style={{
                fontSize: fontSize || "1.2rem",
                width: width,
                height: height,
                marginLeft: marginLeft,
                backgroundColor: backgroundColorRectangle,
                color: colorText,
                position: relative,
              }}
            >
              <div className="buttonWhiteRectangleStyles-container">
                {children ? (
                  <div className="buttonWhiteRectangleStyles-container-svg">
                    {children}
                  </div>
                ) : (
                  <></>
                )}
                {children ? (
                  <div className="buttonWhiteRectangleStyles-container-span">
                    <span>{text}</span>
                  </div>
                ) : (
                  <div className="buttonWhiteRectangleStyles-container-span">
                    <span style={{ marginLeft: "0px" }}>{text}</span>
                  </div>
                )}
              </div>
            </button>
          ) : (
            <Link to={`${clickFunction}`}>
              <button
                className={`buttonWhiteRectangleStyles ${mb} ${mt} ${red} ${green} ${greenDif} ${sad} ${redDif}`}
                style={{
                  fontSize: fontSize || "1.2rem",
                  width: width,
                  height: height,
                  marginLeft: marginLeft,
                  backgroundColor: backgroundColorRectangle,
                  color: colorText,
                  position: relative,
                }}
              >
                <div className="buttonWhiteRectangleStyles-container">
                  {children ? (
                    <div className="buttonWhiteRectangleStyles-container-svg">
                      {children}
                    </div>
                  ) : (
                    <></>
                  )}
                  {children ? (
                    <div className="buttonWhiteRectangleStyles-container-span">
                      <span>{text}</span>
                    </div>
                  ) : (
                    <div className="buttonWhiteRectangleStyles-container-span">
                      <span style={{ marginLeft: "0px" }}>{text}</span>
                    </div>
                  )}
                </div>
              </button>
            </Link>
          )}
        </>
      )}
    </>
  );
};
export default ButtonWhiteRectangle;
