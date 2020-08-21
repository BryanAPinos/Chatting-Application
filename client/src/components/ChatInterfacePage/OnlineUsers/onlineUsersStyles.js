const onlineUsersStyles = {
  "@media (max-width: 750px)": {
    online: {
      display: "none",
    },
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
  userList: {
    display: "flex",
    flexDirection: "column",
  },
};

export default onlineUsersStyles;
