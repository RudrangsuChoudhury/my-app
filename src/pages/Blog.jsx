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
import blog from '../components/customcomponent/blogarray';
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
          gap={[5, 100]}


        >


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
            {/* <BlogBlogCard />
            <BlogBlogCard />
            <BlogBlogCard />
            <BlogBlogCard /> */}
            {blog.map((item) => (
              <BlogBlogCard

                title={item.title}
                description={item.description}
                date={item.date}
                key={item.id}
                id={item.id}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Blog;
