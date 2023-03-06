import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box maxW="1500px" p={["10"]} mx="auto" my="20">
      {children}
    </Box>
  );
}