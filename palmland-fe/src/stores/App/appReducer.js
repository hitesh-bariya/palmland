import * as types from "./../actionType";

const initialState = {
  countryList: [],
  stateList: [],
  cityList: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNTRY_LIST:
      return {
        ...state,
        countryList: action.payload,
      };
    case types.SET_STATE_LIST:
      return {
        ...state,
        stateList: action.payload,
      };
    case types.SET_CITY_LIST:
      return {
        ...state,
        cityList: action.payload,
      };

    default:
      return state;
  }
};
export default appReducer;


export const selectCountryList = (state) => state.app.countryList
export const selectStateList = (state) => state.app.stateList
export const selectCityList = (state) => state.app.cityList