import CardTwo from "@/components/CardTwo";

import React from "react";
import { Text } from "../../../../pages/components/text";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};

function Agents() {
  return (
    <div style={{backgroundColor: "#09212B"}}>
      <div className="custom__container" style={{padding: "30px 0"}}>
        <div className="custom__row agents__container">
          <Text
            content="Our Agents"
            varient="p_bold_primary font_size_36"
            padding="0px 12px"
            margin="0px 0px 10px"
            color= "#ECF2F8"
            lineHeight= "72px"
          />
          <div className="row agents__card__container agent-slider">
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((ele) => {
                  return(
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 agents__card__block p-2">
                      <CardTwo image={ele} />
                    </div>
                  )
                })}
              </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agents;
