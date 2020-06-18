import React, { Component } from 'react'
import { Provider } from 'react-redux';
import './App.css';
import { LenderGenerateContainer } from './lenderGenerateContainer'
import { store } from './redux';

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
      <Provider store={store}>
        <div>
          <h1> Mortgage Rate Quote Simulator </h1>
          <LenderGenerateContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
