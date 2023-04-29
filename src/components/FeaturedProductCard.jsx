import { Box, Image, Text,useColorMode ,useToast} from '@chakra-ui/react'
import React from 'react';
import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link,useLocation } from 'react-router-dom';
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoGitCompareSharp } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import featuredimage from '../images/sony-headphone-featured.webp';
import featuredimage1 from '../images/sony-headphone-featured1.jpg';
import { useSelector } from 'react-redux';

import { addToCart } from '../reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { addToCompare } from '../reducers/compareSlice';
import { addToWishlist } from '../reducers/wishlistSlice';
const FeaturedProductCard = ({image,image1,name,rating,brand,price,link}) => {
  const{colorMode} = useColorMode()
  let location = useLocation();

  // handle add to cart
  const cart=useSelector(state=>state.cart)

 const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const dispatch=useDispatch()
 const toast = useToast();

useEffect(() => {
    if(!cart.line_items) return;
    // Set the current quantity of this product in the cart
    const lineItem = cart.line_items.find((item) => item.product_id === link);
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
      await dispatch(addToCart(link, 1));
      setCurrentQuantity(currentQuantity + 1);
    } catch (error) {
      console.log(error);
    }
    setIsAddingToCart(false);
  };

  // handling wishlist and compare

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
    await dispatch(addToCompare(link))

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
    await dispatch(addToWishlist(link))

 }




  return (
    <Box
      p={15}
      bgColor={colorMode === 'light' ? 'white' : '#087284'}
      borderRadius="10px"
      position="relative"
      overflow="hidden"
      className="product-card"
      height={['500px', '560px']}
      minW="246px"
    >
      <Box display="flex" flexDirection="column" rowGap={[2, 7]}>

          <Box
            as={BsHeart}
            className="wishlist"
            boxSize={['10px', '20px']}
            color={colorMode === 'light' ? 'black' : 'rgb(225, 146, 228)'}
            cursor="pointer"
            onClick={handleaddtoWishlist}
          />

        <Box
          className="featuredimages"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={image} className="featuredimage"></Image>

          <Image
            src={image1}
            className="featuredimage"
          ></Image>

        </Box>
        <Text
          color={colorMode === 'light' ? '#bf4800' : '#2bcfb0'}
          fontSize="20px"
          fontWeight="bold"
        >
            {brand}
        </Text>
        <Text color="#1c1c1b" fontSize="15px" fontWeight="bold">
         {name}
        </Text>

        <ReactStars
          half={false}
          value={Number(rating)}
          count={5}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />

        <Text>{price}</Text>
      </Box>
      <Box
        position="absolute"
        top="10%"
        right="-28px"
        display="flex"
        flexDirection="column"
        rowGap={10}
        className="product-card_hover"
        transition=".3s"
      >

          <Box
            as={IoGitCompareSharp}
            boxSize={['10px', '20px']}
            color={colorMode === 'light' ? 'black' : 'rgb(50, 214, 241)'}
            cursor="pointer"
            onClick={handleaddtoCompare}
          />

         <Link
          to={


               `/product/${link}`
          }



        >
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
                onClick={()=>handleAddToCart(link,1)}
                cursor="pointer"
          />

      </Box>
    </Box>
  );
};


export default FeaturedProductCard