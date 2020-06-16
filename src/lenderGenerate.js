import React, { Component } from 'react'

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
      }
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value } // allows user to see text as typing

    const editedLender = Object.assign(this.state.lender, updatedField) // update lender with the updated field text

    this.setState({ lender: editedLender }) // set state lender to users input
  }

  render () {
    const { handleChange, handleSubmit } = this // deconstruct handlechange and handlesubmit from this
    const { lender } = this.state // deconstruct lender from state
    return (
          <LenderForm
            lender={lender}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            cancelPath="/" />
        )
      }
    }
    export default LenderGenerate
