import React from "react";
const InputFile = ({
  width,
  text,
  children,
  mt,
  changeFunction
}) => {
  return (
    <>
      <input onChange={changeFunction} type="file" name="file" id="file" className="inputfile" />
      <label htmlFor="file" className="input-special"
        style={{
          width: width,
          marginTop: mt
        }}>
        <div className="input-special-div">{children}</div>
        <div className="input-special-div"> {text}</div>
      </label>
    </>
  );
};

export default InputFile;
