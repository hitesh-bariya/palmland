import { openModel } from "@/stores/Model/modelAction";
import colors from "@/theme/foundations/colors";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

function CardThree({ item }) {
  const dispatch = useDispatch();

  return (
    <Box
      w={"100%"}
      bgColor={colors.secondary}
      padding={"0px"}
      borderRadius={"10px"}
      m={"0px 0px 24px"}
      border={"none"}
      bg={"none"}
      overflow={"hidden"}
      className="cardThree__block"
    >
      <Box
        w={"100%"}
        h={{ base: "180px", sm: "300px", lg: "250px", lg3: "300px" }}
        overflow={"hidden"}
        display={"flex"}
        justifyContent={"center"}
        className="cardThree__image__block"
      >
        <img
          src={`/assets/team/${item.imageName}.jpeg`}
          className="cardThree__image"
        />
      </Box>
      <Box
        padding={"10px"}
        bgColor={colors.secondary}
        className="team__details__block"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          className="team__name__listing__block"
        >
          <Box
            height={"40px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text
              variant="p_regular"
              color={"white"}
              size={{ base: "16", lg: "18" }}
              textAlign={"center"}
            >
              {item.name}
            </Text>
          </Box>
          <Box
            height={"30px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text
              variant="s_light"
              color={colors.secondary_color_shade_four}
              size={{ base: "14", lg: "16" }}
              textAlign={"center"}
            >
              {`(${item.designation})`}
            </Text>
          </Box>
          <Box
            height={"40px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <button
              onClick={() =>
                dispatch(openModel("BlogModelModel", { id: item.id }))
              }
            >
              <Text
                variant="p_regular"
                color={"#818181"}
                size={{ base: "16", lg: "18" }}
                textAlign={"center"}
                textDecoration={"underline"}
              >
                {"View more"}
              </Text>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardThree;
