import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import GeneralContext from "./components/context/GeneralContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GeneralContext>
      <App />
    </GeneralContext>
  </React.StrictMode>
);
reportWebVitals();
