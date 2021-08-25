import { Avatar, Flex, HStack, Img, Text } from "@chakra-ui/react";



export function Header () {
    return (
      <Flex  alignContent='center' p='0.5rem 1rem' justifyContent='space-between' bg='white'>
        <Img  objectFit="contain" fit='cover' w='fit-content' src='/assets/logo.jpg'/>
        <HStack>
          <Text fontFamily='Roboto' fontWeight='500' >Allan Silva</Text>
          <Avatar src= '/assets/avatar.jpg'name='Allan Silva'/>
        </HStack>
      </Flex>
    )


}