import type { NextPage } from 'next'
import {Flex, Box} from '@chakra-ui/react'
import { Header } from '../src/components/header'
import { SideBar } from '../src/components/sidebar'

const Home: NextPage = () => {
  return (
    <Flex flexDir='column' h='100vh'> 
       <Header /> 
      <Flex w='100%'  mx='auto'>
        <SideBar/> 
         <Box bg='green.50' w='100%' ></Box> 
      </Flex>
    </Flex>
  )
}

export default Home
