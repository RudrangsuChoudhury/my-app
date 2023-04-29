import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";

import App from './App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import customTheme from './components/customcomponent/theme';
import { Provider } from 'react-redux';
import store from './store';
import Design from './components/Design';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout/Checkout';


const container = document.getElementById('root');
const root = createRoot(container);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Design />}>
      <Route index element={<Home />} />

      {/* ... etc. */}
        <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="ourstore" element={<OurStore />}/>
            <Route exact path="product/:id" element={<SingleProduct />} />
            <Route exact path="blogs" element={<Blog/>} />
            <Route exact path="blog/:id" element={<SingleBlog/>} />
            <Route exact path="cart" element={<Cart/>} />
            <Route exact path="checkout" element={<Checkout/>} />
            <Route exact path="compare-product" element={<CompareProduct/>} />
            <Route exact path="wishlist" element={<Wishlist/>} />
            <Route exact path="login" element={<Login/>} />
            <Route exact path="forgot-password" element={<ForgotPassword/>} />
            <Route exact path="signup" element={<Signup/>} />
            <Route exact path="reset-password" element={<ResetPassword/>} />
            <Route exact path="privacy-policy" element={<PrivacyPolicy/>} />
            <Route exact path="refund-policy" element={<RefundPolicy/>} />
            <Route exact path="shipping-policy" element={<ShippingPolicy/>} />
            <Route exact path="term-conditions" element={<TermAndConditions/>} />
    </Route>
  ),

);
root.render(
   <Provider store={store}>
  <ChakraProvider  theme={customTheme}>

    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <RouterProvider router={router} />
  </ChakraProvider>
  </Provider>
);
