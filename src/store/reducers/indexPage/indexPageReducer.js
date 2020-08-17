const initialState = {
  backgroundPagesImage: { // COMPLETO
    background_pages_image_1: true,
    background_pages_image_2: false,
    background_pages_image_3: false,
  },
  animations: { // COMPLETO
    "#card-index-header-1": true,
    "#card-index-header-2": true,
    "#card-index-header-3": true,
    "#card-index-header-4": true,
    "#card-index-header-5": true,
    "#card-index-section-1-1": true,
    "#card-index-section-1-2": true,
    "#card-index-section-1-3": true,
    "#card-index-section-1-4": true,
    "#card-index-section-1-5": true,
    "#card-index-section-1-6": true,
    "#card-index-section-2-1": true,
    "#card-index-section-2-2": true,
    "#card-index-section-2-3": true,
    "#card-index-section-2-section-1-1": true,
    "#card-index-section-2-section-1-2": true,
    "#card-index-section-2-section-1-3": true,
    "#card-header-section-3-index-1": true,
    "#card-header-section-3-index-2": true,
    "#card-header-section-3-index-3": true,
  }
};

export default function indexPageReducer(state = initialState, action) {
  if (action.type === "UPDATE_BACKGROUND_PAGES_IMAGE_CLASSES") {
    return {
      ...state,
      backgroundPagesImage: {
        background_pages_image_1: action.state_1,
        background_pages_image_2: action.state_2,
        background_pages_image_3: action.state_3,
      }
    };
  };
  if (action.type === "UPDATE_INDEX_ANIMATIONS") {
    return {
      ...state,
      animations: {
        ...state.animations,
        [action.animName]: action.state
      }
    };
  };
  return state;
};