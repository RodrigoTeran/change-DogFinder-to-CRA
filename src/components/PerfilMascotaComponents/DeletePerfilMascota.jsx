import React, { useState } from "react";
import ButtonWhiteRectangle from "../Buttons/ButtonWhiteRectangle";
import { connect } from "react-redux";
import {
  eraseProfile
} from "../../routes/index";
import {
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";
const DeletePerfilMascota = ({
  getURL,
  updateSuccessMessagesComponent,
  setYesRedirectProp
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const eraseProfileFunction = () => {
    setIsLoading(true);
    fetch(`${eraseProfile}/${getURL()}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token")
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      setIsLoading(false);
      updateSuccessMessagesComponent({
        state: true,
        title: "Se borro el perfil",
        description: `Se borro el perfil con éxito`,
      })
      setYesRedirectProp();
    });
  };
  return (
    <>
      <div className={`pet-profile-page-delete`}>
        <ButtonWhiteRectangle text="Borrar Perfil"
          width="175px"
          height="50px"
          mt="mt-0"
          clickFunctionAnotherOne={eraseProfileFunction}
        >
          <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" /></svg>
        </ButtonWhiteRectangle>
      </div>
      {isLoading ? (
        <div className="loader-block" style={{
          paddingTop: "80px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
        </div>
      ) : (<></>)}
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeletePerfilMascota);