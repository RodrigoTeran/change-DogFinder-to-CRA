import React from "react";
import { connect } from "react-redux";

// Selectores
import {
  getSuccessMessagesComponent
} from "../../store/reducers/layout/selector";

// Acciones
import {
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

const SuccessMessagesComponent = ({
  successMessagesComponent,
  updateSuccessMessagesComponent
}) => {
  const closeComponent = () => {
    updateSuccessMessagesComponent({
      state: false,
      title: successMessagesComponent.title,
      description: successMessagesComponent.description,
    });
  };
  const { state, title, description } = successMessagesComponent;
  return (
    <>
      <div className={`messages-component-black-wall ${state ? ("") : ("close")}`} onClick={closeComponent}></div>
      <div className={`messages-component ${state ? ("") : ("close")} messages-component-success`}>
        <div className="messages-component-title">
          {title}
        </div>
        <div className="messages-component-description">
          {description}
        </div>
        <button onClick={closeComponent} className={`messages-component-button ${state ? ("") : ("close")}`}>
          <svg className="messages-component-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
        </button>
      </div>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    successMessagesComponent: getSuccessMessagesComponent(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SuccessMessagesComponent);