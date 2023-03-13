import React from 'react';
import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  Link as Link1,
  useToast
} from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
const Footer = () => {
    const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {


    setEmail("");


    if(email === ""){
    toast({
      title: "Please enter your email address",
      status: "error",
      duration: 3000,
      isClosable: true,

    });

  }
  else{
    toast({
      title: "Thank you for subscribing",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  };



  return (
    <Box bg="gray.700" py={4} h={[550, 500]}>
      <Flex
        align="center"
        justify="space-around"
        borderBottom="1px solid grey"
        ml={[5, 0]}
        h={[100, 70]}
        w={['400px', 'auto']}
      >
        <Box display="flex" alignItems="center" columnGap={[5, 10]}>
          <Box
            as={FaRegPaperPlane}
            className="newsletter-icon"
            boxSize="30px"
          />
          <Text fontSize={[10, 30]} color="white" mr={[10, 0]}>
            Subscribe to our newsletter
          </Text>
        </Box>
        <InputGroup width={600}>
          <Input
            type="text"
            placeholder="Your email address"
            fontSize="1em"
            focusBorderColor="transparent"
            background="white"
            height={50}
            _placeholder={{ opacity: 0.6, color: 'gray.700' }}
            borderRadius={5}
            color="gray.700"
            value={email}
        onChange={(e) => setEmail(e.target.value)}
          />
          <InputRightElement
            borderRadius={5}
            p={['10px', 5]}
            px={['30px', 10]}
            bg="gray.700"
            border="1px solid white"
            h="100%"
            w="15%"
            children={
              <Text fontSize={['0.5rem', '1rem']} color="white">
                Subscribe
              </Text>
            }
            onClick={handleSubmit}
            cursor="pointer"
          />
        </InputGroup>
      </Flex>

      <Box
        display={['grid', 'flex']}
        gridTemplateColumns={['1fr 1fr']}
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        mt={20}
        px={[5, 100]}
        width={['400px', 'auto']}
        ml={['20px', 0]}
        pb={10}
        gridRowGap={['20px', 0]}
        gridColumnGap={['20px', '220px']}
      >
        <Box mb={['20px', 0]}>
          <Text fontSize={25} color="white" fontWeight="bold" mb={10}>
            Contact Us
          </Text>
          <Box>
            <address
              style={{
                color: 'white',
                fontStyle: 'normal',
                fontSize: '13px',
                lineHeight: '30px',
              }}
            >
              Mankar
              <br />
              West Bengal, INDIA 713144
              <br />
            </address>
            <Link1 href="tel:+91 9999999999" style={{ color: 'white' }}>
              +91 9999999999
            </Link1>
            <br />
            <Link1
              href="mailto:choudhuryrudrangsu@gmail.com"
              style={{ color: 'white' }}
            >
              choudhuryrudrangsu@gmail.com
            </Link1>
            <Flex align="center" columnGap={10} mt={[5, 30]}>
              <Link1 href="https://www.linkedin.com/in/rudrangsu-choudhury-0a990521b/">
                <BsLinkedin className="social-icons" size={30} />
              </Link1>
              <Link1 href="https://github.com/RudrangsuChoudhury">
                <BsGithub className="social-icons" size={30} />
              </Link1>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Text fontSize={25} color="white" fontWeight="bold" mb={10}>
            Information
          </Text>
          <Box>
            <Link1 as={Link} to="/privacy-policy">
              <Text color="white" fontSize={15}>
                Privacy Policy
              </Text>
            </Link1>
            <Link1 as={Link} to="/refund-policy">
              <Text color="white" fontSize={15}>
                Refund Policy
              </Text>
            </Link1>
            <Link1 as={Link} to="/shipping-policy">
              <Text color="white" fontSize={15}>
                Shipping Policy
              </Text>
            </Link1>
            <Link1 as={Link} to="/term-conditions">
              <Text color="white" fontSize={15}>
                Terms & Conditions
              </Text>
            </Link1>
            <Link1 as={Link} to='/blogs'>
              <Text color="white" fontSize={15}>
                Blogs
              </Text>
            </Link1>
          </Box>
        </Box>


      </Box>
      <Text fontSize="sm" textAlign="center" color="white">
        &copy; 2023 Student Marketplace
      </Text>
    </Box>
  );
};

export default Footer;
