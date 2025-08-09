import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const warmGlowAnimation = keyframes`
  0% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), 0 0 40px rgba(220, 38, 38, 0.2); }
  50% { box-shadow: 0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.3); }
  100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), 0 0 40px rgba(220, 38, 38, 0.2); }
`;

const stadiumLightAnimation = keyframes`
  0% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
  100% { opacity: 0.4; transform: scale(1); }
`;

const pullQuoteAnimation = keyframes`
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const netflixButtonHover = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const MotionBox = motion(Box);

const GraciasGarnacho = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      minH="100vh"
      position="relative"
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      bg="linear-gradient(135deg, #1a0a0a 0%, #2d1b1b 50%, #1a0a0a 100%)"
      fontFamily="'Playfair Display', serif"
    >
      {/* Cinematic Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="/images/goodbye.png"
          bgSize="cover"
          bgPosition="center"
          filter="brightness(0.6) contrast(1.2) saturate(1.1)"
        />
        
        {/* Warm Stadium Light Gradients */}
        <Box
          position="absolute"
          top="20%"
          right="10%"
          w="400px"
          h="400px"
          bg="radial-gradient(circle, rgba(220, 38, 38, 0.3), rgba(245, 158, 11, 0.2), transparent)"
          animation={`${stadiumLightAnimation} 6s infinite ease-in-out`}
        />
        
        <Box
          position="absolute"
          bottom="30%"
          left="15%"
          w="300px"
          h="300px"
          bg="radial-gradient(circle, rgba(245, 158, 11, 0.2), rgba(220, 38, 38, 0.1), transparent)"
          animation={`${stadiumLightAnimation} 8s infinite ease-in-out`}
        />
      </Box>

      {/* Dark Vignette for Focus */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)"
        zIndex={1}
      />

             {/* Content Container */}
       <Container maxW="1400px" w="100%" position="relative" zIndex={2} px={{ base: 4, md: 8 }}>
         <VStack
           spacing={{ base: 10, md: 16 }}
           align="center"
           justify="center"
           minH="100vh"
           textAlign="center"
           color="#ffffff"
           w="full"
           pt={{ base: 20, md: 32 }}
           pb={{ base: 10, md: 16 }}
         >
          {/* Hero Section */}
          <MotionBox
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 60 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            w="full"
            maxW="800px"
          >
            {/* Main Title with Elegant Typography */}
            <VStack spacing={4} mb={2}>
              <Heading
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: '48px', md: '72px', lg: '96px' }}
                fontWeight="300"
                textTransform="uppercase"
                letterSpacing="3px"
                lineHeight="0.9"
                color="#ffffff"
                textShadow="0 0 30px rgba(220, 38, 38, 0.5)"
                mb={2}
              >
                Gracias
              </Heading>
              <Heading
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: '48px', md: '72px', lg: '96px' }}
                fontWeight="400"
                textTransform="uppercase"
                letterSpacing="3px"
                lineHeight="0.9"
                color="#dc2626"
                textShadow="0 0 30px rgba(220, 38, 38, 0.8)"
                bgGradient="linear(to-r, #dc2626, #f59e0b)"
                bgClip="text"
              >
                Garnacho
              </Heading>
            </VStack>

            {/* Dramatic Subheading */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            >
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: '18px', md: '22px' }}
                fontWeight="300"
                letterSpacing="2px"
                color="#e5e7eb"
                textShadow="0 0 10px rgba(255,255,255,0.3)"
                maxW="600px"
                mx="auto"
                lineHeight="1.6"
              >
                THE YOUNG STARBOY WHO IGNITED THE THEATRE OF DREAMS
              </Text>
            </MotionBox>
          </MotionBox>

          {/* Cinematic Pull Quote */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ delay: 1.2, duration: 1.8 }}
            w="full"
            maxW="900px"
            px={{ base: 6, md: 12 }}
            py={{ base: 8, md: 12 }}
            bg="rgba(0,0,0,0.4)"
            borderRadius="20px"
            border="1px solid rgba(220, 38, 38, 0.3)"
            backdropFilter="blur(10px)"
            animation={`${pullQuoteAnimation} 2s ease-out`}
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: '20px', md: '28px', lg: '32px' }}
              fontWeight="300"
              lineHeight="1.6"
              color="#f3f4f6"
              textAlign="center"
              fontStyle="italic"
              letterSpacing="1px"
            >
              "Every touch, every goal, every moment of{" "}
              <Text as="span" color="#f59e0b" fontWeight="400" textShadow="0 0 10px rgba(245, 158, 11, 0.5)">
                magic
              </Text>{" "}
              - you brought joy to millions. Your journey at United will forever be remembered in the hearts of the{" "}
              <Text as="span" color="#dc2626" fontWeight="400" textShadow="0 0 10px rgba(220, 38, 38, 0.5)">
                Red Devils
              </Text>."
            </Text>
          </MotionBox>

          {/* Netflix-Style CTA Button */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ delay: 1.8, duration: 1.2 }}
            position="sticky"
            bottom="40px"
            zIndex={10}
          >
            <Button
              as="a"
              href="https://www.youtube.com/embed/9dRWu4f1RCc"
              size="lg"
              padding={{ base: "20px 40px", md: "24px 48px" }}
              bg="linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
              color="#ffffff"
              border="2px solid rgba(245, 158, 11, 0.5)"
              borderRadius="50px"
              boxShadow="0 8px 32px rgba(220, 38, 38, 0.3)"
              backdropFilter="blur(10px)"
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "18px", md: "20px" }}
              fontWeight="500"
              letterSpacing="1px"
              textTransform="uppercase"
              _hover={{
                bg: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 40px rgba(220, 38, 38, 0.5)",
                animation: `${netflixButtonHover} 0.3s ease-in-out`,
              }}
              _active={{
                transform: "translateY(0px)",
                boxShadow: "0 4px 20px rgba(220, 38, 38, 0.4)",
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              animation={`${warmGlowAnimation} 3s infinite`}
            >
              Watch His Journey
            </Button>
          </MotionBox>

          {/* Scroll Indicator */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            position="absolute"
            bottom="20px"
            left="50%"
            transform="translateX(-50%)"
          >
            <VStack spacing={3}>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize="14px"
                color="rgba(245, 158, 11, 0.8)"
                letterSpacing="2px"
                textTransform="uppercase"
                fontWeight="300"
              >
                Explore His Story
              </Text>
              <Icon
                as={ChevronDownIcon}
                w={8}
                h={8}
                color="rgba(245, 158, 11, 0.6)"
                animation="bounce 2s infinite"
              />
            </VStack>
          </MotionBox>
        </VStack>
      </Container>

             {/* Chapter-like Scroll Effects */}
       <Box
         position="fixed"
         top="20px"
         right="20px"
         zIndex={20}
         opacity={0.7}
         pointerEvents="none"
       >
        <Text
          fontFamily="'Playfair Display', serif"
          fontSize="12px"
          color="rgba(245, 158, 11, 0.7)"
          letterSpacing="1px"
          textTransform="uppercase"
        >
          Chapter I: The Farewell
        </Text>
      </Box>

      {/* Optional Background Sound Indicator */}
      <Box
        position="fixed"
        bottom="20px"
        left="20px"
        zIndex={20}
        opacity={0.6}
        _hover={{ opacity: 1 }}
        cursor="pointer"
        transition="opacity 0.3s"
      >
        <Text
          fontFamily="'Playfair Display', serif"
          fontSize="12px"
          color="rgba(245, 158, 11, 0.7)"
          letterSpacing="1px"
        >
          🔊 Crowd Ambience
        </Text>
      </Box>
    </Box>
  );
};

export default GraciasGarnacho;