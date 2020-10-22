const initialState = {
  // Back
  auth: false,
  username: null,
  imgId: null,
  email: null,
  premium: false,

  // Saber si ya llego response de /user
  firstResponseUserAPI: false,

  // Front
  logInFirstAnimation: false, // para que no aparezca en el primer load
  logInActivated: false,
  webp: true,

  // Profiles
  profiles: [],

  // Key Active
  keyActiveUser: undefined,

  // Pet Profile (actual only one)
  petProfile: {
    name: undefined,
    petProfileImage: undefined,
    images: [], // Pito
    isLost: false,
    dogBreed: undefined,
    location: undefined,
    coordenates: undefined,
    size: undefined, // Pito
    mainColor: undefined, // Pito
    gender: undefined
  }
};
export default function userReducer(state = initialState, action) {
  if (action.type === "UPDATE_PET_PROFILE") {
    return {
      ...state,
      petProfile: {
        name: action.name,
        petProfileImage: action.petProfileImage,
        images: action.images,
        isLost: action.isLost,
        dogBreed: action.dogBreed,
        location: action.location,
        coordenates: action.coordenates,
        size: action.size,
        mainColor: action.mainColor,
        gender: action.gender,
      }
    };
  };
  if (action.type === "UPDATE_USER") {
    return {
      ...state,
      username: action.username,
      imgId: action.imgId,
      auth: action.auth,
      email: action.email,
      premium: action.premium
    };
  };
  if (action.type === "UPDATE_KEY_ACTIVE_USER") {
    return {
      ...state,
      keyActiveUser: action.state
    };
  };
  if (action.type === "UPDATE_PROFILES") {
    return {
      ...state,
      profiles: action.profiles,
    };
  };
  if (action.type === "UPDATE_FIRST_RESPONSE_API") {
    return {
      ...state,
      firstResponseUserAPI: true
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
