import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Prota Labs" />
        </div>
        <div className="App-intro">
          <p>
            Coming soon…
          </p>
        </div>
      </div>
    );
  }
}

export default App;
