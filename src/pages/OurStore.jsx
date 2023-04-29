import React from 'react';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import Meta from '../components/Meta';
import { ChevronRightIcon,CloseIcon } from '@chakra-ui/icons';
import { TextColumnOneWide as FilledTextColumnOneWide } from '@styled-icons/fluentui-system-filled';
import { TextColumnOneWide as RegularTextColumnOneWide } from '@styled-icons/fluentui-system-regular';
import Color from '../components/Color';
import Random1 from '../images/Random_product_1.jpg';
import Random2 from '../images/Random_product_2.jpg';
import GIF from '../images/mr-bean-mr-bean-holiday.gif'
import {
  Box,
  Flex,
  List,
  ListItem,
  Text,
  Stack,
  useColorMode,
  Checkbox,
  CheckboxGroup,
  Grid,
  Image,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  //menus
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  Button,
  ChakraProvider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Tooltip,
  useMediaQuery,
  Spinner,
  CircularProgress,
  Heading,
  Input,
  InputGroup,
 InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Sortmenuitem from '../components/Sortmenuitem';
import {
  BsGrid,
  BsGrid3X3Gap,
  BsGridFill,
  BsGrid3X3GapFill,
  BsSearch
} from 'react-icons/bs';
import ProductCard from '../components/ProductCard';
import { TfiLayoutGrid4, TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getIsFetching  } from '../reducers/productsSlice';
import { fetchCart } from '../reducers/cartSlice';
import { addToCart } from '../reducers/cartSlice';
//importing algolia search




import Search from '../components/Search';
import ListProduct from '../components/ListProduct';
import { handleSort } from '../reducers/sortSlice';
//refinelist
import { RefinementList } from 'react-instantsearch-hooks-web';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch} from 'react-instantsearch-hooks-web';



const OurStore = () => {




const dispatch = useDispatch();
  const isProductsFetching = useSelector(getIsFetching);
// ;
  const products = useSelector((state) => state.products.products);
  let arr = [];


while (arr.length < 2) {
  let random_index = Math.floor(Math.random() * 13);
  if (!arr.includes(random_index)) {
    arr.push(random_index);
  }
}






useEffect(() => {
      dispatch(fetchProducts());
    dispatch(fetchCart());
  },[]);


const [selectedOption, setSelectedOption] = useState('Featured');


const [category, setCategory] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
//   //slider

  const sort=useSelector((state)=>state.sort);

  //category


  //Menu
  const [iconVisible, setIconVisible] = useState({
    'Featured': true,
    'Rating': false,
    'A-Z': false,
    'Z-A': false,
    'High to Low': false,
    'Low to High': false,

  });
   const handleOptionSelect = (option) => {
     setSelectedOption(option);
   };






     const handleMenuItemClick = (option) => {


  if (option === 'Featured') {
   dispatch(handleSort('products'));

  } else if (option === 'Rating') {

    dispatch(handleSort('Rating'));
  } else if(option === 'A-Z') {

    dispatch(handleSort('Alphabetical_Ascending'))
  } else if(option === 'Z-A') {

    dispatch(handleSort('Alphabetical_Descending'));
  } else if(option === 'High to Low') {

   dispatch( handleSort('Price'));
  } else if(option === 'Low to High') {

    dispatch(handleSort('Price_Ascending'));
  }




       let category = '';
       if (option === 'Featured' || option === 'Rating') {
         category = 'Sorted by : ';
       } else if (option === 'A-Z' || option === 'Z-A') {
         category = 'Sorted alphabetically : ';
       } else if (option === 'High to Low' || option === 'Low to High') {
         category = 'Sorted by price : ';
       }
       // Set the menu group title with the sorting category and option
       setMenuGroupTitle(`${category} ${option}`);
       setIconVisible((prevIconVisible) => {
        if(selectedOption!==option){
           const newIconVisible = { ...prevIconVisible };
           newIconVisible[selectedOption]=!prevIconVisible[selectedOption]
           newIconVisible[option] = !prevIconVisible[option];
           return newIconVisible;
        }
         const newIconVisible = { ...prevIconVisible };
         return newIconVisible;
       });
       handleOptionSelect(option);
     };




//filtering by price











     const [menuGroupTitle, setMenuGroupTitle] = useState(
       `Sorted by : ${'Featured'}`
     );








  return (
    <>
      <Meta title={'Our Store'} />
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
            Our Store
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex direction='column' justify='center' align='center' >



      <Box
        display="flex"
        bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
        py={[5, 50]}
        px={[5, 100]}
        gap={[5, 10]}

      >


        <Flex
          bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
          direction="column"
          rowGap={30}

        >



          <Flex
            width={[100, 300]}
            bg={colorMode === 'light' ? 'white' : '#5E565E'}
            borderRadius="10px"
            padding={['5px 5px', '10px 15px']}
          >
            <Flex direction="column">
              <Text
                fontSize="16px"
                lineHeight="20px"
                fontWeight={600}
                color={
                  colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'
                }
                mb={['10px', '20px']}
              >
                Product Tags
              </Text>
              <Grid templateColumns="repeat(2, 2fr)" gap={[1, 5]}>
                <Center
                  bg="cyan.100"
                  color="cyan.800"
                  borderRadius={[10, 20]}
                  px={[1, 2]}
                  py={[1, 2]}
                  fontWeight="bold"
                  width={['40px', '80px']}
                  fontSize={['7px', '12px']}
                >
                  Headphone
                </Center>
                <Center
                  bg="cyan.100"
                  color="cyan.800"
                  borderRadius={[10, 20]}
                  px={[1, 2]}
                  py={[1, 2]}
                  fontWeight="bold"
                  width={['40px', '80px']}
                  fontSize={['8px', '12px']}
                >
                  Laptop
                </Center>
                <Center
                  bg="cyan.100"
                  color="cyan.800"
                  borderRadius={[10, 20]}
                  px={[1, 2]}
                  py={[1, 2]}
                  fontWeight="bold"
                  width={['40px', '80px']}
                  fontSize={['8px', '12px']}
                >
                  Mobile
                </Center>
                <Center
                  bg="cyan.100"
                  color="cyan.800"
                  borderRadius={[10, 20]}
                  px={[1, 2]}
                  py={[1, 2]}
                  fontWeight="bold"
                  width={['40px', '80px']}
                  fontSize={['8px', '12px']}
                >
                  Tablet
                </Center>
              </Grid>
            </Flex>
          </Flex>
          <Flex
            width={[100, 300]}
            bg={colorMode === 'light' ? 'white' : '#5E565E'}
            justify="center"
            borderRadius="10px"
            padding={['10px 5px', '10px 15px']}
            direction="column"
          >
            <Text
              fontSize={['10px', '16px']}
              lineHeight={['10px', '20px']}
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
              mb={['5px', '20px']}
            >
              Random Product
            </Text>
            {products.length>0 &&
            <Flex direction="column" py={[1, 5]}>
              <Link to={`/product/${products[arr[0]].id}`}>
              <Flex
                borderBottom="2px solid #ededed"
                pb={[5, 10]}
                columnGap={[0, 5]}
                color={
                  colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'
                }
                direction={['column', 'row']}

              >
                <Image
                  src={products[arr[0]].image.url}
                  width={[100, 150]}
                  height={[100, 200]}

                />
                <Flex direction="column" justify="center" rowGap={[1, 5]}>
                  <Text
                    fontWeight="bold"
                    fontSize={['10px', '13px']}
                    mt={['10px', 0]}
                  >
                   {products[arr[0]].name}
                  </Text>
                  <ReactStars
                    value={4}
                    count={5}
                    size={15}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <Text fontSize={['10px', '13px']} fontWeight="bold">
              {products[arr[0]].price.formatted_with_symbol}
                  </Text>
                </Flex>
              </Flex>
              </Link>
              <Link to={`/product/${products[arr[1]].id}`}>
              <Flex
                mt={[5, 10]}
                columnGap={[0, 5]}
                color={
                  colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'
                }
                direction={['column', 'row']}
              >
                <Image
                  src={products[arr[1]].image.url}
                  width={[100, 150]}
                  height={[100, 200]}
                />
                <Flex direction="column" justify="center" rowGap={[1, 5]}>
                  <Text
                    fontWeight="bold"
                    fontSize={['10px', '13px']}
                    mt={['10px', 0]}
                  >
                   {products[arr[1]].name}
                  </Text>
                  <ReactStars
                    value={4}
                    count={5}
                    size={15}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <Text fontSize={['10px', '13px']} fontWeight="bold">
                   {products[arr[1]].price.formatted_with_symbol}
                  </Text>
                </Flex>
              </Flex>
              </Link>
            </Flex>
}
          </Flex>
        </Flex>
        <Flex direction="column">
          <Flex
            p={['5px', 10]}
            bgColor={colorMode === 'light' ? 'white' : '#247368'}
            h={'70px'}
            borderRadius="10px"
            boxShadow="md"
            width={['278px', '1000px']}
            justify="space-between"
            align="center"
          >
            <Menu isLazy isOpen={isOpen} onClose={onClose} variant="sortmenu">
              <MenuButton
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                fontSize={['8px', '10px']}
              >
                {menuGroupTitle}
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <Sortmenuitem
                  bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                  text="Featured"
                  onClick={() => handleMenuItemClick('Featured')}
                  iconVisible={iconVisible['Featured']}
                />
                <Sortmenuitem
                  bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                  text="Rating"
                  onClick={() => handleMenuItemClick('Rating')}
                  iconVisible={iconVisible['Rating']}
                />
                <MenuGroup title="Alphabetically" fontSize={['5px', '12px']}>
                  <Sortmenuitem
                    bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                    text="A-Z"
                    onClick={() => handleMenuItemClick('A-Z')}
                    iconVisible={iconVisible['A-Z']}
                  />
                  <Sortmenuitem
                    bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                    text="Z-A"
                    onClick={() => handleMenuItemClick('Z-A')}
                    iconVisible={iconVisible['Z-A']}
                  />
                </MenuGroup>
                <MenuGroup title="Price:" fontSize={['10px', '12px']}>
                  <Sortmenuitem
                    bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                    text="High to Low"
                    onClick={() => handleMenuItemClick('High to Low')}
                    iconVisible={iconVisible['High to Low']}
                  />
                  <Sortmenuitem
                    bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                    text="Low to High"
                    onClick={() => handleMenuItemClick('Low to High')}
                    iconVisible={iconVisible['Low to High']}
                  />
                </MenuGroup>

              </MenuList>
            </Menu>

            <Flex align="center" columnGap={['5px', '10px']}>
              <Text
                color={colorMode === 'light' ? 'black' : '#b5b542'}
                fontSize={['10px', '16px']}
              >
                {products.length} Products
              </Text>

            </Flex>
          </Flex>
           {isProductsFetching ? (
  <Center mt='50px'  >
    <CircularProgress trackColor='teal' mt={100} isIndeterminate size="100px" color="green.500" thickness="10px" />


    </Center>
 ) : (
    <>

       <Box mt='20px' >
          {/* {displayedProducts && displayedProducts.map((product) => (
            <ProductCard key={product.id} gridSize={grid} product={product} />

          ))} */}
           {products && <ListProduct

        />}
           </Box>


    </>
  )}

        </Flex>
      </Box>
      </Flex>

    </>
  );
};
export default OurStore;
