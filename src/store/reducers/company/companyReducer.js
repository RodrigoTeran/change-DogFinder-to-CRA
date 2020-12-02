const initialState = {
  userCompany: undefined
};

export default function companyReducer(state = initialState, action) {
  if (action.type === "CHANGE_USER_COMPANY_INFO") {
    return {
      ...state,
      [action.selectedState]: action.state
    };
  };
  return state;
};