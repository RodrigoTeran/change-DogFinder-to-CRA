import React, { useState } from "react";
import dogBreeds from "../../utils/dataDogBreeds";

const InputDataList = ({
  title,
  subtext,
  closeFunction,
  sendFunction,
  isInputActivated
}) => {
  const [selectedData, setSelectedData] = useState("Seleccionar");
  const [dataOpen, setDataOpen] = useState(false);
  const [data, setData] = useState(dogBreeds);

  const changeData = (e) => {
    let dogName = e.target.value;
    let numberOfChars = dogName.length;
    let newData = dogBreeds.map(dog => {
      const substrName = dog.substr(0, numberOfChars);
      if (substrName === dogName) {
        return dog;
      };
    });
    let newDataSuper = newData.filter(dog => dog !== undefined);
    setData(newDataSuper);
  };
  return (
    <>
      <div className={`input-data-list ${isInputActivated ? ("") : ("closed")}`}>
        <button onClick={closeFunction} className="input-data-list-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
        </button>
        <div className="input-data-list-h1">
          {title}
        </div>
        <div className="input-data-list-subtext">
          {subtext}
        </div>
        <div className={`input-data-list-drop`}>
          <div className="input-data-list-drop-text" style={{
            justifyContent: dataOpen ? ("left") : ("center")
          }}>
            <div className={`input-data-list-drop-down ${dataOpen ? ("") : ("closed")}`}>
              <ul>
                {data.map(dog => {
                  return (
                    <li key={dog} onClick={() => {
                      setSelectedData(`${dog}`);
                      setDataOpen(false);
                    }}>
                      {dog}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div style={{
              cursor: "pointer"
            }} onClick={() => {
              if (dataOpen) { } else {
                setDataOpen(!dataOpen)
                setData(dogBreeds);
              };
            }}>
              {dataOpen ? (
                <div className="input-data-list-search">
                  <div>
                    <input type="text" name="" id="" placeholder={selectedData} className="input-data-list-input" onChange={changeData} />
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }} onClick={() => {
                    setDataOpen(!dataOpen);
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                  </div>
                </div>
              ) : (
                  <>
                    {selectedData}
                  </>
                )}
            </div>
          </div>
          <div>
            <button
              onClick={sendFunction}
              className="input-key-pay-button input-layout-text-form-button-send"
              style={{
                backgroundColor: "rgba(25, 25, 25, 1)",
                marginTop: "0px"
              }}>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputDataList;