import React from 'react';
import { useState,useEffect} from 'react';

import { Box, Grid, Text, Image, Flex, useColorMode } from '@chakra-ui/react';
import Banner from '../components/Banner';
import { BsTruck, BsGift, BsCreditCard } from 'react-icons/bs';
import categories from '../components/Categories';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { TbDiscount } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import FeaturedProductCard from '../components/FeaturedProductCard';
import SpecialProduct from '../components/SpecialProduct';
import FamousProduct from '../components/FamousProduct';
import ProductCard from '../components/ProductCard';
import background from '../images/background1.png';
import darkbackground from '../images/darkBackground.png';
import Shop from '../images/background-shop.jpg';
import PS5 from '../images/ps5.jpg';
import mac from "../images/13-inch-macbook-pro-m2-mock-feature-2.jpg"
import catbanner1 from  '../images/catbanner-02.jpg'
import catbanner2 from  '../images/catbanner-03.jpg'
import catbanner3 from  '../images/catbanner-04.jpg'
import brand1 from '../images/brand-01.png';
import brand2 from '../images/brand-02.png';
import brand3 from '../images/brand-03.png';
import brand4 from '../images/brand-04.png';
import brand5 from '../images/brand-05.png';

import brand6 from '../images/brand-06.png';

import Famous1 from '../images/smartwatch_famous.jpg';
import Famous2 from '../images/smartwatch_famous_dark.jpg';
import Famous3 from '../images/FamousLaptop.jpg';
import Famous4 from '../images/smartphone_famous.jpg';
import Famous5 from '../images/homepad_famous.jpg';
//importing prodcuts
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productsSlice';
import { fetchCart,addToCart } from '../reducers/cartSlice';
import { json } from 'react-router-dom';


let arr = [];
while (arr.length < 4) {
  let random_index = Math.floor(Math.random() * 12);
  if (!arr.includes(random_index)) {
    arr.push(random_index);
  }
}



const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const[discountData,setDiscountData] = useState({} )
   const url = new URL(
    "https://api.chec.io/v1/discounts/code_gnZO5k4EZvl7MN"
);

const headers = {
    "X-Authorization": "sk_50715b4ad7edd0ba4cf7f56d39b25c1d4450aba76925a",
    "Accept": "application/json",
    "Content-Type": "application/json",
};



async function fetchDiscountData() {
    const response = await fetch(url, {
        method: "GET",
        headers: headers,
    });
    const data = await response.json();
    setDiscountData(data)

}



  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
    fetchDiscountData()
  }, []);






  //handle add to cart



  return (
    <>
    <Box>

      <Box
        background={
          colorMode === 'light'
            ? `url(${background})`
            : `url(${darkbackground})`
        }
        backgroundSize="100% 500px"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h={500}
      />
      <Box
        display="flex"
        position="relative"
        p={{ base: 10, md: 20 }}
        background={`url(${Shop})`}
        backgroundSize="300px 300px"
        backgroundPosition="center"
        border="2rem solid #394544"
        h={['1000px', '774px', '774px', '774px']}
      >
        <Box position="relative">
          <Banner
            src={PS5}
            h={{ base: '300px', md: '600px' }}
            w={{ base: '300px', md: '500px' }}
            p={{ base: '0px 5px 0px 5px', md: '17px 30px 17px 30px' }}
            textbgGradient={'linear(to-r, #0A3499,#164E05)'}
            top={{ base: '28%', md: '85%' }}
            left={{ base: '20%', md: '10%' }}
            buttonbgGradient={'linear(to-r, #28A2AA, #0C1D70)'}
            buttontop={{ base: '31%', md: '97%' }}
            buttonleft={{ base: '42%', md: '40%' }}
            fontSize={{ base: '9px', md: '1.2rem' }}
            subheadfontsize={{ base: '10px', md: '20px' }}
            subheadtop={{ base: '30%', md: '92%' }}
            subheadleft={{ base: '49%', md: '50%' }}
            heading={'Experience Next-Level Gaming with the PS5'}
            subHeading={'From ₹ 54,999'}
            subheadcolor={'#560A40'}
            buttoncolor="#F8D408"
            buttonWidth={{ base: '1rem', md: '6rem' }}
            buttonHeight={{ base: '1.5rem', md: '2.5rem' }}
            buttonFontSize={{ base: '9px', md: '1rem' }}
            buttonborderRadius={{ base: '10px', md: '25px' }}
            productid={"prod_0YnEoqj4rO5e7P"}
          />
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(2, 2fr)', md: 'repeat(2, 2fr)' }}
          rowGap={{ base: 5, md: 30 }}
          columnGap={{ base: 5, md: 30 }}
          position="absolute"
          top={{ base: '40%', md: '11%' }}
          left={{ base: '7%', md: '45%' }}
        >
          <Banner
            src={mac}
            h={{ base: '200px', md: '300px' }}
            w={{ base: '150px', md: '350px' }}
            py={{ base: '5px', md: '1px' }}
            textbgGradient={'linear(to-r, #5AC8B1,#8183D2)'}
            top={{ base: '5%', md: '25px' }}
            left={{ base: '24%', md: '24%' }}
            buttontop={'43%'}
            buttonleft={'18%'}
            fontSize={['10px', '20px']}
            subheadfontsize={'10px'}
            subheadtop={'40%'}
            subheadleft={'24%'}
            heading={'Apple 2022 MacBook Pro Laptop'}
            subheadcolor="black"
            subHeading={'From  ₹ 1,39,990'}
            buttoncolor="#F8D408"
            buttonbg={'green'}
            subheadletterSpacing={'3px'}
            buttonWidth={{ base: '1rem', md: '6rem' }}
            buttonHeight={{ base: '1.5rem', md: '2.5rem' }}
            transform={{
              base: 'translateX(-50%)',
              md: 'translateX(-50%,-50%)',
            }}
            buttonborderRadius={{ base: '10px', md: '25px' }}
            buttonFontSize={{ base: '9px', md: '1rem' }}
            productid={"prod_A12Jwr94KMlPjn"}
          />
          <Banner
            src={catbanner1}
            h={{ base: '200px', md: '300px' }}
            w={{ base: '150px', md: '350px' }}
            py="10px"
            textbgGradient={'linear(to-r, #C160BB,#4451CA)'}
            top={{ base: '10%', md: '10px' }}
            left={'75%'}
            buttontop={['35%', '46%']}
            buttonleft={'72%'}
            fontSize={['15px', '17px']}
            subheadfontsize={'12px'}
            subheadtop={'45%'}
            subheadleft={'76%'}
            heading={'Apple Watch Series 8'}
            subheadcolor="blackAlpha.700"
            subHeading={'From  ₹41,990'}
            buttonbg={'green'}
            buttoncolor="#F8D408"
            subheadletterSpacing={'0px'}
            buttonWidth={{ base: '1rem', md: '4rem' }}
            buttonHeight={{ base: '1.5rem', md: '1.5rem' }}
            transform={{
              base: 'translateX(-50%)',
              md: 'translateX(-50%,-50%)',
            }}
            buttonborderRadius={{ base: '10px', md: '25px' }}
            buttonFontSize={{ base: '9px', md: '10px' }}
            productid={"prod_8XO3wpenrWoYAz"}
          />
          <Banner
            src={catbanner2}
            h={{ base: '200px', md: '260px' }}
            w={{ base: '150px', md: '350px' }}
            py="1px"
            textbgGradient={'linear(to-r, #5BBC54,#CF77CD)'}
            top={'63%'}
            left={'15%'}
            buttontop={'80%'}
            buttonleft={'8%'}
            fontSize={['15px', '2xl']}
            subheadfontsize={['10px', '14px']}
            subheadtop={'75%'}
            subheadleft={'15%'}
            heading={`Buy IPad Air`}
            subheadcolor="blackAlpha.700"
            subHeading={'From ₹30,900'}
            buttonbg={'green'}
            buttoncolor="#F8D408"
            buttonWidth={{ base: '1rem', md: '6rem' }}
            buttonHeight={{ base: '1.5rem', md: '2.5rem' }}
            subheadletterSpacing={'3px'}
            transform={{
              base: 'translateX(-50%)',
              md: 'translateX(-50%,-50%)',
            }}
            buttonborderRadius={{ base: '10px', md: '25px' }}
            buttonFontSize={{ base: '9px', md: '1rem' }}
            productid={"prod_4WJvlKR2495bYV"}
          />
          <Banner
            src={catbanner3}
            h={{ base: '200px', md: '260px' }}
            w={{ base: '150px', md: '350px' }}
            py="1px"
            textbgGradient={'linear(to-r, #4A66C1,#3ECFC8)'}
            top={'62%'}
            left={'70%'}
            buttontop={'80%'}
            buttonleft={'65%'}
            fontSize={['15px', '2xl']}
            subheadfontsize={['10px', '20px']}
            subheadtop={'75%'}
            subheadleft={['70%', '70%']}
            heading={'Airpods Max'}
            subheadcolor="blackAlpha.700"
            subHeading={'From ₹59,169'}
            buttonbg={'green'}
            buttoncolor="#F8D408"
            buttonWidth={{ base: '1rem', md: '6rem' }}
            buttonHeight={{ base: '1.5rem', md: '2.5rem' }}
            subheadletterSpacing={'0px'}
            transform={{
              base: 'translateX(-50%)',
              md: 'translateX(-50%,-50%)',
            }}
            buttonborderRadius={{ base: '10px', md: '25px' }}
            buttonFontSize={{ base: '9px', md: '1rem' }}
            productid={"prod_aZWNoy37xVl80J"}
          />
        </Grid>
      </Box>
      <Box
        bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={20}
      >
        <Flex
          align="center"
          bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
          columnGap={[0, 10]}
          mb={['10px', '40px']}
          justifyContent="center"
          width="1200px"
          flexDirection={{ base: 'column', md: 'row' }}
          rowGap={{ base: '30px', md: '0px' }}
        >
          <Box
            display="flex"
            fontFamily="Fira Sans"
            columnGap={5}
            alignItems="center"
          >
            <BsTruck
              size="40"
              color={colorMode === 'light' ? 'black' : '#936666'}
            />
            <Box>
              <Text
                fontSize="16px"
                fontWeight="bold"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Free shipping{' '}
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                For all Products 😃😃
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            columnGap={5}
            alignItems="center"
            fontFamily="Fira Sans"
          >
            <BsGift
              size="40"
              color={colorMode === 'light' ? 'black' : '#936666'}
            />
            <Box>
              <Text
                fontSize="16px"
                fontWeight="bold"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Daily surprise offers
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Save upto 50% 🤑
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            columnGap={5}
            alignItems="center"
            fontFamily="Fira Sans"
          >
            <TfiHeadphoneAlt
              size="40"
              color={colorMode === 'light' ? 'black' : '#936666'}
            />
            <Box>
              <Text
                fontSize="16px"
                fontWeight="bold"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Shop 24/7
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Shop with an expert{' '}
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            columnGap={5}
            alignItems="center"
            fontFamily="Fira Sans"
          >
            <TbDiscount
              size="40"
              color={colorMode === 'light' ? 'black' : '#936666'}
            />
            <Box>
              <Text
                fontSize="16px"
                fontWeight="bold"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Affordable prices
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Get Factory Default price
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            columnGap={5}
            alignItems="center"
            fontFamily="Fira Sans"
          >
            <BsCreditCard
              size={40}
              color={colorMode === 'light' ? 'black' : '#936666'}
            />
            <Box>
              <Text
                fontSize="16px"
                fontWeight="bold"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                Secure payment
              </Text>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color={colorMode === 'light' ? 'black' : '#3adc9f'}
              >
                100% protected payment
              </Text>
            </Box>
          </Box>
        </Flex>
        <Grid
          m={30}
          fontFamily="Fira Sans"
          templateColumns={['repeat(2,5fr)', 'repeat(5, 2fr)']}
          bgColor={colorMode === 'light' ? 'white' : '#2B5686'}
          boxShadow="0px 0px 9px -4px #484E51"
          w={['350px', '1200px']}
        >
          {/* Iterate through the categories and render each one */}
          {categories.map((category, index) => {
            let borderBottom;
            let borderLeft;
            let borderRight;
            let borderTop =
              index > 4
                ? `1px solid ${colorMode === 'light' ? '#ededed' : 'red'}`
                : colorMode === 'light'
                ? '1px solid transparent'
                : '1px solid red';
            if (index >= 5 && index <= 9) {
              borderBottom = `${colorMode === 'light' ? '0px' : '1px'} solid ${
                colorMode === 'light' ? '#ededed' : 'red'
              }`;
            }
            if (index === 0 || index === 5) {
              borderLeft = `1px solid ${
                colorMode === 'light' ? 'transparent' : 'red'
              }`;
            }
            borderRight =
              colorMode === 'light' && (index === 4 || index === 9)
                ? '0px'
                : `1px solid ${colorMode === 'light' ? '#ededed' : 'red'}`;
            return (
              <Flex
                align="center"
                justify="center"
                flexDirection="column"
                rowGap={2}
                borderTop={borderTop}
                borderRight={borderRight}
                borderBottom={borderBottom}
                borderLeft={borderLeft}
              >
                <Image
                  src={category.src}
                  w={150}
                  h={150}
                  borderRadius={20}
                  mt={3}
                />
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Text
                    fontWeight="bold"
                    fontSize={['0.8rem', '1xl']}
                    color={colorMode === 'light' ? 'white' : '#3adc9f'}
                  >
                    {category.name}
                  </Text>
                  <Text color={colorMode === 'light' ? 'white' : '#3adc9f'}>
                    {category.items} Items
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </Box>
      <Flex
        flexDirection="column"
        bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
        align="center"
      >
        <Text
          ml={50}
          fontSize="26px"
          lineHeight="32px"
          fontWeight={600}
          marginBottom="30px"
          color={colorMode === 'light' ? 'black' : '#3adc9f'}
        >
          Featured Collection
        </Text>
        {products.length > 0 && (
        <Box
          display={['grid', 'flex']}
          alignItems="center"
          justifyContent="center"
          bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
          columnGap={20}
          width={['350px', '1200px']}
          gridTemplateColumns={['repeat(2,1fr)', 'repeat(4,1fr)']}
          gridGap={[5, 20]}
        >
          <FeaturedProductCard image={products[arr[0]].image.url}
          image1={products[arr[0]].assets[1].url}
          name={products[arr[0]].name}
          rating={products[arr[0]].attributes[1].value}
          brand={products[arr[0]].name.split(" ")[0].toUpperCase()}
          price={products[arr[0]].price.formatted_with_symbol}
          link={products[arr[0]].id}

        />
          <FeaturedProductCard image={products[arr[1]].image.url}
          image1={products[arr[1]].assets[1].url}
          name={products[arr[1]].name}
          rating={products[arr[1]].attributes[1].value}
            brand={products[arr[1]].name.split(" ")[0].toUpperCase()}
            price={products[arr[1]].price.formatted_with_symbol}
            link={products[arr[1]].id}
            />
          <FeaturedProductCard image={products[arr[2]].image.url}
          image1={products[arr[2]].assets[1].url}
          name={products[arr[2]].name}
          rating={products[arr[2]].attributes[1].value}
            brand={products[arr[2]].name.split(" ")[0].toUpperCase()}
             price={products[arr[2]].price.formatted_with_symbol}
             link={products[arr[2]].id}
              />
          <FeaturedProductCard image={products[arr[3]].image.url}
          image1={products[arr[3]].assets[1].url}
          name={products[arr[3]].name}
          rating={products[arr[3]].attributes[1].value}
            brand={products[arr[3]].name.split(" ")[0].toUpperCase()}
            price={products[arr[3]].price.formatted_with_symbol}
            link={products[arr[3]].id}
           />
        </Box>
        )}
      </Flex>
      {/* Famous Product */}
      <Flex
        bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
        pt={20}
        justify="center"
      >
        {products.length > 0 && (
        <Flex
          width={['400px', '1200px']}
          align="center"
          justify="center"
          columnGap={20}
          direction={['row', 'row']}
          wrap={['wrap', 'nowrap']}
          rowGap={['10px', 0]}
        >
          <FamousProduct
            src={
             products[9].image.url
            }
            id={products[9].id}
            width={150}
            justify={'center'}
            align={'end'}
            title={'Big Screen'}
            name={'Apple Watch Series 8'}
            price={'41,990'}
            top={'5%'}
            left={['30%', '15%']}
            rowGap={2}
            fontSize="15px"

          />
          <FamousProduct
            src={products[1].image.url}
            id={products[1].id}
            width={180}
            justify={'center'}
            align={'end'}
            title={'300Hz IPS FHD Display 15.6"'}
            name={'ASUS ROG Strix G15 (2022)'}
            price={'1,24,990'}
            top={'0px'}
            left={['20%', '10%']}
            mt={['30px', '10px']}
            rowGap={2}
            fontSize="15px"
          />
          <FamousProduct
          src={products[3].image.url}
            id={products[3].id}
            width={140}
            justify={'center'}
            align={'center'}
            title={'Super Retina XDR display with ProMotion'}
            name={'iPhone 13 Pro'}
            price={'1,42,999'}
            top={['0px', '10px']}
            left={['25%', '5%']}
            mt={['10px', 0]}
            rowGap={1}
            fontSize="10px"
            imageMt={10}
          />
          <FamousProduct
               src={products[8].image.url}
            id={products[8].id}
            width={120}
            justify={'center'}
            align={'end'}
            title={'Surprising sound for its size'}
            name={'HomePod mini'}
            price={'8,499'}
            top={'0px'}
            left={['25%', '10%']}
            mt={['30px', '10px']}
            rowGap={[2, 0]}
            fontSize="12px"
            imageMb={10}
          />
        </Flex>)
}
      </Flex>
      {/* Famous Product ends */}
      {/* Special Products */}
      <Flex
        align="center"
        justify="center"
        bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
      >
        <Box
          display="flex"
          pt="50px"
          bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
          flexDirection="column"
          align="center"
          pb={20}
          width={1200}
        >
          <Text
            ml={50}
            fontSize="26px"
            lineHeight="32px"
            fontWeight={600}
            marginBottom="30px"
            color={colorMode === 'light' ? 'black' : '#25c4c4'}
          >
            Special Products
          </Text>
          {products.length > 0 && (
          <Flex
            align="center"
            justify="space-between"
            direction={['column', 'row']}
            rowGap={['10px', '0px']}
          >
            <SpecialProduct product={products[6]} discountData={discountData}
            rating={products[6].attributes[1].value}/>
            <SpecialProduct product={products[8]} discountData={discountData}
             rating={products[8].attributes[1].value}/>
            <SpecialProduct product={products[10]} discountData={discountData}
             rating={products[10].attributes[1].value}/>
          </Flex>
          )}
        </Box>
      </Flex>

      <Box
        bgColor={colorMode === 'light' ? 'gray.300' : '#9661ae'}
        pt={20}
        display="flex"
        justifyContent="center"
      >
        <Box
          bgColor={colorMode === 'light' ? 'white' : '#0b315b'}
          boxShadow="0px 0px 9px -4px #484E51"
          color="black"
          w={['400px', '1220px']}
          zIndex={0}
        >
          <Marquee gradient={colorMode === 'light' ? true : false} speed={100}>
            <Box display={'flex'} columnGap={[10, 20]}>
              <Image src={brand1} boxSize={['40px', '150px']} />
              <Image src={brand2} boxSize={['40px', '150px']} />
              <Image src={brand3} boxSize={['40px', '150px']} />
              <Image src={brand4} boxSize={['40px', '150px']} />
              <Image src={brand5} boxSize={['40px', '150px']} />

              <Image src={brand6} boxSize={['40px', '150px']} />

            </Box>
          </Marquee>
        </Box>
      </Box>
      <Flex
        flexDirection="column"
        bgColor={colorMode === 'light' ? 'gray.300' : '#9661ae'}
        align="center"
        pt={20}
      >
        <Text
          ml={50}
          fontSize="26px"
          lineHeight="32px"
          fontWeight={600}
          marginBottom="30px"
          color={colorMode === 'light' ? 'black' : '#2b247d'}
        >
          Our Latest Blogs
        </Text>
        <Box
          display={['grid', 'flex']}
          gridTemplateColumns={'1fr 1fr'}
          alignItems="center"
          justifyContent="center"
          bgColor={colorMode === 'light' ? '#cbd5e0' : '#9661ae'}
          columnGap={['0px', '55px']}
          p={['0px 0px 0px 50px', '30px']}
          rowGap={['20px', '0px']}
          flexDirection={['column', 'row']}
          width={['400px', 'auto']}
          gridColumnGap={['20px', 'auto']}
          mr={['50px', '0px']}
          mb={['50px', '0px']}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Box>
      </Flex>
    </Box>
          </>
  );
};
export default Home;
