import FormInput from "@/components/CommonComponents/FormInput";
import FormSelect from "@/components/CommonComponents/FormSelect";
import FormTextArea from "@/components/CommonComponents/FormTextArea";
import PhoneInput from "@/components/CommonComponents/PhoneInput";
import calltoMap from "@/helper/callToMap";
import { postPropertyData } from "@/stores/PostProperty/postPropertyAction";
import { Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import LocationSearch from "../src/components/PageComponets/HomePage/LocationSearch";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const PostProperty = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState();
  const [fileObject, setFileObject] = useState();
  const [fileError, setFileError] = useState("");
  const [error, setError] = useState(true);
  const toast = useToast();
  const router = useRouter();
  const onFileChange = (e) => {
    setFileObject(e.target.files);
    setFiles(e.target.value);
    // setFiles(e.target.files[0]);
  };

  const [dropDown, setDropdown] = useState(false);
  const [search, setSearch] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const onLocationChange = (value) => {
    setSearch({ ...search, location: value.target.value });
  };
  const onLocationOptionChange = (value) => {
    setSearch({ ...search, location: value });
  };

  useEffect(() => {
    if (fileObject && (fileObject.length > 10 || fileObject.length < 1)) {
      setFileError("You can't upload more than 10 files");
      setError(true);
    } else {
      setFileError("");
      setError(false);
    }
  }, [fileObject]);
  const onPropertySubmit = (propertyData, file) => {
    if (!error) {
      var form = new FormData();
      for (let i = 0; i < fileObject.length; i++) {
        form.append("files", fileObject[i]);
      }
      form.append("jsondata", JSON.stringify(propertyData));
      const callback = () => {
        toast({
          position: "top-right",
          title: "Property created.",
          description: "",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        router.push("/newsletter");
      };
      postPropertyData(form, callback);
    }
  };
  return (
    <div className="custom__container service__page">
      <div className="custom__row">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Text
            variant="p_bold"
            my="50px 0px 20px"
            size={{ base: "20", lg: "24" }}
            textAlign="center"
            mb="20px"
            mt="20px"
          >
            Post Property
          </Text>
          <Box width={{ base: "100%", md: "70%" }}>
            <Formik
              initialValues={{
                propertyName: "",
                propertyDesc: "",
                price: "",
                addressLine1: "",
                addressLine2: "",
                landMark: "",
                pinCode: "",
                location: "",
                country: "",
                rooms: "",
                propertyMarquee: "",
                propertyType: "Commercial",
              }}
              validationSchema={Yup.object({
                propertyName: Yup.string()
                  .trim()
                  .min(3, "Must be 3 characters or more")
                  .required("Required"),
                propertyDesc: Yup.string()
                  .trim()
                  .min(3, "Must be 3 characters or more")
                  .required("Required"),
                // price: Yup.required("Required"),
                addressLine1: Yup.string()
                  .trim()
                  .min(3, "Must be 3 characters or more")
                  .required("Required"),
                addressLine2: Yup.string()
                  .trim()
                  .min(3, "Must be 3 characters or more")
                  .required("Required"),
                pinCode: Yup.string()
                  .trim()
                  .min(3, "Invalid pincode") //invalid zipcode
                  .max(7, "Invalid pincode") //invalid zipcode
                  .required("required")
                  .nullable(),
                location: Yup.string()
                  .trim()
                  .min(3, "Must be 3 characters or more") //"At least 3 characters long"
                  .required("required")
                  .nullable(),

                // rooms: Yup.required("Required"),
              })}
              onSubmit={(values, actions) => {
                const payload = {
                  propertyName: values.propertyName,
                  propertyDesc: values.propertyDesc,
                  price: values.price,
                  location: {
                    addressLine1: values.addressLine1,
                    addressLine2: values.addressLine2,
                    landMark: values.landMark,
                    pinCode: values.pinCode,
                    location: values.location,
                    country: "",
                  },
                  propertyMarquee: values.propertyMarquee,
                  propertyType: values.propertyType,
                  amenities: {
                    rooms: values.rooms,
                  },
                };
                onPropertySubmit(payload, values.file);
                // setTimeout(() => {
                //   // alert(JSON.stringify(payload, null, 2));
                //   // dispatch(postPropertyData(payload));
                //   actions.setSubmitting(false);
                // }, 1000);
              }}
            >
              {({ setFieldValue }) => (
                <Form>
                  <Box display="flex" flexDirection={"column"}>
                    <Text
                      variant="p_bold"
                      my="50px 0px 20px"
                      size={{ base: "16", lg: "18" }}
                      mb="10px"
                      mt="20px"
                    >
                      Property Info
                    </Text>
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={2}>
                      <FormInput
                        name="propertyName"
                        type="text"
                        label="Property Name"
                        placeholder=""
                      />
                      <FormInput
                        name="propertyDesc"
                        type="text"
                        label="Property Description"
                        placeholder=""
                      />
                      <FormInput
                        name="price"
                        type="number"
                        label="Price"
                        placeholder=""
                      />
                    </SimpleGrid>
                    <Text
                      variant="p_bold"
                      my="50px 0px 20px"
                      size={{ base: "16", lg: "18" }}
                      mb="10px"
                      mt="20px"
                    >
                      Address Details
                    </Text>
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={2}>
                      {/* <FormInput
                        name="addressLine1"
                        type="text"
                        label="Address Line 1"
                        placeholder=""
                      /> */}
                      <Box 
                        className="post_property_location_search"
                      >
                        <label for="addressLine1" className="form__label">
                        Address Line 1
                        </label>
                        <GooglePlacesAutocomplete
                          selectProps={{
                            onChange: (value) => {
                              // setFieldValue("addressLine1", value.label);
                              setFieldValue("addressLine1", value.value.place_id);
                            },
                            
                          }}
                        />
                        {/* <LocationSearch
                          dropDown={dropDown}
                          currentState={search.state}
                          currentCity={search.city}
                          searchLocation={search.location}
                          suggestions={suggestions}
                          onLocationChange={onLocationChange}
                          onOptionSelect={onLocationOptionChange}
                        /> */}
                      </Box>
                      <FormInput
                        name="addressLine2"
                        type="text"
                        label="Address Line 2"
                        placeholder=""
                      />
                      <FormInput
                        name="landMark"
                        type="text"
                        label="Landmark"
                        placeholder=""
                      />
                      <FormInput
                        name="pinCode"
                        type="number"
                        label="Pincode"
                        placeholder=""
                      />
                      <FormInput
                        name="location"
                        type="text"
                        label="Location"
                        placeholder=""
                      />

                      <FormInput
                        name="rooms"
                        type="number"
                        label="Rooms"
                        placeholder=""
                      />
                      <FormSelect
                        name="propertyMarquee"
                        label="Property Marquee"
                        placeholder=""
                        options={[
                          { label: "FEATURED", value: "FEATURED" },
                          { label: "RECENT", value: "RECENT" },
                          { label: "UPCOMING", value: "UPCOMING" },
                          { label: "POPULAR", value: "POPULAR" },
                        ]}
                      />
                      <FormSelect
                        name="propertyType"
                        label="Property Type"
                        placeholder=""
                        options={[
                          { label: "Commercial", value: "Commercial" },
                          { label: "Residantial", value: "Residantial" },
                          { label: "Free/Hold", value: "Free/Hold" },
                          { label: "Non Free Hold", value: "Non Free Hold" },
                          { label: "Plots", value: "Plots" },
                        ]}
                      />
                      <Box>
                        <label htmlFor="file" className="form__label">
                          Images
                        </label>
                        <input
                          name="file"
                          type="file"
                          label="Attachment"
                          placeholder=""
                          multiple
                          value={files}
                          onChange={(e) => onFileChange(e)}
                        />
                        <Text color={"red"} fontSize={"12px"}>
                          {fileError}
                        </Text>
                      </Box>
                    </SimpleGrid>
                    <button
                      className="signIn__button"
                      type="submit"
                      style={{ marginTop: "20px" }}
                    >
                      Submit
                    </button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PostProperty;
