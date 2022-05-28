import { useRouter } from "next/router";
import articles from "../../staticData/articleData";

import { Flex, Box, Stack, Text,Container,Heading,useColorModeValue,HStack} from '@chakra-ui/react';
import Nav from '../../components/navbar';


export default function WithLargeQuote() {
   
  const col1 = useColorModeValue("gray.50", "gray.900");
  const col2 = useColorModeValue("gray.700", "gray.200");

  const router = useRouter();
  if (router == undefined) {
    return <p>Nothing to display</p>;
  }
  const ind = parseInt(router.query.id);
  if (
    articles[ind - 1] == undefined ||
    articles[ind - 1]["Title"] == undefined ||
    articles[ind - 1]["Content"] == undefined
  ) {
    return <p>No article to display</p>;
  }

  return (
    <>
      <Nav />
      <Box
        bg={col1}
        color={col2}
        position={"relative"}
        width={"auto"}
        height={"auto"}
      >
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: "none", lg: "flex" }}
          position={"absolute"}
          insetY={0}
          right={0}
        >
          <Flex
            bgGradient={"linear(to-r, gray.800 10%, transparent)"}
            w={"auto"}
            h={"auto"}
          />
        </Flex>
        <Container maxW={"7xl"} maxH={"auto"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={"gray.400"}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 20, xl: 40 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <Heading
                  fontFamily={"fantasy"}
                  mb={5}
                  color={col2}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  {articles[ind - 1]["Title"]}
                </Heading>
                <HStack
                  marginTop="2"
                  spacing="2"
                  display="flex"
                  alignItems="center"
                >
                  <Text>—</Text>
                  <Text fontFamily={"cursive"} fontSize={"large"} color={col2}>
                    {articles[ind - 1]["Authors"]}
                  </Text>
                </HStack>
                <Text
                  fontSize={"2xl"}
                  color={col2}
                  fontFamily={"fantasy"}
                  marginTop={6}
                >
                  {articles[ind - 1]["Content"]}
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}