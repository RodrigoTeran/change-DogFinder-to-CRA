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

export const updateMessagesComponentAction = (data) => {
  return ({
    type: "UPDATE_MESSAGES_COMPONENT",
    typeData: data.type,
    state: data.state,
    title: data.title,
    description: data.description,
  });
};
