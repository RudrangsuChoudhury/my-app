import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
    useColorMode,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,

} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Meta from '../components/Meta';
const ResetPassword = () => {
    const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Reset Password'} />
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
            Reset Password
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

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" required />
                </FormControl>
                <FormControl id="confpassword">
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" required />
                </FormControl>
                <Flex justify="space-between">
                  <Button colorScheme="blue">Ok</Button>
                </Flex>
              </Stack>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default ResetPassword;
