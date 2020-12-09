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
    numeroTelefonoCompania: undefined,

    correoCompaniaEspacioParaKey: false,
    numeroCompaniaEspacioParaKey: false
  },
  ownPremiumProfiles: {
    lastCoordenates: {
      lat: undefined,
      lng: undefined,
      zoom: undefined
    },
    arrayOfInformation: []
  },
  globalPremiumProfiles: {
    lastCoordenates: {
      lat: undefined,
      lng: undefined,
      zoom: undefined
    },
    arrayOfInformation: []
  },

  globalDogsFounded: {
    lastCoordenates: {
      lat: undefined,
      lng: undefined,
      zoom: undefined
    },
    arrayOfInformation: []
  },
  ownDogsFounded: {
    lastCoordenates: {
      lat: undefined,
      lng: undefined,
      zoom: undefined
    },
    arrayOfInformation: []
  },

  globalCompanies: {
    lastCoordenates: {
      lat: undefined,
      lng: undefined,
      zoom: undefined
    },
    arrayOfInformation: []
  },
};

export default function companyReducer(state = initialState, action) {
  if (action.type === "CHANGE_MAP_ARRAYS") {
    return {
      ...state,
      [action.selectedState]: {
        lastCoordenates: {
          lat: action.lat,
          lng: action.lng,
          zoom: action.zoom
        },
        arrayOfInformation: action.arrayOfInformation
      }
    };
  };
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