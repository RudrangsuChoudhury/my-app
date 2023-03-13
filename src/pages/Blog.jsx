import React from 'react';
import Meta from '../components/Meta';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
    Text,
    List,
    ListItem,
    useColorMode,
    Grid
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import BlogBlogCard from '../components/BlogBlogCard';
const Blog = () => {
    const { colorMode } = useColorMode();
  return (
    <>
      <Meta title={'Blogs'} />
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
            Blogs
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Box
          display="flex"
          bgColor={colorMode === 'light' ? 'gray.300' : '#363e47'}
          py={[5, 50]}
          px={[5, 100]}
          gap={[5, 10]}


        >
          <Flex
            bg={colorMode === 'light' ? 'white' : '#1B4A92'}
            p={[1, 10]}
            width={[100, 300]}
            borderRadius="10px"
            padding="10px 15px"
            direction={'column'}
            rowGap="10px"
            h={[100,200]}
          >
            <Text
              fontSize={['8px', '16px']}
              lineHeight={['10px', '20px']}
              fontWeight={600}
              color={
                colorMode === 'light' ? 'black' : 'rgba(66, 223, 128, 0.92)'
              }
            >
              Find by Categories
            </Text>
            <List
              lineHeight={['15px', '30px']}
              color={
                colorMode === 'light' ? 'black' : 'rgba(232, 176, 43, 0.92)'
              }
              fontWeight="bold"
              cursor="pointer"
            >
              <ListItem fontSize={[10, 15]}>⌚Watch</ListItem>
              <ListItem fontSize={[10, 15]}>📺Tv</ListItem>
              <ListItem fontSize={[10, 15]}>📷Camera</ListItem>
              <ListItem fontSize={[10, 15]}>💻Laptop</ListItem>
            </List>
          </Flex>

          <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)']}
            gap={[2, 8]}
            borderRadius="10px"

            alignItems="center"
            padding={[2, 8]}
            backgroundColor={colorMode === 'light' ? 'white' : '#052E3E'}
            boxShadow="xl"
            width={['70%', '100%']}
            justifyItems="center"

          >
            <BlogBlogCard />
            <BlogBlogCard />
            <BlogBlogCard />
            <BlogBlogCard />
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Blog;
