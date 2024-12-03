import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "eat",
        description: "reese peanut butter cups",
        doesMatchSearch: true,
      },
      {
        id: 1,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true,
      },
      {
        id: 2,
        title: "code",
        description: "build an awesome ui",
        doesMatchSearch: true,
      },
    ],
    searchText: "search for me",
  };
  render() {
    return (
      <div>
        <Header />
        <NotesList />
      </div>
    );
  }
}

export default App;
