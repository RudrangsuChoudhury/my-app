import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,

  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,

  Input,
  InputGroup,
  InputLeftAddon,
  List,
  ListItem,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,

  Textarea
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";


const Checkout = () => {



  return (
    <Box maxW="800px" mx="auto" p="4">
      <Heading as="h2" size="lg" textAlign="center" my="4">
        The Student's Marketplace
      </Heading>
      <Heading as="h3" size="md" textAlign="center" mb="8">
        Checkout
      </Heading>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        mb="8"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/product">Shop</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Cart</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Checkout</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex flexDirection={{ base: 'column', md: 'row' }} mb="8">
        <Box
          flexBasis={{ base: '100%', md: '50%' }}
          mr={{ md: '8' }}
          mb={{ base: '8', md: '0' }}
        >
          <Heading as="h3" size="md" textAlign="center" mb="4">
            Contact Information
          </Heading>
          <FormControl id="email" mb="4">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="phone" mb="4">
            <FormLabel>Phone number</FormLabel>
            <InputGroup>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input type="tel" placeholder="Enter your phone number" />
            </InputGroup>
          </FormControl>
          <FormControl id="address" mb="4">
            <FormLabel>Shipping address</FormLabel>
            <Input type="text" placeholder="Enter your address" />
          </FormControl>
          <FormControl id="city" mb="4">
            <FormLabel>City</FormLabel>
            <Input type="text" placeholder="Enter your city" />
          </FormControl>
          <FormControl id="state" mb="4">
            <FormLabel>State</FormLabel>
            <Input type="text" placeholder="Enter your state" />
          </FormControl>
          <FormControl id="zip" mb="4">
            <FormLabel>ZIP code</FormLabel>
            <Input type="text" placeholder="Enter your ZIP code" />
          </FormControl>
        </Box>
        <Box flexBasis={{ base: '100%', md: '50%' }}>
          <Heading as="h3" size="md" textAlign="center" mb="4">
            Payment Information
          </Heading>
          <FormControl id="cardname" mb="4">
            <FormLabel>Name on card</FormLabel>
            <Input type="text" placeholder="Enter the name on your card" />
          </FormControl>
          <FormControl id="cardnumber" mb="4">
            <FormLabel>Card number</FormLabel>
            <Input type="text" placeholder="Enter your card number" />
          </FormControl>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4">
            <FormControl id="expiry" mb="4">
              <FormLabel>Expiry date</FormLabel>
              <InputGroup>
                <Input type="text" placeholder="MM" />
                <Input type="text" placeholder="YY" />
              </InputGroup>
            </FormControl>
            <FormControl id="cvc" mb="4">
              <FormLabel>CVC</FormLabel>
              <Input type="text" placeholder="Enter your CVC number" />
            </FormControl>
          </SimpleGrid>
          <Divider my="4" />
          <Heading as="h3" size="md" textAlign="center" mb="4">
            Order Summary
          </Heading>
          <List mb="4">
            <ListItem>
              <Flex justifyContent="space-between" alignItems="center">
                <Text>Item 1</Text>
                <Text>$10.00</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex justifyContent="space-between" alignItems="center">
                <Text>Item 2</Text>
                <Text>$20.00</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex justifyContent="space-between" alignItems="center">
                <Text>Item 3</Text>
                <Text>$30.00</Text>
              </Flex>
            </ListItem>
            <Divider my="4" />
            <ListItem>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading as='h6' fontSize='16px'>Total</Heading>
                <Text>$60.00</Text>
              </Flex>
            </ListItem>
          </List>

          <Divider my="4" />
          <Heading as="h3" size="md" textAlign="center" mb="4">
            Additional Information
          </Heading>
          <Textarea placeholder="Enter any additional information here" />
        </Box>
      </Flex>
      <Center>
        <Button colorScheme="green" size="lg" my="4">
          Continue to Payment
        </Button>
      </Center>
    </Box>
  );
};

export default Checkout;