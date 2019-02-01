import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import SideBar from "./SideBar";

function App() {
  return <SideBar />;
}

ReactDOM.render(<App />, document.querySelector("#app"));
