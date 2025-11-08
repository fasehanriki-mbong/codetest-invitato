import { Box, VStack, Text, Heading } from "@chakra-ui/react";

function WelcomeSection() {
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('public/dekorasi2.jpg')"
      textAlign="center"
    >
      <VStack spacing={4} maxW="80%" mx="auto">
        <Heading fontSize="2xl" color="teal.700">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i
          untuk hadir dalam acara bahagia kami.
        </Text>
      </VStack>
    </Box>
  );
}

export default WelcomeSection;
