
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Image, Text,useColorMode } from '@chakra-ui/react'
const FamousProduct = (props) => {
   const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      position="relative"
      w={550}
      h={300}
      align={props.align}
      justify={props.justify}
      p={5}
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      borderRadius={10}
      
    >
      <Link>
        <Image
          src={'images/' + props.src}
          width={props.width}

          mt={props.imageMt}
          mb={props.imageMb}
        />
        <Box
          position="absolute"
          top={props.top}
          left={props.left}
          display="flex"
          flexDirection="column"
          rowGap={props.rowGap}
          mt={props.mt}
          alignItems="center"
        >
          <Text
            fontSize={props.fontSize}
            lineHeight="30px"
            fontWeight="bold"
            color={colorMode === 'light' ? 'green' : '#D1A763'}
            textTransform="uppercase"
          >
            {props.title}
          </Text>
          <Text
            fontSize="1xl"
            fontWeight="bold"
            bgGradient={
              colorMode === 'dark'
                ? 'radial-gradient(circle, rgba(131,228,163,1) 0%, rgba(146,96,212,1) 16%, rgba(0,212,255,1) 100%)'
                : 'linear(to-l,blue, blue)'
            }
            bgClip="text"

          >
            {props.name}
            <br /> {props.name1}
          </Text>
          <Text
            fontSize="15px"
            fontWeight="bold"
            color="gray.500"
            bgGradient={
              colorMode === 'dark'
                ? 'radial-gradient(circle, rgba(63,251,122,1) 0%, rgba(70,129,252,1) 100%)'
                : 'linear(to-l,red, red)'
            }
            bgClip="text"
          >
            From ${props.price}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}

export default FamousProduct
