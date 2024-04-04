import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openModel } from "@/stores/Model/modelAction";
import { Box, Button, Text } from "@chakra-ui/react";
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
    <div className="custom__container service__page">
      <div className="custom__row">
        <Box
          m={{ base: "20px 0px", lg: "50px 0px" }}
          background={colors.primary}
          border="2px solid #000000"
          borderRadius="10px"
          p="20px"
        >
          <Box display="flex" flexDirection="column">
            <Text
              variant="p_bold"
              size={{ base: "24", lg: "32" }}
              mb={{ base: "10px", lg: "20px" }}
            >
              Real Estate Buying & Selling Brokerage
            </Text>
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign="justify"
            >
              Real Estate Buying & Selling At Palm Land Real Estate, we take
              pride in providing exceptional real estate buying and selling
              brokerage services. Whether you're a buyer searching for your
              dream property or a seller looking to maximize the value of your
              real estate investment, our dedicated team of professionals is
              here to guide you through every step of the process.brokerage
            </Text>
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign="justify"
              mt={{ base: "10px", lg: "20px" }}
            >
              Whether you're a first-time buyer, seasoned investor, or homeowner
              looking to sell, we are dedicated to delivering outstanding
              results and making your real estate experience as seamless and
              rewarding as possible.
            </Text>
          </Box>
          <Text
            variant="s_bold"
            size={{ base: "18", lg: "20" }}
            m={{ base: "10px 0px", lg: "20px 0px" }}
          >
            Here's how our real estate brokerage service can benefit you:
          </Text>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {ServiceOneData.slice(
              0,
              isTablet992 || isMobile576 || isTablet768
                ? serviceOne
                  ? 7
                  : 4
                : 4
            ).map((ser) => {
              return (
                <Box
                  key={ser.id}
                  width={{ base: "100%", md: "49%", lg: "24%" }}
                  display="flex"
                  justifyContent="flex-start"
                  flexDirection="column"
                  bgColor={colors.secondary}
                  border="2px solid #000000"
                  p={{ base: "10px", lg: "20px 10px" }}
                  borderRadius="10px"
                  mb={"10px"}
                >
                  <Text
                    variant="p_regular"
                    size={{ base: "16", lg: "18" }}
                    textAlign="center"
                    color="#ffffff"
                    mb="10px"
                  >
                    {ser.title}
                  </Text>
                  <Text
                    variant="s_light"
                    lineHeight="22px"
                    size={{ base: "14", lg: "16" }}
                    textAlign="center"
                    m="0px"
                    color="#ffffff"
                  >
                    {ser.description}
                  </Text>
                </Box>
              );
            })}
          </Box>
          <Box display="flex" justifyContent="center">
            {serviceOne && (
              <Box
                width="fit-content"
                display={{ base: "none", lg: "flex" }}
                justifyContent={"center"}
                flexWrap="wrap"
              >
                {ServiceOneData.slice(4, 7).map((ser) => {
                  return (
                    <Box
                      key={ser.id}
                      width={{ base: "100%", md: "49%", lg: "24%" }}
                      display="flex"
                      justifyContent="flex-start"
                      flexDirection="column"
                      alignItems="center"
                      bgColor={colors.secondary}
                      border="2px solid #000000"
                      p={{ base: "10px", lg: "20px 10px" }}
                      borderRadius="10px"
                      m="20px 10px 10px"
                    >
                      <Text
                        variant="p_regular"
                        size={{ base: "16", lg: "18" }}
                        textAlign="center"
                        color="#ffffff"
                        mb="10px"
                      >
                        {ser.title}
                      </Text>
                      <Text
                        variant="s_light"
                        lineHeight="22px"
                        size={{ base: "14", lg: "16" }}
                        textAlign="center"
                        m="0px"
                        color="#ffffff"
                      >
                        {ser.description}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
          <Button
            variant="link"
            mt="10px"
            onClick={() => setServiceOne(!serviceOne)}
          >
            {serviceOne ? "View Less" : "View More"}
          </Button>
        </Box>
        <Box
          my={{ base: "20px", lg: "50px" }}
          background={colors.primary}
          border="2px solid #000000"
          borderRadius="10px"
          p="20px"
        >
          <Box display="flex" flexDirection="column">
            <Text
              variant="p_bold"
              size={{ base: "24", lg: "32" }}
              mb={{ base: "10px", lg: "20px" }}
            >
              Leasing Property Brokerage Agents
            </Text>

            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign="justify"
            >
              Our Leasing Property Brokerage Agent Service: Connecting Landlords
              and Tenants for Seamless Rentals.
            </Text>
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign="justify"
              mt={{ base: "10px", lg: "20px" }}
            >
              At Palm Land Real Estate, we specialize in providing comprehensive
              leasing property brokerage agent services, catering to both
              landlords and tenants in their quest for hassle-free rentals. With
              our expertise and personalized approach, we strive to make the
              leasing process seamless, efficient, and mutually beneficial for
              all parties involved.
            </Text>
          </Box>
          <Text
            variant="s_bold"
            size={{ base: "18", lg: "20" }}
            m={{ base: "16px 0px 10px ", lg: "20px 0px 10px" }}
          >
            For Landlords:
          </Text>
          <Text
            variant="s_regular"
            size={{ base: "16", lg: "18" }}
            textAlign="justify"
            mt={{ base: "10px", lg: "20px" }}
          >
            We understand that finding reliable and responsible tenants is
            crucial for landlords. Our dedicated leasing property brokerage
            agents work diligently to attract high-quality tenants who meet your
            specific criteria. We handle all aspects of the leasing process,
            including marketing your property, conducting thorough tenant
            screenings, preparing lease agreements, and managing move-in and
            move-out procedures. Our goal is to minimize vacancies, maximize
            rental income, and ensure a smooth and successful leasing experience
            for landlords.
          </Text>
          <Text
            variant="s_bold"
            size={{ base: "18", lg: "20" }}
            m={{ base: "16px 0px 10px ", lg: "20px 0px 10px" }}
          >
            Our services for landlords include:
          </Text>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {ServiceSubOneData.slice(
              0,
              isMobile576 || isTablet768 ? (serviceSubOne ? 5 : 3) : 3
            ).map((ser) => {
              return (
                <Box
                  key={ser.id}
                  width={{ base: "100%", md: "32.5%" }}
                  display="flex"
                  justifyContent="center"
                  alignItems={"center"}
                  flexDirection="column"
                  bgColor={colors.secondary}
                  border="2px solid #000000"
                  p={{ base: "10px", lg: "20px 10px" }}
                  borderRadius="10px"
                  mb={"10px"}
                >
                  <Text
                    variant="s_light"
                    size={{ base: "14", lg: "16" }}
                    textAlign="center"
                    m="0px"
                    color="#ffffff"
                  >
                    {ser.description}
                  </Text>
                </Box>
              );
            })}
          </Box>
          <Box display="flex" justifyContent="center">
            {serviceSubOne && (
              <Box
                width="fit-content"
                display={{ base: "none", md: "flex" }}
                justifyContent="center"
              >
                {ServiceSubOneData.slice(3).map((ser) => {
                  return (
                    <Box
                      key={ser.id}
                      width="32.5%"
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      alignItems="center"
                      bgColor={colors.secondary}
                      border="2px solid #000000"
                      p="20px"
                      borderRadius="10px"
                      m="10px 10px 10px"
                    >
                      <Text
                        variant="s_light"
                        size={{ base: "14", lg: "16" }}
                        textAlign="center"
                        m="0px"
                        color="#ffffff"
                      >
                        {ser.description}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
          <Button
            variant="link"
            mt="10px"
            onClick={() => setServiceSubOne(!serviceSubOne)}
          >
            {serviceSubOne ? "View Less" : "View More"}
          </Button>
          <Text
            variant="s_bold"
            size={{ base: "18", lg: "20" }}
            m={{ base: "16px 0px 10px ", lg: "20px 0px 10px" }}
          >
            For Tenants:
          </Text>
          <Text
            variant="s_regular"
            size={{ base: "16", lg: "18" }}
            textAlign="justify"
            mt={{ base: "10px", lg: "20px" }}
          >
            We understand that finding the perfect rental property can be
            overwhelming. Our leasing property brokerage agents are here to
            simplify the process and help you find a suitable home that meets
            your needs and preferences. We listen to your requirements, provide
            personalized property recommendations, and guide you through the
            application, negotiation, and lease-signing processes. Our goal is
            to ensure that you find a comfortable and well-maintained rental
            property that fits your lifestyle.
          </Text>
          <Text
            variant="s_bold"
            size={{ base: "18", lg: "20" }}
            m={{ base: "16px 0px 10px ", lg: "20px 0px 10px" }}
          >
            Our services for tenants include:
          </Text>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {ServiceSubTwoData.slice(
              0,
              isMobile576 || isTablet768 ? (serviceSubTwo ? 5 : 3) : 3
            ).map((ser) => {
              return (
                <Box
                  key={ser.id}
                  width={{ base: "100%", md: "32.5%" }}
                  display="flex"
                  justifyContent="center"
                  alignItems={"center"}
                  flexDirection="column"
                  bgColor={colors.secondary}
                  border="2px solid #000000"
                  p={{ base: "10px", lg: "20px 10px" }}
                  borderRadius="10px"
                  mb={"10px"}
                >
                  <Text
                    variant="s_light"
                    size={{ base: "14", lg: "16" }}
                    textAlign="center"
                    m="0px"
                    color="#ffffff"
                  >
                    {ser.description}
                  </Text>
                </Box>
              );
            })}
          </Box>
          <Box display="flex" justifyContent="center">
            {serviceSubTwo && (
              <Box
                width="fit-content"
                display={{ base: "none", md: "flex" }}
                justifyContent="center"
              >
                {ServiceSubTwoData.slice(3).map((ser) => {
                  return (
                    <Box
                      key={ser.id}
                      width="32.5%"
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      alignItems="center"
                      bgColor={colors.secondary}
                      border="2px solid #000000"
                      p="20px"
                      borderRadius="10px"
                      m="10px 10px 10px"
                    >
                      <Text
                        variant="s_light"
                        size={{ base: "14", lg: "16" }}
                        textAlign="center"
                        m="0px"
                        color="#ffffff"
                      >
                        {ser.description}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
          <Button
            variant="link"
            mt="10px"
            onClick={() => setServiceSubTwo(!serviceSubTwo)}
          >
            {serviceSubTwo ? "View Less" : "View More"}
          </Button>
        </Box>

        <Box
          m={{ base: "20px 0px", lg: "20px 0px 50px" }}
          background={colors.primary}
          border="2px solid #000000"
          borderRadius="10px"
          p="20px"
        >
          <Box display="flex" flexDirection="column">
            <Text
              variant="p_bold"
              size={{ base: "24", lg: "32" }}
              mb={{ base: "10px", lg: "20px" }}
            >
              Comprehensive Real Estate Management Supervision Services:
              Ensuring the Success of Your Property Investments
            </Text>
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign="justify"
            >
              At Palm Land Real Estate, we take pride in offering comprehensive
              real estate management supervision services to help property
              owners maximize the value and performance of their investments.
              Our dedicated team of experts provides professional oversight,
              strategic guidance, and efficient management solutions to ensure
              the success of your real estate assets.
            </Text>
          </Box>
          <Text
            variant="s_bold"
            size={{ base: "18", lg: "20" }}
            m={{ base: "10px 0px", lg: "20px 0px" }}
          >
            Key aspects of our real estate management supervision services
            include:
          </Text>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {ServiceThreeData.slice(
              0,
              isTablet992 || isMobile576 || isTablet768
                ? serviceThree
                  ? 7
                  : 4
                : 4
            ).map((ser) => {
              return (
                <Box
                  key={ser.id}
                  width={{ base: "100%", md: "49%", lg: "24%" }}
                  display="flex"
                  justifyContent="flex-start"
                  flexDirection="column"
                  bgColor={colors.secondary}
                  border="2px solid #000000"
                  p={{ base: "10px", lg: "20px 10px" }}
                  borderRadius="10px"
                  mb={"10px"}
                >
                  <Text
                    variant="p_regular"
                    size={{ base: "16", lg: "18" }}
                    textAlign="center"
                    color="#ffffff"
                    mb="10px"
                  >
                    {ser.title}
                  </Text>
                  <Text
                    variant="s_light"
                    lineHeight="22px"
                    size={{ base: "14", lg: "16" }}
                    textAlign="center"
                    m="0px"
                    color="#ffffff"
                  >
                    {ser.description}
                  </Text>
                </Box>
              );
            })}
          </Box>
          <Box display="flex" justifyContent="center">
            {serviceThree && (
              <Box
                width="fit-content"
                display={{ base: "none", lg: "flex" }}
                justifyContent={"center"}
                flexWrap="wrap"
              >
                {ServiceThreeData.slice(4, 7).map((ser) => {
                  return (
                    <Box
                      key={ser.id}
                      width={{ base: "100%", md: "49%", lg: "24%" }}
                      display="flex"
                      justifyContent="flex-start"
                      flexDirection="column"
                      alignItems="center"
                      bgColor={colors.secondary}
                      border="2px solid #000000"
                      p={{ base: "10px", lg: "20px 10px" }}
                      borderRadius="10px"
                      m="20px 10px 10px"
                    >
                      <Text
                        variant="p_regular"
                        size={{ base: "16", lg: "18" }}
                        textAlign="center"
                        color="#ffffff"
                        mb="10px"
                      >
                        {ser.title}
                      </Text>
                      <Text
                        variant="s_light"
                        lineHeight="22px"
                        size={{ base: "14", lg: "16" }}
                        textAlign="center"
                        m="0px"
                        color="#ffffff"
                      >
                        {ser.description}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
          <Button
            variant="link"
            mt="10px"
            onClick={() => setServiceThree(!serviceThree)}
          >
            {serviceThree ? "View Less" : "View More"}
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default services;
