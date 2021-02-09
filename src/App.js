import React from 'react';
import './App.css';
import Header from './header.js';
import Title from './title.js';
import Cake from './main-image.js';
import IngredientComponent from './ingredients-list.js';
import { ingredientsArray } from './ingredients-list.js';
import Footer from './footer.js';

export default class App extends React.Component {
  render() {
    const ingredients = ingredientsArray.map(ingredient => <IngredientComponent ingredientProp={ingredient}/>)

    return (
      <div>
        <Header/>
        <Title/>
        <Cake/>
        { ingredients }
        <Footer/>
      </div>
    );
  }
}