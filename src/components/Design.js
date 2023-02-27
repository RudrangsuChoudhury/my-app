import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
// import { Text } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react';
const Design = () => {
  return (
    <>
      <Box p={0} m={0} fontFamily="Roboto">
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default Design;
