import React from "react";
import { Box, Flex, Input } from "@chakra-ui/core";

function LoginPage() {
  return (
    <>
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Box rounded="md" backgroundColor="tomato" padding="2rem">
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Input placeholder="username" size="lg" margin="1rem 0" />
            <Input
              placeholder="password"
              type="password"
              size="lg"
              margin="1rem 0"
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default LoginPage;
