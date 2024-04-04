import FormInput from "@/components/CommonComponents/FormInput";
import FormSelect from "@/components/CommonComponents/FormSelect";
import FormTextArea from "@/components/CommonComponents/FormTextArea";
import PhoneInput from "@/components/CommonComponents/PhoneInput";
import calltoMap from "@/helper/callToMap";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import * as Yup from "yup";

const contact = () => {
  const mapRef = useRef();

  useEffect(() => {
    calltoMap();
  }, []);
  return (
    <div className="custom__container service__page">
      <div className="custom__row">
        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={{ base: 2, lg: 4 }}
          marginY={"50px"}
        >
          {" "}
          <GridItem colSpan={{ base: 12, md: 5 }}>
            <Box my="10px">
              <Text variant="p_bold" size={{ base: "20", lg: "24" }}>
                Contact Details
              </Text>
              <Text
                variant="s_bold"
                size={{ base: "16", lg: "18" }}
                margin="0px"
              >
                Office address :
              </Text>
              <Text
                variant="s_regular"
                size={{ base: "16", lg: "18" }}
                margin="0px"
              >
                30th Floor Aspin Commercial Tower
              </Text>
              <Text
                variant="s_regular"
                size={{ base: "16", lg: "18" }}
                margin="0px"
              >
                Trade center 1
              </Text>
              <Text
                variant="s_regular"
                size={{ base: "16", lg: "18" }}
                margin="0px"
              >
                Sheikh Zayed Road Dubai, UAE
              </Text>
              <Text
                variant="s_bold"
                size={{ base: "16", lg: "18" }}
                margin="20px 0px 0px"
              >
                {" "}
                Landline number :
              </Text>
              <Text
                variant="s_regular"
                size={{ base: "16", lg: "18" }}
                margin="0px"
              >
                04 355 5109
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 7 }}>
            <Box
              ref={mapRef}
              id="map"
              className="map__Container map__block"
              height={"263px"}
            ></Box>
          </GridItem>
        </Grid>

        <Box display="flex" alignItems="center" flexDirection="column">
          <Text
            variant="p_bold"
            my="50px 0px 20px"
            size={{ base: "20", lg: "24" }}
            textAlign="center"
            mb="20px"
          >
            Contact Form
          </Text>
          <Box width={{ base: "100%", md: "70%" }}>
            <Formik
              initialValues={{
                subject: "",
                email: "",
                message: "",
              }}
              validationSchema={Yup.object({
                subject: Yup.string()
                  .trim()
                  .min(3, "Must be 3 characters or more")
                  .required("Required"),

                email: Yup.string()
                  .trim()
                  .email("Invalid email address")
                  .required("Required"),

                message: Yup.string()
                  .trim()
                  .min(3, "Must be 3 characters or more")
                  .required("Required"),
              })}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <Box display="flex" flexDirection={"column"}>
                    <Box
                      display="flex"
                      flexDirection={{ base: "column", md: "row" }}
                      justifyContent="space-between"
                    >
                      <Box w={{ base: "100%", md: "48%" }}>
                        <FormInput
                          name="subject"
                          type="text"
                          label="Subject"
                          placeholder=""
                        />
                      </Box>

                      <Box w={{ base: "100%", md: "48%" }}>
                        <FormInput
                          name="email"
                          type="text"
                          label="Email Address"
                          placeholder=""
                        />
                      </Box>
                    </Box>
                    <FormTextArea
                      name="message"
                      label="Message"
                      rows="10"
                      placeholder=""
                    />
                    <FormInput
                      name="file"
                      type="file"
                      label="Attachment"
                      placeholder=""
                    />
                    <button className="signIn__button" type="submit">
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

export default contact;
