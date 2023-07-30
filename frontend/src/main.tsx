// main.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MeuContextoProvider } from "./MeuContexto";

ReactDOM.render(
  <React.StrictMode>
    <MeuContextoProvider>
      <App />
    </MeuContextoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
