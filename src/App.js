import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }
  render () {
    return (
      <div>
        <h1> Mortgage Rate Quote Simulator </h1>
      </div>
    );
  }
}

export default App;
