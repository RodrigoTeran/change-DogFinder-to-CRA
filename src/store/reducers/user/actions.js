export const updateLoginAction = (data) => {
  return ({
    type: "UPDATE_LOGIN",
    logInActivated: data
  });
};

export const updateWebpAction = (data) => {
  return ({
    type: "UPDATE_WEBP",
    state: data
  });
};

export const updateKeyActiveUserAction = (data) => {
  return ({
    type: "UPDATE_KEY_ACTIVE_USER",
    state: data
  });
};

export const updateUserAction = (data) => {
  return ({
    type: "UPDATE_USER",
    username: data.username,
    imgId: data.imgId,
    auth: data.auth,
    email: data.email,
    premium: data.premium,
    emailForContact: data.emailForContact,
    numberOfTelephoneForContact: data.numberOfTelephoneForContact
  });
};

export const updatePetProfileAction = (data) => {
  return ({
    type: "UPDATE_PET_PROFILE",
    selectedState: data.selectedState,
    state: data.state
  });
};

export const updateProfilesAction = (data) => {
  return ({
    type: "UPDATE_PROFILES",
    profiles: data,
  });
};

export const updateLogInFirstAnimationAction = (data) => {
  return ({
    type: "UPDATE_LOGIN_FIRST_ANIMATION",
    logInFirstAnimation: data,
  });
};

export const updateFirstResponseAPIAction = () => {
  return ({
    type: "UPDATE_FIRST_RESPONSE_API"
  });
};
