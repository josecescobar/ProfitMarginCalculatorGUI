import React from "react";
import ReactDOM from "react-dom";
import greeting from "./greeting.js";
import{ subHeader, organize } from "./helpers.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* render the default export from the greeting module 
        here as the content of an h2 tag */}
      <h2>{greeting}</h2>
      {/* render the named export 'subHeader' from the helpers 
        module here as the content of an h5 tag */}
      <h5>{subHeader}</h5>
      {/* pass the named export 'organize' from the helpers 
        module here as src attribute of the img tag */}
      <img src={organize} alt="stay organzied" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
