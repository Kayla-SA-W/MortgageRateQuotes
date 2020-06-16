import React, { Component } from 'react'
import './App.css';
import LenderGenerate from './lenderGenerate.js'

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
        <LenderGenerate />
      </div>
    );
  }
}

export default App;
