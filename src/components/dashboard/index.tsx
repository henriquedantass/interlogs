import { Flex } from "@chakra-ui/react";
import { DashHeader } from "./header";



export function Dashboard(){
  return (
    <Flex w='100%' flexDir='column' p='0 3rem' pt='1.5rem' pb='2rem' bg='gray.50'>
      <DashHeader/>
    </Flex>
  )

}