import axios from "axios";

const API_KEY = "AIzaSyBKVqr9jTLUwd38VTpikbsEKyzvp8qHneQ";
// const API_KEY = "AIzaSyCWALbClC-dcKmQ2WtGyl_Ov8SL1wVajTs";

export async function getAdress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&components=country:ae&key=${API_KEY}`
  );
  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&key=${API_KEY}`,
  //   );
  // console.log("response.data.predictions===>", response.data.predictions);
  return response.data;
}
export async function getCountry(lat, lng) {
  const response = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    )
    .then((res) => res.data);
  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&key=${API_KEY}`,
  //   );
  // console.log("response.data.predictions===>", response.data.predictions);
  return response;
}
export async function getPlcaDetail(address) {
  const response = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${address}&key=${API_KEY}`
    )
    .then((res) => res.data);
  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&key=${API_KEY}`,
  //   );
  // console.log("response.data.predictions===>", response.data.predictions);
  return response;
}