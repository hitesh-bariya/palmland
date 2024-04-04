const data = {
  //   "carpetArea": "2300sqft",
  propertyDesc: "this is a newly constructed property",
  //   "imgData": "None",
  // dropdown
  currency: ["USD", "INR"],
  price: "15000/sqft",
  // dropdown
  // transactionType: ["RESALE", "NEW_PROPERTY", "UPCOMING_PROPERTY"],
  //   "propertyStatus": "READY_TO_MOVE",
  //   "furnishedStatus": "UNFURNISHED",
  location: {
    // autocomplete suggestion by google api
    addressLine1: "house#2",
    addressLine2: "Munnekola",
    pinCode: "1212",
    // dropdown
    city: "Bangalore",
    state: "Karnataka",
    country: "Karnataka",
  },
  // propertyType: "COMMERCIAL",
  // dropdown
  propertyMarquee: ["RECENT", "UPCOMIG", "FUTURE"],
  amenities: {
    // number
    rooms: "2",
    // radiobutton
    facing: [
      "NORTH",
      "EAST",
      "WEST",
      "NORTH",
      "SOUTH",
      "SOUTH_EAST",
      "NORTH_WEST",
      "NORTH_EAST",
    ],
    // radiobutton
    wifi: "YES",
  },
};

const TextPage = () => {
  const Varient = [
    "p_light_primary",
    "p_regular_primary",
    "p_bold_primary",
    "p_light_primary_shade_1",
    "p_regular_primary_shade_1",
    "p_bold_primary_shade_1",
    "p_light_primary_shade_2",
    "p_regular_primary_shade_2",
    "p_bold_primary_shade_2",
    "p_light_primary_shade_3",
    "p_regular_primary_shade_3",
    "p_bold_primary_shade_3",
    "p_light_primary_shade_4",
    "p_regular_primary_shade_4",
    "p_bold_primary_shade_4",
    "p_light_secondary",
    "p_regular_secondary",
    "p_bold_secondary",
    "p_light_secondary_shade_1",
    "p_regular_secondary_shade_1",
    "p_bold_secondary_shade_1",
    "p_light_secondary_shade_2",
    "p_regular_secondary_shade_2",
    "p_bold_secondary_shade_2",
    "p_light_secondary_shade_3",
    "p_regular_secondary_shade_3",
    "p_bold_secondary_shade_3",
    "p_light_secondary_shade_4",
    "p_regular_secondary_shade_4",
    "p_bold_secondary_shade_4",

    "p_light_black",
    "p_regular_black",
    "p_bold_black",
    "s_light_black",
    "s_regular_black",
    "s_bold_black",

    "p_light_white",
    "p_regular_white",
    "p_bold_white",
    "s_light_white",
    "s_regular_white",
    "s_bold_white",

    "s_light_primary",
    "s_regular_primary",
    "s_bold_primary",
    "s_light_primary_shade_1",
    "s_regular_primary_shade_1",
    "s_bold_primary_shade_1",
    "s_light_primary_shade_2",
    "s_regular_primary_shade_2",
    "s_bold_primary_shade_2",
    "s_light_primary_shade_3",
    "s_regular_primary_shade_3",
    "s_bold_primary_shade_3",
    "s_light_primary_shade_4",
    "s_regular_primary_shade_4",
    "s_bold_primary_shade_4",
    "s_light_secondary",
    "s_regular_secondary",
    "s_bold_secondary",
    "s_light_secondary_shade_1",
    "s_regular_secondary_shade_1",
    "s_bold_secondary_shade_1",
    "s_light_secondary_shade_2",
    "s_regular_secondary_shade_2",
    "s_bold_secondary_shade_2",
    "s_light_secondary_shade_3",
    "s_regular_secondary_shade_3",
    "s_bold_secondary_shade_3",
    "s_light_secondary_shade_4",
    "s_regular_secondary_shade_4",
    "s_bold_secondary_shade_4",
  ];
  const extrasizes = [36, 30, 24, 20, 18, 16, 14];
  const sizes = [24];
  return (
    <div className=" text__page">
      <div className="row">
        {Varient.map((varient) => {
          return (
            <div className="col-4">
              {sizes.map((size) => {
                return (
                  <Text
                    content={`${varient}`}
                    varient={`font_size_${size} ${varient}`}
                  ></Text>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextPage;

export const Text = ({
  content,
  varient,
  margin = "0px",
  padding = "0px",
  textAlign,
  ...rest
}) => {
  return (
    <p style={{ margin, padding, textAlign,...rest }} className={varient}>
      {content}
    </p>
  );
};
