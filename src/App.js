import React from 'react';
import './App.css';
import Header from './header.js'
import Title from './title.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Title/>
      </div>
    );
  }
}