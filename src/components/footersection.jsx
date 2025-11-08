import { Box, VStack, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="rgba(255,255,255,0.5)"
      textAlign="center"
      bgImage="url('/dekorasi2.jpg'"
    >
      <VStack spacing={2} maxW="80%" mx="auto">
        <Text fontSize="md" color="gray.800">
          Terima kasih atas doa dan restu Bapak/Ibu/Saudara/i.
        </Text>
        <Text fontSize="sm" color="gray.600">
          Kami yang berbahagia, <br />
          <b>Riki & Nilam</b>
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
