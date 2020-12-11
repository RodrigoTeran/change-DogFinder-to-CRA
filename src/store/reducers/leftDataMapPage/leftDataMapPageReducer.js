const initialState = {
  actualViewedData: "Nothing",
  /*
    6 posibles estados:
    -> Company         YA
    -> CompanyProfile
    -> Profile         YA
    -> ProfileDogFounded         YA
    -> Nothing         YA
    -> Loading         YA
  */
  companyData: {
    name: undefined,
    webPage: undefined,
    location: undefined,
    descriptionCompany: undefined,
    logo: undefined,
    typeOfProfile: "Company",
    idProfile: undefined,
    arrayProfilesDogFounded: [
      /*
        cada uno será un objeto que tendra:
          {
            idProfile: undefined,
            typeOfProfile: "ProfileDogFounded",
            profileImage: undefined,
            whenIsFounded: undefined,
            breed: undefined
          }
      */
    ]
  },
  profilePremiumData: {
    name: undefined,
    whenIsLost: undefined,
    breed: undefined,
    location: undefined,
    gender: undefined,
    age: undefined,
    color: undefined,
    imagesCV: [],
    idProfile: undefined,
    profileImage: undefined,
    typeOfProfile: "Profile"
  },
  profileDogFoundedData: {
    name: undefined,
    whenIsFounded: undefined,
    breed: undefined,
    location: undefined,
    gender: undefined,
    age: undefined,
    color: undefined,
    imagesCV: [],
    idProfile: undefined,
    profileImage: undefined,
    typeOfProfile: "ProfileDogFounded"
  }
};
export default function leftDataMapPageReducer(state = initialState, action) {
  if (action.type === "CHANGE_ACTUAL_VIEW_DATA") {
    return {
      ...state,
      actualViewedData: action.state
    };
  };
  if (action.type === "CHANGE_ACTUAL_COMPANY_DATA_LEFT_PAGE") {
    return {
      ...state,
      companyData: {
        name: action.name,
        webPage: action.webPage,
        location: action.location,
        descriptionCompany: action.descriptionCompany,
        logo: action.logo,
        typeOfProfile: "Company",
        idProfile: action.idProfile,
        arrayProfilesDogFounded: action.arrayProfilesDogFounded
      }
    };
  };
  if (action.type === "CHANGE_ACTUAL_PROFILE_PREMIUM_DATA_LEFT_PAGE") {
    return {
      ...state,
      profilePremiumData: {
        name: action.name,
        whenIsLost: action.whenIsLost,
        breed: action.breed,
        location: action.location,
        gender: action.gender,
        age: action.age,
        color: action.color,
        imagesCV: action.imagesCV,
        idProfile: action.idProfile,
        profileImage: action.profileImage,
        typeOfProfile: "Profile"
      },
    };
  };
  if (action.type === "CHANGE_ACTUAL_PROFILE_DOG_FOUNDED_DATA_LEFT_PAGE") {
    return {
      ...state,
      profileDogFoundedData: {
        name: action.name,
        whenIsFounded: action.whenIsFounded,
        breed: action.breed,
        location: action.location,
        gender: action.gender,
        age: action.age,
        color: action.color,
        imagesCV: action.imagesCV,
        idProfile: action.idProfile,
        profileImage: action.profileImage,
        typeOfProfile: "ProfileDogFounded"
      }
    };
  };
  return state;
};