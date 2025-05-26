import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000; }
  50% { box-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000; }
  100% { box-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000; }
`;

const MotionBox = motion(Box);

const GraciasGarnacho = () => {
  return (
    <Box
      minH="100vh"
      position="relative"
      w="100vw"
      minW="100vw"
      overflowX="hidden"
    >
      {/* Background Image with Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/placeholder.jpg')"
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.5)"
      />

      {/* Content */}
      <Container maxW="100vw" width="100%" position="relative" zIndex={1}>
        <VStack
          spacing={8}
          align="center"
          justify="center"
          minH="100vh"
          textAlign="center"
          color="white"
          w="full"
          maxW="100%"
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              mb={6}
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              Gracias Garnacho
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              maxW="800px"
              lineHeight="1.8"
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              Thank you for bringing joy, excitement, and hope to Manchester United and football
              fans around the world. Your passion, skill, and dedication inspire us all.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Box
              p={8}
              borderRadius="lg"
              bg={useColorModeValue('rgba(255,255,255,0.1)', 'rgba(0,0,0,0.3)')}
              backdropFilter="blur(10px)"
              animation={`${glowAnimation} 2s infinite`}
            >
              <Text fontSize="lg" fontStyle="italic">
                "The future is bright, and you are leading the way."
              </Text>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default GraciasGarnacho;