const initialState = {
  userCompany: {
    name: undefined,
    location: undefined,
    coordenates: undefined,
    webPage: undefined,
    logo: undefined,
    informationCompania: undefined,
    codigoDescuento: undefined,
    usersQueUsaronElCodigoDeDescuento: undefined,
    correoCompania: undefined,
    numeroTelefonoCompania: undefined
  },
};

export default function companyReducer(state = initialState, action) {
  if (action.type === "CHANGE_USER_COMPANY_INFO") {
    return {
      ...state,
      userCompany: {
        ...state.userCompany,
        [action.selectedState]: action.state
      }
    };
  };
  return state;
};