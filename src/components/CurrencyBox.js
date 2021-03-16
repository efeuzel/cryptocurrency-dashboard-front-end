import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class PriceBox extends Component {
  render() {
    return (
      <Button className="btn btn-success m-2">
        <p className="m-0">{this.props.currency}</p>
        <p className="m-0">{this.props.price}</p>
      </Button>
    );
  }
}
