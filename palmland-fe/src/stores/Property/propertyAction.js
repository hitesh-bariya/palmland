import apiHelper from "@/helper/apiHelper";
import axios from "axios";

// const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const searchProperty1 = (data) => {
  const authToken = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      let response = await axios
        .post(`${apiURL}property/search`, data, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          // console.log(response);
        });
    } catch (err) {
      console.log("error", err);
    }
  };
};
// export const getAllProperty = (callback, setLoading) => {
//   const authToken = localStorage.getItem("token");
//   return async (dispatch) => {
//     try {
//       console.log('helllo');
//       let response = await axios
//         .get(
//           `${apiURL}property/all`,
//           {},
//           {
//             headers: {
//               "content-type": "application/json",
//               Authorization: `Bearer ${authToken}`,
//             },
//           }
//         )
//         .then((response) => {
//           console.log(response.data);
//           callback(response.data);
//           if (setLoading) {
//             setLoading(false);
//           }
//         });
//     } catch (err) {
//       console.log("error", err);
//     }
//   };
// };

export const getPropertyData = (successCallback, setLoading) => {
  apiHelper(`${apiURL}property/all`, "get", null, {})
    .then((res) => {
      // console.log(res.data);
      successCallback(res.data.data);
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchProperty = (data, successCallback, setLoading) => {
  apiHelper(`${apiURL}property/search`, "post", data, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => {
      successCallback(res.data.data);
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      if (setLoading) {
        setLoading(false); // Ensure loading state is reset even if an error occurs
      }
    });
};