import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';
import { setProducts } from './productsSlice';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    setWishlist: (state, action) => {
      return action.payload;
    },

  },
});


export const fetchWishlist = () => async (dispatch, getState) => {
    const products = getState().products.products;
    const compare = products.filter((product) => product.attributes[3].value == "1");
    dispatch(setWishlist(compare));
}
export const addToWishlist = (productId) => async (dispatch, getState) => {

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
        "id": "attr_eN1ql9raPwz3ym",
        "value": "1"
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
    dispatch(fetchWishlist());

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
        "id": "attr_eN1ql9raPwz3ym",
        "value": "0"
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
    dispatch(fetchWishlist());

};

export const { setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
