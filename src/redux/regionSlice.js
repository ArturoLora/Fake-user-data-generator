import { createSlice } from '@reduxjs/toolkit';

export const regionSlice = createSlice({
  name: 'region',
  initialState: 'US', // Región predeterminada
  reducers: {
    setRegion: (state, action) => action.payload,
  },
});

export const { setRegion } = regionSlice.actions;
export default regionSlice.reducer;
