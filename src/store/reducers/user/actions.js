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
    premium: data.premium
  });
};

export const updatePetProfileAction = (data) => {
  return ({
    type: "UPDATE_PET_PROFILE",
    name: data.name,
    petProfileImage: data.petProfileImage,
    images: data.images,
    isLost: data.isLost,
    dogBreed: data.race,
    location: data.location,
    coordenates: data.coordenates,
    size: data.size,
    mainColor: data.mainColor,
    gender: data.gender,
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
