import React from 'react';
import Meta from '../components/Meta';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorMode,
  Flex,
  useMediaQuery,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Textarea,
  List,
  ListItem,
  ListIcon,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { MdHome, MdCall, MdMailOutline, MdInfo } from 'react-icons/md';
const Contact = () => {
  const { colorMode } = useColorMode();
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  return (
    <>
      <Meta title={'Contact Us'} />
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
            Contact Us
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex align="center" px={60}>
        <Flex
          align="start"
          justify="space-around"
          direction="column"
          rowGap={10}
        >
          <Flex align="center" justify="center" w={['70%', '100%']}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14643.868743910876!2d87.54724502732181!3d23.4255524951768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9d5971c019beb%3A0x60dd012205e07cf!2sMankar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1677218936532!5m2!1sen!2sin"
              width={isSmallerThan500 ? '100%' : '1000px'}
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Flex>
          <Flex justify="space-between" width="100%">
            <Flex align="start" justify="flex-start" direction="column">
              <Text fontSize="18px" fontWeight="bold">
                Contact
              </Text>
              <Box as="form" p={4} px={0} >
                <FormControl id="name" isRequired w='400px'>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    _placeholder={{
                      color: colorMode === 'light' ? 'gray.500' : 'green',
                    }}

                  />
                </FormControl>
                <FormControl id="email" isRequired mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    _placeholder={{
                      color: colorMode === 'light' ? 'gray.500' : 'green',
                    }}
                  />
                </FormControl>
                <FormControl id="phone" isRequired mt={4}>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    _placeholder={{
                      color: colorMode === 'light' ? 'gray.500' : 'green',
                    }}
                  />
                </FormControl>
                <FormControl id="comments" isRequired mt={4}>
                  <FormLabel>Comments</FormLabel>
                  <Textarea
                    placeholder="Enter your comments"
                    _placeholder={{
                      color: colorMode === 'light' ? 'gray.500' : 'green',
                    }}
                  />
                </FormControl>
                <Button colorScheme="blue" mt={4}>
                  Submit
                </Button>
              </Box>
            </Flex>
            <Flex direction="column" rowGap={10}>
              <Text fontSize="18px" fontWeight="bold">
                Get In Touch With Us
              </Text>
              <List spacing={10}>
                <ListItem>
                  <ListIcon as={MdHome} color="blue.500" />
                  <address style={{ display: 'inline' }}>
                    Near Chowrangee ,Mankar,West Bengal,India,713144
                  </address>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCall} color="green.500" />
                  <ChakraLink href="tel:+91 983 000 0000" isExternal>
                    +91 999 999 9999
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdMailOutline} color="orange.500" />
                  <ChakraLink
                    href="mailto:choudhuryrudrangsu@gmail.com"
                    isExternal
                  >
                    choudhuryrudrangsu@gmail.com
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ListIcon as={MdInfo} color="purple.500" />
                  Monday - Friday 9:00 AM - 8:00 PM
                </ListItem>
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Contact;
