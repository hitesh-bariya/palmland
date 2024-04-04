import * as types from "./../actionType";

export const openModel = (modelType, params) => ({
  type: types.OPEN, modelType, params
});


export const closeModel = () => ({
  type: types.CLOSE,
});

export const openErrorModel=( errorMessage,
    params)=>({
    type:types.OPEN_ERROR,
    errorMessage,
    params
})
