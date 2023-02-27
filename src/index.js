import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import customTheme from './components/customcomponent/theme.js';



const container = document.getElementById('root');
const root = createRoot(container);






root.render(
  <ChakraProvider  theme={customTheme}>
    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
