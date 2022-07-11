import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react';
import React from 'react'






const Links = [{name:'Home',Link:"/"}, {name:'About Us',Link:'/About'}, {name:'Blogs',Link:"/articles"},{name:'Team',Link:"/Team"},{name:'Share a story',Link:"/Contact"},{name:'Gallery',Link:"/Gallery"}];



function NavLink(link,index) {
  return (
    <React.Fragment key={index}>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={link.Link}
    >
      <Text fontWeight={600} fontSize={'2xl'} fontFamily={'fantasy'}>{link.name}</Text>
    </Link>
    </React.Fragment>
  );
}

export default function WithAction() {
 const closure = useDisclosure();
 const color = useColorMode();

  const { isOpen, onOpen, onClose } = closure;
  const { toggleColorMode, colorMode } = color;

  return (
    <>
      <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link,index) => (
                NavLink(link,index)
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              mr={4}
              onClick={toggleColorMode}
            >
              {colorMode == "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={16}
                  width={16}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={16}
                  width={16}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link,index) => (
                NavLink(link,index)
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}