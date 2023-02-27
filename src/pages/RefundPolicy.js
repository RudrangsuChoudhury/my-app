import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  UnorderedList,
  ListItem,

} from '@chakra-ui/react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';

const RefundPolicy = () => {
  return (
    <>
      <Meta title={'Refund Policy'} />
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
            Refund Policy
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box p={5}>
        <Text fontSize="2xl" fontWeight="bold" mb={5}>
          Refund Policy
        </Text>
        <Text mb={5}>
          We want you to be completely satisfied with your purchase. If for any
          reason you are not happy with your order, we will gladly accept your
          return within 30 days of the purchase date. Please follow the steps
          below to initiate the return process:
        </Text>
        <UnorderedList mb={5}>
          <ListItem>
            Contact our customer support team via email or phone to initiate the
            return process.
          </ListItem>
          <ListItem>
            Repackage the item(s) you are returning securely in the original
            product packaging, if possible. All products must be returned in
            good condition to ensure full credit.
          </ListItem>
          <ListItem>
            Include a copy of the original packing slip or invoice with your
            return package.
          </ListItem>

        </UnorderedList>
        <Text mb={5}>
          Once we receive your return, we will credit the original payment
          method with the original purchase price. Shipping and handling fees
          are non-refundable.
        </Text>
        <Text mb={5}>
          If you have any questions about our refund policy, please contact our
          customer support team.
        </Text>
      </Box>
    </>
  );
};

export default RefundPolicy;
