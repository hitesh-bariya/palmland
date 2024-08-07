import apiHelper from "@/helper/apiHelper";
import axios from "axios";

// const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getUserData = (successCallback, setLoading) => {
  apiHelper(`${apiURL}admin/get-user`, "get", null, {})
    .then((res) => {
      console.log(res.data);
      debugger
      successCallback(res.data);
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
