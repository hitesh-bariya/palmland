import { getAdress } from "@/api/getGroLocation";
import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as appActions from "@/stores/App/appAction";
import CountryDropDown from "./CountryDropDown";
import StateDropDown from "./StateDropDown";
import CityDropDown from "./CityDropDown";
import colors from "@/theme/foundations/colors";

function Banner() {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.getCountryList());
  }, []);

  const [search, setSearch] = useState({
    city: "",
    state: "",
    country: "",
  });
  const [suggestions, setSuggestions] = useState([]);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearch({ ...search, [name]: value });
  };

  const onCountryChange = (value) => {
    setSearch({ ...search, country: value });
  };

  const onStateChange = (value) => {
    setSearch({ ...search, state: value });
  };

  const onCityChange = (value) => {
    setSearch({ ...search, city: value });
  };

  useEffect(() => {
    if (search.country && search.country !== "") {
      setSearch({ ...search, state: "ALL" });
      dispatch(appActions.getStateList(search.country.iso2));
    }
  }, [search.country]);

  useEffect(() => {
    if (
      search.state &&
      search.state !== "" &&
      search.country &&
      search.country !== ""
    ) {
      setSearch({ ...search, city: "ALL" });
      dispatch(appActions.getCityList(search.country.iso2, search.state.iso2));
    }
  }, [search.state, search.country]);

  const handleSubmit = () => {
    setSearch({
      country: "",
      state: "",
      city: "",
    });
    router.push(`/search?place=${search.country}`);
  };

  return (
    <Box className="banner__container">
      <Box className="banner__block">
        <video autoPlay loop muted preload="yes" className="banner__video">
          <source
            // src="https://res.cloudinary.com/demo/video/upload/y3qfje5fcjkskqaufc08.mp4"
            src="/assets/videos/banner_video.mp4"
            type="video/mp4"
          ></source>
        </video>
        <Box className="banner__search__block">
          <Text variant={"p_bold"} color={"white"} size="32">
            Search Your Next Home
          </Text>
          <Text
            variant={"s_light"}
            // color={colors.secondary_color_shade_four}
            size="18"
          >
            Find new & featured property located in your local city.
          </Text>

          <p className="banner__text"></p>
          <form onSubmit={handleSubmit} className="search__block">
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 5 }}
              spacing={{ base: 3, lg: 6 }}
              alignItems="flex-end"
            >
              <Box className="banner__field__block">
                <label className="banner__field__label">Country</label>
                <CountryDropDown
                  country={search.country}
                  onCountryChange={onCountryChange}
                />
              </Box>
              <Box className="banner__field__block">
                <label className="banner__field__label">State</label>
                <StateDropDown
                  state={search.state}
                  onStateChange={onStateChange}
                />
              </Box>

              <Box className="banner__field__block">
                <label className="banner__field__label">City</label>
                <CityDropDown city={search.city} onCityChange={onCityChange} />
              </Box>
              <Box className="banner__field__block">
                <label className="banner__field__label">Property Type</label>
                <select
                  className="banner__field"
                  type="text"
                  placeholder="Property Type"
                  name="propetyType"
                  value={search.propetyType}
                  onChange={(e) => onChange(e)}
                >
                  <option value="Comercial">Comercial </option>
                  <option value="Residantial">Residential </option>
                  <option value="Free/Hold,">Free/Hold </option>
                  <option value="Non Free Hold ">Non Free Hold </option>
                  <option value="Plots">Plots </option>
                </select>
              </Box>

              <button
                type="button"
                onClick={handleSubmit}
                className="banner__search__button"
              >
                Search
              </button>
            </SimpleGrid>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;

const data = {
  propertyName: "New Moon City",
  propertyDesc: "this is a upcoming  property",
  price: "15000sqft",
  location: {
    addressLine1: "sarjapur Outer Ring Road",
    addressLine2: "Munnekolllala",
    landMark: "Near Police Station",
    pinCode: 560037,
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
  propertyMarquee: "FEATURED",
  propertyType: "COMMERCIAL",
  amenities: {
    rooms: 2,
  },
};
