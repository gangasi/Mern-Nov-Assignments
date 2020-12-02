import React, { Component } from 'react';

class Counter extends Component {
  
    state = {
      count: 0
    };
    changeColor = () => {
      this.setState({bgkcolor: "black"});
       }
      counterchange=()=>{
        this.setState(({ count }));
          count: count + 1
        }
    handleClick = () => {
      this.changeColor();
      this.counterchange();
      }
     
    render()
     {
      return (
        <p onClick={this.handleClick} > count {this.state.count}</p>
      );
      }
    }   
export default Counter;
