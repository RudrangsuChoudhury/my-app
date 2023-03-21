import {
  Flex,
  Image,
  Text,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  Button,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';
import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';
const SpecialProduct = ({product,discountData,rating}) => {
  const { colorMode } = useColorMode();
  console.log((product ));
  console.log(discountData)
  const expirationDate = discountData.expires_on;
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    function updateTimer() {
      // Get the current timestamp in seconds
      const now = Math.floor(Date.now() / 1000);

      // Calculate the number of seconds left until the expiration date
      const secondsLeft = expirationDate - now;

      if (secondsLeft < 0) {
        clearInterval(intervalId); // stop updating the timer
        setTimeLeft({
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      // Calculate the remaining time in hours, minutes, and seconds
      const hours = Math.floor(secondsLeft / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = Math.floor(secondsLeft % 60);

      // Update the state with the remaining time
      setTimeLeft({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    }

    // Update the timer every second
    const intervalId = setInterval(updateTimer, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [discountData]);
  const days=Math.round((discountData.expires_on-Math.floor(Date.now() / 1000))/86400)

  //setting add to cart
    const cart=useSelector(state=>state.cart)

 const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const dispatch=useDispatch()
 const toast = useToast();

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
  return (
    <Flex
      w={350}
      p="10px"
      borderRadius="10px"
      bgColor={colorMode === 'light' ? 'white' : '#0A6C7C'}
      h={450}
      justify="space-between"
    >
      <Image src={product &&product.image&& product.image.url} w={130} h={300} alignSelf='center' mr={1}/>
      <Flex
        align="center"
        justify="flex-end"
        flexDirection="column"
        rowGap={2}
      >
        <Text
          fontSize={20}
          fontWeight="bold"
          bgGradient={
            colorMode === 'light'
              ? 'linear(to-r,black,black)'
              : 'linear(90deg, rgb(216, 209, 147) 23%, rgba(45,253,135,1) 100%)'
          }
          bgClip="text"
        >
         {product && product.name.split(" ")[0].toUpperCase()}
        </Text>
        <Text
          bgGradient={
            colorMode === 'light'
              ? 'linear(to-r,black,black)'
              : 'linear(90deg, rgb(216, 209, 147) 23%, rgba(45,253,135,1) 100%)'
          }
          bgClip="text"
        >
        {product && product.name}
        </Text>
        <ReactStars
          value={Number(rating)}
          count={5}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />
        <Text color={colorMode === 'light' ? 'black' : 'yellow.500'}>
          {`₹${Math.round(product.price.raw*(discountData.value/100))}`} &nbsp;<s>{product &&product.price &&product.price.formatted_with_symbol}</s>
        </Text>

        {/* Discount */}
        <Flex align="center" columnGap={5}>
          <Text
            fontSize={15}
            bgGradient={
              colorMode === 'light'
                ? 'black'
                : 'linear(90deg, rgb(216, 209, 147) 23%, rgba(45,253,135,1) 100%)'
            }
            bgClip="text"
          >
            {days} days
          </Text>
          <Flex flexDirection="row" align="center" columnGap={2}>
            <Circle bg="#fc353c" p={7} size="25px" color="white">
             {timeLeft.hours}
            </Circle>
            :
            <Circle bg="#fc353c" p={4} size="25px" color="white">
              {timeLeft.minutes}
            </Circle>
            :
            <Circle bg="#fc353c" p={1} size="25px" color="white">
              {timeLeft.seconds}
            </Circle>
          </Flex>
        </Flex>
        <CircularProgress value={25} size="100px" color="#CF471D">
          <CircularProgressLabel
            fontSize={11}
            color={colorMode === 'light' ? 'black' : '#F38A8A'}
            fontWeight="bold"
          >
            Only {days}<br/> days left
            <br /> hurry up
          </CircularProgressLabel>
        </CircularProgress>
        <Button
          size="lg"
          colorScheme="green"
          _hover={{ bg: '#6bd5cb' }}
          _active={{ transform: 'scale(0.95)' }}
          borderRadius={20}
          onClick={handleAddToCart}
        >

            <Text color={colorMode === 'light' ? 'black' : '#6446cc'}>
              Add to Cart
            </Text>

        </Button>
      </Flex>
    </Flex>
  );
};
export default SpecialProduct;
