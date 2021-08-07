import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h2 className="display-1 text-center">Dog List!</h2>
        <div className="row">
          {this.props.dogs.map((dog) => (
            <div className="Dog col-md-6 col-lg-4 text-center" key={dog.name}>
              <Link to={`/dogs/${dog.name}`}>
                <img src={dog.src} alt={dog.name} />
                <h2>{dog.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
