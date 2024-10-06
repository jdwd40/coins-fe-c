import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Define the theme configuration to use dark mode by default
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// Create a custom theme with a dark, professional yet funky style
const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#e4faff',
      100: '#bae8f5',
      200: '#8ed7ec',
      300: '#62c6e3',
      400: '#38b5d9',
      500: '#1f9fc0',  // Main accent color - teal blue
      600: '#177a94',
      700: '#0f5669',
      800: '#07313e',
      900: '#011015',
        },
        background: '#1a202c', // Chakra's default dark mode background
        surface: '#2d3748', // A slightly lighter surface for card elements
        accent: '#ff9800',  // New accent color - bright orange
        muted: '#718096', // Muted grey for less important elements
      },
      fonts: {
        heading: '"Poppins", sans-serif',  // Funky and professional font for headings
        body: '"Roboto", sans-serif',      // Clean and modern font for body text
  },
  styles: {
    global: {
      'html, body': {
        background: 'background',
        color: 'white',
      },
      a: {
        color: 'brand.400',
        _hover: {
          textDecoration: 'underline',
          color: 'accent',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'lg',
        _focus: {
          boxShadow: '0 0 2px 2px #d53f8c', // Pink focus ring for a funky touch
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        background: 'surface',
        borderRadius: 'md',
        boxShadow: 'lg',
        padding: 4,
      },
    },
  },
});

export default theme;