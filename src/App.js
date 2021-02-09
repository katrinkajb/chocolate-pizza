import React from 'react';
import './App.css';
import Header from './header.js';
import Title from './title.js';
import Cake from './main-image.js';
import IngredientsList from './ingredients-list.js';
import Footer from './footer.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Title/>
        <Cake/>
        <IngredientsList/>
        <Footer/>
      </div>
    );
  }
}