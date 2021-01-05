import React from "react";
import ReactDOM from "react-dom";

// import App from './pages/App';
import { IndexPage } from "./pages/Index";
import { GlobalStyles } from "twin.macro";

import reportWebVitals from "./reportWebVitals";

import "./fonts/ttf/JetBrainsMono-Bold.ttf";
import "./fonts/ttf/JetBrainsMono-Italic.ttf";
import "./fonts/ttf/JetBrainsMono-Regular.ttf";

import "./fonts/webfonts/JetBrainsMono-Bold.woff2";
import "./fonts/webfonts/JetBrainsMono-Italic.woff2";
import "./fonts/webfonts/JetBrainsMono-Regular.woff2";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <IndexPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
