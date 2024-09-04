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
  cityName,
  suggestions,
  ...rest
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [viewPort, setViewPort] = useState({});  
  useEffect(() => {
    if(null!=cityName){
      getGooglePlaceData(cityName,'AIzaSyA7KuzKnZtkXFnX27_urYqePDfFK5aSt74');
    }
  }, [cityName]);

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
    
  };
  const getGooglePlaceData = async (cityname, apiKey) => {
    try {
      const response = await fetch(`http://51.20.140.56/api/v1/property/place?cityname=${cityname}&apiKey=${apiKey}`);
      const data = await response.json();
      setViewPort(data.results[0].geometry.viewport);
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
                  bounds: viewPort && viewPort.northeast && viewPort.southwest ? {
                    north: viewPort.northeast.lat,
                    east: viewPort.northeast.lng,
                    south: viewPort.southwest.lat,
                    west: viewPort.southwest.lng,
                  } : undefined,
                  strictBounds: !!viewPort,
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
