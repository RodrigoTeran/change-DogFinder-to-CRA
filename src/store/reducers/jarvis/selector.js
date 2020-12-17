import { createSelector } from "reselect";

// userCompany
const selectorGetJarvises = (state) => {
  return state.jarvisReducer.jarvises;
};

export const getJarvises = createSelector([selectorGetJarvises], (getJarvises) => {
  return getJarvises;
});