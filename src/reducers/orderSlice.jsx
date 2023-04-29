import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';
import {refreshCart} from './cartSlice';
import { setError } from './errorSlice';

const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    setOrder: (state, action) => {
      return action.payload;
    },

  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;

export const handleCaptureCheckout = (checkoutTokenId, newOrder) => async (dispatch) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
        dispatch(setOrder(incomingOrder));
        conssole.log(incomingOrder)
        dispatch(refreshCart());
    } catch (error) {
        dispatch(setError(error.data.error.message));
    }
};
