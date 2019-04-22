import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MenuAppBar } from './layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuAppBar /> 
          
        </header>
      </div>
    );
  }
}

export default App;
