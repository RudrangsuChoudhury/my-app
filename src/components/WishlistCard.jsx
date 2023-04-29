import React,{useState,useEffect} from 'react'
import { Flex, useColorMode, Image, Text, Box,Button,useToast } from '@chakra-ui/react'
import { RxCross1 } from 'react-icons/rx'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeFromWishlist } from '../reducers/wishlistSlice'
import { addToCart, fetchCart } from '../reducers/cartSlice'
import { useSelector } from 'react-redux'



const WishlistCard = (props) => {
  const { colorMode } = useColorMode()
  const dispatch = useDispatch()
  const handleRemove = () => {

  dispatch(removeFromWishlist(props.id))
}

//adding to cart
  const cart=useSelector(state=>state.cart)

 const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(0);

 const toast = useToast();

 useEffect(() => {
  dispatch(fetchCart())

  }, [])

useEffect(() => {
    if(!cart.line_items) return;
    // Set the current quantity of this product in the cart
    const lineItem = cart.line_items.find((item) => item.product_id === props.id);
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
      await dispatch(addToCart(props.id, 1));
      setCurrentQuantity(currentQuantity + 1);
    } catch (error) {
      console.log(error);
    }
    setIsAddingToCart(false);
  };

  return (
    <Flex direction="column" w="300px" h='50%' p='20px' bg='white' borderRadius='20px'>
          <Flex
            px="20px"
            py="5px"
            bgGradient={
              colorMode === 'light'
                ? 'linear(to-r,white,white)'
                : 'linear(90deg, rgb(40 134 134) 0%, rgb(22 85 102) 100%)'
            }
            borderRadius={10}
            direction="column"
            position="relative"
            justify="center"
            align="center"
          >
            <Image src={props.src} height='250px' />
            <Box
              as={RxCross1}
              w="20px"
              h="20px"
              ml="30px"
              mt="10px"
              cursor="pointer"
              position="absolute"
              top="2%"
              left="83%"
              onClick={()=>handleRemove()}
            />
          </Flex>
          <Flex direction='column' rowGap='10px' mt='10px' p={2}>
            <Text
              color="1c1c1b"
              fontSize="15px"
              lineHeight="22px"
              fontWeight="500"
            >
              {props.name}
            </Text>
            <Text fontSize="15px" lineHeight="22px" fontWeight="400">
              {props.price}
            </Text>

             <Button colorScheme="orange" leftIcon={<BsFillCartPlusFill />} onClick={()=>handleAddToCart()}>
                Add to Cart
              </Button>

          </Flex>
        </Flex>
  )
}

export default WishlistCard