import { menuAnatomy } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);
// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: 'medium',
    color: 'gray.200',
    _focus: {
      border: 'none',
      boxShadow: 'none',
    },

  },
  list: {
    // this will style the MenuList component
    py: '5px',
    borderRadius: '5px',
    border: 'none',

    bg: 'gray.500',
    minW:'0px',

  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    fontWeight: 'medium',

    bg: 'gray.500',



  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4',
  },
  divider: {
    // this will style the MenuDivider component
    // my: '4',
    // borderColor: 'white',
    // borderBottom: '1px solid',
    // borderBottom: '1px solid red',
  },
});
// define custom styles
const lg = defineStyle({
  fontSize: 'md',
  my: '1',
});
const xl = defineStyle({
  fontSize: 'lg',
  px: '4',
  py: '2',
});
// define custom sizes
const sizes = {
  // apply custom styles to parts
  xl: definePartsStyle({
    button: xl,
    item: xl,
    groupTitle: lg,
    command: xl,
  }),
};
// define custom variants
const variants = {
  sortmenu: definePartsStyle({
    button: {
      borderRadius: 'full',
      padding: ["5px",'12px'],
      textTransform: 'uppercase',
      bg: 'green.500',
      maxH: ['40px','30px'],
      maxW:["70px",'200px']
    },
    list: {
      borderRadius: '5px',
      border: 'none',
      maxw:'80px',
      bg: 'gray.500',
      minW:'0px',
      maxH:['200px','264px'],

    },
    item: {
      // this will style the MenuItem and MenuItemOption components
        py:['0px','2px']
    },
  }),
};
// export the component theme
export const menuTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    // define which size is applied by default
    size: 'xl',
  },
});
