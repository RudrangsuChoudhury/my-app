import {
  Flex,
  Image,
  Text,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';
import React from 'react';
import { Link } from 'react-router-dom';
import specialproductimage from '../images/samsung-galaxy-s10e.jpeg';
const SpecialProduct = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      w={350}
      p="10px"
      borderRadius="10px"
      bgColor={colorMode === 'light' ? 'white' : '#0A6C7C'}
      h={400}
      justify="space-between"
    >
      <Image src={specialproductimage} w={130} />
      <Flex
        align="center"
        justify="flex-start"
        flexDirection="column"
        rowGap={5}
      >
        <Text
          fontSize={20}
          fontWeight="bold"
          bgGradient={
            colorMode === 'light'
              ? 'linear(to-r,black,black)'
              : 'linear(90deg, rgb(216, 209, 147) 23%, rgba(45,253,135,1) 100%)'
          }
          bgClip="text"
        >
          Samsung
        </Text>
        <Text
          bgGradient={
            colorMode === 'light'
              ? 'linear(to-r,black,black)'
              : 'linear(90deg, rgb(216, 209, 147) 23%, rgba(45,253,135,1) 100%)'
          }
          bgClip="text"
        >
          Samsung Galaxy S10e
        </Text>
        <ReactStars
          value={3}
          count={5}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />
        <Text color={colorMode === 'light' ? 'black' : 'yellow.500'}>
          $114.99 &nbsp;<s>$267.29</s>
        </Text>

        {/* Discount */}
        <Flex align="center" columnGap={5}>
          <Text
            fontSize={15}
            bgGradient={
              colorMode === 'light'
                ? 'black'
                : 'linear(90deg, rgb(216, 209, 147) 23%, rgba(45,253,135,1) 100%)'
            }
            bgClip="text"
          >
            5 days
          </Text>
          <Flex flexDirection="row" align="center" columnGap={2}>
            <Circle bg="#fc353c" p={1} size="25px" color="white">
              1
            </Circle>
            :
            <Circle bg="#fc353c" p={1} size="25px" color="white">
              1
            </Circle>
            :
            <Circle bg="#fc353c" p={1} size="25px" color="white">
              1
            </Circle>
          </Flex>
        </Flex>
        <CircularProgress value={25} size="95px" color="#CF471D">
          <CircularProgressLabel
            fontSize={12}
            color={colorMode === 'light' ? 'black' : '#F38A8A'}
            fontWeight="bold"
          >
            Only 5 left
            <br /> hurry up
          </CircularProgressLabel>
        </CircularProgress>
        <Button
          size="lg"
          colorScheme="green"
          _hover={{ bg: '#6bd5cb' }}
          _active={{ transform: 'scale(0.95)' }}
          borderRadius={20}
        >
          <Link>
            <Text color={colorMode === 'light' ? 'black' : '#6446cc'}>
              Add to Cart
            </Text>
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
};
export default SpecialProduct;
