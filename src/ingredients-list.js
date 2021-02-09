import React from 'react';

export const ingredientsArray = [
    {
      amount: '1 1/2 cups',
      name: 'milk',
    },
    {
      amount: '1/2 cup',
      name: 'mascapone',
    },
    {
      amount: '1/2 tsp',
      name: 'pink salt',
    },
    {
      amount: '1 lb',
      name: 'Black Mission Figs',
    },
    {
      amount: '1/2 cup',
      name: 'brown sugar',
    },
    {
      amount: '2-4 tbsp',
      name: 'water',
    },
  ]
  
  export default class IngredientComponent extends React.Component {
    render() {
      return <div>
        <p>{this.props.ingredientProp.amount} {this.props.ingredientProp.name}</p>
      </div>
    }
  }