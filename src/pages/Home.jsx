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
  Grid,
  GridItem,
  Badge,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { FaPlay, FaBookOpen, FaVolumeUp, FaVolumeMute, FaArrowDown, FaTrophy, FaHandshake, FaFutbol, FaSearch } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const Home = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const audioRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Transform values for scroll-based animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const navBg = useTransform(scrollYProgress, [0, 0.1], ['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.95)']);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const scrollToCards = () => {
    console.log('Scroll to cards function called');
    setTimeout(() => {
      const cardsSection = document.getElementById('cards');
      console.log('Cards section found:', cardsSection);
      if (cardsSection) {
        cardsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Cards section not found');
        // Fallback: scroll to approximate position
        window.scrollTo({
          top: window.innerHeight * 2,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Stats carousel data
  const playerStats = [
    { label: 'Goals', value: '26', icon: FaFutbol, color: '#D32F2F' },
    { label: 'Assists', value: '19', icon: FaHandshake, color: '#FF6666' },
    { label: 'Trophies Won', value: '4', icon: FaTrophy, color: '#FFD700' },
    { label: 'Appearances', value: '144', icon: FaFutbol, color: '#4CAF50' },
  ];

  // Auto-rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % playerStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [playerStats.length]);

  useEffect(() => {
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
      image: '/images/bio.png',
      link: '/bio',
      type: 'article',
    },
    {
      title: 'Garnacho Stats',
      description: 'Check out Alejandro Garnacho\'s performance stats.',
      image: '/images/stats.png',
      link: '/stats',
      type: 'article',
    },
    {
      title: 'Career Milestones',
      description: 'Explore the key moments that shaped his journey.',
      image: '/images/goals.png',
      link: '/career-history',
      type: 'article',
    },
    {
      title: 'All Goals',
      description: 'All the goals Garnacho has scored for Manchester United first team',
      image: '/images/garnacho-hero.jpg',
      link: '/goals',
      type: 'article',
    },
    {
      title: 'Shop Merchandise',
      description: 'Get official Garnacho gear and collectibles.',
      image: '/images/merch.png',
      link: '/merchandise',
      type: 'article',
    },
  ];

  return (
    <Box
      ref={containerRef}
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
      <audio ref={audioRef} src="/viva-garnacho.mp3" loop />

      {/* Enhanced Sticky Navigation Bar */}
      <MotionBox
        style={{ backgroundColor: navBg }}
        py={3}
        px={{ base: 4, md: 8 }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={20}
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Flex justify="space-between" align="center">
          <HStack spacing={4}>
            <Image src="/clubs/Manchester-United-FC-logo.png" alt="Man United" height="30px" />
            <Text color="white" fontWeight="bold" fontSize="lg">GARNACHO</Text>
          </HStack>
                     <HStack spacing={4}>
             {['Bio', 'Stats', 'Career', 'Goals', 'Merchandise'].map((item) => (
               <Button
                 key={item}
                 as={RouterLink}
                 to={`/${item.toLowerCase()}`}
                 variant="ghost"
                 color="white"
                 _hover={{ 
                   color: '#D32F2F', 
                   transform: 'scale(1.05)',
                   bg: 'rgba(211, 47, 47, 0.1)'
                 }}
                 transition="all 0.3s"
                 borderRadius="full"
                 px={4}
               >
                 {item}
               </Button>
             ))}
             <IconButton
               aria-label="Explore Cards"
               icon={<Icon as={FaSearch} />}
               onClick={scrollToCards}
               variant="ghost"
               color="white"
               _hover={{ 
                 color: '#D32F2F', 
                 transform: 'scale(1.05)',
                 bg: 'rgba(211, 47, 47, 0.1)'
               }}
               transition="all 0.3s"
               borderRadius="full"
               size="md"
             />
           </HStack>
        </Flex>
      </MotionBox>

      {/* Enhanced Hero Section */}
      <MotionBox
        style={{ opacity: heroOpacity, scale: heroScale }}
        position="relative"
        height="100vh"
        minHeight="100vh"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Multi-layered Background with Enhanced Depth */}
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          bgImage="/images/nobg4.png"
          bgSize="cover"
          bgPosition="center"
          filter="brightness(0.4) blur(3px)"
          opacity={0.8}
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        >
          {/* Enhanced Gradient Overlays */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(211,47,47,0.2), rgba(0,0,0,0.8))"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="90%"
            height="90%"
            bg="radial-gradient(circle, rgba(153, 0, 0, 0.4), transparent 70%)"
            zIndex={1}
          />
          {/* Animated Particle Effect */}
          <Box
            position="absolute"
            top="20%"
            left="10%"
            width="4px"
            height="4px"
            bg="#D32F2F"
            borderRadius="50%"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </MotionBox>

        {/* Enhanced Foreground: Garnacho Image */}
        <MotionImage
          src="/images/nobg.png"
          alt="Alejandro Garnacho"
          position="absolute"
          zIndex={2}
          width={{ base: '250px', md: '350px', lg: '415px', xl: '600px' }}
          maxW="50%"
          bottom={{ base: '10%', md: '15%', lg: '0%' }}
          right={{ base: '5%', md: '5%', lg: '12%', xl: '37%' }}
          objectFit="contain"
          filter="brightness(1.3) drop-shadow(0 0 25px rgba(211, 47, 47, 0.8))"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ 
            scale: 1.08, 
            filter: 'drop-shadow(0 0 30px #D32F2F)',
            rotateY: 5
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Enhanced Text Overlay */}
        <Container maxW="100vw" width="100%" position="relative" zIndex={3} px={{ base: 2, md: 4, lg: 8 }}>
          <VStack align="flex-start" spacing={2} ml={{ base: 4, md: 8, lg: 12 }}>
            <MotionBox
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
                             <MotionHeading
                 fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
                 fontWeight="700"
                 fontFamily="'Oswald', sans-serif"
                 textTransform="uppercase"
                 color="white"
                 letterSpacing="0.15em"
                 textShadow="0 0 20px rgba(211, 47, 47, 0.8), 0 0 40px rgba(139, 0, 0, 0.6)"
                 animate={{ 
                   textShadow: [
                     "0 0 20px rgba(211, 47, 47, 0.8), 0 0 40px rgba(139, 0, 0, 0.6)", 
                     "0 0 30px rgba(211, 47, 47, 1), 0 0 50px rgba(139, 0, 0, 0.8)", 
                     "0 0 20px rgba(211, 47, 47, 0.8), 0 0 40px rgba(139, 0, 0, 0.6)"
                   ] 
                 }}
                 transition={{ duration: 2, repeat: Infinity }}
                 position="relative"
                 _before={{
                   content: '""',
                   position: 'absolute',
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 0,
                   background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grunge" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23grunge)"%3E%3C/rect%3E%3C/svg%3E")',
                   opacity: 0.3,
                   mixBlendMode: 'overlay',
                   pointerEvents: 'none'
                 }}
               >
                 Alejandro
               </MotionHeading>
               <MotionHeading
                 fontSize={{ base: '4xl', md: '6xl', lg: '9xl' }}
                 fontWeight="900"
                 fontFamily="'Anton', sans-serif"
                 textTransform="uppercase"
                 bgGradient="linear(to-r, #D32F2F, #8B0000, #D32F2F)"
                 bgClip="text"
                 letterSpacing="0.1em"
                 textShadow="0 0 30px rgba(139, 0, 0, 0.9), 0 0 60px rgba(211, 47, 47, 0.6)"
                 animate={{ 
                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                   textShadow: [
                     "0 0 30px rgba(139, 0, 0, 0.9), 0 0 60px rgba(211, 47, 47, 0.6)",
                     "0 0 40px rgba(139, 0, 0, 1), 0 0 80px rgba(211, 47, 47, 0.8)",
                     "0 0 30px rgba(139, 0, 0, 0.9), 0 0 60px rgba(211, 47, 47, 0.6)"
                   ]
                 }}
                 transition={{ duration: 3, repeat: Infinity }}
                 position="relative"
                 _before={{
                   content: '""',
                   position: 'absolute',
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 0,
                   background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grunge2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"%3E%3Crect x="0" y="0" width="2" height="2" fill="rgba(255,255,255,0.2)"%3E%3C/rect%3E%3Crect x="15" y="15" width="1" height="1" fill="rgba(255,255,255,0.1)"%3E%3C/rect%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23grunge2)"%3E%3C/rect%3E%3C/svg%3E")',
                   opacity: 0.4,
                   mixBlendMode: 'overlay',
                   pointerEvents: 'none'
                 }}
                 _after={{
                   content: '""',
                   position: 'absolute',
                   top: '50%',
                   left: '50%',
                   transform: 'translate(-50%, -50%)',
                   width: '120%',
                   height: '120%',
                   background: 'radial-gradient(circle, rgba(139, 0, 0, 0.3) 0%, transparent 70%)',
                   filter: 'blur(20px)',
                   zIndex: -1,
                   pointerEvents: 'none'
                 }}
               >
                 Garnacho
               </MotionHeading>
              <MotionHeading
                fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
                fontWeight="600"
                textTransform="uppercase"
                color="white"
                letterSpacing="4px"
                textShadow="0 0 12px rgba(211, 47, 47, 0.4)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                #17 Red Devil
              </MotionHeading>
            </MotionBox>

            {/* Enhanced Subheading */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="gray.200"
                maxW="500px"
                mt={4}
                fontWeight="600"
                letterSpacing="1px"
              >
                VIVA GARNACHO
              </Text>
            </MotionBox>

            {/* Enhanced CTA Buttons and Audio Toggle */}
            <HStack spacing={4} mt={8}>
              <MotionButton
                as={RouterLink}
                to="/gallery"
                size="lg"
                bgGradient="linear(to-r, #D32F2F, #FF6666)"
                color="white"
                borderRadius="full"
                leftIcon={<Icon as={FaPlay} />}
                boxShadow="0 0 20px rgba(211, 47, 47, 0.6)"
                _hover={{
                  bgGradient: 'linear(to-r, #FF6666, #D32F2F)',
                  transform: 'scale(1.08)',
                  boxShadow: '0 0 30px rgba(211, 47, 47, 0.9)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Garnacho's Remarks
              </MotionButton>
              <MotionIconButton
                aria-label={isAudioPlaying ? 'Play Audio' : 'Mute Audio'}
                icon={<Icon as={isAudioPlaying ? FaVolumeUp : FaVolumeMute} />}
                onClick={toggleAudio}
                size="lg"
                variant="outline"
                colorScheme="red"
                borderRadius="full"
                _hover={{ transform: 'scale(1.1)', bg: 'rgba(211, 47, 47, 0.1)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </HStack>
          </VStack>
        </Container>

        {/* Scroll Prompt */}
        <MotionBox
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          zIndex={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <VStack spacing={2}>
            <Text color="white" fontSize="sm" opacity={0.8}>Scroll to explore</Text>
            <MotionBox
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon as={FaArrowDown} color="white" opacity={0.6} />
            </MotionBox>
          </VStack>
        </MotionBox>
      </MotionBox>

      {/* Dynamic Stats Carousel Section */}
      <Box py={{ base: 12, md: 16, lg: 20 }} bg="rgba(0, 0, 0, 0.9)">
        <Container maxW="100vw" width="100%">
          <VStack spacing={8}>
            <MotionHeading
              color="white"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Career Statistics
            </MotionHeading>
            
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={6}
              w="100%"
              maxW="1200px"
            >
              {playerStats.map((stat, index) => (
                <MotionGridItem
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box
                    bg="rgba(255, 255, 255, 0.05)"
                    p={6}
                    borderRadius="xl"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(10px)"
                    textAlign="center"
                    position="relative"
                    overflow="hidden"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      bg: stat.color,
                      transform: index === currentStatIndex ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Icon 
                      as={stat.icon} 
                      color={stat.color} 
                      fontSize="3xl" 
                      mb={4}
                      filter="drop-shadow(0 0 10px rgba(255,255,255,0.3))"
                    />
                    <Stat>
                      <StatNumber color="white" fontSize="3xl" fontWeight="bold">
                        {stat.value}
                      </StatNumber>
                      <StatLabel color="gray.300" fontSize="sm">
                        {stat.label}
                      </StatLabel>
                    </Stat>
                  </Box>
                </MotionGridItem>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Enhanced Card Slider Section */}
      <Box id="cards" py={{ base: 12, md: 16, lg: 20 }} bg="rgba(0, 0, 0, 0.95)">
        <Container maxW="100vw" width="100%">
          <MotionHeading
            color="white"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign="center"
            mb={8}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore Garnacho's World
          </MotionHeading>
          
          <HStack
            spacing={{ base: 4, md: 6, lg: 8 }}
            overflowX="auto"
            py={6}
            px={{ base: 2, md: 4, lg: 6 }}
            css={{
              '&::-webkit-scrollbar': { 
                height: '8px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '4px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#D32F2F',
                borderRadius: '4px'
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '4px'
              }
            }}
          >
            {cards.map((card, index) => (
              <MotionBox
                key={index}
                minW={{ base: '220px', md: '280px', lg: '320px' }}
                maxW={{ base: '220px', md: '280px', lg: '320px' }}
                minH={{ base: '320px', md: '380px', lg: '420px' }}
                position="relative"
                overflow="hidden"
                borderRadius="xl"
                boxShadow="0 0 20px rgba(211, 47, 47, 0.4), 0 0 30px #D32F2F"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 25px rgba(211, 47, 47, 0.7), 0 0 40px #D32F2F',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <MotionImage
                  src={card.image}
                  alt={card.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  filter="brightness(1.1)"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-b, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))"
                />
                <VStack
                  position="absolute"
                  bottom={4}
                  left={4}
                  right={4}
                  spacing={3}
                  align="start"
                  p={4}
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(12px)"
                  borderRadius="lg"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                >
                  <Text
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    fontWeight="bold"
                    color="white"
                    textShadow="0 0 8px rgba(0, 0, 0, 0.7)"
                    lineHeight="shorter"
                  >
                    {card.title}
                  </Text>
                  <Text
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    fontWeight="light"
                    color="gray.100"
                    textShadow="0 0 6px rgba(0, 0, 0, 0.7)"
                    lineHeight="normal"
                    noOfLines={3}
                  >
                    {card.description}
                  </Text>
                  <MotionButton
                    as={RouterLink}
                    to={card.link}
                    size="sm"
                    bgGradient="linear(to-r, #D32F2F, #FF6666)"
                    color="white"
                    borderRadius="full"
                    leftIcon={<Icon as={card.type === 'video' ? FaPlay : FaBookOpen} />}
                    boxShadow="0 0 15px rgba(211, 47, 47, 0.6)"
                    _hover={{
                      bgGradient: 'linear(to-r, #FF6666, #D32F2F)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 20px rgba(211, 47, 47, 0.9)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.type === 'video' ? 'Watch' : 'Read More'}
                  </MotionButton>
                </VStack>
              </MotionBox>
            ))}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

// Motion components
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);
const MotionGridItem = motion(GridItem);

export default Home;