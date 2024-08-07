import { getAdress } from "@/api/getGroLocation";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import CountryDropDown from "./CountryDropDown";
import { useDispatch } from "react-redux";
import * as appActions from "@/stores/App/appAction";
import CountryDropDown from "./CountryDropDown";
import StateDropDown from "./StateDropDown";
import CityDropDown from "./CityDropDown";
import LocationSearch from "./LocationSearch";
import colors from "@/theme/foundations/colors";
import {
  getAllProperty,
  searchProperty,
} from "@/stores/Property/propertyAction";
const GoogleBanner = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    city: "Dubai",
    state: {
      id: 3391,
      name: "Dubai",
      iso2: "DU",
    },
    country: "AE",
    location: "",
    propertyType: "COMMERCIAL",
  });
  const [dropDown, setDropdown] = useState(false);
  useEffect(() => {
    setSearch({ ...search, state: "AE" });
    dispatch(appActions.getCountryList());
  }, []);
  useEffect(() => {
    setSearch({ ...search, state: "ALL" });
    dispatch(appActions.getStateList("231"));
  }, []);
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
  const onLocationChange = (value) => {
    setSearch({ ...search, location: value.target.value });
  };
  const onLocationOptionChange = (value) => {
    setSearch({ ...search, location: value });
  };
  useEffect(() => {
    if (
      search.state &&
      search.state !== "" &&
      search.country &&
      search.country !== ""
    ) {
      setSearch({ ...search, city: search.city });
      dispatch(appActions.getCityList(search.country.id, search.state.id));
    }
  }, [search.state]);

  useEffect(() => {
    if(search.country){
      dispatch(appActions.getStateList(search.country.id));
    }
  }, [search.country]);

  // useEffect(() => {
  //   const predictions = getAdress(search.location).then((res) => {
  //     const data = res.predictions.map((pre) => pre.description);
  //     setSuggestions(data);
  //   });
  // }, [search.location]);
  const handleSubmit = () => {
    setSearch({
      country: "",
      state: "ALL",
      city: "Dubai",
    });

    const payload = {
      dataOption: "all",
      searchCriteriaList: [
        {
          filterKey: "propertyType",
          value: "",
          operation: "eq",
        },
        { filterKey: "propertyName", value: "Bunglow Test 1", operation: "eq" },
        { filterKey: "country", value: "UAE", operation: "eq" },
      ],
    };
    dispatch(searchProperty(JSON.stringify(payload)));
  };
  return (
    <Box
      h={"600px"}
      overflow={"hidden"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        w="100%"
        h="100%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        className="banner__block"
      >
        <video height="600" autoPlay loop muted preload="yes">
          <source
            src="/assets/videos/banner_video.mp4"
            type="video/mp4"
          ></source>
        </video>
        <Box
          position={"absolute"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          top={"50%"}
          left={"50%"}
          w={"80%"}
          transform={"translate(-50%,-60%)"}
        >
          <Text
            variant={"p_bold"}
            color={"white"}
            // size={{ base: "28", lg: "36" }}
            style={{fontSize: "46px", fontWeight: "700", lineHeight: "72px" }}
            textAlign={"center"}
          >
            Find Your Next Home
          </Text>
          <Text
            variant={"s_light"}
            color={colors.secondary_color_shade_four}
            size={{ base: "14", lg: "18" }}
            mb="10px"
            textAlign={"center"}
            style={{fontSize: "17px", fontWeight: "400", lineHeight: "21.6px" }}
          >
            Explore new & featured property located in your local city.
          </Text>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Box
              bgColor={colors.searchBackground}
              padding={{ base: "20px 20px", lg: "20px 20px 20px" }}
              borderRadius={"5px"}
              w={{
                base: "70%",
                sm: "50%",
                md: "100%",
                lg: "100%",
                lg: "90%",
                xxl: "70%",
              }}
            >
              <Grid
                templateColumns="repeat(4, 1fr)"
                gap={{ base: 2, lg: 4 }}
                alignItems="flex-end"
              >
               
               <GridItem colSpan={{ base: 5 , md: 1 }}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    w={"100%"}
                    className="banner__field__block"
                  >
                    <Text
                      variant={"search_s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                    >
                      City
                    </Text>
                    <LocationSearch
                      dropDown={dropDown}
                      currentState={search.state}
                      currentCity={search.city}
                      searchLocation={search.location}
                      suggestions={suggestions}
                      onLocationChange={onLocationChange}
                      onOptionSelect={onLocationOptionChange}
                    />
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 5, md: 1 }}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    w={"100%"}
                    className="banner__field__block"
                  >
                    <Text
                      variant={"search_s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                    >
                      Location
                    </Text>
                    <LocationSearch
                      dropDown={dropDown}
                      currentState={search.state}
                      currentCity={search.city}
                      searchLocation={search.location}
                      suggestions={suggestions}
                      onLocationChange={onLocationChange}
                      onOptionSelect={onLocationOptionChange}
                    />
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 5, md: 1 }}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    w={"100%"}
                    className="banner__field__block"
                  >
                    <Text
                      variant={"search_s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                    >
                      Property Type
                    </Text>
                    <Select
                      className="banner__field"
                      fontSize={{ base: "12px", lg: "16px" }}
                      h={{ base: "30px", lg: "36px" }}
                      type="text"
                      placeholder="Property Type"
                      name="propetyType"
                      value={search.propetyType}
                      onChange={(e) => onChange(e)}
                    >
                      <option value="COMMERCIAL">Comercial </option>
                      <option value="RESIDANTIAL">Residantial </option>
                      <option value="FREE/HOLD,">Free/Hold </option>
                      <option value="NON FREE HOLD">Non Free Hold </option>
                      <option value="PLOTS">Plots </option>
                    </Select>
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 5, md: 1 }}>
                  <Button
                    variant="primary"
                    w={"100%"}
                    h={{ base: "30px", lg: "36px" }}
                    mt={{ base: "10px", lg: "0px" }}
                    onClick={handleSubmit}
                    style={{marginBottom: "15px", color: "#fff"}}
                  >
                    Search
                  </Button>
                </GridItem>
              </Grid>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default GoogleBanner;
