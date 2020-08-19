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
  fontSize
}) => {
  return (
    <Link to={`${clickFunction}`}>
      <button className={`buttonWhiteRectangleStyles ${mb} ${mt}`} style={{
        fontSize: fontSize || "1.2rem",
        width: width,
        height: height
      }}>
        <div className="buttonWhiteRectangleStyles-container">
          <div className="buttonWhiteRectangleStyles-container-svg">
            {children}
          </div>
          <div className="buttonWhiteRectangleStyles-container-span">
            <span>{text}</span>
          </div>
        </div>
      </button>
    </Link>
  );
};
export default ButtonWhiteRectangle;