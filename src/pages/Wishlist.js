import React from 'react'
import Meta from '../components/Meta';
import {
   Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  useColorMode,
  Image,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { RxCross1 } from 'react-icons/rx';
import WishlistImage from '../images/compare_products_image_1.jpg';

const Wishlist = () => {
    const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Wishlist'} />
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
            Wishlist
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
        <Flex direction="column" w="300px">
          <Flex
            px="10px"
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
            <Image src={WishlistImage} boxSize="80%" />
            <Box
              as={RxCross1}
              w="20px"
              h="20px"
              ml="10px"
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
              SAMSUNG Galaxy A53 5G , 128GB, 6.5” FHD Super AMOLED Screen, Long
              Battery Life
            </Text>
            <Text fontSize="15px" lineHeight="22px" fontWeight="400">
              $399.00
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" w="300px">
          <Flex
            px="10px"
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
            <Image src={WishlistImage} boxSize="80%" />
            <Box
              as={RxCross1}
              w="20px"
              h="20px"
              ml="10px"
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
              SAMSUNG Galaxy A53 5G , 128GB, 6.5” FHD Super AMOLED Screen, Long
              Battery Life
            </Text>
            <Text fontSize="15px" lineHeight="22px" fontWeight="400">
              $399.00
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" w="300px">
          <Flex
            px="10px"
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
            <Image src={WishlistImage} boxSize="80%" />
            <Box
              as={RxCross1}
              w="20px"
              h="20px"
              ml="10px"
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
              SAMSUNG Galaxy A53 5G , 128GB, 6.5” FHD Super AMOLED Screen, Long
              Battery Life
            </Text>
            <Text fontSize="15px" lineHeight="22px" fontWeight="400">
              $399.00
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Wishlist