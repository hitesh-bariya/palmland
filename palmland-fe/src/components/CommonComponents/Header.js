import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import white_header_menu from "../../../public/assets/icons/white_header_menu.svg";
import white_user_icon from "../../../public/assets/icons/white_user_icon.svg";
import { openModel } from "@/stores/Model/modelAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, Button, Text } from "@chakra-ui/react";
import { selectIsLoggedIn, selectUserDetail } from "@/stores/Auth/authReducer";
import { localStorage } from "@/utils/localStorage";
import { logout } from "@/stores/Auth/authAction";
import colors from "@/theme/foundations/colors";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export const navLinks = [
  {
    text: "Home",
    path: "/",
    accesTo: ["USER"],
  },
  // {
  //   text: "About",
  //   path: "/about",
  //   accesTo: ["USER"],
  // },
  {
    text: "Services",
    path: "/services",
    accesTo: ["USER"],
  },
  {
    text: "News Letter",
    path: "/newsletter",
    accesTo: ["USER", "DEALER"],
  },
  {
    text: "Blog",
    path: "/blog",
    accesTo: ["USER", "DEALER"],
  },
  {
     text: "Contact",
     path: "/contact",
     accesTo: ["USER", "DEALER"],
   },
  {
    text: "Post Property",
    path: "/postProperty",
    accesTo: ["DEALER"],
  },
  {
    text: "Dashboard",
    path: "/dashboard",
    accesTo: ["ADMIN"],
  },
  {
    text: "UserList",
    path: "/UserList",
    accesTo: ["ADMIN"],
  },
  {
    text: "AgentList",
    path: "/AgentList",
    accesTo: ["ADMIN"],
  },
  {
    text: "Reports",
    path: "/reports",
    accesTo: ["ADMIN"],
  },
  {
    text: "Career",
    path: "/Career",
    accesTo: ["USER", "DEALER", "ADMIN"],
  }
];

const Header = () => {
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

  useEffect(() => {
    if (userRole === "USER") {
      router.push("/");
    }
    if (userRole === "DEALER") {
      router.push("/postProperty");
    }
    if (userRole === "ADMIN") {
      router.push("/dashboard");
    }
  }, [userRole]);

  const { pathname } = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const openSignInModel = () => {
    dispatch(openModel("SignInModel", {}));
  };
  const openLogoTourModel = () => {
    dispatch(openModel("LogoTourModal", {}));
  };
  return (
    <>
      <div className="custom__container">
        <Box
          bgColor={colors.secondary}
          boxShadow={"0 5px 30px rgb(0 22 84 / 10%)"}
          w="100%"
          padding={"0px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          position={"fixed"}
          zIndex={10}
          className="header__main__container"
        >
          <Box
            display={"flex"}
            h={"140px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            position={"sticky"}
            className="custom__row"
          >
            <Box
              h={"fit-content"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link href="/">
                <img
                  width="218px"
                  height="auto"
                  src="/assets/images/logo.png"
                  alt="header-logo"
                />
              </Link>
              {/* <Text
                cursor={"pointer"}
                onClick={openLogoTourModel}
                variant={"p_light"}
                size={{ base: "12", lg: "14" }}
                color={"white"}
                textAlign={"center"}
                m={"10px 0px 0px"}
                w={"100%"}
              >
                Logo Tour
              </Text> */}
            </Box>
            <Box
              display={{ base: "none", lg: "flex" }}
              justifyContent={"space-between-end"}
              alignItems={"center"}
            >
              {navLinks.map((list) => {
                return (
                  <>
                    {list.accesTo.includes(userRole) ? (
                      <Link
                        className="link__tag"
                        style={{ padding: "0px 20px" }}
                        href={list.path}
                      >
                        <Text
                          color={pathname === list.path ? "#ffffff" : "#eab258"}
                          size="16"
                          variant="btn_p_bold"
                        >
                          {list.text}
                        </Text>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
              
              <Text
                margin="0px 0px 0px 114px"
              >
              </Text>

            {/* </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            > */}
              {/* <Text variant={"p_bold"} color={"white"}>
                <Text
                  color={"white"}
                  variant={"p_regular"}
                  as={"span"}
                  p="2px 6px"
                  bgColor={colors.primary}
                  borderRadius={"50px"}
                  mr={"4px"}
                >
                  {" "}
                  2
                </Text>{" "}
                My List
              </Text> */}
              {isloggedIn ? (
                <>
                  <Text
                    margin="0px 0px 0px  10px"
                    variant={"p_regular"}
                    size={{ base: "14", lg: "16" }}
                    color={colors.primary}
                  >
                    {userDetail.firstName}
                  </Text>
                  <ExternalLinkIcon
                    color={"white"}
                    ml={"10px"}
                    cursor={"pointer"}
                    onClick={() => {
                      dispatch(logout());
                      window.localStorage.setItem("userRole", "USER");
                    }}
                  />
                </>
              ) : (
                <Button
                  display={{ base: "none", lg: "block" }}
                  onClick={openSignInModel}
                  variant="primary"
                  margin="0px 0px 0px 10px"
                >
                  Sign In
                </Button>
              )}
              {!isloggedIn && (
                <Image
                  className="header__menu__icon"
                  src={white_user_icon}
                  onClick={openSignInModel}
                  alt="Picture of the author"
                  width={20}
                  height={"auto"}
                />
              )}
              <Image
                onClick={() => setOpenMenu(!openMenu)}
                className="header__menu__icon"
                src={white_header_menu}
                alt="Picture of the author"
                width={30}
                height={"auto"}
              />
            </Box>
          </Box>
          {openMenu && (
            <Box
              display={{ base: "flex", lg: "none" }}
              pt={"10px"}
              zIndex={1}
              alignItems={"flex-start"}
              flexDirection={"column"}
              bgColor={colors.primary}
              w={"100%"}
            >
              {navLinks.map((list) => {
                return (
                  <>
                    {list.accesTo.includes(userRole) ? (
                      <Link
                        href={list.path}
                        onClick={() => setOpenMenu(!openMenu)}
                      >
                        <Text
                          color={
                            pathname === list.path ? "#ffffff" : "textColor"
                          }
                          size={{ base: "14", md: "16" }}
                          variant="p_bold"
                          p={"0px 20px 10px"}
                        >
                          {list.text}
                        </Text>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </Box>
          )}
        </Box>
      </div>
    </>
  );
};
export default Header;
