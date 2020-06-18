import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';

export * from './actions';

export const store = configureStore({
  reducer
});
