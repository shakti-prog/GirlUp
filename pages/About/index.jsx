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
                  fontFamily={"fantasy"}
                >
                  GirlUp Athena
                </Heading>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                  fontFamily={"cursive"}
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
                  <Text fontSize={"xl"} fontFamily={"cursive"}>
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
                    fontFamily={"fantasy"}
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
          <Divider />
          <Box>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
              <Stack spacing={0} align={"center"}>
                <Heading>
                  <Text fontWeight={1000} fontFamily={"fantasy"}>
                    Founder
                  </Text>
                </Heading>
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
                    borderRadius={"full"}
                    src={"Founder/Zeel Patel_Founder.jpeg"}
                    boxSize={{ sm: 300, md: 450 }}
                    mb={4}
                  />
                  <Text
                    fontWeight={600}
                    fontSize={"2xl"}
                    fontFamily={"cursive"}
                  >
                    Zeel Patel
                  </Text>
                </Box>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign={"center"}
                  maxW={"4xl"}
                  fontFamily={"cursive"}
                >
                  She’s an adventure child, a dark chocolate enthusiast and a
                  bibliophile. She tries her best at working hard and is quite
                  the scatter brain. Currently studying engineering, she also
                  has her own YouTube channel, loves traveling and basketball.
                  GirlUp provided her a platform to lead a community of
                  like-minded people working towards empowering women and
                  creating new opportunities. She is quite vocal about the
                  various issues present in our world and is driven to leave her
                  mark on the journey towards eradicating gender inequalities.
                </Text>
              </Stack>
            </Container>
          </Box>{" "}
          *
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