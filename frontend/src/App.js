// import logo from "./logo.svg";
// import { Button } from "@chakra-ui/react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatApp from "./Pages/ChatApp";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatApp} />
    </div>
  );
}

export default App;
