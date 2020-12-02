import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="card">
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {
  state = {
    count: 0
  };
  handleClick = () => {
        this.setState(({ count }) => ({

      count: count + 1
    }));
  };

  render() {
    return (
      <p onClick={this.handleClick}>Counter:{this.state.count}</p>


    );
  }
}
