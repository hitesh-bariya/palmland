import { ComponentStyleConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
  // The styles all Text have in common
  baseStyle: {
    color: "textColor",
    // fontFamily: "Roboto",
    fontWeight: 400,
    margin: "0px",
  },

  sizes: {
    12: {
      fontSize: "12px",
      lineHeight: "16px",
    },
    14: {
      fontSize: "14px",
      lineHeight: "1.2",
    },
    16: {
      fontSize: "16px",
      lineHeight: "1.2",
    },
    18: {
      fontSize: "18px",
      lineHeight: "1.2",
    },
    20: {
      fontSize: "20px",
      lineHeight: "1.2",
    },
    24: {
      fontSize: "24px",
      lineHeight: "1.2",
    },
    28: {
      fontSize: "28px",
      lineHeight: "1.2",
    },
    32: {
      fontSize: "32px",
      lineHeight: "1.6",
    },
    36: {
      fontSize: "36px",
      lineHeight: "2",
    },
  },

  variants: {
    black: {
      color: "textColor",
    },
    secondary: {
      color: "secondary.500",
    },
    p_light: {
      fontFamily: "Lato",
      fontWeight: 300,
    },
    p_regular: {
      fontFamily: "Lato",
      fontWeight: 400,
    },
    p_bold: {
      fontFamily: "Lato",
      fontWeight: 700,
    },
    btn_p_bold: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontWeight: 400,
    },
    s_light: {
      fontFamily: "Roboto",
      fontWeight: 300,
    },
    s_regular: {
      fontFamily: "Roboto",
      fontWeight: 400,
    },
    search_s_regular: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: "#284D5C",
    },
    s_bold: {
      fontFamily: "Roboto",
      fontWeight: 500,
    },
    newsletter_header: {
      fontFamily: "Lato",
      fontWeight: 700,
    },
    newsetter_text: {
      fontFamily: "Roboto",
      fontWeight: 400,
    },
  },

  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "black",
  },
};

export default Text;
