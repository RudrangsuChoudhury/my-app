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
  Text,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon,ArrowForwardIcon } from '@chakra-ui/icons';
import { RxCross1 } from 'react-icons/rx';
import WishlistImage from '../images/Random_product_1.jpg';
import WishlistImage1 from '../images/Random_product_2.jpg';
import WishlistImage2 from '../images/13-inch-macbook-pro-m2-mock-feature-2.jpg';
import WishlistCard from '../components/WishlistCard';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../reducers/productsSlice';
import { fetchWishlist } from '../reducers/wishlistSlice';


const Wishlist = () => {
    const { colorMode } = useColorMode();
     const products = useSelector((state) => state.products.products);


    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchWishlist());

  },[products]);
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
        {wishlist.length === 0 &&  products.length!=0 ?(
          <Flex align='center' justify='center' direction='column'
            bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
        py={[5, 50]}
        px={[5, 100]}>


          <Text align='center' fontSize='2xl' >Wishlist is empty </Text>
          <Button rightIcon={<ArrowForwardIcon />} as={Link} to='/ourstore' colorScheme='purple' mt={5} variant={'outline'}>Go to Ourstore</Button>
          </Flex>
        ) : (
      <Box
        display="flex"
        bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
        py={[5, 50]}
        px={[5, 100]}
        gap={[5, 10]}
      >

    {wishlist.map((product) => (
            <WishlistCard
              key={product.id}
              id={product.id}
              src={product.image.url}
              name={product.name}
              price={product.price.formatted_with_symbol}

            />
          ))
        }

      </Box>
        )}
    </>
  );
}

export default Wishlist