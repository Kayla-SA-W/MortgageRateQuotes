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
      quotes: [],
      loading: true
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value } // allows user to see text as typing

    const editedLender = Object.assign(this.state.lender, updatedField) // update lender with the updated field text

    this.setState({ lender: editedLender }) // set state lender to users input
  }

  handleSubmit = event => { // call to api
    const { lender } = this.state
    axios({
      url: 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?loanSize='+lender.loanSize+'&creditScore='+ lender.creditScore + '&propertyType=' +lender.propertyType + '&occupancy=' + lender.occupancy,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'OU-AUTH'
      }
    })
    .then(res => console.log(res))
    .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this // deconstruct handlechange and handlesubmit from this
    const { lender, quotes } = this.state // deconstruct lender from state

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
          <div className='quotesBody'>
            {quotes}
          </div>
        </div>
      </div>
        )
      }
    }
    export default LenderGenerate
