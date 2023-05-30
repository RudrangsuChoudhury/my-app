import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';




const initialState = {
  products: [],
  isFetching: false,
  isProductsFetched: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setIsProductsFetched: (state, action) => {
      state.isProductsFetched = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setIsFetching, setIsProductsFetched, setError } = productsSlice.actions;

export const fetchProducts = () => async (dispatch, getState) => {
  const isProductsFetched = getState().products.isProductsFetched;

  if (!isProductsFetched) {
    dispatch(setIsFetching(true));
    try {
      const { data } = await commerce.products.list({limit:100, include: 'attributes,extra_fields,related_products,variant_groups,assets',page:1 });
      dispatch(setProducts(data));
      dispatch(setIsProductsFetched(true));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsFetching(false));
    }
  }
};






export const getIsFetching = (state) => state.products.isFetching;

export default productsSlice.reducer;
