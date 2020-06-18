import { createReducer } from '@reduxjs/toolkit';
import { updateLender } from './actions';

const defaultState = {
  lender: {
    loanSize: '',
    propertyType: '',
    creditScore: '',
    occupancy:''
  }
}

export const reducer = createReducer(defaultState, {
  [updateLender]: (state, { payload }) => ({
    ...state,
    lender: {
      ...state.lender,
      ...payload
    }
  })
})