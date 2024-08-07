import { openModel } from "@/stores/Model/modelAction";
import colors from "@/theme/foundations/colors";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export const nav = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Services",
    path: "/services",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "News Letter",
    path: "/newsletter",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];
const Footer = () => {
  const data = useRouter();
  const isServicePage = useRouter().pathname.includes("/services");
  const dispatch = useDispatch();
  const openPropertyDealerRegisterModel = () => {
    dispatch(openModel("PropertyDealerModel", {}));
  };
  const { pathname } = useRouter();
  return (
    <>
      <Box bgColor={colors.primary} className="custom__container" m="0px">
        <Box className="custom__row">
          <Box
            padding={{ base: "30px 0px", lg: "50px 0px" }}
            display={"flex"}
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent={{ base: "flex-start", sm: "space-between" }}
            alignItems={{ base: "flex-start", sm: "center" }}
          >
            <Text
              size={{ base: "20", md: "24", lg: "28" }}
              variant="p_bold"
              mb={{ base: "10px", sm: "0px" }}
            >
              Become As Our Agent Partner.
            </Text>
            <Button
              width={"fit-content"}
              variant="secondary"
              onClick={() => openPropertyDealerRegisterModel()}
            >
              {!isServicePage ? "REGISTER NOW" : "JOIN AS INVESTOR"}{" "}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box bgColor={colors.secondary} className="custom__container">
        <Box className="custom__row">
          <Box p="50px 0px">
            {/* light_blue_palm_land_logo */}
            <Image
              width={80}
              height={100}
              mb="20px"
              src="/assets/images/yellow_palm_land_logo.svg"
            ></Image>
            <Text
              color="#ffffff"
              size={{ base: "20", md: "24", lg: "28" }}
              variant="p_regular"
              mb="10px"
            >
              Do You Need Help With Anything?
            </Text>
            <Text
              color={colors.secondary_color_shade_four}
              variant="s_light"
              size="14"
              mb="10px"
            >
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </Text>

            <Box alignItems={"flex-end"} className="row">
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                className="col-12 col-sm-10 col-md-8 col-lg-5"
              >
                <Box w={"100%"} display={"flex"} mb="0px">
                  <Input
                    padding={"10px 16px"}
                    border={"none"}
                    borderRadius={"5px"}
                    bgColor={"white"}
                    margin={"0px 20px 0px 0px"}
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    // value={user.email}
                    // onChange={(e) => onChange(e)}
                  />
                  {/* <Text variant={"s_regular"} size={"14"} mt="6px">
                    {error.email}
                  </Text>
                  <Text variant={"s_regular"} size={"14"} mt="6px">
                    Please enter valid email
                  </Text> */}
                </Box>
                <Button
                  color={colors.textColor}
                  varint="primary"
                  // onClick={handleSubmit}
                  type="button"
                >
                  Subscribe
                </Button>
              </Box>
              <Box className="col-12 col-lg-1 "></Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={{ base: "30px", lg: "0px" }}
                className="col-12 col-sm-10 col-md-8 col-lg-6"
              >
                {nav.map((list) => (
                  <Link href={list.path}>
                    <Text
                      color={pathname === list.path ? "#ffffff" : "#eab258"}
                      size="16"
                      variant="p_bold"
                    >
                      {list.text}
                    </Text>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* 
      <div className="legal">
        <span>© 2023 Designd By GorkCoder.</span>
      </div> */}
    </>
  );
};

export default Footer;
