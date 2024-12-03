import React, { Component } from "react";

class App extends Component {
  state = { message: "" };
  updateMessage = (event) => this.setState({ message: event.target.value });
  componentDidMount() {
    // TODO: read from local storage, and if we find a message there, log it to the console
    const savedMessage = localStorage.getItem("savedMessage");
    if (savedMessage) {
      console.log(savedMessage);
    }
  }
  componentDidUpdate() {
    localStorage.setItem("savedMessage", this.state.message);
    // TODO: save the message from our component's state to the browser's local storage
  }
  render() {
    return (
      <main>
        <h2>Session Traveler</h2>
        <input
          type="text"
          placeholder="Type a message here..."
          value={this.state.message}
          onChange={this.updateMessage}
        />
        <p>Type a message above, then refresh this page.</p>
        <p>
          After refreshing this site, check your developer console to see the
          text that was saved to the browsers local storage each time you typed
          into the input, then read out from local storage after the page was
          refreshed.
        </p>
        <p>
          Thanks to your browser's localStorage, you're message has traveled
          from one session of the web app to another!
        </p>
      </main>
    );
  }
}

export default App;
