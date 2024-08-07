import CardTwo from "@/components/CardTwo";

import React from "react";
import { Text } from "../../../../pages/components/text";

function Agents() {
  return (
    <div className="custom__container">
      <div className="custom__row agents__container">
        <Text
          content="Our Agents"
          varient="p_bold_secondary font_size_30"
          padding="0px 12px"
          margin="0px 0px 10px"
        />
        {/* <p className="agents__section__title">Our Agents</p> */}
        <div className="row agents__card__container">
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((ele) => {
            return (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 agents__card__block">
                <CardTwo image={ele} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Agents;
