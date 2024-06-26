import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStyle } from "./styles/globalStyle";
import { GlobalProvider } from "./context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>
);
