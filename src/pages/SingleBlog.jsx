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
    Text,
    Link as ChakraLink
} from '@chakra-ui/react';
import Meta from '../components/Meta';
import {BsArrowLeft} from 'react-icons/bs'

const SingleBlog = () => {
    const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
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
            Dynamic Blog Name
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
      <Box
        py={8}

        display='flex'
        flexDirection='column'
        rowGap={10}
        rounded="lg"
      >
        <ChakraLink as={Link} to="/blogs" color='#777777' fontSize='15px'><Flex align='center' gap='10px'><BsArrowLeft size={20}/>Go Back to Blogs</Flex></ChakraLink>
        <Text fontSize="24px" fontWeight="bold"  color='#1c1c1b'>
          Revolutionizing Online Shopping: The Benefits of E-commerce
        </Text>
        <Text fontSize="lg">
          E-commerce has transformed the retail landscape by providing
          round-the-clock convenience, a vast array of products, and significant
          economic benefits. Online vendors can transfer their reduced overhead
          costs to clients, thereby offering substantial cost savings.
          Furthermore, small enterprises can level the playing field by
          targeting a wider audience through a well-crafted website and an
          effective marketing strategy. E-commerce allows patrons to shop from
          the comfort of their abodes, effectively replacing the need for
          physical retail stores. The continual expansion of e-commerce is a
          definitive indication that online shopping is the future path to
          follow.
        </Text>
      </Box>
        </Box>
    </>
  );
}

export default SingleBlog