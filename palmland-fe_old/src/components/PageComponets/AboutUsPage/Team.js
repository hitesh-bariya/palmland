import CardOne from "@/components/CardOne";
import CardThree from "@/components/CardThree";
import CardTwo from "@/components/CardTwo";
import React from "react";
const TeamData = [
  {
    id: 1,
    name: "Mr. Mohamed Hamad Al Shehi",
    imageName: "mohamed",
    designation: "Chairman",
  },
  {
    id: 2,
    name: "Ms. Savitha B M",
    imageName: "savitha",
    designation: "Director",
  },
  {
    id: 3,
    name: "Mr.Kedarnath J K",
    imageName: "kedarnath",
    designation: "Director - Business Development",
  },
  {
    id: 4,
    name: "Ms. Pallavi J K",
    imageName: "pallavi",
    designation: "Managing Director",
  },
];
function Team() {
  return (
    <div className=" custom__container">
      <div className="custom__row team__card__container">
        <p className="team__section__title">Our Team</p>
        <div className="row team__card__block">
          {TeamData.map((ele) => {
            return (
              <div className="col-6  col-md-6 col-lg-3 ">
                <CardThree item={ele} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
