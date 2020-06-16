import React, { Component } from 'react'
import axios from 'axios'

import LenderForm from './lenderForm.js'

class LenderGenerate extends Component {
  constructor () {
    super()
    this.state = {
      lender: {
        loanSize: '',
        propertyType: '',
        creditScore: '',
        occupancy:''
      },
      quotes: []
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value } // allows user to see text as typing

    const editedLender = Object.assign(this.state.lender, updatedField) // update lender with the updated field text

    this.setState({ lender: editedLender }) // set state lender to users input
  }

  handleSubmit = event => { // call to api
    axios({
      url: 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes',
      method: 'GET',
      headers: {
        Authorization: `OU-AUTH ` // add auth key here
      }
    })
    .then(res => this.setState({ quotes: res.data.rateQuotes }))
    .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this // deconstruct handlechange and handlesubmit from this
    const { lender } = this.state // deconstruct lender from state
    return (
      <div>
        <LenderForm
          lender={lender}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/" />
        <div className='quotesDiv'>
          <div className='quotesHeader'>
            <h4> Lender </h4>
            <h4> Product </h4>
            <h4> Rate </h4>
            <h4> Closing Cost </h4>
            <h4> Monthly Payment </h4>
            <h4> APR </h4>
          </div>
        </div>
      </div>
        )
      }
    }
    export default LenderGenerate
