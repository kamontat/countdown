import React from "react";
import ReactDOM from "react-dom";

// import App from './pages/App';
import { IndexPage } from "./pages/Index";
import { GlobalStyles } from "twin.macro";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { DataLayer } from "google-tag-manager";

import "./fonts/ttf/JetBrainsMono-Bold.ttf";
import "./fonts/ttf/JetBrainsMono-Italic.ttf";
import "./fonts/ttf/JetBrainsMono-Regular.ttf";

import "./fonts/webfonts/JetBrainsMono-Bold.woff2";
import "./fonts/webfonts/JetBrainsMono-Italic.woff2";
import "./fonts/webfonts/JetBrainsMono-Regular.woff2";

import "./index.css";
import { Logger } from "./models/Logger";
const logger = new Logger("index");

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <IndexPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onSuccess: (_, isLocalhost) => {
    logger.debug("Content is cached for offline use.");
    if (isLocalhost) {
      logger.warn(
        "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
      );
    }
  },
  onUpdate: () =>
    logger.debug(
      "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
    ),
  onError: error => logger.error("Error: %o", error),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
declare const dataLayer: DataLayer;
reportWebVitals(({ id, name, delta }) => {
  if (dataLayer) {
    dataLayer.push({
      event: "web-vitals",
      event_category: "Web Vitals",
      event_action: name,
      event_value: Math.round(name === "CLS" ? delta * 1000 : delta),
      event_label: id,
    });
  } else {
    logger.warn("cannot send %s to gtm (%s)", name, id);
  }
});
