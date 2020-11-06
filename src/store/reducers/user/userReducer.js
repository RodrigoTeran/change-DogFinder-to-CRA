const initialState = {
  // Back
  auth: false,
  username: null,
  imgId: null,
  email: null,
  premium: false,
  emailForContact: undefined,
  numberOfTelephoneForContact: undefined,
  emailForContactActiveKey: undefined,

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
    size: undefined,
    mainColor: undefined,
    gender: undefined,
    whenIsLost: new Date()
  }
};
export default function userReducer(state = initialState, action) {
  if (action.type === "UPDATE_PET_PROFILE") {
    return {
      ...state,
      petProfile: {
        ...state.petProfile,
        [action.selectedState]: action.state
      }
    };
  };
  if (action.type === "UPDATE_USER") {
    return {
      ...state,
      [action.selectedState]: action.state
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
      firstResponseUserAPI: action.state
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
