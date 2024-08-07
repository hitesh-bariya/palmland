import apiHelper from "@/helper/apiHelper";
import axios from "axios";

// const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getAgentsData = (successCallback, setLoading) => {
  apiHelper(`${apiURL}agent/all`, "get", null, {})
    .then((res) => {
      // console.log(res.data);
      successCallback(res.data);
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
