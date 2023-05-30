import { Box, Center, Image, Text, useColorMode,Flex,useMediaQuery,Tooltip} from '@chakra-ui/react';
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
import { addToCompare } from '../reducers/compareSlice';
import { fetchProducts } from '../reducers/productsSlice';
import { addToWishlist } from '../reducers/wishlistSlice';
import { Highlight } from 'react-instantsearch-hooks-web';

const AnimatedBox = animated(Box);
const ProductCard = ({hit}) => {


  //handle cart
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)



 const toast = useToast();
  const [currentQuantity, setCurrentQuantity] = useState(0);
  useEffect(() => {
    if(!cart.line_items) return;
    // Set the current quantity of this product in the cart
    const lineItem = cart.line_items.find((item) => item.product_id === hit.id);
    if (lineItem) {
      setCurrentQuantity(lineItem.quantity);
    } else {
      setCurrentQuantity(0);
    }
  }, [cart]);



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
      await dispatch(addToCart(hit.id, 1));
      setCurrentQuantity(currentQuantity + 1);
       toast({
      title: 'Added to cart',
      description: `You have successfully added this product to cart`,
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
    } catch (error) {
      console.log(error);
    }
    setIsAddingToCart(false);
  };



// add to compare
const compare=useSelector(state=>state.compare)
 const handleaddtoCompare=async()=>{
  if(compare.length>=4){
    toast({
      title: 'Max capacity reached',
      description: `You can only add up to 4  item to  compare .Please remove some of them`,
      status: 'warning',
      duration: 3000,
      isClosable: true,
    });
    return;
  }
    await dispatch(addToCompare(hit.id))
      toast({
      title: 'Added to comparing',
      description: `You have successfully add this product to comparing page`,
      status: 'success',
      duration: 1000,
      isClosable: true,
    });


 }


const wishlist=useSelector(state=>state.wishlist)
 const handleaddtoWishlist=async()=>{
  if(wishlist.length>=4){
    toast({
      title: 'Max capacity reached',
      description: `You can only add up to 4  item to  wishlist .Please remove some of them`,
      status: 'warning',
      duration: 3000,
      isClosable: true,
    });
    return;
  }
    await dispatch(addToWishlist(hit.id))
     toast({
      title: 'Added to wishlist',
      description: `You have successfully wishlisted this product`,
      status: 'success',
      duration: 1000,
      isClosable: true,
    });

}






  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const { colorMode } = useColorMode();

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


       width = isSmallerThan500 ? '100px' : '300px';
       height = isSmallerThan500 ? '100px' : '300px';

  //icon right position
  let iconRight;

   if(!isSmallerThan500){
    iconRight = '25px';
  }
  else{
    iconRight='10px'
  }
  //icons top position
  let iconTop;


    iconTop = '20%';

  //texts rowgap
  let rowGap

    if(isSmallerThan500){
      rowGap='2px';
    }
    else if(!isSmallerThan500){
      rowGap='10px';
    }

  return (

    <Box
      p={[1, '20px']}
      bg={colorMode === 'light' ? 'white' : '#087284'}
      borderRadius="10px"
      position="relative"
      overflow="hidden"
      maxHeight={['300px', '500px']}
      width={['400px', '950px']}
      display="flex"
      alignItems="center"
      justifyContent= 'space-between'
      rowGap="10px"
      _hover={{
        '& .last-child': {
          right: iconRight,
        },
      }}
    >
        <Flex
          align="center"
          rowGap={[2, 20]}
          justify="center"
          direction= 'row'
          columnGap= '5px'
        >
          <Center>
            <animated.img
              src={hit.image.url}
              style={{
                ...imageScale,
                width: width,
                borderRadius: '10px',
                height: height,
                marginRight:  !isSmallerThan500 ? '100px' : 0,
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              alt="Product"
            />
          </Center>

          <Flex
            align= 'start'
            justify="center"
            direction="column"
            rowGap={rowGap}
            alignSelf= 'start'
            px={isSmallerThan500  ? '10px' : '0'}
            w='30%'
          >
            <Text
              color={colorMode === 'light' ? '#bf4800' : '#2bcfb0'}
              fontSize={['10px', '20px']}
              fontWeight="bold"
            >
               {hit.name.split(" ")[0].toUpperCase()}
            </Text>
            <Text color="#1c1c1b" fontSize={['8px', '14px']} fontWeight="bold">

                  <Highlight attribute="name" hit={hit} />
            </Text>
            <div key={isSmallerThan500 ? 'small' : 'large'}>
              <ReactStars
                value={Number(hit.attributes[1].value)}
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
              {hit.price.formatted_with_symbol}
            </Text>
          </Flex>

            <Box display="flex" justifyContent="flex-end" align="center">

                <Box
                  as={BsHeart }
                  position="absolute"
                  top={
                    ( isSmallerThan500)
                      ? '10%'
                      : '10%'
                  }
                  left='95%'
                  boxSize={['10px', '20px']}
                  color={colorMode === 'light' ? 'black' : 'rgb(225, 146, 228)'}
                  onClick={()=>handleaddtoWishlist()}
                  cursor="pointer"

 zIndex={2} // Increase zIndex value
  _before={{
    content: "'Add to Wishlist'",
    position: "absolute",
    top: "5%",
    left: "5%",
    transform: "translateX(-50%)",
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    zIndex: 3, // Increase zIndex value
  }}
  _hover={{
    _before: {
      opacity: 1,
    }
  }}
                />


              <Box
                position="absolute"
                top={iconTop}
                right="-28px"
                display="flex"
                flexDirection="column"
                rowGap={5}
                className="last-child"
                transition=".5s"
              >

                  <Box
                    as={IoGitCompareSharp}
                    boxSize={['10px', '20px']}
                    color={
                      colorMode === 'light' ? 'black' : 'rgb(50, 214, 241)'

                    }
                    cursor='pointer'
                           onClick={()=>handleaddtoCompare()}
                  />

               <Link to={`/product/${hit.id}`}>
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

        </Flex>
    </Box>

  );
};
export default ProductCard
