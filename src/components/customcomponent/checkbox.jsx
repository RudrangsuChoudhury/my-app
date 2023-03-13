import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const variants = {
  rounded: definePartsStyle({
    control: defineStyle({

      rounded: 'full',
    }),

  }),
};
const checkboxTheme = defineMultiStyleConfig({ variants});
export default checkboxTheme;
