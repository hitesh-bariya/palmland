import { useRef, useState } from "react";

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

const PageSize = 20;
const SearchableDropDown = ({
  currentOption,
  options,
  onOptionSelect,
  searchable = true,
  ...rest
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noOfPages, setNoOfPages] = useState(1);

  const firstFieldRef = useRef(null);

  const searchResults = options.filter((x) =>
    x.name?.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <Popover
      initialFocusRef={firstFieldRef}
      onClose={() => setNoOfPages(1)}
      matchWidth={true}
    >
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button
              variant="dropDownButton"
              w="full"
              py={{ base: 1, lg: 2 }}
              px={2}
              h={{ base: "30px", lg: "36px" }}
              transition="all 0.2s"
              {...rest}
            >
              <Box
                w="full"
                alignItems="center"
                display="flex"
                justifyContent="space-between"
                gap="1"
              >
                <Text
                  size={{ base: "12", lg: "16" }}
                  variant="black"
                  marginBottom={0}
                  fontWeight="500"
                  overflow="clip"
                  whiteSpace="nowrap"
                  wordBreak="keep-all"
                  textOverflow="ellipsis"
                >
                  {currentOption.name}
                </Text>
                {/* <ChevronDownIcon
                  borderLeft="1px solid #e1e1e1"
                  color="currentcolor"
                  w={"8"}
                  h={"6"}
                /> */}
              </Box>
            </Button>
          </PopoverTrigger>
          <PopoverContent maxW={"100%"} maxH="200px" overflow="auto">
            <PopoverHeader>
              {searchable && (
                <InputGroup>
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value || "");
                    }}
                    ref={firstFieldRef}
                  />
                  <InputRightElement>
                    {/* <Search2Icon color="green.500" /> */}
                  </InputRightElement>
                </InputGroup>
              )}
            </PopoverHeader>

            <PopoverBody p="0">
              {searchResults?.length > 0 ? (
                searchResults.slice(0, noOfPages * PageSize).map((i) => (
                  <Button
                    key={i.id}
                    onClick={() => {
                      onClose();
                      if (onOptionSelect) {
                        onOptionSelect(i);
                      }
                    }}
                    variant="menuItem"
                    wordBreak="break-all"
                    justifyContent="flex-start"
                    whiteSpace="pre-wrap"
                    h="auto"
                    isActive={i.id === currentOption.id}
                  >
                    {i.name}
                  </Button>
                ))
              ) : (
                <Text pt={3} textAlign="center">
                  No Results
                </Text>
              )}
            </PopoverBody>
            {searchResults &&
              searchResults.length > PageSize &&
              searchResults.length > PageSize * noOfPages && (
                <PopoverFooter>
                  <Button
                    variant="dropDownButton"
                    w="full"
                    onClick={() => setNoOfPages((x) => x + 1)}
                  >
                    Load More
                  </Button>
                </PopoverFooter>
              )}
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default SearchableDropDown;
