import React, { Component } from 'react'
import axios from 'axios'
import shortid from 'shortid'

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
        'Authorization': 'OU-AUTH ' + process.env.REACT_APP_API_KEY
      }
    })
    .then(res => this.setState({ quotes: res.data.rateQuotes, loading: false }))
    .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this // deconstruct handlechange and handlesubmit from this
    const { lender, quotes } = this.state // deconstruct lender from state
    let quotesJsx

    if (this.state.loading) { // if loading is true
      quotesJsx = <p>Please input lender information</p> // show 'loading'
    } else if (quotes.length > 0) { // if length is greater than one
      quotesJsx = quotes.map(quote => ( // map over quotes to show properties
        <li key={shortid.generate()} className='quotesProperties'>
          <h4> {(quote.lenderName).substring(0, 15)} </h4>
          <h4> {quote.loanType} </h4>
          <h4> {(quote.interestRate).toFixed(3)}% </h4>
          <h4> ${Math.round(quote.closingCosts)} </h4>
          <h4> ${Math.round(quote.monthlyPayment)} </h4>
          <h4> {(quote.apr).toFixed(3)}% </h4>
        </li>
      ))
    } else {
      quotesJsx = <p>No Quotes To Available</p>
    }

    return (
      <div className='mortgageEstimator'>
        <LenderForm
          lender={lender}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/" />
        <div className='quotesDiv'>
          <ul>
            <li className='quotesHeader'>
            <h4 className='lender'> Lender </h4>
            <h4 className='product'> Product </h4>
            <h4 className='rate'> Rate </h4>
            <h4 className='closingCost'> Closing Cost </h4>
            <h4 className='monthlyPay'> Monthly Payment </h4>
            <h4 className='apr'> APR </h4>
            </li>
            {quotesJsx}
          </ul>
        </div>
      </div>
        )
      }
    }
    export default LenderGenerate
