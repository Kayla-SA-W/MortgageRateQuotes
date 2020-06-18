import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: (state = {}, _) => state
});
