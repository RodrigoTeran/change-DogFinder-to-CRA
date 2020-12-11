export const updateActualViewDataLeftPageAction = (data) => {
  return ({
    type: "CHANGE_ACTUAL_VIEW_DATA",
    state: data
  });
};

export const updateActualCompanyDataLeftPageAction = (data) => {
  return ({
    type: "CHANGE_ACTUAL_COMPANY_DATA_LEFT_PAGE",
    name: data.name,
    webPage: data.webPage,
    location: data.location,
    descriptionCompany: data.descriptionCompany,
    logo: data.logo,
    idProfile: data.idProfile,
    arrayProfilesDogFounded: data.arrayProfilesDogFounded
  });
};

export const updateActualProfilePremiumDataLeftPageAction = (data) => {
  return ({
    type: "CHANGE_ACTUAL_PROFILE_PREMIUM_DATA_LEFT_PAGE",
    name: data.name,
    whenIsLost: data.whenIsLost,
    breed: data.breed,
    location: data.location,
    gender: data.gender,
    age: data.age,
    color: data.color,
    imagesCV: data.imagesCV,
    idProfile: data.idProfile,
    profileImage: data.profileImage
  });
};

export const updateActualProfileDogFoundedDataLeftPageAction = (data) => {
  return ({
    type: "CHANGE_ACTUAL_PROFILE_DOG_FOUNDED_DATA_LEFT_PAGE",
    name: data.name,
    whenIsFounded: data.whenIsFounded,
    breed: data.breed,
    location: data.location,
    gender: data.gender,
    age: data.age,
    color: data.color,
    imagesCV: data.imagesCV,
    idProfile: data.idProfile,
    profileImage: data.profileImage
  });
};