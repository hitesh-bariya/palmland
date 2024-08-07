import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontWeight: 500,
    borderRadius: "5px",
  },

  sizes: {
    sm: { px: "16px", py: "8px", fontSize: "12px", lineHeight: "17px" },
    md: { px: "20px", py: "8px", fontSize: "14px", lineHeight: "16px" },
    lg: { px: "24px", py: "8px", fontSize: "14px", lineHeight: "16px" },
  },

  variants: {
    primary: {
      bgColor: "primary",
      padding: "8px 20px",
      color:"secondary",
      fontWeight:700,
      _hover: {
        opacity: 1,
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        _disabled: {
          bgGradient:
            "linear-gradient(rgb(245, 206, 0) 0%, rgb(224, 186, 62) 97.92%)",
        },
      },

      _active: {
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
      },
      _focus: {
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      },
      _disabled: {
        opacity: 0.5,
      },
    },

    btn_primary: {
      bgColor: "secondarys",
      padding: "8px 20px",
      color:"primary",
      border: "1px solid #eab258",
      fontWeight: 400,
      _hover: {
        opacity: 1,
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        _disabled: {
          bgGradient:
            "linear-gradient(rgb(245, 206, 0) 0%, rgb(224, 186, 62) 97.92%)",
        },
      },

      _active: {
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
      },
      _focus: {
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      },
      _disabled: {
        opacity: 0.5,
      },
    },

    ghost: {
      color: "#000000",
      bgGradient: "transparent",
      _hover: {
        bg: "transparent",
        color: "secondary.500",
      },
      _focus: {
        bg: "transparent",
        color: "secondary.500",
      },
      _active: {
        bg: "transparent",
        color: "secondary.500",
        fontWeight: "600",
      },
      _disabled: {
        opacity: 0.5,
      },
    },

    secondary: {
      
      bgColor: "secondary",
      padding: "8px 20px",
      _hover: {
        opacity: 1,
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        _disabled: {
          bgGradient:
            "linear-gradient(rgb(245, 206, 0) 0%, rgb(224, 186, 62) 97.92%)",
        },
      },

      _active: {
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
      },
      _focus: {
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      },
      _disabled: {
        opacity: 0.5,
      },
    },

    tertiary: {
      bg: "secondary.500",
      fontWeight: "medium",
      fontSize: "sm",
      border: "2px solid",
      borderColor: "secondary.500",
      _hover: { bg: "secondary.400" },
    },

    link: {
      textDecorationLine: "underline",
      color: "colors.secondary",
      fontWeight: 600,
    },
    menuItem: {
      color: "#09212b",
      w: "full",
      py: "10px",
      px: "12px",
      borderRadius: "0px",
      textAlign: "left",
      _active: { bg: "#09212b", color: "#ffffff" },
      _focus: { bg: "#09212b", color: "#ffffff" },
      _hover: { bg: "#09212b", color: "#ffffff" },
    },

    navItem: {
      color: "rgb(35, 35, 35)",
      bg: "#fff",
      w: "full",
      pl: "34px",
      justifyContent: "flex-start",
      borderRadius: "0px",
      transition: "all 0.1s ease-in 0s",
      _hover: {
        bg: "rgb(250, 231, 136)",
        _disabled: {
          bg: "#fff",
        },
      },

      _active: {
        borderLeft: "2px solid black",
        bg: "rgb(250, 231, 136) !important",
      },
      _focus: {
        bg: "#0002",
        boxShadow: "none",
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    icon: {
      color: "rgb(35, 35, 35)",
      bg: "transparent",
      borderRadius: "1000px",
      transition: "all 0.1s ease-in 0s",
      _hover: {
        bg: "rgba(0, 0, 0, 0.08)",
        _disabled: {
          bg: "#fff",
        },
      },

      _active: {
        bg: "rgba(0, 0, 0, 0.14)",
      },
      _focus: {
        boxShadow: "none",
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    tableIcon: {
      color: "rgb(0, 0, 0)",
      borderRadius: "1000px",
      transition: "all 0.1s ease-in 0s",
      _hover: {
        transform: "scale(1.1)",
      },
    },
    dropDownButton: {
      color: "#09212b",
      bg: "transparent",
      border: "2px solid #09212b",
      borderColor: "#09212b",
      _hover: { bg: "#09212b50", color: "#09212b" },
      _active: {
        color: "#09212b",
        fontWeight: "600",
      },
      _disabled: {
        opacity: 0.5,
      },

      _focus: {
        borderColor: "#09212b",
      },
    },
  },

  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default Button;
