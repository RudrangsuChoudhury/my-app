import { Box,Button,Image, Text,useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import blogimage from '../images/blogs1.png';

const BlogCard = ({title,description,date}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgColor={colorMode === 'light' ? 'white' : '#15778E'}
      borderRadius="10px"
      display="flex"
      w={[200, 265]}
      h={['450px', 'auto']}
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Image
        src={blogimage}
        w={[200, 265]}
        h={[200, 265]}
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
      />
      <Box px={[5, 8]} py={[5, 5]}>
        <Text
          fontSize="14px"
          lineHeight="24px"
          textTransform="uppercase"
          letterSpacing={0}
          fontWeight={600}
          color={colorMode === 'light' ? '#777777' : '#fff'}
          mb={[5, 10]}
        >
    {date}
        </Text>
        <Text
          fontSize="17px"
          color="#131921"
          fontWeight="bold"
          lineHeight={['18px', '20px']}
          mb={['5px', '10px']}
        >
         {title}
        </Text>
        <Text
          fontSize="13px"
          lineHeight={['18px', '20px']}
          color={colorMode}
          mb={5}
        >
          {description.slice(0, 50)}
        </Text>
        <Link to="/blogs">
          <Button size={['sm', 'lg']} colorScheme="teal" borderRadius={20} >
            Read More
          </Button>
        </Link>4
      </Box>
    </Box>
  );
}

export default BlogCard