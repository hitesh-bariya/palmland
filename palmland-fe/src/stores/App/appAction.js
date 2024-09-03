import apiHelper from "@/helper/apiHelper";
import * as actionType from "./../actionType";
import axios from "axios";

export const getCountryList = () => {
  return async (dispatch) => {
    try {
      const config = {
        method: "get",
        url: "http://51.20.140.56:80/api/v1/common/country",
        headers: {
          "X-CSCAPI-KEY":
            "enhpbGRjV2FwSGV5b1c5YlllTWFramRtazdmY2dtU1BsZjN4ZUY4Rg==",
        },
      };
      let response = await axios(config).then(function (res) {
        return res;
      });

      let res = response.data.data;
      // if (res.status === true || res.status === false) {
      dispatch(setCountryList(res));
      // } else {
      //   console.log("error === ");
      // }
    } catch (error) {
      console.log("error ", error);
    }
  };
};

// SET Country List To Reducer
export const setCountryList = (data) => {
  return {
    type: actionType.SET_COUNTRY_LIST,
    payload: data,
  };
};

// Get state List by Coutry
export const getStateList = (countryCode = 231) => {
  return async (dispatch) => {
    try {
      const config = {
        method: "get",
        url: `http://51.20.140.56:80/api/v1/common/state/${countryCode}`,
        headers: {
          "X-CSCAPI-KEY":
            "enhpbGRjV2FwSGV5b1c5YlllTWFramRtazdmY2dtU1BsZjN4ZUY4Rg==",
        },
      };
      let response = await axios(config).then(function (res) {
        return res;
      });

      let res = response.data.data;
      // if (res.status === true || res.status === false) {
      dispatch(setStateList(res));
      // } else {
      //   console.log("error === ");
      // }
    } catch (error) {
      console.log("error ", error);
    }
  };
};

// SET State List To Reducer
export const setStateList = (data) => {
  return {
    type: actionType.SET_STATE_LIST,
    payload: data,
  };
};

// Get state List by Coutry
export const getCityList = () => {
  return async (dispatch) => {
    try {
      const config = {
        method: "get",
        url: `http://51.20.140.56:80/api/v1/common/city/0`,
        headers: {
          "X-CSCAPI-KEY":
            "enhpbGRjV2FwSGV5b1c5YlllTWFramRtazdmY2dtU1BsZjN4ZUY4Rg==",
        },
      };
      let response = await axios(config).then(function (res) {
        return res;
      });

      let res = response.data.data;
      // if (res.status === true || res.status === false) {
      dispatch(setCityList(res));
      // } else {
      //   console.log("error === ");
      // }
    } catch (error) {
      console.log("error ", error);
    }
  };
};

// SET State List To Reducer
export const setCityList = (data) => {
  return {
    type: actionType.SET_CITY_LIST,
    payload: data,
  };
};
