export const updateBackgroundPagesImagePositionClassAction = (data) => {
  return ({
    type: "UPDATE_BACKGROUND_PAGES_IMAGE_CLASSES",
    state_1: data.state_1,
    state_2: data.state_2,
    state_3: data.state_3,
  });
};

export const updateIndexAnimationsAction = (data) => {
  return ({
    type: "UPDATE_INDEX_ANIMATIONS",
    state: data.state,
    animName: data.animName,
  });
};