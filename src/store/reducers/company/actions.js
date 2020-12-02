export const updateUserCompanyAction = (data) => {
  return ({
    type: "CHANGE_USER_COMPANY_INFO",
    state: data.state,
    selectedState: data.selectedState
  });
};