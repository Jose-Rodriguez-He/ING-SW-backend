import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import InputTest from '../components/InputTest'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp