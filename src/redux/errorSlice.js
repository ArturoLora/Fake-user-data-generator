import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: 0, // Cantidad de errores predeterminada
  reducers: {
    setErrorCount: (state, action) => action.payload,
  },
});

export const { setErrorCount } = errorSlice.actions;
export default errorSlice.reducer;
