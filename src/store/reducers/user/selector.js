import { createSelector } from "reselect";

// auth
const selectorGetAuth = (state) => {
  return state.userReducer.auth;
};

export const getAuth = createSelector([selectorGetAuth], (getAuth) => {
  return getAuth;
});

// webp
const selectorGetWebp = (state) => {
  return state.userReducer.webp;
};

export const getWebp = createSelector([selectorGetWebp], (getWebp) => {
  return getWebp;
});

// username
const selectorGetUsername = (state) => {
  return state.userReducer.username;
};

export const getUsername = createSelector([selectorGetUsername], (getUsername) => {
  return getUsername;
});

// imgId
const selectorGetImgId = (state) => {
  return state.userReducer.imgId;
};

export const getImgId = createSelector([selectorGetImgId], (getImgId) => {
  return getImgId;
});

// logInActivated
const selectorGetlogInActivated = (state) => {
  return state.userReducer.logInActivated;
};

export const getlogInActivated = createSelector([selectorGetlogInActivated], (getlogInActivated) => {
  return getlogInActivated;
});

// logInFirstAnimation
const selectorGetLogInFirstAnimation = (state) => {
  return state.userReducer.logInFirstAnimation;
};

export const getLogInFirstAnimation = createSelector([selectorGetLogInFirstAnimation], (getLogInFirstAnimation) => {
  return getLogInFirstAnimation;
});