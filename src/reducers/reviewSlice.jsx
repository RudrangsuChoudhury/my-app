import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';
import { setProducts } from './productsSlice';

const reviewSlice = createSlice({
  name: 'review',
  initialState: [],
  reducers: {
    setReview: (state, action) => {
      return action.payload;
    },

  },
});









export const fetchReview = () => async (dispatch, getState) => {
    const products = getState().products.products;
    const compare = products.filter((product) => product.attributes[5].value !=='Add a Review');

    dispatch(setReview(compare));
}
export const addToReview = (productId,review) => async (dispatch, getState) => {

  const url = new URL(
    `https://api.chec.io/v1/products/${productId}`
);

const headers = {
    "X-Authorization": "sk_50715b4ad7edd0ba4cf7f56d39b25c1d4450aba76925a",
    "Accept": "application/json",
    "Content-Type": "application/json",
};

 const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
    "attributes": [
      {
        "id": "attr_L1vOoZDnmlRa8Z",
        "value": review
      }
    ]
  })

    });

    const data = await response.json();

    const products = getState().products.products;
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return data;
      }
      return product;
    }
    );
    dispatch(setProducts(newProducts));
    dispatch(fetchReview());

};
export const removeFromWishlist = (productId) => async (dispatch, getState) => {

  const url = new URL(
    `https://api.chec.io/v1/products/${productId}`
);

const headers = {
    "X-Authorization": "sk_50715b4ad7edd0ba4cf7f56d39b25c1d4450aba76925a",
    "Accept": "application/json",
    "Content-Type": "application/json",
};

 const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
    "attributes": [
      {
        "id": "attr_L1vOoZDnmlRa8Z",
        "value": 'Add a Review'
      }
    ]
  })

    });

    const data = await response.json();

    const products = getState().products.products;
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return data;
      }
      return product;
    }
    );
    dispatch(setProducts(newProducts));
    dispatch(fetchReview());

};

export const { setReview } = reviewSlice.actions;
export default reviewSlice.reducer;
