const initialState = {
  jarvises: [],
};
export default function jarvisReducer(state = initialState, action) {
  if (action.type === "PUSH_JARVIS_INFO") {
    return {
      jarvises: action.newJarvis,
    };
  }
  return state;
}
