import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
} from "@chakra-ui/react";
import { useContext } from "react";
import { dataContext } from "../../context/dataContext";

export function TableComponent() {
  const {data , media} = useContext(dataContext)

  return (
    <Box
      width="50%"
      height="50%"
      overflowY="auto"
      mt="2rem"
      position="relative"
      borderRadius="6px"
    >
      <Table height="10%" position="absolute">
        <Thead>
          <Tr>
            <Th>
              <Text color="#000" fontSize="0.8rem">
                Descrição
              </Text>
            </Th>
            <Th>
              <Text color="#000" fontSize="0.8rem">
                Tag
              </Text>
            </Th>
            <Th>
              <Text color="#000" fontSize="0.8rem">
                Unid. Medidas
              </Text>
            </Th>
            <Th>
              <Text color="#000" fontSize="0.8rem">
                Equipamento
              </Text>
            </Th>
            <Th>
              <Text color="#000" fontSize="0.8rem">
                Media
              </Text>
            </Th>
           <Th>
               <Text color="#000" fontSize="0.8rem">
                Habilitar?
              </Text> 
            </Th>            
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => {
            return (
              <Tr key={item.name}>
                <Td>
                  <Text color="#00000090">Temperatura Mancal</Text>
                </Td>
                <Td>
                  <Text color="#00000090">TT-01</Text>
                </Td>
                <Td>
                  <Text color="#00000090">ºC</Text>
                </Td>
                <Td>
                  <Text color="#00000090">{item.name}</Text>
                </Td>
                <Td>
                  <Text color="#00000090">{Math.round(media[index])}°C</Text>
                </Td>
                <Td>
                  <Switch  colorScheme="teal" size="lg" />
                </Td> 
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
