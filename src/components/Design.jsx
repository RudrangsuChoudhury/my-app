import React from 'react';
import { Outlet,ScrollRestoration,useLocation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
// import { Text } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react';
const Design = ({handleCategoryClick}) => {
  const location = useLocation();
  return (
    <>
      <Box p={0} m={0} fontFamily="Roboto">

        <Header handleCategoryClick={handleCategoryClick}/>

        <Outlet />
                       <ScrollRestoration
  getKey={(location, matches) => {

    return location.key;
  }}
/>
        <Footer />
      </Box>
    </>
  );
};

export default Design;
