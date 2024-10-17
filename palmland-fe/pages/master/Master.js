import React, { useEffect } from "react";
import { Box, Button, Text,
    Grid,
    GridItem } from "@chakra-ui/react";
  import colors from "@/theme/foundations/colors";

const Master = () => {
    return (
        <div className="service__page">
        <div className="">
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
                  Masters
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
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Property Marquee</p>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, md: 1 }}>
                      <Box
                        w={"100%"}
                        className="banner__field__block"
                      >
                        <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Property Type</p>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, md: 1 }}>
                      <Box
                        w={"100%"}
                        className="banner__field__block"
                      >
                        <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Blog</p>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, md: 1 }}>
                      <Box
                        w={"100%"}
                        className="banner__field__block"
                      >
                        <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>News Letter</p>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, md: 1 }}>
                      <Box
                        w={"100%"}
                        className="banner__field__block"
                      >
                        <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, md: 1 }}>
                      <Box
                        w={"100%"}
                        className="banner__field__block"
                      >
                        <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, md: 1 }}>
                      <Box
                        w={"100%"}
                        className="banner__field__block"
                      >
                        <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, md: 1 }}>
                      <Box
                        w={"100%"}
                        className="banner__field__block"
                      >
                        <div class="card" style={{border: "2px solid #EAB258", padding: "30px", textAlign: "center", alignItems: "center "}}>
                          <p style={{fontSize: "23px", lineHeight: "43px", fontWeight: "700"}}>Real estate</p>
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
};

export default Master;
