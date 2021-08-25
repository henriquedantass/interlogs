import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";


var options = [
  {name: 'Hoje'},
  {name: 'Ontem'},
  {name: 'Últimos 3 dias'},
  {name: 'Últimos 7 dias'},
  {name: 'Últimos 30 dias'},
  {name: 'Personalizado'}
]


export function DashHeader(){
  const [activeOption, setactiveOption] = useState('Hoje')


  return (
    <Flex flexDir='column' >
      <Text fontSize='2rem' fontWeight='700' mb='20px'>Dashboard</Text>
      <HStack spacing='20'>
        {options.map(option => (
          <Box 
          key={option.name}
          cursor='pointer'
          onClick={() => setactiveOption(option.name)}
          borderBottom = {option.name === activeOption ? '3px solid #48BB78' : ''}
          w='fit-content'
          minW='120px' 
          color={option.name === activeOption ? 'green.400' : '#2E2E3A'} 
          textAlign="center">
            <Text fontWeight='500'>{option.name}</Text>
          </Box>
        ))}
      </HStack>
    </Flex>
  )
}