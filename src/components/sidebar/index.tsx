import { Box } from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";




export function SideBar(){
  return (
    <Box as='aside' w='64' p='1rem' mr='8' mt='50' h='100vh'>
      <SideBarNav/>
    </Box>
  )

}