import React, { Component } from "react";
import "./AddRecipe.css";

export default class AddRecipe extends Component {
  state = {
    name: "a",
    picture: "b",
    ingredients: "c",
    directions: "d",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewRecipe({...this.state, ingredients: this.state.ingredients.split(','), directions: this.state.directions.split(',')});
  }

  render() {
    const { name, picture, ingredients, directions } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input value={name} name="name" onChange={this.handleChange} />
            </label>
          </div>
          <div>
            {" "}
            <label>
              Picture:{" "}
              <input
                value={picture}
                name="picture"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Ingredients:{" "}
              <input
                value={ingredients}
                name="ingredients"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Directions:{" "}
              <input
                value={directions}
                name="directions"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button>Add</button>
          <button type="button">Cancel</button>
        </form>
      </>
    );
  }
}
