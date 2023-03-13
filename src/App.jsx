import React,{useState,useEffect} from 'react';
//importing commerce js
import  {commerce}  from './lib/commerce';


import {  Routes, Route, BrowserRouter } from 'react-router-dom';

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
import Checkout from './pages/Checkout';



function App() {



  const [products, setProducts] =useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Design
          />}>

            <Route index element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="product" element={<OurStore />}/>
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
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
