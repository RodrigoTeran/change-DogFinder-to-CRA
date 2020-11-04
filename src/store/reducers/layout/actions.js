export const updateLinesAction = (data) => {
  return ({
    type: "UPDATE_LINES",
    state_1: data.state_1,
    state_2: data.state_2,
    state_3: data.state_3,
  });
};

export const updateResponsiveMenuBarBodyOpenAction = (data) => {
  return ({
    type: "UPDATE_RESPONSIVE_MENU_BAR_BODY_OPEN_CLASS",
    state: data
  });
};

export const updateBannerProfileContactInfoAction = (data) => {
  return ({
    type: "UPDATE_BANNER_PROFILE_CONTACT_INFO",
    fromWho: data.fromWho,
    inLayout: data.inLayout,
    okButton: data.okButton,
    inputInfoFromBanner: data.inputInfoFromBanner
  });
};

export const updateBannerOkCancelActionAction = (data) => {
  return ({
    type: "UPDATE_BANNER_OK_CANCEL_ACTION",
    fromWho: data.fromWho,
    inLayout: data.inLayout,
    okButton: data.okButton
  });
};

export const updateTopMenuBarActivatedAction = (data) => {
  return ({
    type: "UPDATE_TOP_MENU_BAR_ACTIVATED_CLASS",
    state: data
  });
};

export const updateResponsiveMenuBarBodyTransAction = (data) => {
  return ({
    type: "UPDATE_RESPONSIVE_MENU_BAR_BODY_TRANS_CLASS",
    state: data
  });
};

export const updateSuccessMessagesComponentAction = (data) => {
  return ({
    type: "UPDATE_SUCCESS_MESSAGES_COMPONENT",
    state: data.state,
    title: data.title,
    description: data.description,
  });
};

export const updateFailureMessagesComponentAction = (data) => {
  return ({
    type: "UPDATE_FAILURE_MESSAGES_COMPONENT",
    state: data.state,
    title: data.title,
    description: data.description,
  });
};
