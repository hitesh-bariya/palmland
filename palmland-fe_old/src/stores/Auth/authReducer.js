import * as types from "../actionType";

const initialState = {
  isLoggedIn: false,
  userDetail: {
    email: "",
    firstName: "",
    lastName: "",
    role: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        userDetail: {
          ...state.userDetail,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          role: action.payload.role,
        },
      };

    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
export default authReducer;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserDetail = (state) => state.auth.userDetail;
