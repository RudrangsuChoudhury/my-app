import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';
import Meta from '../components/Meta';

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={'Shipping Policy'} />
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
            Shipping Policy
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box p={10}>
        <Heading as="h1" mb={4}>
          Shipping Policy
        </Heading>
        <Text mb={4}>
          We offer shipping within the United States. Shipping rates are
          calculated based on weight and destination at checkout. Orders are
          typically processed within 1-2 business days and shipped via USPS.
          Shipping times may vary depending on your location and the shipping
          option you select at checkout.
        </Text>
        <Heading as="h2" mb={2}>
          Free Shipping
        </Heading>
        <Text mb={4}>
          We offer free shipping on all orders over $50.
        </Text>
        <Heading as="h2" mb={2}>
          International Shipping
        </Heading>
        <Text mb={4}>
          We currently do not offer international shipping. We apologize for any
          inconvenience this may cause and hope to offer international shipping
          in the future.
        </Text>
        <Heading as="h2" mb={2}>
          Shipping Restrictions
        </Heading>
        <List mb={4}>
          <ListItem>
            We are unable to ship to P.O. boxes or APO/FPO addresses.
          </ListItem>
          <ListItem>
            Some items may be subject to shipping restrictions due to size or
            weight limitations.
          </ListItem>
          <ListItem>
            We reserve the right to cancel and refund any order due to shipping
            restrictions or other unforeseen circumstances.
          </ListItem>
        </List>
        <Text>
          If you have any questions or concerns regarding our shipping policy,
          please contact us at <Link to="#">support@yourstore.com</Link>.
        </Text>
      </Box>
    </>
  );
};

export default ShippingPolicy;
