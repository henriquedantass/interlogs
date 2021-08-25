import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../src/components/header";
import { SideBar } from "../src/components/sidebar";
import { Dashboard } from "../src/components/dashboard";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Flex w="100%" bg="white" mx="auto">
        <SideBar />
        <Dashboard />
      </Flex>
    </Flex>
  );
};

export default Home;
