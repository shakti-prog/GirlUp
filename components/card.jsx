import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function Card(props) {
    return (
      <Center py={2}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={12}
            pos={'relative'}
            height={'400px'}
            >
            <Image
              rounded={'lg'}
              height={300}
              width={282}
              objectFit={'cover'}
              src={props.path}
            />
          </Box>
          <Stack align={'center'}>
          
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {props.name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {props.role}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }