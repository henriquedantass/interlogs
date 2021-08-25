import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'black.100'
      }  
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
})