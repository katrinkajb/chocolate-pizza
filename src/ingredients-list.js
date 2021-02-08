import React from 'react';

export default class IngredientsList extends React.Component {
    render() {
        return (
            <div className="IngredientsList">
                <div className='left-ingredients'>
                    <ul>
                        <li>1 1/2 cups milk</li>
                        <li>1/2 cup marscapone</li>
                        <li>1 1/2 cups milk</li>
                        <li>1 1/2 cups milk</li>
                        <li>1 1/2 cups milk</li>
                        <li>1 1/2 cups milk</li>
                    </ul>
                </div>
                <div className='right-ingredients'>
                    <ul>
                        <li>1 1/2 cups milk</li>
                        <li className='checked'>1 1/2 cups milk</li>
                        <li className='checked'>1 1/2 cups milk</li>
                        <li>1 1/2 cups milk</li>
                        <li>1 1/2 cups milk</li>
                        <li>1 1/2 cups milk</li>
                    </ul>
                </div>
            </div>
        )
    }
}