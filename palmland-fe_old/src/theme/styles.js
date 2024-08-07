const styles = {
    global: {
      body: {
        fontFamily: "body",
        color: "gray.800",
        bg: "rgb(244, 249, 253)",
        transition: "background-color 0.2s",
        lineHeight: "1.2",
      },
      "*::placeholder": {
        color: "gray.400",
      },
      "*, *::before, &::after": {
        borderColor: "gray.200",
        wordWrap: "break-word",
        boxSizing: "border-box",
      },
      a: {
        color: "blue",
      },
    },
  }
  
  export default styles
  