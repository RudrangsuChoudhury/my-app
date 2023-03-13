import React from 'react'
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
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
import Meta from "../components/Meta";
const ForgotPassword = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Forgot Password'} />
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
            Forgot Password
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
            Reset Your Password
            </Box>
            <Box
              fontSize="1xl"

              color={colorMode === 'light' ? '#777777' : 'white'}
              mt='5px'

            >
          We will send you a link to reset your password
            </Box>
          </Box>
          <Box my={8} textAlign="left">
            <form>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" required />
                </FormControl>

               
                <Flex justify="space-between">
                  <Button colorScheme="blue" type='submit'>Submit</Button>
                  <Link to='/login'>
                    Cancel

                  </Link>
                </Flex>
              </Stack>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default ForgotPassword