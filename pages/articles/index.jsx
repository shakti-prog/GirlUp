import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Button
  
} from '@chakra-ui/react';
import Nav from '../../components/navbar';
import articles from '../../staticData/articleData';
import { useRouter } from 'next/router';




const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium"></Text>
      <Text>—</Text>
      <Text></Text>
    </HStack>
  );
};

const ArticleList = () => {

  const Router = useRouter();


  return (
    <>
      <Nav />
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Blogs by GirlUp Athena</Heading>
        {articles.map((art,i) => (
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
                  <Box
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
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
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                   {art["Title"]}
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                  noOfLines={8}
                  
                >
                 {art["Content"]}
                </Text>
                <Button
                  bg={"blue.400"}
                  marginTop={'4'}
                  color={"white"}
                  marginBottom={'4'}
                  _hover={{ bg: "blue.500" }}
                  width={'40'}
                  onClick={()=>Router.push(`readArticles/${i+1}`)}
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