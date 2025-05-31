import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #b8ccd9, 0 0 10px #b8ccd9, 0 0 15px #ffffff; }
  50% { box-shadow: 0 0 25px #b8ccd9, 0 0 35px #b8ccd9, 0 0 50px #ffffff; }
  100% { box-shadow: 0 0 5px #b8ccd9, 0 0 10px #b8ccd9, 0 0 15px #ffffff; }
`;

const flareAnimation = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
  100% { opacity: 0.3; transform: scale(1); }
`;

const fadeUpAnimation = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const flickerAnimation = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
`;

const MotionBox = motion(Box);

const GraciasGarnacho = () => {
  const cardBg = useColorModeValue('rgba(255,255,255,0.05)', 'rgba(0,0,0,0.3)');

  return (
    <Box
      minH="100vh"
      position="relative"
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      bg="linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))"
    >
      {/* Background Image with Overlay */}
      <Box
        position="absolute"
        top={14}
        left={0}
        right={0}
        bottom={0}
        bgImage="/public/images/goodbye.png"
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.9)"
        zIndex={0}
      >
        {/* Stadium Light Flare */}
        <Box
          position="absolute"
          right="35%"
          top="15%"
          w="300px"
          h="300px"
          bg="radial-gradient(circle, rgba(255,255,255,0.2), transparent)"
          pointerEvents="none"
          zIndex={1}
          animation={`${flareAnimation} 4s infinite`}
        />
        {/* Bokeh Effect (Dynamic Stars) */}
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            w={`${4 + Math.random() * 6}px`}
            h={`${4 + Math.random() * 6}px`}
            bg="#ffffff"
            opacity={0.2 + Math.random() * 0.3}
            borderRadius="50%"
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            animation={`${flickerAnimation} ${4 + Math.random() * 3}s infinite ease-in-out`}
            _before={{
              content: '""',
              position: 'absolute',
              w: `${8 + Math.random() * 4}px`,
              h: `${8 + Math.random() * 4}px`,
              bg: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
            }}
          />
        ))}
      </Box>

      {/* Content */}
      <Container maxW="1200px" w="100%" position="relative" zIndex={2} px={{ base: 4, md: 8 }}>
        <VStack
          spacing={{ base: 6, md: 10 }}
          align={{ base: "center", md: "flex-start" }}
          justify="center"
          minH="100vh"
          textAlign={{ base: "center", md: "left" }}
          color="#ffffff"
          w="full"
          maxW={{ base: "100%", md: "60%" }}
        >
          {/* Main Title */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, textShadow: "0 0 20px #ffffff, 0 0 30px #b8ccd9" }}
            viewport={{ once: true }}
            css={{ animation: `${fadeUpAnimation} 1s ease forwards` }}
          >
            <Heading
              fontFamily="'Bebas Neue', sans-serif"
              fontSize={{ base: '48px', md: '80px' }}
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="1.5px"
              textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 20px rgba(255, 255, 255, 0.5)"
            >
              GRACIAS GARNACHO
            </Heading>
          </MotionBox>

          {/* Subtitle */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            whileHover={{ textShadow: "0 0 15px #d8d8d8" }}
            viewport={{ once: true }}
            css={{ animation: `${fadeUpAnimation} 1.2s ease forwards` }}
          >
            <Text
              fontFamily="'Poppins', sans-serif"
              fontSize={{ base: '18px', md: '22px' }}
              maxW="600px"
              lineHeight="1.6"
              color="#d0d0d0"
              letterSpacing="2px"
              textShadow="0 0 5px rgba(255,255,255,0.3)"
              mt={{ base: 4, md: 6 }}
            >
              THE RISING STAR
            </Text>
          </MotionBox>

          {/* Primary CTA (Quote Button) */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            css={{ animation: `${fadeUpAnimation} 1.4s ease forwards` }}
          >
            <Button
              as="a"
              href="https://www.youtube.com/embed/9dRWu4f1RCc"
              padding={{ base: "12px 24px", md: "14px 28px" }}
              bg={cardBg}
              color="#ffffff"
              border="1px solid #ffffff"
              borderRadius="10px"
              boxShadow="0 0 25px rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(4px)"
              animation={`${glowAnimation} 2.5s infinite`}
              _hover={{
                bg: "rgba(255, 255, 255, 0.1)",
                animation: `${glowAnimation} 1.5s infinite`,
              }}
            >
              <Text
                fontFamily="'Poppins', sans-serif"
                fontSize={{ base: "14px", md: "16px" }}
                fontStyle="italic"
                letterSpacing="1px"
                textShadow="0 0 8px rgba(255,255,255,0.2)"
              >
                ONLY THE BEGINNING
              </Text>
            </Button>
          </MotionBox>
        </VStack>
      </Container>

      {/* Vignette Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)"
        zIndex={1}
      />
    </Box>
  );
};

export default GraciasGarnacho;