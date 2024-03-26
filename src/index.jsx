"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter.jsx";
import "./styles.scss";
import { store } from "./redux/store/store.js";
import { Provider } from "react-redux";

const mainEl = document.querySelector("main");
const root = ReactDOM.createRoot(mainEl);

root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
