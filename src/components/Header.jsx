import React, { useEffect,useState} from 'react';

import { NavLink, Link ,useLocation} from 'react-router-dom';
import { MoonIcon, SunIcon,ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Text,
  Box,
  Flex,
  InputRightElement,
  InputGroup,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  MenuDivider,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton, HStack, NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as Link1, Image, Input, useDisclosure } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { GiScales } from 'react-icons/gi';
import { RiHeartAddLine } from 'react-icons/ri';
import { CgLogIn, CgMenuGridR } from 'react-icons/cg';
import { TiShoppingCart } from 'react-icons/ti';
import { MdOutlineEmail, MdEmail } from 'react-icons/md';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import  logo  from '../images/e-commerce-4b0c17.jpg';
import {  useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';
import { fetchProducts } from '../reducers/productsSlice';
import { fetchCart } from '../reducers/cartSlice';
import { commerce } from '../lib/commerce';
import { emptyCart } from '../reducers/cartSlice';
import { updateCart } from '../reducers/cartSlice';

//importing debounce
import debounce from 'lodash/debounce';
const headerVariants = {
  hidden: {
    y: '-100vh',
    // opacity: 0,
    transition: {
      type: 'spring',
      damping: 100,
      stiffness: 100,
    },
  },
  visible: {
    y: 0,
    // opacity: 1,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 100,
    },
  },
};





const Header = () => {
  const dispatch = useDispatch();


  // handling cart
 const cart = useSelector((state) => state.cart);

 const handleQuantityChange = (lineItemId, quantity) => {


  dispatch(updateCart(lineItemId, quantity));
};
const debouncedHandleUpdateCartQty = debounce(handleQuantityChange, 500);



    const handleEmptyCart = () => {
      dispatch(emptyCart());
    };
  const { colorMode, toggleColorMode } = useColorMode();
const {
  isOpen: isCartOpen,
  onOpen: onCartOpen,
  onClose: onCartClose,
} = useDisclosure();
const {
  isOpen: isMenuOpen,
  onOpen: onMenuOpen,
  onClose: onMenuClose,
} = useDisclosure();


//setting scroll direction
const location=useLocation();
const [scrollDirection, setScrollDirection] = useState(null);


  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -18)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

console.log(cart)
  return (
       <Box position={location.pathname==='/'|| location.pathname.startsWith('/product/')?"sticky":'static'} top={0} width="100%" zIndex={1}

      backgroundColor= 'white'
      >

    <motion.header variants={headerVariants} initial="hidden" animate="visible"

   >

      <Box
        bgGradient={
          colorMode === 'light'
            ? 'linear(to-r, #A6AEC3, #7A90C8)'
            : 'linear(to-r, #2f5cba, #8b4fc2)'
        }

display={scrollDirection === "down" && (location.pathname === '/' || location.pathname.startsWith('/product/')) ? "none" : "block"}



      >
        <Flex align="center" justify="space-around" py={1} px={[2,0]}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ loop: Infinity, duration: 2 }}
          >
            <Image
              borderRadius="full"
              boxSize={['70px', '70px', '100px']}
              src={logo}
              alt="Shopping"
            />
          </motion.div>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            ml={['20px', '30px', '120px']}
          >
            <Text
              bgGradient={
                colorMode === 'light'
                  ? 'linear(to-l, #770886, #A80E86)'
                  : 'linear(to-l, #74cec6, #46d122)'
              }
              bgClip="text"
              fontSize={['18px', '20px', '3xl']}
              fontWeight={1000}
              fontFamily="Calligraffitti"
            >
              <Link>The Student's Marketplace</Link>
            </Text>
            <Text
              fontSize={['0.7em','0.7em',"1xl"]}

              fontWeight={700}
              bgClip="text"
              bgGradient={
                colorMode === 'light'
                  ? 'linear(to-l, #0A3D64, #09548E)'
                  : 'linear(to-l, #ff7e5f, #feb47b)'
              }
              ml={[2, 10, 5]}
            >
              Unlock Your Potential with the Student's Marketplace
            </Text>
          </Box>
          <Text
            fontSize={['0.6em', '0.7em', '1em']}
            fontWeight={500}
            bgClip="text"
            bgGradient={
              colorMode === 'light'
                ? 'linear(to-l, #7416D6, #1B4DD4)'
                : 'linear(to-l, #10dbc9, #da88f1)'
            }
            display="inline-flex"
            alignItems={'center'}
          >
            Contact Us -
            <Link1
              href="mailto: choudhuryrudrangsu@gmail.com"
              ml={2}
              mr={['10px', '10px', '0px']}
            >
              {colorMode === 'light' ? (
                <Box as={MdOutlineEmail} color="black" size={20} />
              ) : (
                <Box as={MdEmail} color="#2727BC" size={20} />
              )}
            </Link1>
          </Text>
          <IconButton
            boxSize={[6, 6, 10]}
            mr={['10px', '10px', '0px']}
            onClick={toggleColorMode}
            aria-label="Enable DarkMode"
            colorScheme="purple"
            icon={
              colorMode === 'light' ? (
                <MoonIcon boxSize={['10px', '12px', '15px']} />
              ) : (
                <SunIcon boxSize={['10px', '12px', '15px']} />
              )
            }
          />
        </Flex>
      </Box>

      <Flex
        align="center"
     justify='space-around'
        flexDirection={['column', 'column', 'row']}

        rowGap={['20px',  '0px']}
        height={['160px', '150px', '90px']}
        bgGradient={
          colorMode === 'light'
            ? 'linear(0deg, rgb(132, 110, 234) 10%, rgba(53, 34, 186, 0.64)80%)'
            : 'linear(to-l,black,black)'
        }


min-height= '100%'
      >


          <Link className="links" to="/compare-product">
            <Box
              as={GiScales}
              boxSize={{ base: '25px', md: '30px', lg: '35px' }}
              color={colorMode === 'light' ? 'black' : 'white'}
              alt="compare"
              margin="auto"
            />
            <Text
              className="icon-text"
              fontWeight="bold"
              fontSize={['0.5em', '0.75em', '1em']}
            >
              Compare
              <br /> Products
            </Text>
          </Link>
          <Link to="/wishlist" className="links">
            <Box
              as={RiHeartAddLine}
              boxSize={{ base: '25px', md: '30px', lg: '35px' }}
              color={colorMode === 'light' ? 'black' : 'white'}
              alt="Wishlist"
              margin="auto"
            />
            <Text
              className="icon-text"
              fontWeight="bold"
              fontSize={['0.5em', '0.75em', '1em']}
            >
              Wishlist
            </Text>
          </Link>
          <Link className="links" to="/login">
            <Box
              as={CgLogIn}
              boxSize={{ base: '25px', md: '30px', lg: '35px' }}
              color={colorMode === 'light' ? 'black' : 'white'}
              alt="Login"
              margin="auto"
            />
            <Text
              className="icon-text"
              fontWeight="bold"
              fontSize={['0.5em', '0.75em', '1em']}
            >
              Log in
            </Text>
          </Link>
          <Button className="links" position="relative" onClick={onCartOpen}
          >
            <Box
              as={TiShoppingCart}
              boxSize={{ base: '25px', md: '30px', lg: '35px' }}
              color={colorMode === 'light' ? 'black' : 'white'}
              alt="Cart"
              margin="auto"

            />
            <Badge fontSize='1xl' position='absolute' top='110%'>{cart.total_items}</Badge>
          </Button>
          <Drawer
            isOpen={isCartOpen}
            placement="right"
            onClose={onCartClose}
            size="lg"


          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <Flex columnGap={350} align='center'>
              <DrawerHeader ml="20px" >Shopping Cart</DrawerHeader>
              <DrawerHeader ><Box cursor='pointer' as={RiDeleteBin6Fill} boxSize="30px" color="red" onClick={()=>handleEmptyCart()}/></DrawerHeader>
              </Flex>
              <DrawerBody>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Product</Th>
                      <Th>Price</Th>
                      <Th>Quantity</Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cart.line_items &&cart.line_items.map((item) => (

                    <Tr key={item.id}>
                      <Td>
                        <Flex direction='column' align='start' justify='center'>
                        <Image src={item.image.url}/>
                        <Text ml='20px' fontSize='10px' fontWeight='bold'>{item.name}</Text>
                        </Flex>
                        </Td>
                      <Td>{(item.price.formatted_with_symbol).slice(0,-3)}</Td>
                      <Td>

                        <NumberInput allowMouseWheel min={0} max={10} defaultValue={item.quantity} size='xs' onChange={(value) =>
    debouncedHandleUpdateCartQty(item.id, value)

  } >
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>


                      </Td>
                      <Td>{(item.line_total.formatted_with_symbol).slice(0,-3)}</Td>
                      <Td>
                        <Box cursor='pointer' as={RiDeleteBin6Fill} boxSize="30px" color="red" onClick={()=>handleQuantityChange(item.id,0)}/>
                      </Td>
                    </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Flex mt={4} ml={10} justify='space-between'>
                  <Text fontWeight="bold">
                    Subtotal
                  </Text>
                  { cart.subtotal && cart.subtotal.formatted_with_symbol &&<Text ml={4} fontWeight="bold">
                    {cart.subtotal.formatted_with_symbol}
                  </Text>}
                </Flex>
              </DrawerBody>
              <DrawerFooter>

                <Button variant="outline" mr={3} onClick={onCartClose}>
                  Cancel
                </Button>
                <Link to="/checkout">
                  <Button colorScheme="blue" onClick={onCartClose}>Checkout</Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

      </Flex>
      <Flex
        bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
        p={1}
        color="white"
        align="center"
        columnGap={[2,5]}
        flexDirection={['column', 'column', 'row']}
        justify={['center', 'center', 'normal']}
      >

        <Flex px={[10,95]} py={2}>
          <NavLink className="navlink" to="/">
            <Text
              color={colorMode === 'light' ? '#52A6E5' : 'white'}
              fontWeight="bold"
            >
              Home
            </Text>
          </NavLink>
          <NavLink className="navlink" to="/ourstore">
            <Text
              color={colorMode === 'light' ? '#52A6E5' : 'white'}
              fontWeight="bold"
            >
              Our Store
            </Text>
          </NavLink>
          <NavLink className="navlink" to="/blogs">
            <Text
              color={colorMode === 'light' ? '#52A6E5' : 'white'}
              fontWeight="bold"
            >
              Blogs
            </Text>
          </NavLink>
          <NavLink className="navlink" to="/contact">
            <Text
              color={colorMode === 'light' ? '#52A6E5' : 'white'}
              fontWeight="bold"
            >
              Contact
            </Text>
          </NavLink>
        </Flex>
      </Flex>
    </motion.header>
    </Box>
  );
};
export default Header;
