import React from 'react'
import { Flex,List,ListItem } from '@chakra-ui/react';

const Color = () => {
  return (

      <List display="flex" flexWrap="wrap" gap="10px">
        <ListItem
          boxSize={['10px', '20px']}
          bgColor="red"
          rounded="full"
        ></ListItem>
        <ListItem
          boxSize={['10px', '20px']}
          bgColor="red"
          rounded="full"
        ></ListItem>
        <ListItem
          boxSize={['10px', '20px']}
          bgColor="red"
          rounded="full"
        ></ListItem>
        <ListItem
          boxSize={['10px', '20px']}
          bgColor="red"
          rounded="full"
        ></ListItem>
       

      </List>

  );
}

export default Color