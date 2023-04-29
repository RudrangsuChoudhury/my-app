import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice';
import compareReducer from './reducers/compareSlice';
import wishlistReducer from './reducers/wishlistSlice';
import sortReducer from './reducers/sortSlice';
import reviewReducer from './reducers/reviewSlice';
import orderReducer from './reducers/orderSlice';
import errorReducer from './reducers/errorSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    compare: compareReducer,
    wishlist: wishlistReducer,
    sort: sortReducer,
    review: reviewReducer,
    order: orderReducer,
    error: errorReducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
