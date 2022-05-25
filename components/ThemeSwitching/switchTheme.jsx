import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

export const SwitchThemeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
 <Button
  onClick={toggleColorMode}
 >

     Switch Theme
 </Button>
  );
};