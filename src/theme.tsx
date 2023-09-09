import { extendTheme } from '@chakra-ui/react'// 2. Extend the theme to include custom colors, fonts, etc


const config ={
    initialColorMode: "dark",
    useSystemColorMode: false,
}


export const theme = extendTheme({ 
    config,
    
    colors: {
      transparent: 'transparent',
      black: '#121212',
      white: '#fff',
      gray: {
        100: '#E1E1E6',
        300: '#C4C4CC',
        400: '#8D8D99',
        500: '#7C7C8A',
        600: '#323238',
        700: '#29292E',
        800: '#202024',
        900: '#121214',
      },
      yellow: {
        100: '#ffff00',
        500: '#ffd800',
        600: '#ffc300',
        900: '#b79303',
      },
      red: {
        500: '#e83f5b',
        700: '#e30b2f',
      },
      green: {
        100: '#04d131',
        300: '#048c22',
      },
      blue: {
        100: '#04d1d1',
        300: '#4970fc',
        500: '#2600ff',
        600: '#2600ff',
        700: '#2b00d9',
      },
      pink: {
        500: '#e810b3',
        600: '#c9149d',
      },
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'black',
          color: 'white',
        },
        // styles for the `a`
        a: {
          color: 'gray.300',
          _hover: {
            textDecoration: 'none',
          },
        },
      },
    },
 })
