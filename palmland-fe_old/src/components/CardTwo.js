import colors from "@/theme/foundations/colors";
import { Text } from "@chakra-ui/react";
import React from "react";

function CardTwo({ image }) {
  return (
    <div className="cardTwo__block">
      <div className="cardTwo__image__border">
        <div className="cardTwo__image__block">
          <img
            src={`/assets/images/agents_0${image}.png`}
            className="cardTwo__image"
          />
        </div>
      </div>
      <div className="agents__details__block">
        <div className="agents__name__listing__block">
          <Text variant={"p_regular"} color={"white"} size={"md"}>
            Sargam Singh
          </Text>
          <Text
            variant={"s_bold"}
            color={colors.secondary_color_shade_two}
            size={"sm"}
          >
            70
          </Text>
        </div>
        <div className="agents__name__listing__block">
          <Text
            variant={"s_light"}
            color={colors.secondary_color_shade_two}
            size={"sm"}
          >
            Liverpool, UK
          </Text>
          <p className="agents__connects__icons__block">
            <img
              src="/assets/icons/call.svg"
              alt="call"
              className="agents__connects__icon"
            />
            <img
              src="/assets/icons/message.svg"
              alt="message"
              className="agents__connects__icon"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
