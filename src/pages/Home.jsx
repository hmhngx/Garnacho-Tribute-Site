import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  HStack,
  Icon,
  VStack,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FaPlay, FaBookOpen, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Home = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  useEffect(() => {
    // Ensure audio is paused when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const cards = [
    {
      title: 'About Garnacho',
      description: 'Know more about Garnacho.',
      image: '/src/assets/bio.png',
      link: '/bio',
      type: 'article',
    },
    {
      title: 'Garnacho Stats',
      description: 'Check out Alejandro Garnacho’s performance stats.',
      image: '/src/assets/stats.png',
      link: '/stats',
      type: 'article',
    },
    {
      title: 'Career Milestones',
      description: 'Explore the key moments that shaped his journey.',
      image: '/src/assets/goals.png',
      link: '/career-history',
      type: 'article',
    },
    {
      title: 'All Goals',
      description: 'All the goals Garnacho has scored for Manchester United first team',
      image: '/src/assets/garnacho-hero.jpg',
      link: '/goals',
      type: 'article',
    },
    {
      title: 'Shop Merchandise',
      description: 'Get official Garnacho gear and collectibles.',
      image: '/src/assets/merch.png',
      link: '/merchandise',
      type: 'article',
    },
  ];

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const background = document.getElementById('background-image');
      if (background) {
        background.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      minH="100vh"
      bg="#0A0A0A"
      py={{ base: 4, md: 8, lg: 12 }}
      px={{ base: 2, md: 4, lg: 8 }}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
      fontFamily="'Poppins', sans-serif"
    >
      {/* Audio Element (hidden) */}
      <audio ref={audioRef} src="/src/assets/viva-garnacho.mp3" loop />

      {/* Navigation Bar */}
      <Box
        bg="rgba(0, 0, 0, 0.8)"
        py={3}
        px={{ base: 4, md: 8 }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      >
        <Flex justify="space-between" align="center">
          <HStack spacing={4}>
            {['Bio', 'Stats', 'Career', 'Goals', 'Merchandise'].map((item) => (
              <Button
                key={item}
                as={RouterLink}
                to={`/${item.toLowerCase()}`}
                variant="ghost"
                color="white"
                _hover={{ color: '#D32F2F', transform: 'scale(1.05)' }}
                transition="all 0.3s"
              >
                {item}
              </Button>
            ))}
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box
        position="relative"
        height="100vh"
        minHeight="100vh"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Background with Parallax and Glow */}
        <MotionBox
          id="background-image"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          bgImage="/src/assets/nobg4.png"
          bgSize="cover"
          bgPosition="center"
          filter="brightness(0.5) blur(2px)"
          opacity={0.7}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        >
          {/* Faded Background Silhouette */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgImage="/src/assets/garnacho-hero.jpg"
            bgSize="contain"
            bgPosition="bottom right"
            bgRepeat="no-repeat"
            opacity={0.3}
            mixBlendMode="overlay"
          />
          {/* Radial Crimson Glow */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="80%"
            height="80%"
            bg="radial-gradient(circle, rgba(153, 0, 0, 0.3), transparent)"
            zIndex={1}
          />
        </MotionBox>

        {/* Foreground: Garnacho Image */}
        <MotionImage
          src="/src/assets/nobg.png"
          alt="Alejandro Garnacho"
          position="absolute"
          zIndex={2}
          boxSize={{ base: '250px', md: '350px', lg: '700px' }}
          right={{ base: '5%', md: '10%', lg: '15%' }}
          objectFit="contain"
          filter="brightness(1.2) drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 20px #D32F2F)' }}
          transition={{ duration: 0.5 }}
        />

        {/* Text Overlay */}
        <Container maxW="100vw" width="100%" position="relative" zIndex={3} px={{ base: 2, md: 4, lg: 8 }}>
          <VStack align="flex-start" spacing={2} ml={{ base: 4, md: 8, lg: 12 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
                fontWeight="300"
                textTransform="uppercase"
                color="white"
                letterSpacing="2px"
                textShadow="0 0 12px rgba(211, 47, 47, 0.5)"
              >
                Alejandro
              </Heading>
              <Heading
                fontSize={{ base: '3xl', md: '5xl', lg: '8xl' }}
                fontWeight="800"
                textTransform="uppercase"
                bgGradient="linear(to-r, #D32F2F, #FF6666)"
                bgClip="text"
                letterSpacing="2px"
                textShadow="0 0 12px rgba(211, 47, 47, 0.5)"
              >
                Garnacho
              </Heading>
              <Heading
                fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
                fontWeight="300"
                textTransform="uppercase"
                color="white"
                letterSpacing="4px"
                textShadow="0 0 8px rgba(211, 47, 47, 0.3)"
              >
                #17 Red Devil
              </Heading>
            </MotionBox>

            {/* Subheading */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="gray.200"
                maxW="500px"
                mt={4}
              >
                VIVA GARNACHO
              </Text>
            </MotionBox>

            {/* CTA Buttons and Audio Toggle */}
            <HStack spacing={4} mt={6}>
              <Button
                as={RouterLink}
                to="/gallery"
                size="lg"
                bg="#D32F2F"
                color="white"
                borderRadius="full"
                leftIcon={<Icon as={FaPlay} />}
                boxShadow="0 0 15px rgba(211, 47, 47, 0.5)"
                _hover={{
                  bg: '#FF6666',
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 20px rgba(211, 47, 47, 0.8)',
                }}
              >
                Garnacho's Remarks
              </Button>
              <IconButton
                aria-label={isAudioPlaying ? 'Play Audio' : 'Mute Audio'}
                icon={<Icon as={isAudioPlaying ?  FaVolumeUp : FaVolumeMute} />}
                onClick={toggleAudio}
                size="lg"
                variant="outline"
                colorScheme="red"
                borderRadius="full"
                _hover={{ transform: 'scale(1.1)' }}
              />
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Card Slider Section */}
      <Box id="cards" py={{ base: 8, md: 12, lg: 16 }} bg="rgba(0, 0, 0, 0.8)">
        <Container maxW="100vw" width="100%">
          <HStack
            spacing={{ base: 2, md: 4, lg: 8 }}
            overflowX="auto"
            py={4}
            px={{ base: 1, md: 2, lg: 4 }}
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            }}
          >
            {cards.map((card, index) => (
              <MotionBox
                key={index}
                minW={{ base: '200px', md: '250px', lg: '300px' }}
                maxW={{ base: '200px', md: '250px', lg: '300px' }}
                minH={{ base: '300px', md: '350px', lg: '400px' }}
                position="relative"
                overflow="hidden"
                borderRadius="xl"
                boxShadow="0 0 15px rgba(211, 47, 47, 0.3)"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(211, 47, 47, 0.6)',
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  filter="brightness(1.1)"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-b, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))"
                />
                <VStack
                  position="absolute"
                  bottom={4}
                  left={4}
                  right={4}
                  spacing={2}
                  align="start"
                  p={3}
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(8px)"
                  borderRadius="md"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                >
                  <Text
                    fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
                    fontWeight="bold"
                    color="white"
                    textShadow="0 0 5px rgba(0, 0, 0, 0.5)"
                    lineHeight="shorter"
                  >
                    {card.title}
                  </Text>
                  <Text
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    fontWeight="light"
                    color="gray.100"
                    textShadow="0 0 5px rgba(0, 0, 0, 0.5)"
                    lineHeight="normal"
                    noOfLines={3}
                  >
                    {card.description}
                  </Text>
                  <Button
                    as={RouterLink}
                    to={card.link}
                    size="sm"
                    bgGradient="linear(to-r, #D32F2F, #FF6666)"
                    color="white"
                    borderRadius="full"
                    leftIcon={<Icon as={card.type === 'video' ? FaPlay : FaBookOpen} />}
                    boxShadow="0 0 10px rgba(211, 47, 47, 0.5)"
                    _hover={{
                      bgGradient: 'linear(to-r, #FF6666, #D32F2F)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 15px rgba(211, 47, 47, 0.8)',
                    }}
                  >
                    {card.type === 'video' ? 'Watch' : 'Read More'}
                  </Button>
                </VStack>
              </MotionBox>
            ))}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;