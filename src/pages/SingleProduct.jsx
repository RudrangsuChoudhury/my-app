import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { Link,useNavigate,useLocation,useParams} from 'react-router-dom';
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
  useToast,
  color,
  AvatarBadge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,

} from '@chakra-ui/react';
import {AiOutlineUser} from 'react-icons/ai'
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import FeaturedProductCard from '../components/FeaturedProductCard';
import ReactImageZoom from 'react-image-zoom';
import RandomImage from '../images/Random_product_1.jpg';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { fetchProducts, getIsFetching } from '../reducers/productsSlice';
import { addToCart } from '../reducers/cartSlice';
import { addToCompare } from '../reducers/compareSlice';
import { addToWishlist } from '../reducers/wishlistSlice';
import { addToReview,fetchReview } from '../reducers/reviewSlice';

const SingleProduct = () => {
    const { colorMode } = useColorMode();
     const [hasPurchased, setHasPurchased] = useState(false);
     const[showReviewForm, setShowReviewForm] = useState(false);


     //image zoom
  const product = useSelector((state) => state.products.products);
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchReview());

  }, []);
  const { id } = useParams();


  const productDetails = product.find((product) => product.id === id);
   const [mainImage, setMainImage] = useState([productDetails.assets[0].url]);



  const isProductsFetching = useSelector(getIsFetching);


const props = {
  width: 400,
  height: 500,
  zoomWidth: 500,
  img:  mainImage,
};
const relatedProductIds = productDetails.related_products.map((product) => product.id);
const relatedProducts = product.filter(product => relatedProductIds.includes(product.id));


//cart,wishlist,compare
 const [isAddingToCart, setIsAddingToCart] = useState(false);


  const cart=useSelector(state=>state.cart)



 const toast = useToast();
  const [currentQuantity, setCurrentQuantity] = useState(0);
  useEffect(() => {
    if(!cart.line_items) return;
    // Set the current quantity of this product in the cart
    const lineItem = cart.line_items.find((item) => item.product_id === id);
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
      await dispatch(addToCart(id, 1));
      setCurrentQuantity(currentQuantity + 1);
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
    await dispatch(addToCompare(id))

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
    await dispatch(addToWishlist(id))

}


const review=useSelector(state=>state.review)
const [review1,setReview1]=useState('')


 const[main_review,setMain_review]=useState('')
const [reviewProduct,setReviewProduct]=useState([])
useEffect(() => {
  // if (review.length > 0) {

    const filteredReview = review.filter((review) => review.id === id);

    setReviewProduct(filteredReview);
    if (filteredReview.length > 0) {
      setMain_review(filteredReview[0].attributes[5].value);
    }
  // }
}, [id, review]);

const handleAddReview=async(review2,id1)=>{






  await dispatch(addToReview(id1,review2))
  setShowReviewForm(false)




  // const review3=reviewProduct[0].attributes[5].value

  // setMain_review(review3)

}

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
        <Flex columnGap="30px" align="start" p="20px" bg={colorMode==='light'?'white':'#4D4D58'}>
          <Flex width="30%" direction="column" borderRadius="10px" rowGap={5}>
            <ReactImageZoom {...props} />
            <Grid gap="15px" templateColumns="repeat(2, 1fr)">
            {productDetails.assets.map((asset) => (
              <Box
                p="10px"
                boxSize="100%"
                border="1px solid rgba(0,0,0,0.25)"
                bg="white"
                onClick={() => setMainImage(asset.url)}
                {...(asset.url === mainImage && {
                  border: '5px solid #3adc9f',
                })
                }
              >
                <Image src={asset.url} />
              </Box>
            ))}
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
              {productDetails.name}
            </Heading>
            <Flex
              rowGap="10px"
              direction="column"
              my="10px"
              borderBottom="1px solid rgba(0,0,0,0.1)"
              py="10px"
            >
              <Text fontSize="16px" fontWeight="600" color='black'>
                {productDetails.price.formatted_with_symbol}
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
                  Brand :
                </Heading>
                <Text fontSize="15px" color="#777777">
                  {productDetails.name.split(" ")[0].toUpperCase()}
                </Text>
              </Flex>
              <Flex columnGap="10px">
                <Heading as="h2" fontSize="17px" color="#1c1c1b">
                  Category :
                </Heading>
                <Text fontSize="15px" color="#777777">
                    {productDetails.categories[0].name}
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

              <Button colorScheme="orange" leftIcon={<BsFillCartPlusFill />}
              onClick={()=>handleAddToCart()}>
                Add to Cart
              </Button>
            </Wrap>
            <Wrap spacing={10} mt={10} pt={10}>
              <Button

                display="flex"
                alignItems="center"
                color="#6b4ed5"
                fontSize="18px"
                bg="teal.400"
                p="10px"
                borderRadius="10px"
                columnGap="10px"
                onClick={()=>handleaddtoWishlist()}
                _hover={{ bg: "blue", color: "white" }}
              >
                <VscGitCompare color="yellow" />
                Add to Wishlist
              </Button>
              <Button

                display="flex"
                alignItems="center"
                color="#6b4ed5"
                fontSize="18px"
                bg="teal.400"
                p="10px"
                borderRadius="10px"
                columnGap="10px"
                _hover={{ bg: "blue", color: "white" }}
                onClick={()=>handleaddtoCompare()}
              >
                <FaGrinHearts color="black" />
                Add to Compare
              </Button>
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
               id="review"
          >
            Description
          </Heading>
          <Box
            bg={colorMode === 'light' ? 'white' : 'gray.900'}
            border="none"
            borderRadius="10px"
            p="50px"
          >
            <Text dangerouslySetInnerHTML={{__html: productDetails.description}}/>
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

            </Text>
            <Flex
              alignSelf="start"
              justifyContent="space-between"
              w={'100%'}
              mb={10}
              py={10}

            >

              <Button
                colorScheme="blue"
                onClick={() => setShowReviewForm(!showReviewForm)}

              >
                Write a review
              </Button>


            </Flex>
          </Flex>
          {showReviewForm && (
            <Box as="form" p={4} px={0}>

              <FormControl id="comments" isRequired mt={4}>
                <FormLabel>Comments</FormLabel>
                <Textarea
                  placeholder="Enter your comments"
                  _placeholder={{
                    color: colorMode === 'light' ? 'gray.500' : 'green',
                  }}
                  onChange={(e) => setReview1(e.target.value)}
                />
              </FormControl>
              <Button colorScheme="blue" mt={4} onClick={(e)=>handleAddReview(review1,id)}>
                Submit Review
              </Button>
            </Box>
          )}
          {reviewProduct.length > 0 ? (

          <Flex justifyContent="space-between">







                <Card w='10%' display='flex' alignItems='center'>
  <CardHeader>
<Flex align='center' direction='column' rowGap='10'>
            <Heading as="h6" fontSize="20px">
                 User
                </Heading>
   <Avatar>
              <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
            </Flex>
  </CardHeader>

  <CardBody >



        <Text>

                 {main_review}

                </Text>




  </CardBody>
</Card>


          </Flex>
          ) : (
            <Text>No Reviews</Text>
          )}

        </Box>
        <Box w="20%">
          <Flex columnGap='20px' direction='column'>
            <Text
              fontSize="26px"
              lineHeight="32px"
              fontWeight={600}
              marginBottom="30px"
              color={colorMode === 'light' ? 'black' : '#3adc9f'}
            >
            Related Products
            </Text>
            <Flex columnGap='20px' direction='row'>
            {relatedProducts.map((product) => (
            <FeaturedProductCard image={product.image.url}
            image1={product.assets[1].url}
            name={product.name}
            brand= {product.name.split(" ")[0].toUpperCase()}
                 rating={product.attributes[1].value}
            price={product.price.formatted_with_symbol}
            link={product.id}
            key={product.id}/>
            ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
export default SingleProduct