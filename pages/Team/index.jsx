import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from "@chakra-ui/react";

import Nav from "../../components/navbar";
import Card from "../../components/card";
import members from "../../staticData/TeamMembers/TeamMember";
import members_2020_21 from "../../staticData/TeamMembers/TeamMember2020_21";


export default function GridBlurredBackdrop() {
  return (
    <>
      <Nav />
      <Tabs align="center" marginTop={'4'} variant='enclosed'>
        <TabList>
          <Tab  fontSize={'x-large'}>2021-22</Tab>
          <Tab  fontSize={'x-large'} >2020-21</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex
              textAlign={"center"}
              pt={10}
              justifyContent={"center"}
              direction={"column"}
              width={"full"}
            >
              <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"} marginTop={'2'}>
                <chakra.h1
                  py={3}
                  fontSize={32}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  GirlUp Athena Team 2021-22
                </chakra.h1>
              </Box>
              <SimpleGrid
                columns={{ base: 1, md: 2, xl: 4 }}
                spacing={"20"}
                mt={10}
                mx={"auto"}
              >
                {members.map((mem, index) => (
                  <Card
                    name={mem["name"]}
                    role={mem["role"]}
                    path={mem["path"]}
                    key={index}
                    index={index}
                  />
                ))}
              </SimpleGrid>
              <Box></Box>
            </Flex>
          </TabPanel>
          <TabPanel>
          <Flex
              textAlign={"center"}
              pt={10}
              justifyContent={"center"}
              direction={"column"}
              width={"full"}
            >
              <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"} marginTop={'2'}>
                <chakra.h1
                  py={3}
                  fontSize={32}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  GirlUp Athena Team 2020-21
                </chakra.h1>
              </Box>
              <SimpleGrid
                columns={{ base: 1, md: 2, xl: 4 }}
                spacing={"20"}
                mt={10}
                mx={"auto"}
              >
                {members_2020_21.map((mem, index) => (
                  <Card
                    name={mem["name"]}
                    role={mem["role"]}
                    path={mem["path"]}
                    key={index}
                    index={index}
                  />
                ))}
              </SimpleGrid>
              <Box></Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
