import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    Grid,
    Divider,
    Avatar
  } from '@chakra-ui/react';
  import Nav from '../../components/navbar'
  import { FaInstagram,FaFacebook,FaLinkedinIn} from 'react-icons/fa';


  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Simple() {
    return (
      <>
        <Nav />
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={"Back.jpg"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  GirlUp Athena
                </Heading>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  Community based in Maharashtra. India.
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"}>
                    GirlUp Athena is part of the GirlUp campaign which is a
                    branch of the United Nations Foundation. We host drives,
                    write articles, arranging events, webinars and marathons for
                    the cause of uplifting and empowering females. As a member
                    you can help volunteering, contributing, hosting drives,
                    organizing other activities and spreading the word. GirlUp
                    Athena will get “points” for its work and these will help us
                    gain recognition faster from the drive directly under the
                    UNF! We also independently raise money for different causes
                    such as menstruation kits, clothes donation, etc.
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Social Media
                  </Text>

                  <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                    <SocialButton
                      label={"Instagram"}
                      href={
                        "https://www.instagram.com/girlup.athena/?igshid=YmMyMTA2M2Y="
                      }
                    >
                      <FaInstagram />
                    </SocialButton>
                    <SocialButton
                      label={"LinkedIn"}
                      href={"https://www.linkedin.com/company/girlupathena/"}
                    >
                      <FaLinkedinIn />
                    </SocialButton>
                  </Grid>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
          {/*<Divider/>
          <Box>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
              <Stack spacing={0} align={"center"}>
                <Heading><Text fontWeight={1000}>Founder</Text></Heading>
              </Stack>
              <Stack
                py={4}
                px={8}
                spacing={{ base: 8, md: 10 }}
                align={"center"}
                direction={"column"}
              >
                <Box textAlign={"center"}>
                  <Image
                   borderRadius={'full'}
                    src={
                      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    }
                    mb={2}
                  />
                  <Text fontWeight={600} fontSize={'lg'}>Zeel Patel</Text>
                </Box>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign={"center"}
                  maxW={"3xl"}
                >
                  We had an incredible experience working with Chakra Templates
                  and were impressed they made such a big difference in only
                  three weeks. Our team is so grateful for the wonderful
                  improvements they made and their ability to get familiar with
                  the product concept so quickly.
                </Text>
              </Stack>
            </Container>
                  </Box> */}
        </Container>
      </>
    );
  }
 {/* <SocialButton label={'Twitter'} href={'#'}>
  <FaTwitter />
</SocialButton>
<SocialButton label={'YouTube'} href={'#'}>
  <FaYoutube />
</SocialButton>
<SocialButton label={'Instagram'} href={'#'}>
  <FaInstagram />
</SocialButton> */}