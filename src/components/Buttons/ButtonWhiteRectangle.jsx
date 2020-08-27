// Modules
import React from "react";
import { Link } from "react-router-dom";

const ButtonWhiteRectangle = ({
  clickFunction,
  mb,
  mt,
  width,
  height,
  children,
  text,
  fontSize,
  clickFunctionAnotherOne
}) => {
  return (
    <>
      {clickFunctionAnotherOne ? (
        <button onClick={clickFunctionAnotherOne} className={`buttonWhiteRectangleStyles ${mb} ${mt}`} style={{
          fontSize: fontSize || "1.2rem",
          width: width,
          height: height
        }}>
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
            <button className={`buttonWhiteRectangleStyles ${mb} ${mt}`} style={{
              fontSize: fontSize || "1.2rem",
              width: width,
              height: height
            }}>
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
          </Link >
        )}
    </>
  );
};
export default ButtonWhiteRectangle;