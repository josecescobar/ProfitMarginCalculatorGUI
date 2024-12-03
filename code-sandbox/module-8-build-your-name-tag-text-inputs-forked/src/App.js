import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: ["Gwen", "Sophia", "Vanesa", "Sharon", "Genevieve"],
  };
  addName = (name) => {
    // to learn this awesome spread syntax, check out these examples: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Syntax
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
