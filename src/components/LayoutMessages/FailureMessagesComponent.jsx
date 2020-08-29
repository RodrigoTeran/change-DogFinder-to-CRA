import React from "react";
import { connect } from "react-redux";

// Selectores
import {
  getFailureMessagesComponent
} from "../../store/reducers/layout/selector";

// Acciones
import {
  updateFailureMessagesComponentAction
} from "../../store/reducers/layout/actions";

const FailureMessagesComponent = ({
  failureMessagesComponent,
  updateFailureMessagesComponent
}) => {
  const closeComponent = () => {
    updateFailureMessagesComponent({
      state: false,
      title: failureMessagesComponent.title,
      description: failureMessagesComponent.description,
    });
  };
  const { state, title, description } = failureMessagesComponent;
  return (
    <>
      <div className={`messages-component-black-wall ${state ? ("") : ("close")}`}>
        <div className={`messages-component ${state ? ("") : ("close")} messages-component-error`}>
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
      </div>
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    failureMessagesComponent: getFailureMessagesComponent(state),
  };
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FailureMessagesComponent);