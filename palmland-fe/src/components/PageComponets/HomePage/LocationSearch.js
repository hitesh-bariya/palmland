import { useEffect, useState } from "react";
import { Box, Popover, PopoverTrigger } from "@chakra-ui/react";
import Autocomplete from "react-google-autocomplete";

const LocationSearch = ({
  dropDown,
  currentState,
  currentCity,
  searchLocation,
  onLocationChange,
  onOptionSelect,
  suggestions,
  ...rest
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (currentState === "ALL") {
      setSearchResults(suggestions);
    } else {
      const newSearch = suggestions.filter(
        (x) =>
          x.toLowerCase().includes(currentState.name.trim().toLowerCase()) &&
          x.toLowerCase().includes(currentCity.name.trim().toLowerCase())
      );
      setSearchResults(newSearch);
    }
  }, [currentState, currentCity, suggestions]);

  const handleAddress = (data) => {
    const addressComponents = data.address_components;
    const name = data.name || '';
    const city = addressComponents.find(component => component.types.includes("locality"))?.long_name || '';
    const state = addressComponents.find(component => component.types.includes("administrative_area_level_1"))?.long_name || '';
    const country = addressComponents.find(component => component.types.includes("country"))?.long_name || '';
    const locationString = `${name} - ${city} - ${state} - ${country}`;
    debugger
    onOptionSelect(locationString);
  };

  return (
    <Box
      onMouseLeave={() => {
        setOpenDropdown(false);
      }}
      style={{ marginRight: "20px" }}
    >
      <Popover
        isOpen={openDropdown}
        autoFocus={false}
        closeOnBlur={true}
        matchWidth={true}
      >
        {({ onClose, onOpen }) => (
          <>
            <PopoverTrigger>
              <Autocomplete
                style={{
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  color: "#eab258",
                }}
                className="form-control custom-autocomplete"
                apiKey="AIzaSyA7KuzKnZtkXFnX27_urYqePDfFK5aSt74"
                onPlaceSelected={(place) => handleAddress(place)}
                options={{
                  strictBounds: false,
                  types: ["establishment"],
                  componentRestrictions: { country: "AE" },
                }}
              />
            </PopoverTrigger>
          </>
        )}
      </Popover>
    </Box>
  );
};

export default LocationSearch;
