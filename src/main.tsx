import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Providers } from "./config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers children={<App />} />
  </React.StrictMode>
);
