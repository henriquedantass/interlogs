import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import {DataProvider} from '../src/context/dataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    </DataProvider>
  )
 
}
export default MyApp
