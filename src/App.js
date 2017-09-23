import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bgScreen"></div>
        <video playsInline loop autoPlay poster="" id="bgVideo" className="bg-video">
          <source src={process.env.PUBLIC_URL + '/video/video1.webm'} type="video/webm"></source>
          <source src={process.env.PUBLIC_URL + '/video/video1.mp4'} type="video/mp4"></source>
        </video>
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
