import React from 'react'
import Meta from '../components/Meta';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  useColorMode,
  Text
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import Color from '../components/Color';
import compareimage from '../images/Random_product_1.jpg';
import compareimage1 from '../images/Random_product_2.jpg';
import compareimage2 from '../images/smartwatch_famous_dark.jpg';
import CompareCard from '../components/CompareCard';
const CompareProduct = () => {
    const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Compare Products'} />
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
            Compare Products
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
        <CompareCard src={compareimage} name="Samsung Galaxy S23 Ultra 5G (Cream, 12GB, 256GB Storage)" price="₹124,999.00"
        brand="Samsung" Type="Smartphone"  color='Beige'/>
        <CompareCard src={compareimage1} name="Sennheiser HD 458 ANC Foldable Bluetooth Wireless Over Ear Headphones" price="₹8,748.00"
        brand="Sennheiser" Type="Headphone" color='Black Red'/>
        <CompareCard src={compareimage2} name="Apple Watch Series 8 [GPS 41 mm] Smart Watch" price="₹41,990.00"
        brand="Apple" Type="Watch" color='Black'/>
      </Box>
    </>
  );
}
export default CompareProduct
