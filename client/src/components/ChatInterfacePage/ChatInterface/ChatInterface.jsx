import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core";
import chatInterfaceStyleSheet from "./chatInterfaceStyles";
import OnlineUsers from "../OnlineUsers/OnlineUsers.jsx";
import Input from "../Input/Input.jsx";
import Messages from "../Messages/Messages.jsx";

document.body.style.background = "#262626";

const useStyles = makeStyles(chatInterfaceStyleSheet);
let socket;

const ChatInterface = ({ location }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  // const ENDPOINT = "localhost:5000";
  const ENDPOINT = "ec2-52-13-72-216.us-west-2.compute.amazonaws.com:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className={classes.page}>
      <div
        className={classes.column}
        style={{ width: "20%", alignItems: "center" }}
      >
        <OnlineUsers users={users} />
      </div>
      <div className={classes.column} style={{ width: "80%" }}>
        <div className={classes.chat}>
          <div className={classes.roomName}>{room}</div>
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
