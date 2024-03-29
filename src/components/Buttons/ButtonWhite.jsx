// Modules
import React from "react";
import { Link } from "react-router-dom";
const ButtonWhite = ({
  clickFunction,
  mb,
  mt,
  width,
  height,
  children,
  text,
  fontSize,
  clickToLink,
}) => {
  return (
    <>
      {clickToLink ? (
        <Link to={`${clickToLink}`}>
          <button
            className={`buttonWhiteStyles ${mb} ${mt}`}
            style={{
              fontSize: fontSize || "1.2rem",
              width: width,
              height: height,
            }}
          >
            <div className="buttonWhiteStyles-container">
              {children ? (
                <div className="buttonWhiteStyles-container-svg">
                  {children}
                </div>
              ) : (
                <></>
              )}
              <div
                className="buttonWhiteStyles-container-span"
                style={{
                  marginLeft: children ? "10px" : "0px",
                }}
              >
                <span>{text}</span>
              </div>
            </div>
          </button>
        </Link>
      ) : (
        <button
          onClick={clickFunction}
          className={`buttonWhiteStyles ${mb} ${mt}`}
          style={{
            fontSize: fontSize || "1.2rem",
            width: width,
            height: height,
          }}
        >
          <div className="buttonWhiteStyles-container">
            {children ? (
              <div className="buttonWhiteStyles-container-svg">{children}</div>
            ) : (
              <></>
            )}
            <div
              className="buttonWhiteStyles-container-span"
              style={{
                marginLeft: children ? "10px" : "0px",
              }}
            >
              <span>{text}</span>
            </div>
          </div>
        </button>
      )}
    </>
  );
};
export default ButtonWhite;
