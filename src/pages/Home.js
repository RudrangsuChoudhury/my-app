import React from 'react';
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
import PS5 from '../images/PS5.jpg';
import mac from "../images/13-inch-macbook-pro-m2-mock-feature-2.jpg"
import catbanner1 from  '../images/catbanner-02.jpg'
import catbanner2 from  '../images/catbanner-03.jpg'
import catbanner3 from  '../images/catbanner-04.jpg'

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
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
            h={{ base: '300px', md: '550px' }}
            w={{ base: '300px', md: '500px' }}
            p={{ base: '0px 5px 0px 5px', md: '17px 30px 17px 30px' }}
            textbgGradient={'linear(to-r, #0A3499,#164E05)'}
            top={{ base: '28%', md: '80%' }}
            left={{ base: '20%', md: '10%' }}
            buttonbgGradient={'linear(to-r, #28A2AA, #0C1D70)'}
            buttontop={{ base: '31%', md: '92%' }}
            buttonleft={{ base: '42%', md: '40%' }}
            fontSize={{ base: '9px', md: '1.2rem' }}
            subheadfontsize={{ base: '10px', md: '20px' }}
            subheadtop={{ base: '30%', md: '87%' }}
            subheadleft={{ base: '49%', md: '50%' }}
            heading={'Experience Next-Level Gaming with the PS5'}
            subHeading={'From $499'}
            subheadcolor={'#560A40'}
            buttoncolor="#F8D408"
            buttonWidth={{ base: '1rem', md: '6rem' }}
            buttonHeight={{ base: '1.5rem', md: '2.5rem' }}
            buttonFontSize={{ base: '9px', md: '1rem' }}
            buttonborderRadius={{ base: '10px', md: '25px' }}
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
            h={{ base: '200px', md: '260px' }}
            w={{ base: '150px', md: '350px' }}
            py={{ base: '5px', md: '1px' }}
            textbgGradient={'linear(to-r, #5AC8B1,#8183D2)'}
            top={{ base: '5%', md: '20px' }}
            left={{ base: '24%', md: '24%' }}
            buttontop={'40%'}
            buttonleft={'18%'}
            fontSize={['10px', '2xl']}
            subheadfontsize={'10px'}
            subheadtop={'38%'}
            subheadleft={'24%'}
            heading={'Introducing Apple M2 laptops'}
            subheadcolor="white"
            subHeading={'From $1040'}
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
          />
          <Banner
            src={catbanner1}
            h={{ base: '200px', md: '260px' }}
            w={{ base: '150px', md: '350px' }}
            py="1px"
            textbgGradient={'linear(to-r, #C160BB,#4451CA)'}
            top={{ base: '10%', md: '70px' }}
            left={'70%'}
            buttontop={['35%', '32%']}
            buttonleft={'65%'}
            fontSize={['15px', '2xl']}
            subheadfontsize={'12px'}
            subheadtop={'27%'}
            subheadleft={'69%'}
            heading={'Smartwatch 7'}
            subheadcolor="blackAlpha.700"
            subHeading={'Shop the latest smartwatches of your choice'}
            buttonbg={'green'}
            buttoncolor="#F8D408"
            subheadletterSpacing={'0px'}
            buttonWidth={{ base: '1rem', md: '6rem' }}
            buttonHeight={{ base: '1.5rem', md: '2.5rem' }}
            transform={{
              base: 'translateX(-50%)',
              md: 'translateX(-50%,-50%)',
            }}
            buttonborderRadius={{ base: '10px', md: '25px' }}
            buttonFontSize={{ base: '9px', md: '1rem' }}
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
            subHeading={'From $599'}
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
            subheadfontsize={['10px', '12px']}
            subheadtop={'75%'}
            subheadleft={['70%', '68%']}
            heading={'Airpods Max'}
            subheadcolor="blackAlpha.700"
            subHeading={'High-fidelity audio meets high-end<br>design'}
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
                  src={`../images/${category.src}`}
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
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
        </Box>
      </Flex>
      {/* Famous Product */}
      <Flex
        bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
        pt={20}
        justify="center"
      >
        <Flex width={["400px","1200px"]} align="center" justify="center" columnGap={20}
        direction={['row','row']} wrap={['wrap','nowrap']}
        rowGap={['10px',0]}>
          <FamousProduct
            src={
              colorMode === 'light'
                ? 'smartwatch_famous.jpg'
                : 'smartwatch_famous_dark.jpg'
            }
            width={150}
            justify={'center'}
            align={'end'}
            title={'Big Screen'}
            name={'Smart Watch Series 7'}
            price={'399'}
            top={'5%'}
            left={['30%','15%']}
            rowGap={2}
            fontSize="15px"
          />
          <FamousProduct
            src={'FamousLaptop.jpg'}
            width={180}
            justify={'center'}
            align={'end'}
            title={'300Hz IPS FHD Display 15.6"'}
            name={'ASUS ROG Strix G15 (2022)'}
            price={'1099'}
            top={'0px'}
            left={['20%','10%']}
            mt={['30px','10px']}
            rowGap={2}
            fontSize="15px"
          />
          <FamousProduct
            src={'smartphone_famous.jpg'}
            width={100}
            justify={'center'}
            align={'center'}
            title={'Super Retina XDR display with ProMotion'}
            name={'iPhone 13 Pro'}
            price={'899'}
            top={['0px','10px']}
            left={['25%','5%']}
            mt={['10px',0]}
            rowGap={1}
            fontSize="10px"
            imageMt={10}
          />
          <FamousProduct
            src={'homepad_famous.jpg'}
            width={120}
            justify={'center'}
            align={'end'}
            title={'Surprising sound for its size'}
            name={'HomePod mini'}
            price={'99'}
            top={'0px'}
            left={['25%','10%']}
            mt={['30px','10px']}
            rowGap={[2,0]}
            fontSize="12px"
            imageMb={10}
          />
        </Flex>
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
          <Flex align="center" justify="space-between"
          direction={['column','row']}
          rowGap={['10px','0px']}>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />

          </Flex>
        </Box>
      </Flex>
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
          Our Popular Products
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor={colorMode === 'light' ? 'gray.300' : '#2B5686'}
          columnGap={20}
          width={1200}
        >
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
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
          w={['400px','1220px']}
        >
          <Marquee gradient={colorMode === 'light' ? true : false}>
            <Box display={'flex'} columnGap={[10,20]}>
              <Image src="images/brand-01.png" boxSize={['40px','150px']} />
              <Image src="images/brand-02.png" boxSize={['40px','150px']} />
              <Image src="images/brand-03.png" boxSize={['40px','150px']} />
              <Image src="images/brand-04.png" boxSize={['40px','150px']} />
              <Image src="images/brand-05.png" boxSize={['40px','150px']} />
              <Image src="images/brand-06.png" boxSize={['40px','150px']} />
              <Image src="images/brand-07.png" boxSize={['40px','150px']} />
              <Image src="images/brand-08.png" boxSize={['40px','150px']} />
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
          display={["grid","flex"]}
          gridTemplateColumns={'1fr 1fr'}
          alignItems="center"
          justifyContent="center"
          bgColor={colorMode === 'light' ? '#cbd5e0' : '#9661ae'}
          columnGap={["0px","55px"]}
          p={['0px 0px 0px 50px' ,"30px"]}
          rowGap={["20px","0px"]}
          flexDirection={['column','row']}
          width={["400px",'auto']}
          gridColumnGap={['20px','auto']}
          mr={['50px','0px']}
          mb={['50px','0px']}


        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Box>
      </Flex>
    </Box>
  );
};
export default Home;
