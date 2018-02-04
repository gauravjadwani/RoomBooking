import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import GridList from './components/GridList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        {/* <GridList/> */}
        <p>
          <Card/>
        </p>
      </div>
    );
  }
}

export default App;
