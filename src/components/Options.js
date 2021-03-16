import React, { Component } from "react";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: new Set(),
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const currentlySelected = this.state.selectedOptions;
    event.target.checked
      ? currentlySelected.add(event.target.value)
      : currentlySelected.delete(event.target.value);
    this.setState({ selectedOptions: currentlySelected });
    this.props.raiseStateMethod(this.state.selectedOptions);
  }

  render() {
    return (
      <div className="card bg-light m-2 p-2">
        <div className="ml-2">{this.props.optionGroupName}</div>
        {this.props.options.map((option) => (
          <div key={option} className="form-check m-1">
            <input
              className="form-check-input"
              type="checkbox"
              value={option}
              id={option}
              onChange={this.handleInputChange}
            ></input>
            <label className="form-check-label">{option}</label>
          </div>
        ))}
      </div>
    );
  }
}
