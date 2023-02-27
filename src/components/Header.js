import React from 'react';
import { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
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
  IconButton,
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
const headerVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 100,
      stiffness: 100,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 100,
    },
  },
};

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //menu bar
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
  //Cart

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(10);

  const handleQuantityChange = (value) => {
    let newQuantity;
    if(value>10){
   newQuantity = Math.min(value, 10);
    }else{
      newQuantity = Math.max(value, 1);
    }
   setQuantity(newQuantity);
   setTotalPrice(newQuantity * 10);
  };

  return (
    <motion.header variants={headerVariants} initial="hidden" animate="visible">
      <Box
        bgGradient={
          colorMode === 'light'
            ? 'linear(to-r, #A6AEC3, #7A90C8)'
            : 'linear(to-r, #2f5cba, #8b4fc2)'
        }
      >
        <Flex align="center" justify="space-around" py={5}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ loop: Infinity, duration: 2 }}
          >
            <Image
              borderRadius="full"
              boxSize={['70px', '70px', '100px']}
              src="/images/e-commerce-4b0c17.jpg"
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
              fontSize={['20px', '20px', '3xl']}
              fontWeight={1000}
              fontFamily="Calligraffitti"
            >
              <Link>The Student's Marketplace</Link>
            </Text>
            <Text
              // fontSize={['0.7em','0.7em',"1xl"]}
              fontSize="1xl"
              fontWeight={700}
              bgClip="text"
              bgGradient={
                colorMode === 'light'
                  ? 'linear(to-l, #0A3D64, #09548E)'
                  : 'linear(to-l, #ff7e5f, #feb47b)'
              }
              ml={[5, 10, 5]}
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
        justify="center"
        flexDirection={['column', 'column', 'row']}
        columnGap={['0px', '0px', '160px']}
        rowGap={['40px', '20px', '0px']}
        height={['160px', '150px', '100px']}
        bgGradient={
          colorMode === 'light'
            ? 'linear(0deg, rgb(132, 110, 234) 10%, rgba(53, 34, 186, 0.64)80%)'
            : 'linear(0deg, rgb(8, 125, 122) 13%, rgba(88, 36, 203, 0.64) 100%)'
        }
      >
        <InputGroup w={['70%', '80%', '700px']}>
          <Input
            type="text"
            placeholder="Search for products, brands and more"
            fontSize="1em"
            border="2px solid"
            borderColor="gray.300"
            height="50px"
            focusBorderColor="gray.300"
            _placeholder={{
              color: '#DBEA2F',
              fontSize: ['12px', '12px', '18px'],
            }}
            borderRadius="lg"
            color={colorMode === 'light' ? 'black' : 'gray.100'}
          />
          <InputRightElement
            bg="orange"
            borderRadius={5}
            h="49px"
            cursor="pointer"
            w="50px"
            children={<BsSearch size={20} color="#913AAF" />}
          />
        </InputGroup>
        <Box display="flex" columnGap="75px" flexDirection="row">
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
          <Button className="links" position="relative" onClick={onCartOpen}>
            <Box
              as={TiShoppingCart}
              boxSize={{ base: '25px', md: '30px', lg: '35px' }}
              color={colorMode === 'light' ? 'black' : 'white'}
              alt="Cart"
              margin="auto"
            />
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
              <DrawerHeader ml="20px">Shopping Cart</DrawerHeader>

              <DrawerBody>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Product</Th>
                      <Th>Price</Th>
                      <Th>Quantity(1-10)</Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Example Product</Td>
                      <Td>10.00</Td>

                      <Td>
                        <Input
                          type="number"
                          min="1"
                          max="10"
                          value={quantity}
                          onChange={(e) =>
                            handleQuantityChange(parseInt(e.target.value))
                          }
                          outline="2px solid #cdc4c4"
                        />
                      </Td>
                      <Td>{totalPrice.toFixed(2)}</Td>
                      <Td>
                        <Box as={RiDeleteBin6Fill} boxSize="30px" color="red" />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>

                <Box mt={4} ml={5}>
                  <Text fontWeight="bold">
                    Total Price: {totalPrice.toFixed(2)}
                  </Text>
                </Box>
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
        </Box>
      </Flex>
      <Flex
        bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
        p={5}
        color="white"
        align="center"
        columnGap={5}
        flexDirection={['column', 'column', 'row']}
        justify={['center', 'center', 'normal']}
      >
        <Menu isOpen={isMenuOpen} onClose={onMenuClose}>
          <MenuButton
            ml={['0px', '0px', '70px']}
            color="white"
            onMouseEnter={onMenuOpen}
            onMouseLeave={onMenuClose}
            px={['0px', '5px', '16px']}
          >
            <Flex align="center" columnGap={2}>
              <CgMenuGridR
                className="shop-icon"
                size={25}
                color={colorMode === 'light' ? '#6ac495' : 'white'}
              />
              <Text
                fontSize={20}
                fontWeight="bold"
                color={colorMode === 'light' ? '#52A6E5' : 'white'}
              >
                Shop Categories
              </Text>
            </Flex>
          </MenuButton>
          <MenuList
            maxW={['50px', '200px']}
            onMouseEnter={onMenuOpen}
            onMouseLeave={onMenuClose}
          >
            <MenuItem
              p={[1, 3]}
              py={[1, 2]}
              _hover={
                colorMode === 'light' ? { bg: '#aed0d0' } : { bg: 'cyan.700' }
              }
            >
              <Link to="#">
                <Text
                  color={colorMode === 'light' ? 'black' : 'whiteAlpha.700'}
                  fontSize={['10px', '15px']}
                >
                  New Window
                </Text>
              </Link>
            </MenuItem>
            <MenuItem
              p={[1, 3]}
              py={[1, 2]}
              _hover={
                colorMode === 'light' ? { bg: '#aed0d0' } : { bg: 'cyan.700' }
              }
            >
              <Link to="#">
                <Text
                  color={colorMode === 'light' ? 'black' : 'whiteAlpha.700'}
                  fontSize={['10px', '15px']}
                >
                  Open Closed Tab
                </Text>
              </Link>
            </MenuItem>
            <MenuItem
              p={[1, 3]}
              py={[1, 2]}
              _hover={
                colorMode === 'light' ? { bg: '#aed0d0' } : { bg: 'cyan.700' }
              }
            >
              <Link to="#">
                <Text
                  color={colorMode === 'light' ? 'black' : 'whiteAlpha.700'}
                  fontSize={['10px', '15px']}
                >
                  Open File
                </Text>
              </Link>
            </MenuItem>
            <MenuItem
              p={[1, 3]}
              py={[1, 2]}
              _hover={
                colorMode === 'light' ? { bg: '#aed0d0' } : { bg: 'cyan.700' }
              }
            >
              <Link to="#">
                <Text
                  color={colorMode === 'light' ? 'black' : 'whiteAlpha.700'}
                  fontSize={['10px', '15px']}
                >
                  Open File
                </Text>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Flex>
          <NavLink className="navlink" to="/">
            <Text
              color={colorMode === 'light' ? '#52A6E5' : 'white'}
              fontWeight="bold"
            >
              Home
            </Text>
          </NavLink>
          <NavLink className="navlink" to="/product">
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
  );
};
export default Header;
