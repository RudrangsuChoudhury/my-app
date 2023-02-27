import { Box, Image, Text,useColorMode } from '@chakra-ui/react'
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link,useLocation } from 'react-router-dom';
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoGitCompareSharp } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import featuredimage from '../images/sony-headphone-featured.webp';
import featuredimage1 from '../images/sony-headphone-featured1.jpg';

const FeaturedProductCard = () => {
  const{colorMode} = useColorMode()
  let location = useLocation();
  console.log(location)

  return (
    <Box
      p={15}
      bgColor={colorMode === 'light' ? 'white' : '#087284'}
      borderRadius="10px"
      position="relative"
      overflow="hidden"
      className="product-card"
      height={['500px', '560px']}
    >
      <Box display="flex" flexDirection="column" rowGap={[2, 7]}>
        <Link
          to={`${
            location.pathname === '/'
              ? '/product/:id'
              : location.pathname == '/product/:id'
              ? '/product/:id'
              : ':id'
          }`}
        >
          <Box
            as={BsHeart}
            className="wishlist"
            boxSize={['10px', '20px']}
            color={colorMode === 'light' ? 'black' : 'rgb(225, 146, 228)'}
          />
        </Link>
        <Box
          className="featuredimages"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={featuredimage} className="featuredimage"></Image>
          <Image
            src={featuredimage1}
            className="featuredimage"
          ></Image>
        </Box>
        <Text
          color={colorMode === 'light' ? '#bf4800' : '#2bcfb0'}
          fontSize="20px"
          fontWeight="bold"
        >
          Sony
        </Text>
        <Text color="#1c1c1b" fontSize="15px" fontWeight="bold">
          Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110
        </Text>
        <ReactStars
          half={false}
          value={4}
          count={5}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />
        <Text>$16.99</Text>
      </Box>
      <Box
        position="absolute"
        top="10%"
        right="-28px"
        display="flex"
        flexDirection="column"
        rowGap={10}
        className="product-card_hover"
        transition=".3s"
      >
        <Link>
          <Box
            as={IoGitCompareSharp}
            boxSize={['10px', '20px']}
            color={colorMode === 'light' ? 'black' : 'rgb(50, 214, 241)'}
          />
        </Link>
        <Link>
          <Box
            as={MdOutlineRemoveRedEye}
            boxSize={['10px', '20px']}
            color={colorMode === 'light' ? 'black' : 'rgb(122, 226, 138)'}
          />
        </Link>
        <Link>
          <Box
            as={MdAddShoppingCart}
            boxSize={['10px', '20px']}
            color={colorMode === 'light' ? 'black' : 'rgb(222, 172, 77)'}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default FeaturedProductCard