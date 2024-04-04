import { useEffect, useRef, useState } from "react";
// import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonProps,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import Autocomplete from "react-google-autocomplete";

const LocationSearch = ({
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
  }, [currentState, suggestions]);

  const handleAddress = (data) => {
    const address_data = data.address_components;
    console.log(address_data, 'address_data')
  };
  return (
    <Box
      onMouseLeave={() => {
        setOpenDropdown(false);
      }}
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
                className="form-control"
                apiKey="AIzaSyA7KuzKnZtkXFnX27_urYqePDfFK5aSt74"
                onPlaceSelected={(place) => handleAddress(place)}
                options={{
                  strictBounds: false,
                  types: ["establishment"],
                  componentRestrictions: { country: "AE" },
                }}
              />
              {/* <Input
                // className="form__field"
                h={{ base: "30px", lg: "36px" }}
                p={"0px 8px"}
                fontSize={{ base: "12px", lg: "16px" }}
                autoComplete="off"
                border="2px solid #000000"
                borderRadius={"5px"}
                focusBorderColor="0px solid #000000"
                w={"100%"}
                name="location"
                value={searchLocation}
                onChange={(e) => {
                  onLocationChange(e);
                  setOpenDropdown(true);
                }}
              ></Input> */}
            </PopoverTrigger>
            <PopoverContent maxW={"100%"} maxH="200px" overflow="auto">
              <PopoverBody p="0">
                {searchResults?.length > 0 ? (
                  searchResults.map((i) => (
                    <Button
                      key={i}
                      onClick={() => {
                        onClose();
                        setOpenDropdown(false);
                        if (onOptionSelect) {
                          onOptionSelect(i);
                        }
                      }}
                      variant="menuItem"
                      wordBreak="break-all"
                      justifyContent="flex-start"
                      whiteSpace="pre-wrap"
                      h="auto"
                    >
                      {i}
                    </Button>
                  ))
                ) : (
                  <Text py={2} textAlign="center">
                    No Results
                  </Text>
                )}
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Box>
  );
};
export default LocationSearch;
