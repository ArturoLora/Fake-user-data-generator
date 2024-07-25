import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import regionReducer from './regionSlice';
import errorReducer from './errorSlice';
import seedReducer from './seedSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
  reducer: {
    region: regionReducer,
    error: errorReducer,
    seed: seedReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});