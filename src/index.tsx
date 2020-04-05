import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";

import "./initMonaco";

if ("WebAssembly" in window) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <div>
      WebAssembly is not yet available in your browser. Please use the latest
      version of Firefox or Chrome.
    </div>,
    document.getElementById("root")
  );
}
