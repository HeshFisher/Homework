import { Component } from "react";
import "./App.css";
import Header from "./Header";
import Recipe from "./Recipe";
import NoRecipe from "./NoRecipe";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";

class App extends Component {
  state = {
    recipes: [],
    selectedRecipe: 1,
     showRecipeForm: false
  };

  constructor() {
    super();

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch("recipes.json");
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      const recipes = await response.json();
      console.log(recipes);

      this.setState({
        recipes,
      });
    } catch (e) {
      console.error(e);
    }
  }

  selectRecipe = (e) => {
    this.setState({
      selectedRecipe: e.target.value,
    });
  };
  addRecipeButton = (e) => {
    e.preventDefault();
    this.setState({
      showRecipeForm: !this.state.showRecipeForm,
    });
  };

  addNewRecipe = (recipe) => {
    recipe.id = Math.max(...this.state.recipes.map(r => r.id)) + 1;
    this.state.recipes.push(recipe)
    this.setState({
      recipes: this.state.recipes,
      showRecipeForm: false
    })
  }

  render() {
    const { recipes, selectedRecipe } = this.state;

    const recipe = !recipes.length ? (
      <NoRecipe />
    ) : (
      <Recipe recipe={recipes[selectedRecipe]} />
    );

    return (
      <>
        <Header />

        <RecipeList
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          selectRecipe={this.selectRecipe}
        />
        <button onClick={this.addRecipeButton}>Add</button>
        {this.state.showRecipeForm ? <AddRecipe addNewRecipe={this.addNewRecipe} /> : null}
        {recipe}
      </>
    );
  }
}

export default App;
