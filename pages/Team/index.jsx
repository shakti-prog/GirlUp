import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import Nav from "../../components/navbar";
import Card from "../../components/card";
import members from "../../staticData/TeamMembers/TeamMember";

{
  /*function TestimonialCard(props) {
    const { name, role ,avatar,index} = props;
    return (
      <>
      <Flex
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={5}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.700')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
         
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          backgroundImage: avatar[index % 4],
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.h1 fontSize={28}>
             {name}
          </chakra.h1>
        </Flex>
       
      </Flex>
      </>
    );
  } */
}

export default function GridBlurredBackdrop() {
  return (
    <>
      <Nav />
      <Flex
        textAlign={"center"}
        pt={10}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            color={useColorModeValue("gray.700", "gray.50")}
          >
            GirlUp Athena Team
          </chakra.h1>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 4 }}
          spacing={"20"}
          mt={16}
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
    </>
  );
}
