import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatInterface from "./components/ChatInterfacePage/ChatInterface/ChatInterface.jsx";
import JoinRoom from "./components/JoinRoomPage/JoinRoom.jsx";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinRoom} />
      <Route path="/chat" component={ChatInterface} />
    </Router>
  );
};
export default App;
