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
  Text,
  Center,
  Button
} from '@chakra-ui/react';
import { ChevronRightIcon,ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import Color from '../components/Color';
import compareimage from '../images/Random_product_1.jpg';
import compareimage1 from '../images/Random_product_2.jpg';
import compareimage2 from '../images/smartwatch_famous_dark.jpg';
import CompareCard from '../components/CompareCard';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../reducers/productsSlice';
import { fetchCompare } from '../reducers/compareSlice';

const CompareProduct = () => {
    const { colorMode } = useColorMode();
    const products = useSelector((state) => state.products.products);
    const compare = useSelector((state) => state.compare);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCompare());

  },[products]);

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

        {compare.length === 0 ? (
          <Flex align='center' justify='center' direction='column'
            bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
        py={[5, 50]}
        px={[5, 100]}>

          <Text align='center' fontSize='2xl' >There are no products to compare ! </Text>
          <Text align='center' fontSize='2xl' >Please add Some Products to compare them😀 </Text>
          <Button rightIcon={<ArrowForwardIcon />} as={Link} to='/ourstore' colorScheme='teal' mt={5} variant={'outline'}>Go to Ourstore</Button>
          </Flex>
        ) : (
      <Box
        display="flex"
        bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
        py={[5, 50]}
        px={[5, 100]}
        gap={[5, 10]}


      >

          {compare.map((product) => (
            <CompareCard
              key={product.id}
              id={product.id}
              src={product.image.url}
              name={product.name}
              price={product.price.formatted_with_symbol}
              rating={Number(product.attributes[1].value)}
              brand={product.name.split(' ')[0].toUpperCase()}
              Type={product.categories[0].name} // Changed "Type" to "type" to match other props naming
              color={product.attributes[0].value}
            />
          ))
        }


      </Box>
        )
}
    </>
  );
}
export default CompareProduct
