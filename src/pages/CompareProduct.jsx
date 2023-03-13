import React from 'react'
import Meta from '../components/Meta';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  useColorMode,
  Text

} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import Color from '../components/Color';
import compareimage from '../images/Random_product_1.jpg';
const CompareProduct = () => {
    const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Compare Products'} />
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
            Compare Products
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
          px="20px"
          py="10px"
          bgGradient={
            colorMode === 'light'
              ? 'linear(to-r,white,white)'
              : 'linear(90deg, rgb(40 134 134) 0%, rgb(22 85 102) 100%)'
          }
          w="300px"
          borderRadius={10}
          direction="column"
          position="relative"
          rowGap={5}
          align="start"
        >
          <Image
            src={compareimage}
            boxSize="70%"
            alignSelf="center"
          />
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

            <Flex
              justify="space-between"
              align="center"
              p="10px 0px"
              borderTop="1px solid rgba(0,0,0,0.1)"
            >
                <Text fontWeight='bold'>Brand</Text>
                <Text>Samsung</Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              p="10px 0px"
              borderTop="1px solid rgba(0,0,0,0.1)"
            >
                <Text fontWeight='bold'>Type</Text>
                <Text>SmartPhone</Text>
            </Flex>

            <Flex
              justify="space-between"
              align="center"
              p="10px 0px"
              borderTop="1px solid rgba(0,0,0,0.1)"
            >
                <Text fontWeight='bold'>Color</Text>
              <Color/>
            </Flex>
            


        </Flex>

      </Box>
    </>
  );
}

export default CompareProduct
