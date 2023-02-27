// import { Box, Button, Image, Text, useColorMode } from '@chakra-ui/react';
// import { useSpring, animated } from 'react-spring';
// import React from 'react';
// import { Link } from 'react-router-dom';
// const BlogBlogCard = () => {
//   const { colorMode } = useColorMode();

//   return (
//     <Box
//   bgColor={colorMode === 'light' ? 'gray.100' : '#6135B0'}
//   borderRadius="10px"
//   display="flex"
//   w={[200, 400]}
//   h={['450px', 'auto']}
//   flexDirection="column"
//   justifyContent="flex-start"
//   overflow="hidden"
//   position="relative"
//   _hover={{
//     '& > img': {
//       transform: 'scale(1.1)',
//     },
//   }}
// >
//   <Image
//     src="images/blogs1.png"
//     w="100%"
//     h="auto"
//     borderTopLeftRadius="10px"
//     borderTopRightRadius="10px"
//     transition="transform 0.5s ease-in-out"
//     position="absolute"
//     top="0"
//     left="0"
//   />


//       <Box px={[5, 8]} py={[5, 5]} zIndex='1'>
//         <Text
//           fontSize="14px"
//           lineHeight="24px"
//           textTransform="uppercase"
//           letterSpacing={0}
//           fontWeight={600}
//           color={colorMode === 'light' ? '#777777' : '#fff'}
//           mb={[5, 10]}
//         >
//           7 Feb, 2023
//         </Text>
//         <Text
//           fontSize="17px"
//           color="#131921"
//           fontWeight="bold"
//           lineHeight={['18px', '20px']}
//           mb={['5px', '10px']}
//         >
//           Revolutionizing Online Shopping: The Benefits of E-commerce
//         </Text>
//         <Text
//           fontSize="13px"
//           lineHeight={['18px', '20px']}
//           color={colorMode}
//           mb={5}
//         >
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//         </Text>
//         <Link to="#">
//           <Button size={['sm', 'lg']} colorScheme="teal" borderRadius={20}>
//             Read More
//           </Button>
//         </Link>
//       </Box>
//     </Box>
//   );
// };
// export default BlogBlogCard;
import { Box, Button, Image, Text, useColorMode } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogBlogCard = () => {
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = React.useState(false);
  const hoverAnimation = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    config: {
        mass: 1,
        tension: 500,

    },
  });

  return (
    <Box
      bgColor={colorMode === 'light' ? 'gray.100' : '#6135B0'}
      borderRadius="10px"
      display="flex"
      w={[100, 400]}
      h={['250px', 'auto']}
      flexDirection="column"
      justifyContent="flex-start"
      overflow="hidden"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >
      <animated.img
        src="images/blogs1.png"
        style={hoverAnimation}
        w="100%"
        h="auto"
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"

        position="absolute"
        top="0"
        left="0"
      />

      <Box px={[2, 8]} py={[2, 5]}>
        <Text
          fontSize={["10px","14px"]}
          lineHeight="24px"
          textTransform="uppercase"
          letterSpacing={0}
          fontWeight={600}
          color={colorMode === 'light' ? '#777777' : '#fff'}
          mb={[1, 10]}
        >
          7 Feb, 2023
        </Text>
        <Text
          fontSize={['8px',"17px"]}
          color="#131921"
          fontWeight="bold"
          lineHeight={['15px', '20px']}
          mb={['2px', '10px']}
        >
          Revolutionizing Online Shopping: The Benefits of E-commerce
        </Text>
        <Text
          fontSize={["8px","13px"]}
          lineHeight={['12px', '20px']}
          color={colorMode}
          mb={5}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Text>
        <Link to="/blog/:id">
          <Button size={['sm', 'lg']} colorScheme="teal" borderRadius={20}>
            Read More
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogBlogCard;