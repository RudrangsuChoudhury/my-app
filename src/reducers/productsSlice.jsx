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

// export const addToCompare = (productId) => async (dispatch, getState) => {

//   const url = new URL(
//     `https://api.chec.io/v1/products/${productId}`
// );

// const headers = {
//     "X-Authorization": "sk_50715b4ad7edd0ba4cf7f56d39b25c1d4450aba76925a",
//     "Accept": "application/json",
//     "Content-Type": "application/json",
// };

//  const response = await fetch(url, {
//         method: "PUT",
//         headers: headers,
//         body: JSON.stringify({
//     "attributes": [
//       {
//         "id": "attr_mOVKl4DMYlprRP",
//         "value": "1"
//       }
//     ]
//   })

//     });

//     // const data = await response.json();
//     // dispatch(setCompare(data))

//       const updatedProductData = await response.json();

//   // Update the products array with the updated product data
//   const products = getState().products.products;
//   const updatedProducts = products.map(product => {
//     if (product.id === updatedProductData.id) {
//       return updatedProductData;
//     } else {
//       return product;
//     }
//   });

//   dispatch(setCompare(updatedProductData));
//   dispatch(setProducts(updatedProducts));

// };




export const getIsFetching = (state) => state.products.isFetching;

export default productsSlice.reducer;
