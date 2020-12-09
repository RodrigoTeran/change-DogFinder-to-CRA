export const updateUserCompanyAction = (data) => {
  return ({
    type: "CHANGE_USER_COMPANY_INFO",
    state: data.state,
    selectedState: data.selectedState
  });
};

export const updateMapArraysAction = (data) => {
  return ({
    type: "CHANGE_MAP_ARRAYS",
    selectedState: data.selectedState,
    arrayOfInformation: data.arrayOfInformation,
    lat: data.lat,
    lng: data.lng,
    zoom: data.zoom
  });
};