import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
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
import blog from '../components/customcomponent/blogarray';

const SingleBlog = () => {
    const { colorMode } = useColorMode();
    const location = useLocation();
    const blognumber=location.pathname.slice(6);
   


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
          {blog[blognumber-1].title}
        </Text>
        <Text fontSize="lg">
          {blog[blognumber-1].description}
        </Text>
      </Box>
        </Box>
    </>
  );
}

export default SingleBlog