import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Prota Codes</h2>
        </div>
        <p className="App-intro">
          This is where you will be able to find publically available <code>code repos</code> as well as <code>code styleguides</code> for Prota projects.
        </p>
        <code>Coming soon...</code>
      </div>
    );
  }
}

export default App;
