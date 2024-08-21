import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openModel } from "@/stores/Model/modelAction";
import { Box, Button, Text,
  Grid,
  GridItem } from "@chakra-ui/react";
import colors from "@/theme/foundations/colors";
import {
  ServiceOneData,
  ServiceSubOneData,
  ServiceSubTwoData,
  ServiceThreeData,
} from "@/common";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

function services() {
  const dispatch = useDispatch();
  const { isMobile576, isTablet768, isTablet992 } = useWindowDimensions();
  const [serviceOne, setServiceOne] = useState(false);
  const [serviceSubOne, setServiceSubOne] = useState(false);
  const [serviceSubTwo, setServiceSubTwo] = useState(false);
  const [serviceThree, setServiceThree] = useState(false);
  const openPropertyDealerRegisterModel = () => {
    dispatch(openModel("PropertyDealerModel", {}));
  };
  return (
    <div className="service__page">
      <div className="">
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
            <img src="/assets/images/home-banner.png" height="539px" width="100%" alt="call" style={{filter: "brightness(20%)"}}></img>
            <Box
              position={"absolute"}
              display={"flex"}
              alignItems={"left"}
              flexDirection={"column"}
              top={"40%"}
              left={"50%"}
              w={"80%"}
              transform={"translate(-50%,-50%)"}
            >
              <Text
                variant={"p_bold"}
                color={"#EAB258"}
                style={{fontSize: "49.89px", fontWeight: "700", lineHeight: "60px", paddingBottom: "30px" }}
              >
                Real Estate Services <br></br>for Buying and Selling
              </Text>
              <Text
                variant={"s_light"}
                color={colors.secondary_color_shade_four}
                size={{ base: "14", lg: "18" }}
                mb="10px"
                style={{fontSize: "17px", fontWeight: "400", lineHeight: "31.6px" }}
              >
                We pride ourselves on exceptional real estate brokerage services for buyers and sellers alike. <br></br>
                Whether you're searching for your dream property or aiming to maximize your investment's <br></br>
                value, our dedicated team is here to guide you every step of the way.
              </Text>
            </Box>

          </Box>
        </Box>
        <div className="custom__container">
          <div className="custom__row">
            <Box
              m={{ base: "30px 0px 30px", lg: "50px 0px 30px" }}
              display="flex"
              flexDirection="column"
              alignItems="left"
            >
              <Text
                variant={"s_regular"}
                size={{ base: "14", lg: "16" }}
                mb="6px"
                style={{fontSize: "36px", fontWeight: "700"}}
              >
                Our Services
              </Text>
              <Grid
                  templateColumns="repeat(4, 1fr)"
                  gap={{ base: 2, lg: 12 }}
                  alignItems="flex-end"
                  paddingTop={"30px"}
                >
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center"}}>
                        <img src="/assets/icons/card1-House.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                        <img src="/assets/icons/card2-Award.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                        <img src="/assets/icons/card3-export.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                        <img src="/assets/icons/card4-pin.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                        <img src="/assets/icons/card1-House.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                        <img src="/assets/icons/card2-Award.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                        <img src="/assets/icons/card3-export.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                        <img src="/assets/icons/card4-pin.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      </div>
                    </Box>
                  </GridItem>
              </Grid>
              <Text
                variant={"s_regular"}
                size={{ base: "14", lg: "16" }}
                mb="6px"
                textAlign={"center"}
                marginTop={"30px"}
                marginBottom={"60px"}
              >
                Contact us today to learn more about our services and how we can help you.
              </Text>
            </Box>
          </div>
        </div>

        <div class="section_about" style={{backgroundColor: "#09212B", color: "#426979", fontSize: "16px"}}>
          <div className="custom__container">
            <div className="custom__row">
              <Text
                variant={"s_regular"}
                size={{ base: "14", lg: "16" }}
                mb="6px"
                marginTop={"60px"}
                style={{fontSize: "36px", fontWeight: "700", color: "#ECF2F8"}}
              >
                Our Services
              </Text>
              <Text
                variant={"s_regular"}
                size={{ base: "14", lg: "16" }}
                mb="6px"
                marginTop={"30px"}
                marginBottom={"60px"}
                style={{color: "#426979"}}
              >
                At Palm Land Real Estate LLC, we specialize in providing premier real estate services to discerning clients seeking prime locations. We understand that buying or selling property in prestigious areas demands a specialized approach. That's why our dedicated team is committed to delivering the highest level of service and expertise in the industry.<br></br><br></br>
                With a deep understanding of the prime real estate market, including the latest trends, pricing strategies, and local regulations, our experienced professionals work tirelessly to ensure optimal outcomes for our clients. Whether you're buying, selling, or investing in prime real estate, we are here to help you achieve your goals.<br></br><br></br>
                We believe that success in the prime real estate market hinges on market knowledge, strategic insight, and personalized attention. By taking the time to understand our clients and their unique needs, we tailor our services to deliver exceptional results.
              </Text>
              <div class="row" style={{paddingBottom: "60px"}}>
                <div class="col-md-2">
                  <img src="/assets/images/mohamed 2.png" alt="call" style={{border: "2px solid #EAB258", borderRadius: "25px"}}></img>
                </div>
                <div class="col-md-10">
                  <Text
                    variant={"s_regular"}
                    size={{ base: "14", lg: "16" }}
                    mb="6px"
                    style={{color: "#426979"}}
                  >
                    At Palm Land Real Estate LLC, we specialize in providing premier real estate services to discerning clients seeking prime locations. We understand that buying or selling property in prestigious areas demands a specialized approach. That's why our dedicated team is committed to delivering the highest level of service and expertise in the industry.<br></br><br></br>
                    With a deep understanding of the prime real estate market, including the latest trends, pricing strategies, and local regulations, our experienced professionals work tirelessly to ensure optimal outcomes for our clients. Whether you're buying, selling, or investing in prime real estate, we are here to help you achieve your goals.<br></br><br></br>
                    We believe that success in the prime real estate market hinges on market knowledge, strategic insight, and personalized attention. By taking the time to understand our clients and their unique needs, we tailor our services to deliver exceptional results.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom__container">
          <div className="custom__row">
            <Box
              m={{ base: "30px 0px 30px", lg: "50px 0px 30px" }}
              display="flex"
              flexDirection="column"
              alignItems="left"
            >
              <Text
                variant={"s_regular"}
                size={{ base: "14", lg: "16" }}
                mb="6px"
                style={{fontSize: "36px", fontWeight: "700"}}
              >
                Why Choose Palm Land Real Estate?
              </Text>
              <Grid
                  templateColumns="repeat(4, 1fr)"
                  gap={{ base: 2, lg: 12 }}
                  alignItems="flex-end"
                  paddingTop={"30px"}
                >
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "30px", alignItems: "center", textAlign: "center", backgroundColor: "#09212B", color: "#EAB258"}}>
                        <img src="/assets/icons/card1-House-golden.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p style={{color: "#325260"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "30px", alignItems: "center", textAlign: "center", backgroundColor: "#09212B", color: "#EAB258"}}>
                        <img src="/assets/icons/card2-Award-golden.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p style={{color: "#325260"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "30px", alignItems: "center", textAlign: "center", backgroundColor: "#09212B", color: "#EAB258"}}>
                        <img src="/assets/icons/card3-export-golden.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p style={{color: "#325260"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      </div>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 5, md: 1 }}>
                    <Box
                      w={"100%"}
                      className="banner__field__block"
                    >
                      <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "30px", alignItems: "center", textAlign: "center", backgroundColor: "#09212B", color: "#EAB258"}}>
                        <img src="/assets/icons/card4-pin-golden.png" height="64px" alt="call" style={{paddingBottom: "30px"}}></img>
                        <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        <p style={{color: "#325260"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      </div>
                    </Box>
                  </GridItem>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default services;
