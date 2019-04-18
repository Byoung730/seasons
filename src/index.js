import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => console.log(err)
    );
  }

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "3rem", fontSize: "2rem" }}
      >
        <div>Your latitude is: {this.state.lat}</div>
        <hr style={{ marginTop: "3rem", marginBottom: "3rem" }} />
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
