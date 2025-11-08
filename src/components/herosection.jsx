import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";

function HeroSection({ onOpenInvitation }) {
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
bgImage="url('public/dekorasi3.jpg')"    
bgSize="cover"
bgRepeat="no-repeat"
bgPos="center">
      <VStack spacing={4} maxW="80%" textAlign="center">
        <Heading fontSize="3xl" color="teal.700">
          The Wedding of Riki & Nilam
        </Heading>
        <Text fontSize="lg">20 Desember 2030 · Semarang</Text>
      </VStack>
    </Box>
  );
}

export default HeroSection;
