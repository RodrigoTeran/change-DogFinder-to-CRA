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

// bannerProfileContactInfo
const selectorGetBannerProfileContactInfo = (state) => {
  return state.layoutReducer.bannerProfileContactInfo;
};

export const getBannerProfileContactInfo = createSelector([selectorGetBannerProfileContactInfo], (getBannerProfileContactInfo) => {
  return getBannerProfileContactInfo;
});

// bannerOkCancelAction
const selectorGetBannerOkCancelAction = (state) => {
  return state.layoutReducer.bannerOkCancelAction;
};

export const getBannerOkCancelAction = createSelector([selectorGetBannerOkCancelAction], (getBannerOkCancelAction) => {
  return getBannerOkCancelAction;
});

// bannerRedirectWithLink
const selectorGetBannerRedirectWithLink = (state) => {
  return state.layoutReducer.bannerRedirectWithLink;
};

export const getBannerRedirectWithLink = createSelector([selectorGetBannerRedirectWithLink], (getBannerRedirectWithLink) => {
  return getBannerRedirectWithLink;
});

// lines
const selectorGetLines = (state) => {
  return state.layoutReducer.lines;
};

export const getLines = createSelector([selectorGetLines], (getLines) => {
  return getLines;
});

// successMessagesComponent
const selectorGetSuccessMessagesComponent = (state) => {
  return state.layoutReducer.successMessagesComponent;
};

export const getSuccessMessagesComponent = createSelector([selectorGetSuccessMessagesComponent], (getSuccessMessagesComponent) => {
  return getSuccessMessagesComponent;
});

// failureMessagesComponent
const selectorGetFailureMessagesComponent = (state) => {
  return state.layoutReducer.failureMessagesComponent;
};

export const getFailureMessagesComponent = createSelector([selectorGetFailureMessagesComponent], (getFailureMessagesComponent) => {
  return getFailureMessagesComponent;
});