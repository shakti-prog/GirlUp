import { useRouter } from "next/router";
import articles from "../../staticData/articleData";

import { Flex, Box, Stack, Text,Container,Heading,useColorModeValue} from '@chakra-ui/react';
import Nav from '../../components/navbar';
import SmallCentered from '../../components/footer'


export default function WithLargeQuote() {

  const router = useRouter();
  if(router==undefined){
      return <p>
          Nothing to display
      </p>
  }
  const ind = parseInt(router.query.id);
  if(articles[ind-1]==undefined || articles[ind-1]["Title"] == undefined || articles[ind-1]["Content"] == undefined){
      return (
          <p>
              No article to display
          </p>
      )
  }

  return (
     <> 
    <Nav/>
    <Box bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} 
      position={'relative'}
      width={'auto'}  
      height={'auto'}
      >
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        position={'absolute'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'auto'}
          h={'auto'}
        />
      </Flex>
      <Container maxW={'7xl'} maxH={'auto'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 40 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
              
                mb={5}
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize={{ base: '3xl', md: '5xl' }}>
                {articles[ind-1]["Title"]}
              </Heading>
              <Text fontSize={'xl'} color={useColorModeValue('gray.700', 'gray.200')}>
                {articles[ind-1]["Content"]}
              </Text>
            </Box>
            </Stack>
          </Stack>
          </Container>
        </Box>   
       
        </> 
  );
}