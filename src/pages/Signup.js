import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  useColorMode,


  Image,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Meta from '../components/Meta';
const Signup = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Sign Up'} />
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
            Sign Up
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg="gray.500"
        py={12}
        px={4}
      >
        <Box
          bg={colorMode === 'light' ? 'white' : 'blue.500'}
          maxW="md"
          mx="auto"
          shadow="lg"
          rounded="lg"
          p={8}
          overflow="hidden"
        >
          <Box my={4} textAlign="center">
            <Box
              fontSize="2xl"
              fontWeight="bold"
              color={colorMode === 'light' ? 'black' : 'white'}
            >
              Sign Up
            </Box>
          </Box>
          <Box my={8} textAlign="left">
            <form>
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="name" required />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" required />
                </FormControl>
                <FormControl id="mobile">
                  <FormLabel>Mobile Number</FormLabel>
                  <Input type="tel" required />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" required />
                </FormControl>

                <Flex justify="space-between">
                  <Button colorScheme="blue">Sign Up</Button>

                </Flex>
              </Stack>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default Signup