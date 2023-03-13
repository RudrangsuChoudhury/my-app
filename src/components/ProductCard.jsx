import { Box, Center, Image, Text, useColorMode,Flex,useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoGitCompareSharp } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';
import productimage  from '../images/sony-headphone-featured.webp';
import { useSelector } from 'react-redux';
import {useToast } from '@chakra-ui/react';
import { addToCart } from '../reducers/cartSlice';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
const AnimatedBox = animated(Box);
const ProductCard = ({gridSize,product}) => {

  //handle cart
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)


 const toast = useToast();
  const [currentQuantity, setCurrentQuantity] = useState(0);
  useEffect(() => {
    if(!cart.line_items) return;
    // Set the current quantity of this product in the cart
    const lineItem = cart.line_items.find((item) => item.product_id === product.id);
    if (lineItem) {
      setCurrentQuantity(lineItem.quantity);
    } else {
      setCurrentQuantity(0);
    }
  }, [cart]);


  //  const handleAddToCart = () => {
  //   if (currentQuantity >= 10) {
  //     toast({
  //       title: 'Max quantity reached',
  //       description: `You can only add up to 10 of any item to your cart.`,
  //       status: 'warning',
  //       duration: 2000,
  //       isClosable: true,
  //     });
  //     return;
  //   }

  //   dispatch(addToCart(product.id,1));
  //   setCurrentQuantity(prevQantity=>prevQantity+1);
  // }
  const handleAddToCart = async () => {
    if (isAddingToCart) {
      return;
    }
    if (currentQuantity >= 10) {
      toast({
        title: 'Max quantity reached',
        description: `You can only add up to 10 of any item to your cart.`,
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setIsAddingToCart(true);
    try {
      await dispatch(addToCart(product.id, 1));
      setCurrentQuantity(currentQuantity + 1);
    } catch (error) {
      console.log(error);
    }
    setIsAddingToCart(false);
  };



  // const debouncehandleAddToCart=debounce(handleAddToCart,1000)
  //setting modile view
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const { colorMode } = useColorMode();
  //image hover animation
  const [hovered, setHovered] = React.useState(false);
  const imageScale = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    config: {
      duration: 200,
      tension: 1000, // default is 170
      friction: 0 // default is 26 },
}});
  let width = [];
  let height = [];
  //image size
  if (gridSize === 4) {
    width = '150px';
    height = '200px';
  } else if (gridSize === 3) {
    width = '200px';
    height ='300px';
  } else if (gridSize === 2) {
    width = isSmallerThan500 ? '100px' : '300px';
    height = isSmallerThan500 ? '100px' : '300px';
  }
  else{
       width = isSmallerThan500 ? '100px' : '200px';
       height = isSmallerThan500 ? '100px' : '300px';
  }
  //icon right position
  let iconRight;
  if (gridSize === 4) {
    iconRight = '12px';
  } else if (gridSize === 3) {
    iconRight = '8px';
  } else if (gridSize === 2) {
    iconRight = '24px';
  }
  else if(gridSize===1&&!isSmallerThan500){
    iconRight = '70px';
  }
  else{
    iconRight='15px'
  }
  //icons top position
  let iconTop;
  if (gridSize === 4) {
    iconTop = '20%';
  } else if (gridSize === 3) {
    iconTop = '26%';
  } else if (gridSize === 2) {
    iconTop = '26%';
  }
  else{
    iconTop = '30%';
  }
  //texts rowgap
  let rowGap
  if(gridSize===1){
    if(isSmallerThan500){
      rowGap='2px';
    }
    else if(!isSmallerThan500){
      rowGap='20px';
    }
  }
  return (

    <Box
      p={[1, 15]}
      bg={colorMode === 'light' ? 'white' : '#087284'}
      borderRadius="10px"
      position="relative"
      overflow="hidden"
      maxHeight={['300px', '500px']}
      maxWidth={['400px', '100%']}
      display="flex"
      alignItems="center"
      justifyContent={gridSize === 1 ? 'space-between' : 'center'}
      rowGap="10px"
      _hover={{
        '& .last-child': {
          right: iconRight,
        },
      }}
    >
        <Flex
          align="center"
          rowGap={[2, 5]}
          justify="center"
          direction={gridSize === 1 ? 'row' : 'column'}
          columnGap={gridSize === 1 ? '10px' : '0px'}
        >
          <Center>
            <animated.img
              src={product.image.url}
              style={{
                ...imageScale,
                width: width,
                borderRadius: '10px',
                height: height,
                marginRight: gridSize === 1 && !isSmallerThan500 ? '100px' : 0,
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              alt="Product"
            />
          </Center>
          {isSmallerThan500 && gridSize === 2 && (
            <Box
              display="flex"
              align="center"
              flexDirection="row"
              columnGap={1}
            >
              <Link>
                <Box
                  as={BsHeart}
                  boxSize={['10px', '20px']}
                  color={colorMode === 'light' ? 'black' : 'rgb(225, 146, 228)'}
                />
              </Link>
              <Link>
                <Box
                  as={IoGitCompareSharp}
                  boxSize={['10px', '20px']}
                  color={colorMode === 'light' ? 'black' : 'rgb(50, 214, 241)'}
                />
              </Link>
               <Link to={`/product/${product.id}`} >
                <Box
                  as={MdOutlineRemoveRedEye}
                  boxSize={['10px', '20px']}
                  color={colorMode === 'light' ? 'black' : 'rgb(122, 226, 138)'}
                />
              </Link>

                <Box
                  as={MdAddShoppingCart}
                  boxSize={['10px', '20px']}
                  color={colorMode === 'light' ? 'black' : 'rgb(222, 172, 77)'}
                  onClick={handleAddToCart}
                />

            </Box>
          )}
          <Flex
            align={gridSize === 1 ? 'start' : 'center'}
            justify="center"
            direction="column"
            rowGap={rowGap}
            alignSelf={gridSize === 1 ? 'start' : 'center'}
            px={isSmallerThan500 && gridSize === 1 ? '10px' : '0'}
          >
            <Text
              color={colorMode === 'light' ? '#bf4800' : '#2bcfb0'}
              fontSize={['10px', '20px']}
              fontWeight="bold"
            >
               {product.name.split(" ")[0].toUpperCase()}
            </Text>
            <Text color="#1c1c1b" fontSize={['8px', '14px']} fontWeight="bold">
              {product.name}
            </Text>
            <div key={isSmallerThan500 ? 'small' : 'large'}>
              <ReactStars
                value={Number(product.attributes[1].value)}
                count={5}
                size={isSmallerThan500 ? 10 : 30}
                activeColor="#ffd700"
                edit={false}
              />
            </div>
            <Text
              color={colorMode === 'light' ? 'black' : 'white'}
              fontSize={isSmallerThan500 ? '0.5rem' : '1rem'}
            >
              {product.price.formatted_with_symbol}
            </Text>
          </Flex>
          {(!isSmallerThan500 || (isSmallerThan500 && gridSize === 1)) && (
            <Box display="flex" justifyContent="flex-end" align="center">
              <Link>
                <Box
                  as={BsHeart}
                  position="absolute"
                  top={
                    gridSize === 4 || (gridSize === 1 && isSmallerThan500)
                      ? '10%'
                      : '20%'
                  }
                  left={gridSize === 4 ? '86%' : '91%'}
                  boxSize={['10px', '20px']}
                  color={colorMode === 'light' ? 'black' : 'rgb(225, 146, 228)'}
                />
              </Link>
              <Box
                position="absolute"
                top={iconTop}
                right="-28px"
                display="flex"
                flexDirection="column"
                rowGap={5}
                className="last-child"
                transition=".3s"
              >
                <Link>
                  <Box
                    as={IoGitCompareSharp}
                    boxSize={['10px', '20px']}
                    color={
                      colorMode === 'light' ? 'black' : 'rgb(50, 214, 241)'
                    }
                  />
                </Link>
               <Link to={`/product/${product.id}`} >
                  <Box
                    as={MdOutlineRemoveRedEye}
                    boxSize={['10px', '20px']}
                    color={
                      colorMode === 'light' ? 'black' : 'rgb(122, 226, 138)'
                    }
                  />
                </Link>

                  <Box
                    as={MdAddShoppingCart}
                    boxSize={['10px', '20px']}
                    color={
                      colorMode === 'light' ? 'black' : 'rgb(222, 172, 77)'
                    }
                    onClick={handleAddToCart}
                   cursor="pointer"


                  />

              </Box>
            </Box>
          )}
        </Flex>
    </Box>

  );
};
export default ProductCard
