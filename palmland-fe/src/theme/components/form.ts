import { ComponentStyleConfig } from "@chakra-ui/react"

const Form: ComponentStyleConfig = {
  parts: [],
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            transform: "scale(0.85) translateY(-8px)",
            color: "#a7a7a7",
            fontSize: 15,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
          {
            transform: "scale(0.85) translateY(-8px)",
            color: "#a7a7a7",
            fontSize: 15,
          },
        label: {
          top: 0,
          fontSize: 19,
          left: 0,
          zIndex: 2,
          position: "absolute",
          backgroundColor: "transparent",
          pointerEvents: "none",
          mx: 3,
          px: 1,
          my: 2,
          transform: "scale(0.85) translateY(8px)",
        },
      },
    },
  },
}

export default Form
