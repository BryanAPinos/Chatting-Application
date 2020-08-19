import React from "react";
import { makeStyles } from "@material-ui/core";
import inputStyles from "./inputStyles";
import send from "./send.svg";

const useStyles = makeStyles(inputStyles);

const Input = ({ setMessage, sendMessage, message }) => {
  const classes = useStyles();

  return (
    <div className={classes.chatBottom}>
      <div className={classes.textBox}>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
          placeholder="Enter a message..."
        ></input>
        <button>
          <img
            src={send}
            alt={""}
            onClick={(event) => sendMessage(event)}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Input;
