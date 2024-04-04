import Image from "next/image";
import React from "react";
import image_01 from "../../public/assets/images/first.jpg";
import image_02 from "../../public/assets/images/02.jpg";
import image_03 from "../../public/assets/images/03.jpg";
import image_04 from "../../public/assets/images/04.jpg";
import bedroom from "../../public/assets/icons/bedroom.svg";
import kitchen from "../../public/assets/icons/kitchen.svg";
import Slider from "react-slick";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModel } from "@/stores/Model/modelAction";

function CardOne({ property }) {
  const dispatch = useDispatch();
  const openPropertyImagesModel = () => {
    dispatch(openModel("PropertyImagesModel", { images: property.imgData }));
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
    <div className="cardOne__card__block">
      <div
        style={{ cursor: "pointer" }}
        onClick={openPropertyImagesModel}
        className="carousal__image__block"
      >
        <Slider {...settings}>
          {property.imgData.map((img) => {
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
          {/* <Image
            priority={true}
            className="carousal__image"
            width="100%"
            height="auto"
            src={image_01}
            alt="Picture of the author"
          />
          <Image
            priority={true}
            className="carousal__image"
            width="100%"
            height="auto"
            src={image_02}
            alt="Picture of the author"
          />
          <Image
            priority={true}
            className="carousal__image"
            width="100%"
            height="auto"
            src={image_03}
            alt="Picture of the author"
          />
          <Image
            priority={true}
            className="carousal__image"
            width="100%"
            height="auto"
            src={image_04}
            alt="Picture of the author"
          />
          <Image
            priority={true}
            className="carousal__image"
            width="100%"
            height="auto"
            src={image_01}
            alt="Picture of the author"
          /> */}
        </Slider>
      </div>
      <Link rel="preload" href={`/property/${property.id}`}>
        <div className="cardOne__details__block">
          <div className="cardOne__property__details__block">
            <Text variant="p_regular" size="20">
              {property.propertyName}
            </Text>
            <Text variant="s_light" size="14">
              Vashi, West Mumbai
            </Text>
          </div>
          <Text content="59 Lac" varient="p_bold_primary font_size_20" />
        </div>
        <div className="cardOne__property__facility__block">
          <Text variant="s_light" size="18">
            2 BHK
          </Text>

          <div className="cardOne__proprty__amenities__block">
            <div className="cardOne__proprty__amenity">
              <Image
                className="cardOne__proprty__amenity__icon"
                src={bedroom}
              />
              <Text variant="s_light" size="14" ml="5px">
                Bedroom
              </Text>
            </div>
            <div className="cardOne__proprty__amenity">
              <Image
                className="cardOne__proprty__amenity__icon"
                src={kitchen}
              />
              <Text variant="s_light" size="14" ml="5px">
                Kitchen
              </Text>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardOne;
