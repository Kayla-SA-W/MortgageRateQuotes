import { updateLender } from './actions';
import { reducer } from './reducers';

describe('reducer', () => {
  it('inializes default state', () => {
    const state = reducer(undefined, { type: 'INIT' });
    expect(state).toMatchObject({
      lender: {
        loanSize: '',
        propertyType: '',
        creditScore: '',
        occupancy:''
      }
    })
  })
  describe('updateLender', () => {
    it('merges state with payload', () => {
      const state = reducer({
        lender: {
          loanSize: '300000',
          propertyType: '',
          creditScore: '680',
          occupancy: 'Primary'
        }
      }, updateLender({ propertyType: 'Condo' }));
      expect(state).toMatchObject({
        lender: {
          loanSize: '300000',
          propertyType: 'Condo',
          creditScore: '680',
          occupancy: 'Primary'
        }
      })
    });
  })
})