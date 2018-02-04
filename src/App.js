import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from './components/Card.js';
import GridList from './components/GridList.js';
import Header from './components/Header.js';
import LandingScreen from './components/LandingScreen.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <GridList/> */}
      <Header/>
          {/* <Card/> */}
          <LandingScreen/>
      </div>
    );
  }
}

export default App;
