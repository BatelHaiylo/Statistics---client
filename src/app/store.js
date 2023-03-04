import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/users';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});