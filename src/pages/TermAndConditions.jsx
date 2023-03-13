import React from 'react';
import {
  Box,
  Text,
  Heading,
  List,
  ListItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const TermAndConditions = () => {
  return (
    <>
      <Meta title={'Term And Conditions'} />
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
            Term And Conditions
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box  mx="auto" px={20}>
        <Heading as="h1" mb={4}>
          Terms and Conditions
        </Heading>
        <Text mb={4}>
          Please read these Terms and Conditions carefully before using our
          website.
        </Text>
        <Text mb={4}>
          Welcome to our website! These terms and conditions outline the rules
          and regulations for the use of our website. By accessing this website,
          we assume you accept these terms and conditions. Do not continue to
          use our website if you do not agree to all the terms and conditions
          stated on this page. The following terminology applies to these terms
          and conditions: "Client," "You," and "Your" refers to you, the person
          accessing this website and accepting these terms and conditions. "Our
          Company," "We," "Us," and "Ourselves" refers to our Company. "Party,"
          "Parties," or "Us" refers to both the Client and ourselves.
        </Text>
        <Heading as="h2" mb={2}>
          User Conduct
        </Heading>
        <Text mb={4}>
          You agree to use this website only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use and enjoyment of the website. Prohibited behavior includes
          harassing or causing distress or inconvenience to any other user,
          transmitting obscene or offensive content, or disrupting the normal
          flow of dialogue within our website.
        </Text>
        <Heading as="h2" mb={2}>
          Intellectual Property
        </Heading>
        <Text mb={4}>
          The content on this website, including but not limited to text,
          graphics, images, logos, and software, is the property of our website
          and is protected by copyright laws. You may not reproduce, modify,
          distribute, or republish any of the content on this website without
          our prior written consent.
        </Text>

        <Heading as="h2" mb={2}>
          Cookies:
        </Heading>
        <Text mb={4}>
          We employ the use of cookies. By accessing our website, you agreed to
          use cookies in agreement with our Privacy Policy.
        </Text>

        <Heading as="h2" mb={2}>
          License:
        </Heading>
        <Text mb={4}>
          Unless otherwise stated, we or our licensors own the intellectual
          property rights in the website and material on the website. Subject to
          the license below, all these intellectual property rights are
          reserved.
        </Text>
        <Heading as="h2" mb={2}>
          User Content:
        </Heading>
        <Text mb={4}>
          You are responsible for any content you post on our website.
        </Text>
        <Heading as="h2" mb={2}>
          Limitations of Liability:
        </Heading>
        <Text mb={4}>
          We will not be liable for any loss or damage caused by using our
          website.
        </Text>
        <Heading as="h2" mb={2}>
          Indemnification:
        </Heading>
        <Text mb={4}>
          You agree to defend, indemnify and hold us harmless from any claim or
          demand, including reasonable attorneys' fees, made by any third-party
          due to or arising out of your use of the website.
        </Text>
        <Heading as="h2" mb={2}>
          Governing Law:
        </Heading>
        <Text mb={4}>
          These terms and conditions are governed by and construed in accordance
          with the laws of the United States.
        </Text>
      </Box>
    </>
  );
};
export default TermAndConditions;