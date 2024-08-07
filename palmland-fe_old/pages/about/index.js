import Team from "@/components/PageComponets/AboutUsPage/Team";
import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import colors from "@/theme/foundations/colors";
const about = () => {
  return (
    <>
      <div className="custom__container about__page">
        <div className="custom__row">
          <Box
            m={{ base: "30px 0px 30px", lg: "50px 0px 30px" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign={"justify"}
              mb="20px"
            >
              Welcome to Palm Land Real Estate LLC, where we provide premier
              real estate services to prime customers looking for prime
              locations. We understand that buying or selling a property in a
              prime location requires a specialized approach, which is why we're
              dedicated to providing our clients with the highest level of
              service and expertise in the industry.
            </Text>
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign={"justify"}
              mb="20px"
            >
              Our team of experienced professionals has a deep understanding of
              the prime real estate market, including the latest trends, pricing
              strategies, and local regulations. We work tirelessly to ensure
              that our clients get the best possible results, whether they're
              looking to buy, sell, or invest in prime real estate.
            </Text>
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign={"justify"}
              mb={{ base: "0px", lg: "20px" }}
            >
              At Palm Land Real Estate LLC, we believe that success in the prime
              real estate market requires a combination of market knowledge,
              strategic thinking, and personalized attention. That's why we take
              the time to get to know our clients and their unique needs, so we
              can tailor our services to meet their specific goals.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mb="50px"
          >
            <Text
              variant="p_bold"
              size={{ base: "20", lg: "24" }}
              textAlign={"center"}
              mb={{ base: "10px", lg: "20px" }}
            >
              Our services include:
            </Text>

            <Box display="flex" justifyContent="center">
              <Text
                w={{ base: "90%", lg: "70%" }}
                variant="s_regular"
                size={{ base: "16", lg: "18" }}
                textAlign={"center"}
                mb="20px"
              >
                Residential and commercial sales: We specialize in real estate
                sales, including luxury homes, villas, condominiums, and
                commercial properties in international bias locations in UAE.
              </Text>
            </Box>
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 2 }}
              spacing={{ base: 3, lg: 6 }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                padding={{ base: "20px 20px 16px", lg: "20px" }}
                bgColor="#feda85"
                borderRadius="10px"
              >
                <Text
                  variant="p_bold"
                  size={{ base: "20", lg: "24" }}
                  textAlign={"center"}
                  mb="10px"
                >
                  Leasing Property Brokerage Agents
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "16", lg: "18" }}
                  textAlign={"center"}
                >
                  We specialize in connecting tenants with the perfect rental
                  properties, providing expert guidance throughout the leasing
                  process. Whether you're a landlord seeking reliable tenants or
                  a renter searching for your ideal home, our dedicated team is
                  here to assist you every step of the way. Experience seamless
                  leasing with our trusted brokerage agent service.
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                padding={{ base: "20px 20px 16px", lg: "20px" }}
                bgColor="#feda85"
                borderRadius="10px"
              >
                <Text
                  variant="p_bold"
                  size={{ base: "20", lg: "24" }}
                  textAlign={"center"}
                  mb="10px"
                >
                  Real estate investments
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "16", lg: "18" }}
                  textAlign={"center"}
                >
                  Our team of experts can help you identify and evaluate
                  potential real estate investments in prime locations, so you
                  can grow your portfolio and achieve your financial goals.
                </Text>
              </Box>
            </SimpleGrid>
            <Text
              variant="p_bold"
              size={{ base: "20", lg: "24" }}
              textAlign={"center"}
              m={{ base: "30px 0px 20px", lg: "50px 0px 40px" }}
            >
              Why Choose Palm Land Real Estate?
            </Text>

            <SimpleGrid
              columns={{ base: 1, sm: 2, lg3: 4 }}
              spacing={{ base: 3, lg: 6 }}
            >
              <Box
                display="flex"
                flexDirection="column"
                padding={{ base: "20px 20px 16px", lg: "20px" }}
                bgColor="#39545d"
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
                    size={{ base: "20", lg: "24" }}
                    textAlign={"center"}
                    mb="10px"
                    color={colors.secondary_color_shade_four}
                  >
                    Prime Locations
                  </Text>
                </Box>
                <Text
                  variant="s_light"
                  color={"white"}
                  size={{ base: "16", lg: "18" }}
                  textAlign={"center"}
                  mb="10px"
                >
                  We specialize in offering properties in the most desirable and
                  sought-after locations, ensuring you have access to the best
                  opportunities the market has to offer.
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                padding={{ base: "20px 20px 16px", lg: "20px" }}
                bgColor="#39545d"
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
                    size={{ base: "20", lg: "24" }}
                    textAlign={"center"}
                    mb="10px"
                    color={colors.secondary_color_shade_four}
                  >
                    Expertise
                  </Text>
                </Box>
                <Text
                  variant="s_light"
                  color={"white"}
                  size={{ base: "16", lg: "18" }}
                  textAlign={"center"}
                >
                  With years of industry experience, our team possesses in-depth
                  knowledge of the local real estate market. We stay up-to-date
                  on trends and developments to provide you with insightful
                  advice.
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                padding={{ base: "20px 20px 16px", lg: "20px" }}
                bgColor="#39545d"
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
                    size={{ base: "20", lg: "24" }}
                    textAlign={"center"}
                    mb="10px"
                    color={colors.secondary_color_shade_four}
                  >
                    Personalised Approach
                  </Text>
                </Box>
                <Text
                  variant="s_light"
                  color={"white"}
                  size={{ base: "16", lg: "18" }}
                  textAlign={"center"}
                >
                  Your goals and preferences are at the forefront of our
                  service. We take the time to understand your unique needs and
                  tailor our solutions to match them perfectly.
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                padding={{ base: "20px 20px 16px", lg: "20px" }}
                bgColor="#39545d"
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
                    size={{ base: "20", lg: "24" }}
                    textAlign={"center"}
                    mb="10px"
                    color={colors.secondary_color_shade_four}
                  >
                    Integrity and Transparency
                  </Text>
                </Box>
                <Text
                  variant="s_light"
                  color={"white"}
                  size={{ base: "16", lg: "18" }}
                  textAlign={"center"}
                >
                  Trust is the foundation of our business. We operate with
                  utmost integrity and transparency, ensuring your interests are
                  always protected.
                </Text>
              </Box>
            </SimpleGrid>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text
                variant="s_light"
                w={{ base: "90%", lg: "70%" }}
                size={{ base: "18", lg: "20" }}
                textAlign={"center"}
                m="40px 0px 20px"
              >
                So whether you're a prime customer looking for the most
                luxurious properties in prime locations in UAE, trust Palm Land
                Real Estate LLC to provide you with the guidance and support you
                need to achieve your real estate goals.
              </Text>

              <Text
                variant="s_light"
                w={{ base: "90%", lg: "70%" }}
                size={{ base: "18", lg: "20" }}
                textAlign={"center"}
                mb={"0px 0px 20px"}
              >
                Contact us today to learn more about our services and how we can
                help you.
              </Text>
            </Box>
          </Box>
        </div>
      </div>
      <Team></Team>
    </>
  );
};

export default about;
