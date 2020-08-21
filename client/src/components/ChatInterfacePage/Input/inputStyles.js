const inputStyles = {
  chatBottom: {
    display: "flex",
    justifyContent: "center",
    maxHeight: "90px",
    marginBottom: "15px",
    "& input": {
      borderRadius: "50px",
      border: "none",
      width: "840px",
      height: "50px",
      outline: "none",
      paddingLeft: "20px",
      "&::placeholder": {
        color: "#CBCBCB",
        fontFamily: "Roboto",
        fontSize: "15px",
      },
    },
    "& button": {
      border: "none",
      backgroundColor: "white",
      borderRadius: "50px",
      outline: "none",
    },
    "& img": {
      height: "50px",
      width: "40px",
      paddingRight: "10px",
    },
  },
  textBox: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    width: "97%",
  },
};

export default inputStyles;
