import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  handleCrementer = num => {
    this.setState({
      count: this.state.count + num
    });
  };

  render() {
    return (
      <div className="App">
        <h1>count</h1>
        <div>{this.state.count}</div>
        <button onClick={() => this.handleCrementer(1)}>add</button>
        <button onClick={() => this.handleCrementer(-1)}>sub</button>
      </div>
    );
  }
}
