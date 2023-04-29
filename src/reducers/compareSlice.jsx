import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';
import { setProducts } from './productsSlice';

const compareSlice = createSlice({
  name: 'compare',
  initialState: [],
  reducers: {
    setCompare: (state, action) => {
      return action.payload;
    },

  },
});


export const fetchCompare = () => async (dispatch, getState) => {
    const products = getState().products.products;
    const compare = products.filter((product) => product.attributes[2].value === "1");
    dispatch(setCompare(compare));
}
export const addToCompare = (productId) => async (dispatch, getState) => {

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
        "id": "attr_LvJjoPMWd5e0nO",
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
    dispatch(fetchCompare());

};
export const removeFromCompare = (productId) => async (dispatch, getState) => {

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
        "id": "attr_LvJjoPMWd5e0nO",
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
    dispatch(fetchCompare());

};

export const { setCompare } = compareSlice.actions;
export default compareSlice.reducer;
