import { Flex, Stack } from "@chakra-ui/react";
import { Graphics } from "./graphics";
import { DashHeader } from "./header";
import { TableComponent } from "../table";

export function Dashboard() {
  return (
    <Flex
      w="100%"
      flexDir="column"
      p="0 3rem"
      pt="1.5rem"
      pb="2rem"
      bg="gray.50"
    >
      <Stack spacing="10">
        <DashHeader />
        <Graphics />
      </Stack>
      <TableComponent />
    </Flex>
  );
}
