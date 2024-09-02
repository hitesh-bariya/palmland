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
  },{
    text: "News Letter",
    path: "/newsletter",
    accesTo: ["USER"],
  },
  {
    text: "Blog",
    path: "/blog",
    accesTo: ["ADMIN","USER"],
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
                  list.accesTo.includes(userRole) && (
                    <Link key={list.path} href={list.path}>
                      <Text
                        color={pathname === list.path ? "#ffffff" : "#eab258"}
                        fontSize="16px"  // Use `fontSize` instead of `size` for Chakra UI
                        fontWeight="bold" // Use `fontWeight` instead of `variant` for Chakra UI
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
      {/* 
      <div className="legal">
        <span>© 2023 Designd By GorkCoder.</span>
      </div> */}
    </>
  );
};

export default Footer;
