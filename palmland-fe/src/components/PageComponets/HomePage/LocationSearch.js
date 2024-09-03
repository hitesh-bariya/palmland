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
    onOptionSelect(data.place_id);
    //getGooglePlaceData(data.place_id, 'AIzaSyA7KuzKnZtkXFnX27_urYqePDfFK5aSt74');
  };
  const getGooglePlaceData = async (placeId, apiKey) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/property/place?placeId=${placeId}&apiKey=${apiKey}`);
      const data = await response.json();
      onOptionSelect(data.result.name +"-"+ data.result.formatted_address);
    } catch (error) {
      console.error('Error fetching place data:', error);
      return '';
    }
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
