import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  
  export default function MainScreen() {
   
    return (
      <>
        <Flex
          w={"auto"}
          h={"100vh"}
          backgroundImage={
             "Girl_Up_Logo.png"
          }
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          >
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={1000}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
              >
                GirlUp Athena
              </Text>
              <Text
                color={"white"}
                fontWeight={600}
                lineHeight={1}
                fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
              >
                GirlUp Athena is part of the GirlUp Campaign initiated by the
                United Nations Foundation. We’re a community working towards
                empowering girls by providing support and opportunities.
              </Text>
              <Stack direction={"row"}></Stack>
            </Stack>
          </VStack>
        </Flex>
      </>
    );
  }