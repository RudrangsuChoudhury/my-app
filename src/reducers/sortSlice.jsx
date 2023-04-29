import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';

const sortSlice = createSlice({
  name: 'sort',
  initialState: 'products',
  reducers: {
    setSort: (state, action) => {
      return action.payload;
    },

  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
export const handleSort = (sortItem) =>(dispatch)=> {

  dispatch(setSort(sortItem));
};
