import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Text } from "@chakra-ui/react";
import colors from "@/theme/foundations/colors";
import Slider from "react-slick";
import Image from "next/image";

function PropertyImagesModel({ setClickable }) {
  const dispatch = useDispatch();
  const modelParams = useSelector((state) => state.model.params);
  const disableClick = (value) => {
    setClickable(value);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
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
      <Box width={"300px"} height={"300px"} margin={"20px auto"}>
        <Slider {...settings}>
          {modelParams.images.map((img) => {
            return (
              <Image
                key={img.id}
                priority
                className="carousal__image"
                width={100}
                height={100}
                src={img.path}
                alt={img.name}
              />
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}

export default PropertyImagesModel;
