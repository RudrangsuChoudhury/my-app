import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';

const errorSlice = createSlice({
  name: 'error',
  initialState: '',
  reducers: {
    setError: (state, action) => {
      return action.payload;
    },

  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
