import React from "react";
import { connect } from "react-redux";

// Selectores
import {
  getMessagesComponent
} from "../store/reducers/layout/selector";

// Acciones
import {
  updateMessagesComponentAction
} from "../store/reducers/layout/actions";

const MessagesComponent = ({
  messagesComponent,
  updateMessagesComponent
}) => {
  const closeComponent = () => {
    updateMessagesComponent({
      state: false,
      title: messagesComponent.title,
      description: messagesComponent.description,
      type: messagesComponent.type
    });
  };
  return (
    <>
      <div className={`messages-component-black-wall ${messagesComponent.state ? ("") : ("close")}`} onClick={closeComponent}></div>
      {messagesComponent.type === "success" ? (
        <div className={`messages-component ${messagesComponent.state ? ("") : ("close")} messages-component-success`}>
          <div className="messages-component-title">
            {messagesComponent.title}
          </div>
          <div className="messages-component-description">
            {messagesComponent.description}
          </div>
          <button onClick={closeComponent} className={`messages-component-button ${messagesComponent.state ? ("") : ("close")}`}>
            <svg className="messages-component-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
          </button>
        </div>
      ) : (messagesComponent.type === "error" ? (
        <div className={`messages-component ${messagesComponent.state ? ("") : ("close")} messages-component-error`}>
          <div className="messages-component-title">
            {messagesComponent.title}
          </div>
          <div className="messages-component-description">
            {messagesComponent.description}
          </div>
          <button onClick={closeComponent} className={`messages-component-button ${messagesComponent.state ? ("") : ("close")}`}>
            <svg className="messages-component-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
          </button>
        </div>
      ) : (<></>)
        )}
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    messagesComponent: getMessagesComponent(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateMessagesComponent: (data) => { dispatch(updateMessagesComponentAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MessagesComponent);