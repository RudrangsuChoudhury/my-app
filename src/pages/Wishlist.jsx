import React from 'react'
import Meta from '../components/Meta';
import {
   Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  useColorMode,
  Image,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { RxCross1 } from 'react-icons/rx';
import WishlistImage from '../images/Random_product_1.jpg';
import WishlistImage1 from '../images/Random_product_2.jpg';
import WishlistImage2 from '../images/13-inch-macbook-pro-m2-mock-feature-2.jpg';
import WishlistCard from '../components/WishlistCard';

const Wishlist = () => {
    const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Wishlist'} />
      <Breadcrumb
        p={5}
        display="flex"
        justifyContent="center"
        separator={<ChevronRightIcon />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="#">
            Wishlist
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box
        display="flex"
        bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
        py={[5, 50]}
        px={[5, 100]}
        gap={[5, 10]}
      >
        <WishlistCard src={WishlistImage}/>
        <WishlistCard src={WishlistImage1}/>
        <WishlistCard src={WishlistImage2}/>
      </Box>
    </>
  );
}

export default Wishlist