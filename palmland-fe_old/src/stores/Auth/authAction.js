import * as types from "./../actionType";
import axios from "axios";
import { closeModel } from "../Model/modelAction";

const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const headers = {
  "Content-Type": "application/json",
  // 'Authorization': 'JWT fefege...'
};

export const login = () => ({
  type: types.LOGIN,
});
export const logout = () => ({
  type: types.LOGOUT,
});
export const updateUser = (values) => ({
  type: types.UPDATE_USER,
  payload: values,
});
export const signup = (data) => {
  return async (dispatch) => {
    try {
      let response = await axios
        .post(`${apiURL}auth/register`, data, {
          headers: headers,
        })
        .then((response) => {
          dispatch(closeModel());
          dispatch(login());
          localStorage.setItem("userRole", response.data.role);
          localStorage.setItem("token", response.data.access_token);
          dispatch(
            updateUser({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              email: response.data.email,
              role: response.data.role,
            })
          );
          // console.log(response.data);
        });
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const signin = (data) => {
  return async (dispatch) => {
    try {
      let response = await axios
        .post(`${apiURL}auth/login`, data, {
          headers: headers,
        })
        .then((response) => {
          dispatch(closeModel());
          dispatch(login());
          localStorage.setItem("userRole", response.data.role);
          localStorage.setItem("token", response.data.access_token);
          dispatch(
            updateUser({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              email: response.data.email,
              role: response.data.role,
            })
          );
        });
    } catch (err) {
      console.log("error", err);
    }
  };
};
