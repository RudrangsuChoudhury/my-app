import React from 'react'
import { useState } from 'react'
import { MenuItem, Text, useColorMode} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const Sortmenuitem = (props) => {
    const { colorMode } = useColorMode()




  return (
    <MenuItem
      display="flex"
      justifyContent="space-between"


      _hover={ {bg: props.bg} }
      onClick={props.onClick}


    >
      <Text fontSize={['8px','12px']}>{props.text}</Text>
      {props.iconVisible && <CheckIcon boxSize={[2,4]} />}
    </MenuItem>
  );
}

export default Sortmenuitem
