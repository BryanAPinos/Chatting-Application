import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import joinRoomStyleSheet from "./joinRoomStyles";
document.body.style.background = "#262626";

const useStyles = makeStyles(joinRoomStyleSheet);

function JoinRoom() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <div className={classes.title}>Join a chat room</div>
        <div className={classes.info}>
          <input
            placeholder="Nickname"
            type="text"
            onChange={(event) => setName(event.target.value)}
          ></input>
          <input
            placeholder="Room name"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          ></input>
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            {" "}
            <button type="submit">Join Room</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinRoom;
