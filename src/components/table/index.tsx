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
import { dataTable } from "../../mocks/tableDataMock";

export function TableComponent() {
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
                Habilitar?
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataTable.map((item) => {
            return (
              <Tr key={item.id}>
                <Td>
                  <Text color="#00000090">{item.description}</Text>
                </Td>
                <Td>
                  <Text color="#00000090">{item.tag}</Text>
                </Td>
                <Td>
                  <Text color="#00000090">{item.metricUnity}</Text>
                </Td>
                <Td>
                  <Text color="#00000090">{item.equipment}</Text>
                </Td>
                <Td>
                  <Switch colorScheme="teal" size="lg" />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
