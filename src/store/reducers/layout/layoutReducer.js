const initialState = {
  responsiveMenuBarBody: {
    open: false,
    trans: false,
  },
  topMenuBar: {
    activated: false,
  },
  wallResponsiveMenuBar: {
    open: false,
  },
  lines: {
    x_line1: false,
    x_line2: false,
    x_line3: false,
  },
  successMessagesComponent: {
    state: false,
    title: undefined,
    description: undefined,
  },
  failureMessagesComponent: {
    state: false,
    title: undefined,
    description: undefined,
  },
  bannerOkCancelAction: {
    isDisplayed: {
      fromWho: undefined,
      inLayout: false,
    },
    okButton: false,
    firstAnimation: false,
  },
  bannerInstructions: {
    state: false,
    title: undefined,
    description: undefined,
  },
  bannerProfileContactInfo: {
    isDisplayed: {
      fromWho: undefined,
      inLayout: false,
    },
    okButton: false,
    firstAnimation: false,
    inputInfoFromBanner: undefined,
  },
  bannerRedirectWithLink: {
    isDisplayed: {
      fromWho: undefined,
      inLayout: false,
    },
    firstAnimation: false,
  },
};

export default function layoutReducer(state = initialState, action) {
  if (action.type === "UPDATE_BANNER_REDIRECT_WITH_LINK") {
    return {
      ...state,
      bannerRedirectWithLink: {
        isDisplayed: {
          fromWho: action.fromWho,
          inLayout: action.inLayout,
        },
        firstAnimation: true,
      },
    };
  }
  if (action.type === "UPDATE_BANNER_PROFILE_CONTACT_INFO") {
    return {
      ...state,
      bannerProfileContactInfo: {
        isDisplayed: {
          fromWho: action.fromWho,
          inLayout: action.inLayout,
        },
        okButton: action.okButton,
        firstAnimation: true,
        inputInfoFromBanner: action.inputInfoFromBanner,
      },
    };
  }
  if (action.type === "UPDATE_BANNER_OK_CANCEL_ACTION") {
    return {
      ...state,
      bannerOkCancelAction: {
        isDisplayed: {
          fromWho: action.fromWho,
          inLayout: action.inLayout,
        },
        okButton: action.okButton,
        firstAnimation: true,
      },
    };
  }
  if (action.type === "UPDATE_SUCCESS_MESSAGES_COMPONENT") {
    return {
      ...state,
      successMessagesComponent: {
        state: action.state,
        title: action.title,
        description: action.description,
      },
    };
  }
  if (action.type === "UPDATE_BANNER_INSTRUCTIONS_COMPONENT") {
    return {
      ...state,
      bannerInstructions: {
        state: action.state,
        title: action.title,
        description: action.description,
      },
    };
  }
  if (action.type === "UPDATE_FAILURE_MESSAGES_COMPONENT") {
    return {
      ...state,
      failureMessagesComponent: {
        state: action.state,
        title: action.title,
        description: action.description,
      },
    };
  }
  if (action.type === "UPDATE_RESPONSIVE_MENU_BAR_BODY_OPEN_CLASS") {
    return {
      ...state,
      responsiveMenuBarBody: {
        ...state.responsiveMenuBarBody,
        open: action.state,
      },
    };
  }
  if (action.type === "UPDATE_RESPONSIVE_MENU_BAR_BODY_TRANS_CLASS") {
    return {
      ...state,
      responsiveMenuBarBody: {
        ...state.responsiveMenuBarBody,
        trans: action.state,
      },
    };
  }
  if (action.type === "UPDATE_TOP_MENU_BAR_ACTIVATED_CLASS") {
    return {
      ...state,
      topMenuBar: {
        ...state.topMenuBar,
        activated: action.state,
      },
    };
  }
  if (action.type === "UPDATE_LINES") {
    return {
      ...state,
      lines: {
        x_line1: action.state_1,
        x_line2: action.state_2,
        x_line3: action.state_3,
      },
    };
  }
  return state;
}
