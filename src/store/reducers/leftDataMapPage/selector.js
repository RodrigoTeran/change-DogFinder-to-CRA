import { createSelector } from "reselect";

// actualViewedData
const selectorGetActualViewData = (state) => {
  return state.leftDataMapPageReducer.actualViewedData;
};

export const getActualViewData = createSelector([selectorGetActualViewData], (getActualViewData) => {
  return getActualViewData;
});

// companyData
const selectorGetCompanyData = (state) => {
  return state.leftDataMapPageReducer.companyData;
};

export const getCompanyDataLeftPage = createSelector([selectorGetCompanyData], (getCompanyDataLeftPage) => {
  return getCompanyDataLeftPage;
});

// profilePremiumData
const selectorGetProfilePremiumData = (state) => {
  return state.leftDataMapPageReducer.profilePremiumData;
};

export const getProfilePremiumDataLeftPage = createSelector([selectorGetProfilePremiumData], (getProfilePremiumDataLeftPage) => {
  return getProfilePremiumDataLeftPage;
});

// profileDogFoundedData
const selectorGetProfileDogFoundedData = (state) => {
  return state.leftDataMapPageReducer.profileDogFoundedData;
};

export const getProfileDogFoundedDataLeftPage = createSelector([selectorGetProfileDogFoundedData], (getProfileDogFoundedDataLeftPage) => {
  return getProfileDogFoundedDataLeftPage;
});