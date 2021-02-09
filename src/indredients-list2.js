import React from 'react';

  export const ingredientsArray2 = [
    {
        amount: '1 1/2 cups',
        name: 'heavy creame',
    },
    {
        amount: '1/3',
        name: 'granulated sugar',
    },
    {
        amount: '2',
        name: 'egg yolks',
    },
    {
        amount: '1',
        name: 'lemon, juiced',
    },
    {
        amount: '2 tbsp',
        name: 'butter',
    },
    {
        amount: '1 cup',
        name: 'honest roasted pecans, roughly chopped'
    }
  ];
  export default class IngredientComponent2 extends React.Component {
    render() {
      return <div>
        <p>{this.props.ingredientProp.amount} {this.props.ingredientProp.name}</p>
      </div>
    }
  }