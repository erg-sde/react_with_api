import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'
import Data from './component/Data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <Data/>
      </div>
    );
  }
}

export default App;
