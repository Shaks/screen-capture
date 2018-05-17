import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';
import CaptureDom from './CaptureDom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br />
        {/* <Page /> */}
        <CaptureDom />
      </div>
    );
  }
}

export default App;
