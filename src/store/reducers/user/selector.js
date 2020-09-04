import { createSelector } from "reselect";

// petProfile
const selectorGetPetProfile = (state) => {
  return state.userReducer.petProfile;
};

export const getPetProfile = createSelector([selectorGetPetProfile], (getPetProfile) => {
  return getPetProfile;
});

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

// keyActiveUser
const selectorGetKeyActiveUser = (state) => {
  return state.userReducer.keyActiveUser;
};

export const getKeyActiveUser = createSelector([selectorGetKeyActiveUser], (getKeyActiveUser) => {
  return getKeyActiveUser;
});


// profiles
const selectorGetProfiles = (state) => {
  return state.userReducer.profiles;
};

export const getProfiles = createSelector([selectorGetProfiles], (getProfiles) => {
  return getProfiles;
});


// username
const selectorGetUsername = (state) => {
  return state.userReducer.username;
};

export const getUsername = createSelector([selectorGetUsername], (getUsername) => {
  return getUsername;
});

// email
const selectorGetEmail = (state) => {
  return state.userReducer.email;
};

export const getEmail = createSelector([selectorGetEmail], (getEmail) => {
  return getEmail;
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

// firstResponseUserAPI
const selectorGetFirstResponseUserAPI = (state) => {
  return state.userReducer.firstResponseUserAPI;
};

export const getFirstResponseUserAPI = createSelector([selectorGetFirstResponseUserAPI], (getFirstResponseUserAPI) => {
  return getFirstResponseUserAPI;
});
