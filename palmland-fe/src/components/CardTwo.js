import colors from "@/theme/foundations/colors";
import { Tooltip, Text } from "@chakra-ui/react";
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
      <div className="agents__details__block text-center">
        <div className="">
          <Text variant={"p_regular"} color={"white"} size={"md"} style={{lineHeight:"25px"}}>
            Sargam Singh
          </Text>
        </div>
        <div className="">
          <Text
            variant={"s_light"}
            color={colors.secondary_color_shade_two}
            size={"sm"}
            style={{fontSize: "12px", lineHeight: "20px"}}
          >
            Liverpool, UK
          </Text>
        </div>
        <div className="agents__name__listing__block" style={{justifyContent: "center"}}>
          <p className="agents__connects__icons__block" style={{padding: "10px"}}>
            <Tooltip label='011 971 50 123 4567'>
              <img
                src="/assets/icons/call.svg"
                alt="call"
                className="agents__connects__icon"
                style={{marginLeft: "0", height: "25px", width: "25px", backgroundColor: "#0E303E", borderRadius: "25px", padding: "5px"}}
              />
            </Tooltip>
            <Tooltip label='testdemo@gmail.com'>
              <img
                src="/assets/icons/email.png"
                alt="message"
                className="agents__connects__icon"
                style={{height: "25px", width: "25px", backgroundColor: "#0E303E", borderRadius: "25px", padding: "4px 4px"}}
              />
            </Tooltip>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
