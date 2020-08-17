import { createSelector } from "reselect";

// backgroundPagesImage
const selectorGetBackgroundPagesImage = (state) => {
  return state.indexPageReducer.backgroundPagesImage;
};

export const getBackgroundPagesImage = createSelector([selectorGetBackgroundPagesImage], (getBackgroundPagesImage) => {
  return getBackgroundPagesImage;
});

// animations
const selectorGetAnimations = (state) => {
  return state.indexPageReducer.animations;
};

export const getAnimations = createSelector([selectorGetAnimations], (getAnimations) => {
  return getAnimations;
});