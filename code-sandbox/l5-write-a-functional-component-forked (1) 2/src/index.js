import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Gwen" />
    <NameTag name="Sofia" />
    <NameTag name="Vanesa" />
    <NameTag name="Sharon" />
    <NameTag name="Taryn" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
