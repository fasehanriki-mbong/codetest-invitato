import { Box, Flex, Button, VStack } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import HeroSection from "./herosection.jsx";
import WelcomeSection from "./welcomesection.jsx";
import Footer from "./footersection.jsx";
import { motion } from "framer-motion";


export default function Invitation() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);
  const MotionVStack = motion(VStack);


  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay diblokir browser:", err);
      });
    }
  };

  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play().catch((err) => {
        console.log("Autoplay diblokir browser:", err);
      });
    }
  }, [started]);

  return (
    <Flex
      h="100vh"
      w="100vw"
      overflow="hidden"
      direction={{ base: "column", md: "row" }}
    >
      <Box
        flex="1"
        bgImage="url('/dekorasi.png')"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        display={{ base: "none", md: "block" }}
      />

      <Box
        flex={{ base: "1", md: "0 0 40%" }}
        maxW={{ base: "100%", md: "40%" }}
        h="100vh"
        overflowY="auto"
        bgImage="url('/dekorasi2.jpg')"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        textAlign="center"
        p={{ base: 4, md: 6 }}
      >
        {!started ? (
          <Flex
            align="center"
            justify="center"
            h="100%"
            flexDirection="column"
          >
            <Button
              bg="teal.600"
              color="white"
              _hover={{ bg: "teal.700" }}
              mt={{ base: "auto", md: "0" }}
              mb={{ base: 12, md: 0 }}
              onClick={handleStart}
            >
              Buka Undangan
            </Button>
          </Flex>
        ) : (
          <MotionVStack
            spacing={10}
            align="stretch"
            p={{ base: 4, md: 6 }}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <audio ref={audioRef} src="/rabi2.mp3" preload="auto" />
            <HeroSection />
            <WelcomeSection />
            <Footer />
          </MotionVStack>
        )}
      </Box>
    </Flex>
  );
}
