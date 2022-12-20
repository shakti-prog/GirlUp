import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  
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
              alt={"Nothing"}
            />
          </Box>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'} fontFamily={'fantasy'} fontWeight={800}>
              {props.name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={400} fontSize={'xl'} fontFamily={'cursive'}>
                {props.role}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }