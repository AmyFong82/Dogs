import React, { Component } from "react";
import LikeBtn from "./LikeBtn";

class Dog extends Component {
  state = {
    like: 0
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { like: prevState.like + 1 };
    });
  };

  render() {
    return (
      <li key={this.props.dog.id} id={this.props.dog.id}>
        {this.props.dog.name}{" "}
        <button onClick={this.handleClick}> {this.state.like} </button>
      </li>
    );
  }
}

export default Dog;
