import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Box
} from '@chakra-ui/react';

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={'Privacy Policy'} />
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
            Privacy Policy
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box mb='20px'>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          Privacy Policy
        </Heading>
        <Text maxW="800px" mx="auto" fontSize="lg" lineHeight="tall">
          This Privacy Policy explains how we collect, use, and share your
          personal information when you visit our website or use our services.
          <br />
          <br />
          We collect personal information such as your name, email address, and
          shipping address when you make a purchase or create an account on our
          website. We use this information to process your order, communicate
          with you about your order, and improve our services.
          <br />
          <br />
          We may also collect information about your device and how you interact
          with our website, such as your IP address, browser type, and referring
          website. This information is used to improve our website and services.
          <br />
          <br />
          We do not sell or share your personal information with third parties
          for their own marketing purposes. However, we may share your
          information with our service providers to help us fulfill your order
          or improve our services.
          <br />
          <br />
          By using our website and services, you consent to the terms of this
          Privacy Policy.
        </Text>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
