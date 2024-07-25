import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    appendData: (state, action) => {
      return [...state, ...action.payload];
    }
  }
});

export const { setData, appendData } = dataSlice.actions;
export default dataSlice.reducer;
