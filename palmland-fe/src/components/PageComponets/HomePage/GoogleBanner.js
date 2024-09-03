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
const GoogleBanner = ({ onSubmit }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState({});
  const [dropDown, setDropdown] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearch({ ...search, [name]: value });
  };
  const onCityChange = (e) => {
    debugger
    const name = e.target.selectedOptions[0].text;
    const value = e.target.value;
    setSearch({ ...search, cityText: name, city: value });

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
    if (search.country) {
      dispatch(appActions.getStateList(search.country.id));
    }
  }, [search.country]);

  const handleSubmit = () => {
    debugger
    onSubmit(search);

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
        <img src="/assets/images/home-banner.png" height="539px" width="100%" alt="call" style={{ filter: "brightness(20%)" }}></img>
        <Box
          position={"absolute"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          top={"40%"}
          left={"50%"}
          w={"80%"}
          transform={"translate(-50%,-50%)"}
        >
          <Text
            variant={"p_bold"}
            color={"white"}
            style={{ fontSize: "46px", fontWeight: "700", lineHeight: "72px" }}
            textAlign={"center"}
          >
            Find Your Next Home
          </Text>
          <Text
            variant={"s_light"}
            color={"#FFFFFF"}
            mb="10px"
            textAlign={"center"}
            style={{ fontSize: "17px", lineHeight: "21.6px", letterSpacing: "3px", marginBottom: "25px" }}
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
                gap={{ base: 2, lg: 12 }}
                alignItems="flex-end"
              >
                <GridItem colSpan={{ base: 5, md: 1 }}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    w={"100%"}
                    className="banner__field__block"
                    borderRight={"1px solid #284D5C"}
                  >
                    <Text
                      variant={"search_s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                    >
                      City
                    </Text>
                    <Select
                      className="banner__field"
                      fontSize={{ base: "12px", lg: "16px" }}
                      h={{ base: "30px", lg: "36px" }}
                      type="text"
                      placeholder="City"
                      name="city"
                      value={search.city}
                      onChange={(e) => onCityChange(e)}
                      style={{ background: "transparent", border: "none", boxShadow: "none", color: "#eab258", appearance: "auto", paddingLeft: "0", width: "fit-content" }}
                    >
                      <option value="1">Dubai</option>
                      <option value="2">Abu Dhabi</option>
                      <option value="3">Sharjah</option>
                      <option value="4">Al Ain</option>
                      <option value="5">Ajman</option>
                      <option value="6">Ras Al Khaimah</option>
                      <option value="7">Fujairah</option>
                      <option value="8">Umm Al Quwain</option>
                    </Select>
                  </Box>
                </GridItem>
                <GridItem colSpan={{ base: 5, md: 1 }}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    w={"100%"}
                    className="banner__field__block"
                    borderRight={"1px solid #284D5C"}
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
                      style={{ background: "transparent", border: "none", boxShadow: "none", color: "#eab258", appearance: "auto", paddingLeft: "0", width: "fit-content" }}
                    >
                      <option value="COMERCIAL">Comercial </option>
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
                    style={{ marginBottom: "15px", color: "#fff" }}
                  >
                    Search&nbsp;&nbsp;<img src="/assets/icons/search.png" alt="call" style={{ height: "17px", width: "17px" }} class="search_icon"></img>
                  </Button>
                </GridItem>
              </Grid>
            </Box>
          </form>
        </Box>
        <Box
          position={"absolute"}
          top={"85%"}
          left={"50%"}
          w={"60%"}
          transform={"translate(-50%,-50%)"}
        >
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={{ base: 2, lg: 4 }}
            alignItems="flex-end"
          >
            <GridItem colSpan={{ base: 3, md: 1 }}>
              <Text
                variant={"p_bold"}
                color={"white"}
                style={{ textAlign: "center", fontWeight: "300" }}
                textAlign={"center"}
              >
                <span style={{ fontWeight: "800", fontSize: "23px", lineHeight: "20px", color: "#eab258" }}>1200 +</span><br></br>
                Listed Properties
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 1 }}>
              <Text
                variant={"p_bold"}
                color={"white"}
                style={{ textAlign: "center", fontWeight: "300" }}
                textAlign={"center"}
              >
                <span style={{ fontWeight: "800", fontSize: "23px", lineHeight: "20px", color: "#eab258" }}>100 +</span><br></br>
                Awards
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 1 }}>
              <Text
                variant={"p_bold"}
                color={"white"}
                style={{ textAlign: "center", fontWeight: "300" }}
                textAlign={"center"}
              >
                <span style={{ fontWeight: "800", fontSize: "23px", lineHeight: "20px", color: "#eab258" }}>1800 +</span><br></br>
                Happy Customers
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default GoogleBanner;
