const chatInterfaceStyleSheet = {
  page: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    fontFamily: "Nunito",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  online: {
    backgroundColor: "#F0F0F0",
    width: "180px",
    height: "150px",
    borderRadius: "25px",
    marginTop: "40px",
    "& img": {
      width: "12px",
      height: "12px",
      marginRight: "10px",
    },
    "& p": {
      color: "#434040",
      marginBottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
    },
    "& hr": {
      borderColor: "#434040",
      width: "130px",
      marginBottom: "-5px",
    },
  },
  chat: {
    backgroundColor: "#F0F0F0",
    height: "550px",
    color: "black",
    borderRadius: "25px",
    margin: "40px 40px 20px 20px",
    display: "flex",
    flexDirection: "column",
  },
  roomName: {
    backgroundColor: "white",
    color: "#595959",
    fontSize: "30px",
    fontWeight: "600",
    borderRadius: "25px 25px 0px 0px",
    minHeight: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default chatInterfaceStyleSheet;
