import { createSlice } from '@reduxjs/toolkit';

export const seedSlice = createSlice({
  name: 'seed',
  initialState: '', // Semilla predeterminada
  reducers: {
    setSeed: (state, action) => action.payload,
  },
});

export const { setSeed } = seedSlice.actions;
export default seedSlice.reducer;
