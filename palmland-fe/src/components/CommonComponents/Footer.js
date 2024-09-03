import { openModel } from "@/stores/Model/modelAction";
import colors from "@/theme/foundations/colors";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserDetail } from "@/stores/Auth/authReducer";

export const nav = [
  {
    text: "Home",
    path: "/",
    accesTo: ["USER"],
  },
  {
    text: "About",
    path: "/about",
    accesTo: ["ADMIN"],
  },
  {
    text: "Services",
    path: "/services",
    accesTo: ["USER"],
  }, {
    text: "News Letter",
    path: "/newsletter",
    accesTo: ["USER"],
  },
  {
    text: "Blog",
    path: "/blog",
    accesTo: ["ADMIN", "USER"],
  },

  {
    text: "Contact",
    path: "/contact",
    accesTo: ["ADMIN"],
  },
  ,
  {
    text: "Career",
    path: "/career",
    accesTo: ["USER", "DEALER", "ADMIN"],
  }
];
const Footer = () => {
  const data = useRouter();
  const isServicePage = useRouter().pathname.includes("/services");
  const dispatch = useDispatch();



  const isloggedIn = useSelector(selectIsLoggedIn);
  const userDetail = useSelector(selectUserDetail);
  const router = useRouter();
  const [userRole, setUserRole] = useState("USER");
  useEffect(() => {
    if (isloggedIn && userDetail.role !== "") {
      setUserRole(userDetail.role);
    } else {
      setUserRole("USER");
      window.localStorage.setItem("userRole", "USER");
    }
  }, [isloggedIn]);


  useEffect(() => {
    if (window.localStorage.getItem("userRole")) {
      setUserRole(window.localStorage.getItem("userRole"));
    }
  }, []);



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
      <Box bgColor={colors.secondary} className="custom__container" style={{padding: "50px 0"}}>
        <Box className="custom__row">
          <Box className="row">
            <Box
              className="col-sm-12 col-md-6 col-lg-5"
            >
              <Box w={"100%"} mb="0px">
                {/* light_blue_palm_land_logo */}
                <Image
                  width={218}
                  height={53}
                  src="/assets/images/logo.png"
                  style={{padding: "0 0 30px 0"}}
                ></Image>
                <Text
                  color="#23566B"
                  fontSize={"15px"}
                  lineHeight={"17.58px"}
                  style={{padding: "0 0 40px 0"}}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </Box>
            </Box>
            <Box className="col-12 col-lg-1"></Box>
            <Box
              className="col-sm-12 col-md-6 col-lg-6"
            >
              <Text
                color="#ffffff"
                size={{ base: "20", md: "24", lg: "28" }}
                variant="p_regular"
                mb="30px"
              >
                Get all the latest updates
              </Text>
              <Box className="row">
                <Box
                  className="col-sm-12 col-md-6 col-lg-8"
                >
                  <Box w={"100%"} mb="0px">
                    <Input
                      padding={"10px 16px"}
                      border={"none"}
                      borderRadius={"5px"}
                      bgColor={"white"}
                      margin={"0px 20px 0px 0px"}
                      name="email"
                      type="email"
                      placeholder="Email Id"
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
                </Box>
                <Box
                  className="col-sm-12 col-md-6 col-lg-4"
                >
                  <Box w={"100%"} mb="0px">
                    <Button
                      color={colors.textColor}
                      varint="primary"
                      // onClick={handleSubmit}
                      type="button"
                    >
                      Subscribe
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box alignItems={"flex-end"} className="row">
            <Box
                  className="col-sm-12 col-md-12 col-lg-12"
                >
                  <Box w={"100%"} mb="0px">
                    <Text
                      color="#ECF2F8"
                      fontSize={"20px"}
                      lineHeight={"9.58px"}
                      style={{padding: "0 0 15px 0"}}
                      fontWeight="900"
                    >
                      Menu
                    </Text>
                  </Box>
                </Box>
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                className="col-12 col-sm-10 col-md-8 col-lg-12"
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={{ base: "30px", lg: "0px" }}
                  className="col-12 col-sm-10 col-md-6 col-lg-5"
                >
                  {nav.map((list) => (
                    list.accesTo.includes(userRole) && (
                      <Link key={list.path} href={list.path}>
                        <Text
                          // color={pathname === list.path ? "#ffffff" : "#eab258"}
                          color="#FFFFFF"
                          fontSize="16px"  // Use `fontSize` instead of `size` for Chakra UI
                          fontWeight="400"
                        >
                          {list.text}
                        </Text>
                      </Link>
                    )
                  ))}
                </Box>
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
