import { NewsLetterData } from "@/common";
import colors from "@/theme/foundations/colors";
import { Box, Button, SimpleGrid, Text, color } from "@chakra-ui/react";
import React from "react";
// import { Text } from "./components/text";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const newsletter = () => {
  return (
    <div class="newsletter_page">
      <Box className="custom__container about__page">
        <Box className="custom__row newsletter-slider">
          <Box m={{ base: "20px 0px", lg: "30px 0px" }}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              m="0px 0px 20px"
            >
              <Text
                variant="p_bold"
                style={{fontSize: "50px", fontWeight: "700", lineHeight: "50px", color: "#1F343E", marginTop: "50px"}}
                mb={{ base: "10px", lg: "20px" }}
              >
                Stay Updated with the <br></br>Dynamic Real Estate Trends <br></br>in Dubai
              </Text>
              <hr style={{border: "2px solid #EAB258"}}></hr>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              m="0px 0px 20px"
            >
              <Slider {...settings}>
                <div>              
                  <div class="row">
                    <div class="col-md-6" style={{paddingRight: "30px"}}>
                      <img src="/assets/images/home-banner.png" 
                      height="100%" 
                      width="100%" 
                      alt="call" 
                      style={{filter: "brightness(20%)", borderRadius: "7.5px"}}></img>
                    </div>
                    <div class="col-md-6" style={{paddingLeft: "30px"}}>
                      <Text
                        variant="newsletter_header"
                        style={{fontSize: "23px", lineHeight: "27px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Text
                        variant="newsletter_text"
                        style={{fontSize: "15px", lineHeight: "24px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Text>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="newsletter_publish"
                        style={{fontSize: "13px", lineHeight: "28px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        <span style={{display: "flex", lineHeight: "20px", color: "#6D6D6D"}}><img src="/assets/icons/publish-date.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                        &nbsp;&nbsp;&nbsp;&nbsp;Published on May,2024</span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div>              
                  <div class="row">
                    <div class="col-md-6" style={{paddingRight: "30px"}}>
                      <img src="/assets/images/home-banner.png" 
                      height="100%" 
                      width="100%" 
                      alt="call" 
                      style={{filter: "brightness(20%)", borderRadius: "7.5px"}}></img>
                    </div>
                    <div class="col-md-6" style={{paddingLeft: "30px"}}>
                      <Text
                        variant="newsletter_header"
                        style={{fontSize: "23px", lineHeight: "27px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Text
                        variant="newsletter_text"
                        style={{fontSize: "15px", lineHeight: "24px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Text>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="newsletter_publish"
                        style={{fontSize: "13px", lineHeight: "28px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        <span style={{display: "flex", lineHeight: "20px", color: "#6D6D6D"}}><img src="/assets/icons/publish-date.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                        &nbsp;&nbsp;&nbsp;&nbsp;Published on May,2024</span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div>              
                  <div class="row">
                    <div class="col-md-6" style={{paddingRight: "30px"}}>
                      <img src="/assets/images/home-banner.png" 
                      height="100%" 
                      width="100%" 
                      alt="call" 
                      style={{filter: "brightness(20%)", borderRadius: "7.5px"}}></img>
                    </div>
                    <div class="col-md-6" style={{paddingLeft: "30px"}}>
                      <Text
                        variant="newsletter_header"
                        style={{fontSize: "23px", lineHeight: "27px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Text
                        variant="newsletter_text"
                        style={{fontSize: "15px", lineHeight: "24px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Text>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="newsletter_publish"
                        style={{fontSize: "13px", lineHeight: "28px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        <span style={{display: "flex", lineHeight: "20px", color: "#6D6D6D"}}><img src="/assets/icons/publish-date.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                        &nbsp;&nbsp;&nbsp;&nbsp;Published on May,2024</span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div>              
                  <div class="row">
                    <div class="col-md-6" style={{paddingRight: "30px"}}>
                      <img src="/assets/images/home-banner.png" 
                      height="100%" 
                      width="100%" 
                      alt="call" 
                      style={{filter: "brightness(20%)", borderRadius: "7.5px"}}></img>
                    </div>
                    <div class="col-md-6" style={{paddingLeft: "30px"}}>
                      <Text
                        variant="newsletter_header"
                        style={{fontSize: "23px", lineHeight: "27px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Text
                        variant="newsletter_text"
                        style={{fontSize: "15px", lineHeight: "24px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Text>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="newsletter_publish"
                        style={{fontSize: "13px", lineHeight: "28px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        <span style={{display: "flex", lineHeight: "20px", color: "#6D6D6D"}}><img src="/assets/icons/publish-date.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                        &nbsp;&nbsp;&nbsp;&nbsp;Published on May,2024</span>
                      </Text>
                    </div>
                  </div>
                </div>
              </Slider>
            </Box>

            {/* <SimpleGrid
              columns={{ base: 1, sm: 2, lg3: 4 }}
              spacing={{ base: 3, lg: 6 }}
            >
              {NewsLetterData.map((news) => {
                return (
                  <Box
                    key={news.id}
                    display="flex"
                    justifyContent="flex-start"
                    flexDirection="column"
                    bgColor={colors.secondary}
                    border="2px solid #000000"
                    p="20px 10px"
                    borderRadius="10px"
                  >
                    <Box
                      h={{ base: "auto", lg3: "58px" }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Text
                        variant="p_regular"
                        size={{ base: "18", lg: "20" }}
                        textAlign="center"
                        color="#ffffff"
                        mb="10px"
                      >
                        {news.title}
                      </Text>
                    </Box>

                    <Text
                      variant="s_light"
                      size={{ base: "14", lg: "16" }}
                      textAlign="center"
                      m="0px"
                      color="#ffffff"
                    >
                      {news.description}
                    </Text>
                  </Box>
                );
              })}
            </SimpleGrid> */}
          </Box>
        </Box>
      </Box>
      
      <div class="section_newsletter" style={{backgroundColor: "#09212B", color: "#426979", fontSize: "16px"}}>
          <div className="custom__container">
            <div className="custom__row">
              <Text
                variant={"s_regular"}
                size={{ base: "14", lg: "16" }}
                mb="6px"
                marginTop={"60px"}
                style={{fontSize: "36px", fontWeight: "700", color: "#ECF2F8"}}
              >
                More News
              </Text>
              <hr style={{border: "2px solid #EAB258"}}></hr>
              <div class="newsletter-verticle-scroll-section" style={{maxHeight: "1150px", overflowY: "scroll", marginBottom: "60px", padding: "inherit"}}>
                <div class="row" style={{paddingBottom: "30px", paddingTop: "30px"}}>
                  <div class="col-md-3 pr-2">
                    <span style={{lineHeight: "28px", fontSize: "15px", color: "#FFFFFF"}}>
                    Published on May,2024</span>
                  </div>
                  <div class="col-md-3">
                    <img src="/assets/images/newsletter1.png" alt="call" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div class="col-md-6">
                    <Text
                      variant={"s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                      style={{color: "#D9E9F0"}}
                    >
                      <span style={{fontWeight: "700", fontSize: "17px", lineHeight: "20.3px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </span><br></br><br></br>
                      <span style={{fontSize: "15px", lineHeight: "24.88px", marginBottom: "10px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span><br></br><br></br>
                      <span style={{color: "#EAB258", fontSize: "11px"}}>Read more...</span>
                    </Text>
                  </div>
                </div>
                <hr style={{border: "2px solid #EAB258"}}></hr>
                <div class="row" style={{paddingBottom: "30px", paddingTop: "30px"}}>
                  <div class="col-md-3 pr-2">
                    <span style={{lineHeight: "28px", fontSize: "15px", color: "#FFFFFF"}}>
                    Published on May,2024</span>
                  </div>
                  <div class="col-md-3">
                    <img src="/assets/images/newsletter2.png" alt="call" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div class="col-md-6">
                    <Text
                      variant={"s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                      style={{color: "#D9E9F0"}}
                    >
                      <span style={{fontWeight: "700", fontSize: "17px", lineHeight: "20.3px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </span><br></br><br></br>
                      <span style={{fontSize: "15px", lineHeight: "24.88px", marginBottom: "10px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span><br></br><br></br>
                      <span style={{color: "#EAB258", fontSize: "11px"}}>Read more...</span>
                    </Text>
                  </div>
                </div>
                <hr style={{border: "2px solid #EAB258"}}></hr>
                <div class="row" style={{paddingBottom: "30px", paddingTop: "30px"}}>
                  <div class="col-md-3 pr-2">
                    <span style={{lineHeight: "28px", fontSize: "15px", color: "#FFFFFF"}}>
                    Published on May,2024</span>
                  </div>
                  <div class="col-md-3">
                    <img src="/assets/images/newsletter3.png" alt="call" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div class="col-md-6">
                    <Text
                      variant={"s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                      style={{color: "#D9E9F0"}}
                    >
                      <span style={{fontWeight: "700", fontSize: "17px", lineHeight: "20.3px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </span><br></br><br></br>
                      <span style={{fontSize: "15px", lineHeight: "24.88px", marginBottom: "10px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span><br></br><br></br>
                      <span style={{color: "#EAB258", fontSize: "11px"}}>Read more...</span>
                    </Text>
                  </div>
                </div>
                <hr style={{border: "2px solid #EAB258"}}></hr>
                <div class="row" style={{paddingBottom: "30px", paddingTop: "30px"}}>
                  <div class="col-md-3 pr-2">
                    <span style={{lineHeight: "28px", fontSize: "15px", color: "#FFFFFF"}}>
                    Published on May,2024</span>
                  </div>
                  <div class="col-md-3">
                    <img src="/assets/images/newsletter1.png" alt="call" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div class="col-md-6">
                    <Text
                      variant={"s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                      style={{color: "#D9E9F0"}}
                    >
                      <span style={{fontWeight: "700", fontSize: "17px", lineHeight: "20.3px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </span><br></br><br></br>
                      <span style={{fontSize: "15px", lineHeight: "24.88px", marginBottom: "10px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span><br></br><br></br>
                      <span style={{color: "#EAB258", fontSize: "11px"}}>Read more...</span>
                    </Text>
                  </div>
                </div>
                <hr style={{border: "2px solid #EAB258"}}></hr>
                <div class="row" style={{paddingBottom: "30px", paddingTop: "30px"}}>
                  <div class="col-md-3 pr-2">
                    <span style={{lineHeight: "28px", fontSize: "15px", color: "#FFFFFF"}}>
                    Published on May,2024</span>
                  </div>
                  <div class="col-md-3">
                    <img src="/assets/images/newsletter1.png" alt="call" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div class="col-md-6">
                    <Text
                      variant={"s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                      style={{color: "#D9E9F0"}}
                    >
                      <span style={{fontWeight: "700", fontSize: "17px", lineHeight: "20.3px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </span><br></br><br></br>
                      <span style={{fontSize: "15px", lineHeight: "24.88px", marginBottom: "10px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span><br></br><br></br>
                      <span style={{color: "#EAB258", fontSize: "11px"}}>Read more...</span>
                    </Text>
                  </div>
                </div>
                <hr style={{border: "2px solid #EAB258"}}></hr>
                <div class="row" style={{paddingBottom: "30px", paddingTop: "30px"}}>
                  <div class="col-md-3 pr-2">
                    <span style={{lineHeight: "28px", fontSize: "15px", color: "#FFFFFF"}}>
                    Published on May,2024</span>
                  </div>
                  <div class="col-md-3">
                    <img src="/assets/images/newsletter1.png" alt="call" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div class="col-md-6">
                    <Text
                      variant={"s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                      style={{color: "#D9E9F0"}}
                    >
                      <span style={{fontWeight: "700", fontSize: "17px", lineHeight: "20.3px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </span><br></br><br></br>
                      <span style={{fontSize: "15px", lineHeight: "24.88px", marginBottom: "10px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span><br></br><br></br>
                      <span style={{color: "#EAB258", fontSize: "11px"}}>Read more...</span>
                    </Text>
                  </div>
                </div>
                <hr style={{border: "2px solid #EAB258"}}></hr>
                <div class="row" style={{paddingBottom: "30px", paddingTop: "30px"}}>
                  <div class="col-md-3 pr-2">
                    <span style={{lineHeight: "28px", fontSize: "15px", color: "#FFFFFF"}}>
                    Published on May,2024</span>
                  </div>
                  <div class="col-md-3">
                    <img src="/assets/images/newsletter1.png" alt="call" style={{borderRadius: "5px"}}></img>
                  </div>
                  <div class="col-md-6">
                    <Text
                      variant={"s_regular"}
                      size={{ base: "14", lg: "16" }}
                      mb="6px"
                      style={{color: "#D9E9F0"}}
                    >
                      <span style={{fontWeight: "700", fontSize: "17px", lineHeight: "20.3px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </span><br></br><br></br>
                      <span style={{fontSize: "15px", lineHeight: "24.88px", marginBottom: "10px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span><br></br><br></br>
                      <span style={{color: "#EAB258", fontSize: "11px"}}>Read more...</span>
                    </Text>
                  </div>
                </div>
                <hr style={{border: "2px solid #EAB258"}}></hr>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default newsletter;
