import { NewsLetterData } from "@/common";
import colors from "@/theme/foundations/colors";
import { Box, Button, SimpleGrid, Text, color } from "@chakra-ui/react";
import React from "react";
// import { Text } from "./components/text";

const newsletter = () => {
  return (
    <Box className="custom__container about__page">
      <Box className="custom__row">
        <Box m={{ base: "20px 0px", lg: "30px 0px" }}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            m="0px 0px 20px"
          >
            <Text
              variant="p_bold"
              size={{ base: "24", lg: "32" }}
              mb={{ base: "10px", lg: "20px" }}
            >
              Dear valued clients and subscribers,
            </Text>
            <Text
              variant="s_regular"
              size={{ base: "16", lg: "18" }}
              textAlign="justify"
            >
              We hope this newsletter finds you well. As the Dubai real estate
              market continues to evolve, we wanted to share some updates and
              insights with you.
            </Text>
          </Box>

          <SimpleGrid
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
          </SimpleGrid>
          <Text
            variant="s_regular"
            size={{ base: "16", lg: "18" }}
            textAlign="justify"
            mt={{ base: "20px", lg: "40px" }}
          >
            Thank you for your continued support of Palm Land Real Estate. We're
            here to provide you with personalized attention, professional
            guidance, and innovative solutions to help you achieve your real
            estate goals. Don't hesitate to reach out to us with any questions
            or to schedule a consultation.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default newsletter;
