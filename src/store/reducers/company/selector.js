import { createSelector } from "reselect";

// userCompany
const selectorGetUserCompany = (state) => {
  return state.companyReducer.userCompany;
};

export const getUserCompany = createSelector([selectorGetUserCompany], (getUserCompany) => {
  return getUserCompany;
});

// ownPremiumProfiles
const selectorGetOwnPremiumProfiles = (state) => {
  return state.companyReducer.ownPremiumProfiles;
};

export const getOwnPremiumProfiles = createSelector([selectorGetOwnPremiumProfiles], (getOwnPremiumProfiles) => {
  return getOwnPremiumProfiles;
});

// globalPremiumProfiles
const selectorGetGlobalPremiumProfiles = (state) => {
  return state.companyReducer.globalPremiumProfiles;
};

export const getGlobalPremiumProfiles = createSelector([selectorGetGlobalPremiumProfiles], (getGlobalPremiumProfiles) => {
  return getGlobalPremiumProfiles;
});

// globalDogsFounded
const selectorGetGlobalDogsFounded = (state) => {
  return state.companyReducer.globalDogsFounded;
};

export const getGlobalDogsFounded = createSelector([selectorGetGlobalDogsFounded], (getGlobalDogsFounded) => {
  return getGlobalDogsFounded;
});

// ownDogsFounded
const selectorGetOwnDogsFounded = (state) => {
  return state.companyReducer.ownDogsFounded;
};

export const getOwnDogsFounded = createSelector([selectorGetOwnDogsFounded], (getOwnDogsFounded) => {
  return getOwnDogsFounded;
});

// globalCompanies
const selectorGetGlobalCompanies = (state) => {
  return state.companyReducer.globalCompanies;
};

export const getGlobalCompanies = createSelector([selectorGetGlobalCompanies], (getGlobalCompanies) => {
  return getGlobalCompanies;
});