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

export const updateUserAction = (data) => {
  return ({
    type: "UPDATE_USER",
    username: data.username,
    imgId: data.imgId,
    auth: data.auth,
  });
};

export const updateLogInFirstAnimationAction = (data) => {
  return ({
    type: "UPDATE_LOGIN_FIRST_ANIMATION",
    logInFirstAnimation: data,
  });
};