import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },

  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;

export const fetchCart = () => async (dispatch) => {
  const response = await commerce.cart.retrieve();
  dispatch(setCart(response));
};


export const addToCart = (productId, quantity) => async (dispatch) => {
  const item = await commerce.cart.add(productId, quantity);

  dispatch(setCart(item));
};

export const emptyCart=()=>async(dispatch)=>{
  const item=await commerce.cart.empty();
  dispatch(setCart(item));
}
export const updateCart = (itemId, quantity) => async (dispatch) => {
  const item = await commerce.cart.update(itemId, { quantity:quantity });

  dispatch(setCart(item));
}
