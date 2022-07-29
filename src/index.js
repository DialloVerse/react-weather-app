import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// If you input {weather.sys.country.result}, it'll eventually display the countries without the abbrv in front...newly noted for future ref.
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
