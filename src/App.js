import React from 'react';
import './App.css';
import Header from './header.js';
import Title from './title.js';
import Cake from './main-image.js';
import IngredientComponent from './ingredients-list.js';
import IngredientComponent2 from './indredients-list2.js';
import { ingredientsArray } from './ingredients-list.js';
import { ingredientsArray2 } from './indredients-list2.js';
import Footer from './footer.js';
import Recipe from "./recipe.js";

export default class App extends React.Component {
  render() {
    const ingredients = ingredientsArray.map(ingredient => <IngredientComponent ingredientProp={ingredient}/>);
    const ingredients2 = ingredientsArray2.map(ingredient2 => <IngredientComponent2 ingredientProp={ingredient2}/>);
    return (
      <div>
        <Header/>
        <Title/>
        <Cake/>
        <Recipe/>
        <div className="food-stuff">
        <div>{ ingredients }</div>
        <div>{ ingredients2 }</div>
        </div>
        <Footer/>
      </div>
    );
  }
}