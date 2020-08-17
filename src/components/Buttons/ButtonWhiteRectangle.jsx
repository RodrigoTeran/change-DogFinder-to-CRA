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
    <button onClick={clickFunction} className={`buttonWhiteRectangleStyles ${mb} ${mt}`} style={{
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
  );
};
export default ButtonWhiteRectangle;