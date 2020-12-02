import { createSelector } from "reselect";

// userCompany
const selectorGetUserCompany = (state) => {
  return state.companyReducer.userCompany;
};

export const getUserCompany = createSelector([selectorGetUserCompany], (getUserCompany) => {
  return getUserCompany;
});