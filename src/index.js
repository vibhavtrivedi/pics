import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import searchImages from "./api";

//searchImages();
const cl = document.getElementById("root");

const root = ReactDom.createRoot(cl);
root.render(<App />)