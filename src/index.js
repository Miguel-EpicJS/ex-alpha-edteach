import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RouterExample from "./App";
import { MyProvider } from "./context/context";
import { ThemeProvider } from "styled-components";

const temaDaAmericanas = {
  color: "tomato",
};

if(localStorage.getItem("login") === null){
  localStorage.setItem("login", JSON.stringify({logged: false, user: null}))
};

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <ThemeProvider theme={temaDaAmericanas}>
        <RouterExample />
      </ThemeProvider>
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
