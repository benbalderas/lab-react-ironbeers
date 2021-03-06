import React, { Component } from "react";
import { Link } from "react-router-dom";

class BeerCard extends Component {
  render() {
    return (
      <div className="flex m-1 mt-3">
        <img src={this.props.image} alt={this.props.name} className="short" />

        <div className="ml-2_5">
          <h3 className="truncate">{this.props.name}</h3>
          <p className="mt-0_5 mb-0_5">{this.props.tagline}</p>
          <Link to={this.props.link}>See details</Link>
        </div>
      </div>
    );
  }
}

export default BeerCard;
