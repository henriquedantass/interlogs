  
import {Box, Text, Stack } from '@chakra-ui/react'
import { ReactNode } from 'react';


interface NavSectionProps {
  children: ReactNode;
}

export function NavSection({children}:NavSectionProps){
  return (
    <Box mt='5'>
          <Stack spacing='4' mt='8' align='stretch'>
            {children}
          </Stack>
    </Box>
  );
}