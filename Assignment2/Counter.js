import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }


  boxClick = (e) => {
    this.setState({
      bgColor: "red"
    })
  }

  render() {
    return (
      <div>
        <p style= {{backgroundColor: this.state.bgColor}}
           onClick={this.boxClick}></p>
        </div>
    );
  }
}

export default Counter;
