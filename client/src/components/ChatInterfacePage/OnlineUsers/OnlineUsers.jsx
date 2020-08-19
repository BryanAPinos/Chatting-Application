import React from "react";
import circleSolid from "./circleSolid.svg";
import { makeStyles } from "@material-ui/core";
import onlineUsersStyles from "./onlineUsersStyles";

const useStyles = makeStyles(onlineUsersStyles);

const OnlineUsers = ({ users }) => {
  const classes = useStyles();

  return (
    <div className={classes.online}>
      {users ? (
        <div>
          <p style={{ color: "#595959", fontSize: "16px" }}>
            <img src={circleSolid} alt={""}></img>
            People Online:
          </p>
          <hr></hr>
          <p className={classes.userList}>
            {users.map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
          </p>
        </div>
      ) : (
        <p>No one else is on.</p>
      )}

      {/* <p style={{ color: "#595959", fontSize: "16px" }}>
        <img src={circleSolid}></img>
        People Online:
      </p>
      <hr></hr>
      <p>Person 1</p>
      <p>Person 2</p> */}
    </div>
  );
};

export default OnlineUsers;
