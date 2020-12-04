import React, { useState, useEffect } from "react";
import ButtonWhiteRectangle from "../../Buttons/ButtonWhiteRectangle";

const ChangeDescriptionCompany = ({
  userCompany
}) => {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [hasChanged, setHasChanged] = useState(false);
  useEffect(() => {
    setTotalCharacters(userCompany.informationCompania.length);
  }, []);
  return (
    <div className="change-description-textarea-company">
      <div className="change-description-textarea-company-title">
        Descripción de tu compañía
      </div>
      <textarea id="textarea-company-description" onChange={(e) => {
        if (e.target.value.length >= 901) {
          document.querySelector("#textarea-company-description").value = e.target.value.slice(0, 899);
        };
        setTotalCharacters(e.target.value.length);
        setHasChanged(true);
      }} defaultValue={userCompany.informationCompania}
        rows="10"
      >
      </textarea>
      <div className="change-description-textarea-company-numberChar">
        <div>
          Número de caracteres: {totalCharacters}
        </div>
        <div>
          Máximo número de caracteres: 900
        </div>
      </div>
      {hasChanged ? (
        <div className="change-description-textarea-company-hasChanged">
          <ButtonWhiteRectangle
            text="Guardar cambios"
            width={window.innerWidth < 768 ? ("100%") : ("45%")}
            height="50px"
            mt="mt-0"
            clickFunctionAnotherOne={() => { }}
          ></ButtonWhiteRectangle>
          <ButtonWhiteRectangle
            text="Cancelar cambios"
            width={window.innerWidth < 768 ? ("100%") : ("45%")}
            height="50px"
            mt="mt-0"
            clickFunctionAnotherOne={() => {
              setHasChanged(false);
              setTotalCharacters(userCompany.informationCompania.length);
              document.querySelector("#textarea-company-description").value = userCompany.informationCompania;

            }}
          ></ButtonWhiteRectangle>
        </div>
      ) : (<></>)}
    </div>
  )
};
export default ChangeDescriptionCompany;