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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Sortmenuitem from '../components/Sortmenuitem';
import {
  BsGrid,
  BsGrid3X3Gap,
  BsGridFill,
  BsGrid3X3GapFill,
} from 'react-icons/bs';
import ProductCard from '../components/ProductCard';
import { TfiLayoutGrid4, TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getIsFetching  } from '../reducers/productsSlice';
import { fetchCart } from '../reducers/cartSlice';
import { addToCart } from '../reducers/cartSlice';
const OurStore = () => {
  //filtering by category from header menu
  //  const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const category1 = searchParams.get('category');



const dispatch = useDispatch();
  const isProductsFetching = useSelector(getIsFetching);
;
  const products = useSelector((state) => state.products.products);
useEffect(() => {
      dispatch(fetchProducts());
    dispatch(fetchCart());
  },[]);
const [selectedOption, setSelectedOption] = useState('Featured');
  const [selectedColor, setSelectedColor] = useState(null);
  const [hasFilter, setHasFilter] = useState(false);

 const [displayedProducts, setDisplayedProducts] = useState([]);

  const [category, setCategory] = useState(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  //slider
  const [sliderValue, setSliderValue] = React.useState([1000,150000]);
  const [showTooltip, setShowTooltip] = React.useState(false);
  //category


  //Menu
  const [iconVisible, setIconVisible] = useState({
    'Featured': true,
    'Rating': false,
    'A-Z': false,
    'Z-A': false,
    'High to Low': false,
    'Low to High': false,
    'Old to New': false,
    'New to Old': false,
  });
   const handleOptionSelect = (option) => {
     setSelectedOption(option);
   };
   //sorting products
      useEffect(() => {
    if (products.length > 0) {


      setDisplayedProducts(products);
    }
  }, [products]);
  console.log(products);



     const handleMenuItemClick = (option) => {
        let sorted = [...displayedProducts];

  if (option === 'Featured') {
    sorted=products;

  } else if (option === 'Rating') {
    sorted.sort((a, b) => b.attributes[1].value - a.attributes[1].value);
  } else if(option === 'A-Z') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if(option === 'Z-A') {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  } else if(option === 'High to Low') {
    sorted.sort((a, b) => b.price.raw - a.price.raw);
  } else if(option === 'Low to High') {
    sorted.sort((a, b) => a.price.raw - b.price.raw);
  }



  setDisplayedProducts(sorted);
       let category = '';
       if (option === 'Featured' || option === 'Rating') {
         category = 'Sorted by : ';
       } else if (option === 'A-Z' || option === 'Z-A') {
         category = 'Sorted alphabetically : ';
       } else if (option === 'High to Low' || option === 'Low to High') {
         category = 'Sorted by price : ';
       } else if (option === 'Old to New' || option === 'New to Old') {
         category = 'Sorted by date : ';
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


const handleFilter = (filterType, filterValue) => {

  let filtered = displayedProducts;

  if (filterType === 'color') {
    setSelectedColor(filterValue);
  } else if (filterType === 'price') {
    setSliderValue(filterValue);
  }
  else if(filterType==='category'){
     setCategory(filterValue)
  }


  // check if any filter is applied
  const hasColorFilter = selectedColor !== null;
  const hasPriceFilter = sliderValue[0] !== 1000 || sliderValue[1] !== 150000;
  const hasCategoryFilter=category!==null
  const hasFilter = hasColorFilter || hasPriceFilter||hasCategoryFilter;

  setHasFilter(hasFilter);

  // filter the products based on the selected color and price range
  if (hasFilter) {
    filtered = products.filter((product) => {
      let matchColor = true;
      let matchPrice = true;
      let matchCategory=true;

      if (hasColorFilter) {
        matchColor = product.attributes[0].value.includes(filterValue);
      }

      if (hasPriceFilter) {
        matchPrice = product.price.raw >= filterValue[0] && product.price.raw <= filterValue[1];
      }
      if(hasCategoryFilter){
        matchCategory=product.categories[0].name===filterValue
      }


      return matchColor && matchPrice && matchCategory;
    });
  }

  // sort the products based on the selected sorting option


  setDisplayedProducts(filtered);

};








     const [menuGroupTitle, setMenuGroupTitle] = useState(
       `Sorted by : ${'Featured'}`
     );
      //Setting ou r products grid arrangement
      const [grid, setGrid] = useState(3);
      const changeGrid = (i) => {
        setGrid(i);
      };
        // setting grid option for mobile
        const [isSmallerThanMd] = useMediaQuery('(max-width: 500px)');
         useEffect(() => {
           if (isSmallerThanMd) {
             setGrid(2);
           }
         }, [isSmallerThanMd]);
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
            bg={colorMode === 'light' ? 'white' : '#5E565E'}
            p={[1, 10]}
            width={[100, 300]}
            borderRadius="10px"
            padding="10px 15px"
            direction={'column'}
            rowGap="10px"
          >
            <Text
              fontSize={['8px', '16px']}
              lineHeight={['10px', '20px']}
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
            >
              Shop by Categories
            </Text>
            <List
              lineHeight={['15px', '30px']}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
              fontWeight="bold"
              cursor="pointer"
            >
              <ListItem fontSize={[10, 15]} onClick={()=>handleFilter('category','Watch')}>⌚Watch</ListItem>
              <ListItem fontSize={[10, 15]} onClick={()=>handleFilter('category',"Smartphone")}>📱Smartphone</ListItem>
              <ListItem fontSize={[10, 15]} onClick={()=>handleFilter('category',"Headphones")}>🎧Headphone</ListItem>
              <ListItem fontSize={[10, 15]} onClick={()=>handleFilter('category',"Laptops")}>💻Laptop</ListItem>
              <ListItem fontSize={[10, 15]} onClick={()=>handleFilter('category',"Tablets")}>Tablets</ListItem>
              <ListItem fontSize={[10, 15]} onClick={()=>handleFilter('category',"Gaming Console")}>Gaming Console</ListItem>
              <ListItem fontSize={[10, 15]} onClick={()=>handleFilter('category',"Portable Speaker")}>🔊Portable Speaker</ListItem>
            </List>
          </Flex>
          <Flex
            p={[1, 10]}
            width={[100, 300]}
            bg={colorMode === 'light' ? 'white' : '#5E565E'}
            borderRadius="10px"
            padding="10px 15px"
            direction="column"
            rowGap={[1, 5]}
          >
            <Flex align='center' justify='space-between'>
            <Text
              fontSize={['10px', '16px']}
              lineHeight={['10px', '20px']}
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
            >
              Filter By
            </Text>
           {hasFilter &&<Button size='sm' leftIcon={<CloseIcon boxSize={2}/>} colorScheme='pink' variant='outline'
           onClick={() => {
             setHasFilter(false);
      setSelectedColor(null);
       setSliderValue([1000, 150000]);
       setCategory(null)
          setDisplayedProducts(products);

        }}>
    Clear Filter
  </Button>}
            </Flex>
            <Text
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
              fontSize={['10px', '14px']}
            >
              Price
            </Text>

            <RangeSlider
              aria-label="RangeSlider-ex-4"
              defaultValue={[1000, 150000]}
              min={1000}
              max={150000}
              onChange={(v) => setSliderValue(v)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              step={1000}
              onChangeEnd={(v) => {
                handleFilter('price', v);
              }}
              value={sliderValue}
            >
              <RangeSliderMark
                value={1000}
                mt={['1px', '5px']}
                ml={['-1px', '-15px']}
                fontSize={['6px', '12px']}
              >
                1000
              </RangeSliderMark>
              <RangeSliderMark
                value={45000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
                45000
              </RangeSliderMark>
              <RangeSliderMark
                value={75000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
               75000
              </RangeSliderMark>
              <RangeSliderMark
                value={110000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
               110000
              </RangeSliderMark>
              <RangeSliderMark
                value={150000}
                mt={['1px', '5px']}
                ml={['-1px', '-20px']}
                fontSize={['6px', '12px']}
              >
               150000
              </RangeSliderMark>
              <RangeSliderTrack bg="#B1B0D5">
                <RangeSliderFilledTrack bg="#4eb64f" />
              </RangeSliderTrack>
              <Tooltip
                hasArrow
                bg="green.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue[0]}₹`}
                width={['32px', 47]}
                height={['15px', 41]}
                textAlign="center"
                fontSize={['8px', '10px']}
                p={0}
              >
                <RangeSliderThumb index={0} boxSize={[2, 3]} />
              </Tooltip>
              <Tooltip
                hasArrow
                bg="green.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue[1]}₹`}
                width={['32px', 47]}
                height={['15px', 41]}
                textAlign="center"
                fontSize={['8px', '10px']}
                 p={0}
              >
                <RangeSliderThumb index={1} boxSize={[2, 3]} />
              </Tooltip>
            </RangeSlider>
            {/* Rangeslider part ends */}
            <Text
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
              fontSize={['10px', '14px']}
            >
              Colors
            </Text>
            <Flex>
             <List display="flex" flexWrap="wrap" gap="10px">
  <Color color="Black"  onMouseDown={() => handleFilter('color','Black')} selectedColor={selectedColor}/>
  <Color color="#f5f3f3"  onMouseDown={() => handleFilter('color','#f5f3f3')} selectedColor={selectedColor}/>
  <Color color="Silver"  onMouseDown={() => handleFilter('color','Silver')} selectedColor={selectedColor}/>
  <Color color="Grey"  onMouseDown={() => handleFilter('color','Grey')} selectedColor={selectedColor}/>
  <Color color="Beige"  onMouseDown={() => handleFilter('color','Beige')} selectedColor={selectedColor}/>
  <Color color="Red" onMouseDown={() => handleFilter('color','Red')} selectedColor={selectedColor}/>
</List>

        </Flex>
            <Text
              fontWeight={600}
              color={colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'}
              fontSize={['10px', '14px']}
            >
              Size
            </Text>
            <Stack spacing={[2, 4]}>
              <CheckboxGroup
                colorScheme={colorMode === 'light' ? 'green' : 'telegram'}
                size="xl"
              >
                <Checkbox
                  fontWeight="bold"
                  variant="rounded"
                  size={['sm', 'lg']}
                >
                  <Text
                    fontSize={['8px', '12px']}
                    color={
                      colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'
                    }
                  >
                    S (2)
                  </Text>
                </Checkbox>
                <Checkbox
                  fontWeight="bold"
                  variant="rounded"
                  size={['sm', 'lg']}
                >
                  <Text
                    fontSize={['8px', '12px']}
                    color={
                      colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'
                    }
                  >
                    M (2)
                  </Text>
                </Checkbox>
              </CheckboxGroup>
            </Stack>
          </Flex>
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
            <Flex direction="column" py={[1, 5]}>
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
                  src={Random1}
                  width={[100, 150]}
                  height={[100, 200]}
                />
                <Flex direction="column" justify="center" rowGap={[1, 5]}>
                  <Text
                    fontWeight="bold"
                    fontSize={['10px', '13px']}
                    mt={['10px', 0]}
                  >
                    Samsung Galaxy S23 Ultra 5G
                  </Text>
                  <ReactStars
                    value={4}
                    count={5}
                    size={15}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <Text fontSize={['10px', '13px']} fontWeight="bold">
                   ₹124999.00
                  </Text>
                </Flex>
              </Flex>
              <Flex
                mt={[5, 10]}
                columnGap={[0, 5]}
                color={
                  colorMode === 'light' ? 'black' : 'rgb(125 238 196 / 92%)'
                }
                direction={['column', 'row']}
              >
                <Image
                  src={Random2}
                  width={[100, 150]}
                  height={[100, 200]}
                />
                <Flex direction="column" justify="center" rowGap={[1, 5]}>
                  <Text
                    fontWeight="bold"
                    fontSize={['10px', '13px']}
                    mt={['10px', 0]}
                  >
                    Sennheiser HD458
                  </Text>
                  <ReactStars
                    value={4}
                    count={5}
                    size={15}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <Text fontSize={['10px', '13px']} fontWeight="bold">
                    ₹ 8,748
                  </Text>
                </Flex>
              </Flex>
            </Flex>
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
                <MenuGroup title="Date:" fontSize={['10px', '12px']}>
                  <Sortmenuitem
                    bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                    text="Old to New"
                    onClick={() => handleMenuItemClick('Old to New')}
                    iconVisible={iconVisible['Old to New']}
                  />
                  <Sortmenuitem
                    bg={colorMode === 'light' ? '#aed0d0' : 'cyan.700'}
                    text="New to Old"
                    onClick={() => handleMenuItemClick('New to Old')}
                    iconVisible={iconVisible['New to Old']}
                  />
                </MenuGroup>
              </MenuList>
            </Menu>
           {category&& <Text fontSize='20px' fontWeight='bold'
           color={colorMode==='light'?'black':"#b0ffe4"}>Category : {category}</Text>}
            <Flex align="center" columnGap={['5px', '10px']}>
              <Text
                color={colorMode === 'light' ? 'black' : '#b5b542'}
                fontSize={['10px', '16px']}
              >
                12 Products
              </Text>
              <Flex columnGap={['5px', '10px']}>
                <Center
                  bgColor={colorMode === 'light' ? 'gray.300' : '#956124'}
                  borderRadius={['5px', '10px']}
                  p={['4px', '5px']}
                  onClick={() => {
                    changeGrid(1);
                  }}
                >
                  <Box
                    as={
                      grid === 1
                        ? FilledTextColumnOneWide
                        : RegularTextColumnOneWide
                    }
                    boxSize={['12px', '20px']}
                  ></Box>
                </Center>
                <Center
                  bgColor={colorMode === 'light' ? 'gray.300' : '#956124'}
                  borderRadius={['5px', '10px']}
                  p={['4px', '5px']}
                  onClick={() => {
                    changeGrid(2);
                  }}
                >
                  <Box
                    as={grid === 2 ? BsGridFill : BsGrid}
                    boxSize={['12px', '20px']}
                  ></Box>
                </Center>
                {!isSmallerThanMd && (
                  <>
                    <Box
                  bgColor={colorMode === 'light' ? 'gray.300' : '#956124'}
                  borderRadius={['5px', '10px']}
                  p={['4px', '5px']}
                  onClick={() => {
                    changeGrid(3);
                  }}
                >
                  <Box
                    as={grid === 3 ? BsGrid3X3GapFill : BsGrid3X3Gap}
                    boxSize={['12px', '20px']}
                  ></Box>
                </Box>
                  <Box
                    bgColor={colorMode === 'light' ? 'gray.300' : '#956124'}
                    borderRadius={['5px', '10px']}
                    p={['4px', '5px']}
                    onClick={() => {
                      changeGrid(4);
                    }}
                  >
                    <Box
                      as={grid === 4 ? TfiLayoutGrid4Alt : TfiLayoutGrid4}
                      boxSize={['12px', '20px']}
                    ></Box>
                  </Box>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
 {isProductsFetching ? (
  <Center mt='50px'  >
   {/* <CircularProgress trackColor='teal' mt={100} isIndeterminate size="100px" color="green.500" thickness="10px" /> */}
   <Image src={GIF} alt="Waiting" w="80%" h="80%" border='10px solid green'/>
   {/* <div class="tenor-gif-embed" data-postid="16962141" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/mr-bean-mr-bean-bored-waiting-gif-16962141">Mr Bean Mr GIF</a>from <a href="https://tenor.com/search/mr+bean-gifs">Mr Bean GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
   </Center>
 ) : (
    <>
      {!hasFilter ||displayedProducts.length>0 ? (
        <Grid templateColumns={`repeat(${grid}, 1fr)`} gap={6} py={10}>
          {displayedProducts && displayedProducts.map((product) => (
            <ProductCard key={product.id} gridSize={grid} product={product} />
          ))}
        </Grid>
      ) : (
        <Box textAlign="center" py={10}>
          <Heading variant="h5">No Products Found</Heading>
        </Box>
      )}
    </>
  )}
        </Flex>
      </Box>
    </>
  );
};
export default OurStore;
