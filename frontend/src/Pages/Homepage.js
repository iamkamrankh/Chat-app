import React from "react";
import {
  Box,
  Container,
  TabList,
  Tabs,
  Text,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          margin="auto"
          textAlign="center"
          fontSize="4xl"
          fontFamily="Work sans"
        >
          Talk-A-Tive
        </Text>
        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius="lg"
          color="black"
          borderWidth="1px"
        >
          <Tabs variant="soft-rounded">
            <TabList mb="1em">
              {/* mb margin bottom */}

              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign in</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};

export default Homepage;
