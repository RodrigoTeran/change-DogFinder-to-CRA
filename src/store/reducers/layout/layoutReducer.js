const initialState = {
  responsiveMenuBarBody: {  // COMPLETO
    open: false,
    trans: false
  },
  topMenuBar: {  // COMPLETO
    activated: false
  },
  wallResponsiveMenuBar: { // COMPLETO
    open: false
  },
  lines: {  // COMPLETO
    x_line1: false,
    x_line2: false,
    x_line3: false,
  },
  messagesComponent: {
    state: false,
    title: undefined,
    description: undefined,
    type: undefined
  }
};

export default function layoutReducer(state = initialState, action) {
  if (action.type === "UPDATE_MESSAGES_COMPONENT") {
    return {
      ...state,
      messagesComponent: {
        type: action.typeData,
        state: action.state,
        title: action.title,
        description: action.description,
      }
    };
  };
  if (action.type === "UPDATE_RESPONSIVE_MENU_BAR_BODY_OPEN_CLASS") {
    return {
      ...state,
      responsiveMenuBarBody: {
        ...state.responsiveMenuBarBody,
        open: action.state
      }
    };
  };
  if (action.type === "UPDATE_RESPONSIVE_MENU_BAR_BODY_TRANS_CLASS") {
    return {
      ...state,
      responsiveMenuBarBody: {
        ...state.responsiveMenuBarBody,
        trans: action.state,
      }
    };
  };
  if (action.type === "UPDATE_TOP_MENU_BAR_ACTIVATED_CLASS") {
    return {
      ...state,
      topMenuBar: {
        ...state.topMenuBar,
        activated: action.state,
      }
    };
  };
  if (action.type === "UPDATE_LINES") {
    return {
      ...state,
      lines: {
        x_line1: action.state_1,
        x_line2: action.state_2,
        x_line3: action.state_3,
      }
    };
  };
  return state;
};
