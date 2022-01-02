import main from "./styles/main.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import List from "./components/List.js";
import StarRating from "./components/StarRating.js";

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<List />, document.getElementById("list"));
ReactDOM.render(<StarRating />, document.getElementById("star-rating"));
