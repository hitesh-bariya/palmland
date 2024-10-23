import React from "react";
import { useDispatch } from "react-redux";

import { Box, Text } from "@chakra-ui/react";
import colors from "@/theme/foundations/colors";

function LogoTourModel({ setClickable }) {
  const dispatch = useDispatch();
  // disable click in model
  const disableClick = (value) => {
    setClickable(value);
  };

  return (
    <Box
      onMouseOver={() => disableClick(false)}
      onMouseLeave={() => disableClick(true)}
      bgColor={colors.primary}
      color={"white"}
      w={{ base: "80%", lg: "50%" }}
      maxH={"90vh"}
      overflowY={"auto"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        p={{ base: "20px", sm: "30px", lg: "40px" }}
      >
        <Text
          variant="p_bold"
          size={{ base: "18", lg: "24" }}
          mb={{ base: "10px", lg: "20px" }}
        >
          Logo Tour
        </Text>
        <Text
          variant="p_regular"
          size={{ base: "14", lg: "16" }}
          textAlign="justify"
          mb={{ base: "10px", lg: "20px" }}
        >
          Palm Land Real Estate is a company that specializes in real estate
          services, including property management, investment, buying on
          brokerage, and selling. The company's logo is a significant aspect of
          its brand identity and serves as a symbol of its values, mission, and
          vision. The logo features a stylized palm tree, which is a well-known
          symbol of prosperity, growth, and tropical paradise. The palm tree is
          depicted in a bold and modern style, with a sleek, minimalist design
          that matches the characters of a house, and represents the company's
          commitment to innovation and excellence.
        </Text>
        <Text
          variant="p_regular"
          size={{ base: "14", lg: "16" }}
          textAlign="justify"
          mb={{ base: "10px", lg: "20px" }}
        >
          The logo's use of Dark blue and gold convey a sense of
          professionalism, luxury, sophistication, trust, and reliability. It
          can also communicate a sense of confidence and stability. In a real
          estate context, this can suggest that the company is financially
          stable, has a strong track record, and can be trusted to guide clients
          through the complex process of buying or selling a property.
        </Text>
        <Text
          variant="p_regular"
          size={{ base: "14", lg: "16" }}
          textAlign="justify"
          mb={{ base: "10px", lg: "20px" }}
        >
          Overall, the Palm Land Real Estate minimalistic logo reflects the
          company's values of professionalism, reliability, and customer
          satisfaction, making it a recognizable and memorable symbol in the
          competitive real estate industry.
        </Text>
        {/* <Text
          variant="p_regular"
          size={{ base: "14", lg: "16" }}
          textAlign="justify"
          mb={{ base: "10px", lg: "20px" }}
        >
          At Palm Land Real Estate LLC, we believe that success in the prime
          real estate market requires a combination of market knowledge,
          strategic thinking, and personalized attention. That's why we take the
          time to get to know our clients and their unique needs, so we can
          tailor our services to meet their specific goals.
        </Text> */}

        <video autoPlay loop muted preload="yes" className="banner__video">
          <source
            src="/assets/videos/banner_video.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Box>
    </Box>
  );
}

export default LogoTourModel;
