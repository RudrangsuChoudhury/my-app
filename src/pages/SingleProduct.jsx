import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {BsFillCartPlusFill} from 'react-icons/bs'
import {HiShoppingBag} from 'react-icons/hi'
import {VscGitCompare} from 'react-icons/vsc'
import {FaGrinHearts} from 'react-icons/fa'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  useColorMode,
  Text,
  Heading,
FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,

  Avatar,
  Stack,
  Icon,
  Grid,
  Image,
  Link as Chakralink,
  Tag,
  Wrap,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,

} from '@chakra-ui/react';
import Meta from '../components/Meta';

import ReactStars from 'react-rating-stars-component';
import FeaturedProductCard from '../components/FeaturedProductCard';
import ReactImageZoom from 'react-image-zoom';
import RandomImage from '../images/Random_product_1.jpg';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { fetchProducts, getIsFetching } from '../reducers/productsSlice';
const SingleProduct = ({ match }) => {
    const { colorMode } = useColorMode();
     const [hasPurchased, setHasPurchased] = useState(false);
     const[showReviewForm, setShowReviewForm] = useState(false);
     //image zoom

const props = {
  width: 400,
  height: 500,
  zoomWidth: 500,
  img:  RandomImage ,
};

//  const { id } = match.params;
//   const dispatch = useDispatch();
//   const isFetching = useSelector(getIsFetching);
//   const product = useSelector((state) => state.products.products[0]);

//   useEffect(() => {
//     dispatch(fetchProducts(id));
//   }, [dispatch, id]);

//   if (isFetching) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }



// const products = useSelector((state) => state.products.products);
  return (
    <>
      <Meta title={'Product Name'} />
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
            Product Name
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex
        bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
        direction="column"
        p={20}
        rowGap={20}
      >
        <Flex columnGap="30px" align="start" p="20px" bg="white">
          <Flex width="30%" direction="column" borderRadius="10px" rowGap={5}>
            <ReactImageZoom {...props} />


            <Grid gap="15px" templateColumns="repeat(2, 1fr)">
              <Box
                p="10px"
                boxSize="100%"
                border="1px solid rgba(0,0,0,0.25)"
                bg="white"
              >
                <Image src={RandomImage} />
              </Box>
              <Box
                p="10px"
                boxSize="100%"
                border="1px solid rgba(0,0,0,0.25)"
                bg="white"
              >
                <Image src={RandomImage} />
              </Box>
              <Box
                p="10px"
                border="1px solid rgba(0,0,0,0.25)"
                bg="white"
                boxSize="100%"
              >
                <Image src={RandomImage} />
              </Box>
              <Box
                p="10px"
                border="1px solid rgba(0,0,0,0.25)"
                bg="white"
                boxSize="100%"
              >
                <Image src={RandomImage} />
              </Box>
            </Grid>
          </Flex>
          <Flex direction="column">
            <Heading
              as="h2"
              fontSize="18px"
              fontWeight="bold"
              pb="20px"
              color="#1c1c1b"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              Samsung Galaxy S23 Ultra 5G (Cream, 12GB, 256GB Storage)
            </Heading>
            <Flex
              rowGap="10px"
              direction="column"
              my="10px"
              borderBottom="1px solid rgba(0,0,0,0.1)"
              py="10px"
            >
              <Text fontSize="16px" fontWeight="600" color='black'>
               ₹124999.00
              </Text>
              <Flex align="center" columnGap="10px">
                <ReactStars
                  half={false}
                  value={4}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <Text color="gray.500">( 2 reviews )</Text>
              </Flex>

              <Box>
                <Chakralink href="#review" color="#3adc9f" fontWeight="600">
                  Write a review
                </Chakralink>
              </Box>
            </Flex>
            <Flex
              direction="column "
              borderBottom="1px solid rgba(0,0,0,0.1)"
              py="20px"
              align="start"
              rowGap="30px"
            >
              <Flex columnGap="10px">
                <Heading as="h2" fontSize="17px" color="#1c1c1b">
                  Type :
                </Heading>
                <Text fontSize="15px" color="#777777">
                  Smartphone
                </Text>
              </Flex>
              <Flex columnGap="10px">
                <Heading as="h2" fontSize="17px" color="#1c1c1b">
                  Brand :
                </Heading>
                <Text fontSize="15px" color="#777777">
                  Samsung
                </Text>
              </Flex>
              <Flex columnGap="10px">
                <Heading as="h2" fontSize="17px" color="#1c1c1b">
                  Category :
                </Heading>
                <Text fontSize="15px" color="#777777">
                  Smartphone
                </Text>
              </Flex>
              <Flex columnGap="10px">
                <Heading as="h2" fontSize="17px" color="#1c1c1b">
                  Tags :
                </Heading>
                <Text fontSize="15px" color="#777777">
                  <Wrap spacing="10px">
                    <Tag colorScheme="whatsapp"> Samsung</Tag>
                    <Tag colorScheme="whatsapp"> Smartphone</Tag>
                  </Wrap>
                </Text>
              </Flex>
              <Flex columnGap="10px">
                <Heading as="h2" fontSize="17px" color="#1c1c1b">
                  Availability :
                </Heading>
                <Text fontSize="15px" color="#777777">
                  In stock
                </Text>
              </Flex>
            </Flex>
            <Wrap spacing={10} mt={10} pt={10}>
              <Button colorScheme="teal" leftIcon={<HiShoppingBag />}>
                {' '}
                Buy it Now
              </Button>
              <Button colorScheme="orange" leftIcon={<BsFillCartPlusFill />}>
                Add to Cart
              </Button>
            </Wrap>
            <Wrap spacing={10} mt={10} pt={10}>
              <Chakralink
                href="#"
                display="flex"
                alignItems="center"
                color="#6b4ed5"
                fontSize="18px"
                bg="teal.400"
                p="10px"
                borderRadius="10px"
                columnGap="10px"
              >
                <VscGitCompare color="#f5f5f5" />
                Add to Wishlist
              </Chakralink>
              <Chakralink
                href="#"
                display="flex"
                alignItems="center"
                color="#6b4ed5"
                fontSize="18px"
                bg="teal.400"
                p="10px"
                borderRadius="10px"
                columnGap="10px"
              >
                <FaGrinHearts color="blue" />
                Add to Wishlist
              </Chakralink>
            </Wrap>
            <Box mt={10} pt={10} maxW="40%">
              <Accordion allowToggle>
                <AccordionItem >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Shipping and Returns
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Free shipping for all products
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                       Warranty
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                1 year warranty for all products
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                      Payment Methods
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    We accept all major credit cards
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Flex>

        <Flex direction="column">
          <Heading
            as="h4"
            mb={4}
            color={colorMode === 'light' ? 'black' : 'white'}
          >
            Description
          </Heading>
          <Box
            bg={colorMode === 'light' ? 'white' : 'gray.900'}
            border="none"
            borderRadius="10px"
            p="20px"
          >
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quod porro neque, natus tempore itaque. Reiciendis minus rem
              placeat nisi sed dolorum eaque quod, deserunt, natus vitae
              temporibus quia velit.
            </Text>
          </Box>
        </Flex>
        <Box
          bg={colorMode === 'light' ? 'white' : 'gray.900'}
          border="none"
          borderRadius="10px"
          p="20px"
          px={20}
        >
          <Flex flexDirection="column" alignItems="center">
            <Text
              fontSize="26px"
              lineHeight="32px"
              fontWeight={600}
              marginBottom="30px"
              color={colorMode === 'light' ? 'black' : '#3adc9f'}
            >
              Reviews
            </Text>
            <Flex
              alignSelf="start"
              justifyContent="space-between"
              w={'100%'}
              mb={10}
              py={10}
              borderBottom="1px solid #eaeaea"
            >
              <Flex direction="column">
                <Heading as="h6" fontSize="20px">
                  Customer Reviews
                </Heading>
                <ReactStars
                  half={false}
                  value={4}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <Text color="gray.500">Based on 2 reviews</Text>
              </Flex>
              <Button
                colorScheme="blue"
                onClick={() => setShowReviewForm(!showReviewForm)}
                id="review"
              >
                Write a review
              </Button>
            </Flex>
            <Box mb={10} borderBottom="1px solid #eaeaea" py={10}>
              <Stack spacing={4}>
                <Flex alignItems="center">
                  <Avatar
                    name="John Doe"
                    src="/images/Avatar_1.png"
                    size="md"
                    marginRight={4}
                  />
                  <Box>
                    <Text fontWeight="bold">John Doe</Text>
                    <ReactStars
                      half={false}
                      value={4}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                    />

                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse cursus eros eget neque commodo, vel pharetra
                      quam ultrices. Donec at erat rhoncus, sollicitudin urna
                      malesuada, suscipit quam. Curabitur eget ipsum aliquam,
                      pulvinar elit id, fringilla lectus.
                    </Text>
                  </Box>
                </Flex>
                <Flex alignItems="center">
                  <Avatar
                    name="Jane Smith"
                    src="/images/Avatar.png"
                    size="md"
                    marginRight={4}
                  />
                  <Box>
                    <Text fontWeight="bold">Jane Smith</Text>
                    <ReactStars
                      half={false}
                      value={4}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <Text>
                      Duis et dui consectetur, pretium nibh eget, fermentum
                      nibh. Ut non efficitur sapien. Morbi eu est dignissim,
                      faucibus arcu in, lacinia mauris. Aliquam sit amet massa a
                      tellus dictum dapibus. Aliquam porttitor posuere enim eu
                      fringilla. Phasellus vitae ullamcorper ipsum.
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Flex>
          {showReviewForm && (
            <Box as="form" p={4} px={0}>
              <Text as="u">Write a Review</Text>
              <ReactStars
                half={false}
                value={4}
                count={5}
                size={24}
                activeColor="#ffd700"
                edit={true}
              />
              <FormControl id="comments" isRequired mt={4}>
                <FormLabel>Comments</FormLabel>
                <Textarea
                  placeholder="Enter your comments"
                  _placeholder={{
                    color: colorMode === 'light' ? 'gray.500' : 'green',
                  }}
                />
              </FormControl>
              <Button colorScheme="blue" mt={4}>
                Submit Review
              </Button>
            </Box>
          )}
        </Box>

        <Box w="20%">
          <Flex flexDirection="column">
            <Text
              fontSize="26px"
              lineHeight="32px"
              fontWeight={600}
              marginBottom="30px"
              color={colorMode === 'light' ? 'black' : '#3adc9f'}
            >
              Our Popular Products
            </Text>

            <FeaturedProductCard />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default SingleProduct