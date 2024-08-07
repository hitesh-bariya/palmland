import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const postPropertyData = async (data, callback) => {
  const authToken = localStorage.getItem("token");
  try {
    let response = await axios
      .post(`${apiURL}property/create-property`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        // console.log(response);
        callback();
      });
  } catch (err) {
    console.log("error", err);
  }
};
