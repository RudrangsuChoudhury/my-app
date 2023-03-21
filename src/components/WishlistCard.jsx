import React from 'react'
import { Flex, useColorMode, Image, Text, Box,Button } from '@chakra-ui/react'
import { RxCross1 } from 'react-icons/rx'
import {BsFillCartPlusFill} from 'react-icons/bs'


const WishlistCard = (props) => {
  const { colorMode } = useColorMode()
  return (
    <Flex direction="column" w="300px" h='50%' p='20px' bg='white' borderRadius='20px'>
          <Flex
            px="20px"
            py="5px"
            bgGradient={
              colorMode === 'light'
                ? 'linear(to-r,white,white)'
                : 'linear(90deg, rgb(40 134 134) 0%, rgb(22 85 102) 100%)'
            }
            borderRadius={10}
            direction="column"
            position="relative"
            justify="center"
            align="center"
          >
            <Image src={props.src} height='250px' />
            <Box
              as={RxCross1}
              w="20px"
              h="20px"
              ml="30px"
              mt="10px"
              cursor="pointer"
              position="absolute"
              top="2%"
              left="83%"
            />
          </Flex>
          <Flex direction='column' rowGap='10px' mt='10px' p={2}>
            <Text
              color="1c1c1b"
              fontSize="15px"
              lineHeight="22px"
              fontWeight="500"
            >
             Samsung Galaxy S23 Ultra 5G
            </Text>
            <Text fontSize="15px" lineHeight="22px" fontWeight="400">
             ₹124999.00
            </Text>

             <Button colorScheme="orange" leftIcon={<BsFillCartPlusFill />}>
                Add to Cart
              </Button>

          </Flex>
        </Flex>
  )
}

export default WishlistCard