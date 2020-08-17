const initialState = {
  // Back
  auth: false,
  username: null,
  imgId: null,

  // Front
  logInFirstAnimation: false, // para que no aparezca en el primer load
  logInActivated: false,
  webp: true,
};
export default function userReducer(state = initialState, action) {
  if (action.type === "UPDATE_USER") {
    return {
      ...state,
      username: action.username,
      imgId: action.imgId,
      auth: action.auth,
    };
  };
  if (action.type === "UPDATE_LOGIN") {
    return {
      ...state,
      logInActivated: action.logInActivated,
    };
  };
  if (action.type === "UPDATE_LOGIN_FIRST_ANIMATION") {
    return {
      ...state,
      logInFirstAnimation: action.logInFirstAnimation,
    };
  };
  if (action.type === "UPDATE_WEBP") {
    return {
      ...state,
      webp: action.state,
    };
  };
  return state;
};
