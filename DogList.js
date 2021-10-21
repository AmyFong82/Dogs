import React, { Component } from "react";
import Options from "./Options";
import { dogs } from "../public/data.js";
import Dog from "./Dog";

class DogList extends Component {
  dogList = dogs.map((dog) => <Dog key={dog.id} dog={dog} />);

  render() {
    return (
      <>
        <div>{this.dogList}</div>
      </>
    );
  }
}

export default DogList;
