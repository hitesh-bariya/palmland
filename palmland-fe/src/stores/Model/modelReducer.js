import * as types from "./../actionType";

const initialState = {
  open: false,
  modelType: "",
  errorMessage: "",
  params: {},
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN:
      return {
        ...state,
        modelType: action.modelType,
        open: true,
        params: action.params || {},
      };
    case types.OPEN_ERROR:
      return {
        modelType: "error",
        open: true,
        errorMessage: action.errorMessage,
        params: action.params || {},
      };
    case types.CLOSE:
      return { ...initialState };

    default:
      return state;
  }
};
export default modelReducer;
