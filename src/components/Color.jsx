import React from 'react'
import { Flex,List,ListItem } from '@chakra-ui/react';

const Color = ({ color, onMouseDown ,selectedColor}) => {
  // const gradient = selectedColor === color
  //   ? `linear-gradient(to top bottom, ${color}, #67a3d9)`
  //   : '';
  return (
    <List>
    <ListItem
      boxSize={['10px', '20px']}
      bgColor={color}
      rounded="full"
      onMouseDown={() => onMouseDown()}
      cursor="pointer"


   boxShadow={selectedColor===color ? '0px 0px 0px 2px #1C84AB' : ''}
      // backgroundImage={gradient}

        ></ListItem>
        </List>

  );
};

export default Color