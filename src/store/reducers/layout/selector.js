import { createSelector } from "reselect";

// responsiveMenuBarBody
const selectorGetResponsiveMenuBarBody = (state) => {
  return state.layoutReducer.responsiveMenuBarBody;
};

export const getResponsiveMenuBarBody = createSelector([selectorGetResponsiveMenuBarBody], (getResponsiveMenuBarBody) => {
  return getResponsiveMenuBarBody;
});

// topMenuBar
const selectorGetTopMenuBar = (state) => {
  return state.layoutReducer.topMenuBar;
};

export const getTopMenuBar = createSelector([selectorGetTopMenuBar], (getTopMenuBar) => {
  return getTopMenuBar;
});

// lines
const selectorGetLines = (state) => {
  return state.layoutReducer.lines;
};

export const getLines = createSelector([selectorGetLines], (getLines) => {
  return getLines;
});