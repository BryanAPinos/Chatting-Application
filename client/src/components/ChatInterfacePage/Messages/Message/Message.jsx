import React from "react";
import ReactEmoji from "react-emoji";
import { makeStyles } from "@material-ui/core";
import messageStyles from "./MessageStyles";

const useStyles = makeStyles(messageStyles);

const Message = ({ message: { user, text }, name }) => {
  const classes = useStyles();

  let isSendByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSendByCurrentUser = true;
  }

  return isSendByCurrentUser ? (
    <div className={classes.messageContainer}>
      {/* <p className={classes.sentText}>{trimmedName}</p> */}
      <div className={classes.messageBoxUser}>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div
      className={classes.messageContainer}
      style={{ justifyContent: "flex-start" }}
    >
      <div className={classes.messageBoxReceive}>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className={classes.sentText}>{user}</p>
    </div>
  );
};

export default Message;
