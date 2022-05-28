import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  useColorModeValue,
  Container,
  Button
  
} from '@chakra-ui/react';
import Nav from '../../components/navbar';
import articles from '../../staticData/articleData';
import { useRouter } from 'next/router';

const ArticleList = () => {

  const Router = useRouter();
  const col1 = useColorModeValue("gray.700", "gray.200")


  return (
    <>
      <Nav />
      <Container maxW={"7xl"} p="12">
        <Heading as="h1" fontFamily={"fantasy"}>
          Blogs by GirlUp Athena
        </Heading>
        {articles.map((art, i) => (
          <React.Fragment key={i}>
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={art["path"]}
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
                </Box>
              </Box>
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                   fontWeight={800}
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    fontFamily={"fantasy"}
                  >
                    {art["Title"].toUpperCase()}
                  </Link>
                </Heading>
                <HStack
                  marginTop="2"
                  spacing="2"
                  display="flex"
                  alignItems="center"
                >
                  <Text>—</Text>
                  <Text fontFamily={'cursive'} fontWeight={600} fontSize={'large'}>{art["Authors"]}</Text>
                </HStack>
                <Text
                  as="p"
                  marginTop="2"
                  color={col1}
                  fontSize="xl"
                  noOfLines={5}
                  fontFamily={"fantasy"}
                >
                  {art["Content"]}
                </Text>
                <Button
                  bg={"blue.400"}
                  marginTop={"4"}
                  color={"white"}
                  marginBottom={"4"}
                  fontFamily={'fantasy'}
                  _hover={{ bg: "blue.500" }}
                  width={"40"}
                  onClick={() => Router.push(`readArticles/${i + 1}`)}
                >
                  Read More
                </Button>
                {/*<BlogAuthor/> */}
              </Box>
            </Box>

            <Divider marginTop="5" />
          </React.Fragment>
        ))}
      </Container>
    </>
  );
};

export default ArticleList;