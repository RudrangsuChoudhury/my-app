// theme.js

// 1. import `extendTheme` function
import { extendTheme,useColorMode } from '@chakra-ui/react';
import checkboxTheme from './checkbox';
import { menuTheme } from './Menu';


// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};


// 3. extend the theme
// const theme = extendTheme({ config});
const customTheme = extendTheme({
  config,
  components: {
    Checkbox: checkboxTheme,

    Menu: menuTheme,

  },

});
export default customTheme;
