import axios from "axios";

const apiHelper = async (apiURL, method, data, token) => {
  const authToken = localStorage.getItem("token");

  let url = apiURL;

  let headers = {
    // Authorization: `Bearer ${authToken}`,
  };

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default apiHelper;
