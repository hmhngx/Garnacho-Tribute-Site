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
} from '@chakra-ui/react';
import { FaPlay, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
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

  return (
    <Box
      minH="100vh"
      bg="#0A0A0A"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
    >
      {/* Navigation Bar */}
      <Box
        bg="rgba(0, 0, 0, 0.8)"
        py={3}
        px={{ base: 4, md: 8 }}
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      >
        <HStack justify="space-between" align="center" color="white">
          <HStack spacing={6}>
            <Text _hover={{ color: '#D32F2F', transform: 'scale(1.05)' }} transition="all 0.3s">Bio</Text>
            <Text _hover={{ color: '#D32F2F', transform: 'scale(1.05)' }} transition="all 0.3s">Stats</Text>
          </HStack>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
            alt="Manchester United Logo"
            boxSize={{ base: '40px', md: '50px' }}
            objectFit="contain"
          />
          <HStack spacing={6}>
            <Text _hover={{ color: '#D32F2F', transform: 'scale(1.05)' }} transition="all 0.3s">Shop</Text>
            <Text _hover={{ color: '#D32F2F', transform: 'scale(1.05)' }} transition="all 0.3s">Gallery</Text>
          </HStack>
        </HStack>
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
        {/* Background with Neon Eiffel Tower and Messi Silhouette */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          bgImage="/src/assets/nobg4.png"
          bgSize="cover"
          bgPosition="center"
          filter="brightness(0.5)"
          opacity={1}
        >
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
          />
        </Box>

        {/* Background Text: VIVA GARNACHO 17 */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          position="absolute"
          zIndex={1}
          textAlign="center"
        >
          <Heading
            fontSize={{ base: '5xl', md: '7xl', lg: '9xl' }}
            fontWeight="extrabold"
            fontFamily="sans-serif"
            textTransform="uppercase"
            color="white"
            opacity={1}
            textShadow="0 0 20px rgba(211, 47, 47, 0.5)"
          >
            VIVA GARNACHO <Text as="span" color="#D32F2F">17</Text>
          </Heading>
        </MotionBox>

        {/* Foreground: Garnacho Image */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 20px #D32F2F)' }}
          transition={{ duration: 0.5 }}
          position="absolute"
          zIndex={2}
          boxSize={{ base: '500px', md: '500px', lg: '900px' }}
          mx="auto"
        >
          <Image
            src="/src/assets/nobg.png"
            alt="Alejandro Garnacho"
            boxSize="100%"
            objectFit="contain"
            filter="brightness(1.2) drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
          />
        </MotionBox>

        {/* Text Overlay */}
        <Container maxW="100vw" width="100%" position="relative" zIndex={3} textAlign="center" px={{ base: 4, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading
              fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
              fontWeight="extrabold"
              fontFamily="sans-serif"
              textTransform="uppercase"
              color="azure"
              textShadow="0 0 10px rgba(0, 0, 0, 0.3)"
              mt={{ base: '200px', md: '250px', lg: '500px' }}
            >
              RONALDO'S REGEN
            </Heading>
          </MotionBox>
        </Container>
      </Box>

      {/* Card Slider Section */}
      <Box id="cards" py={{ base: 12, md: 16 }} bg="rgba(0, 0, 0, 0.8)">
        <Container maxW="100vw" width="100%">
          <HStack
            spacing={{ base: 4, md: 6, lg: 8 }}
            overflowX="auto"
            py={4}
            px={{ base: 2, md: 4 }}
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            }}
          >
            {cards.map((card, index) => (
              <MotionBox
                key={index}
                minW="300px"
                maxW="300px"
                minH="400px"
                position="relative"
                overflow="hidden"
                borderRadius="xl"
                boxShadow="0 0 15px rgba(29, 185, 84, 0.5)"
                _hover={{
                  transform: 'rotate(2deg) scale(1.05)',
                  boxShadow: '0 0 25px rgba(29, 185, 84, 0.8)',
                  transition: 'all 0.3s',
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  filter="brightness(1.2)" // Increased brightness for better display
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
                  spacing={4}
                  align="start"
                  p={4}
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(8px)"
                  borderRadius="md"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                >
                  <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight="bold"
                    color="white"
                    textShadow="0 0 5px rgba(0, 0, 0, 0.5)"
                    lineHeight="shorter"
                  >
                    {card.title}
                  </Text>
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
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
                    bgGradient="linear(to-r, #1E88E5, #AB47BC)"
                    color="white"
                    borderRadius="full"
                    leftIcon={<Icon as={card.type === 'video' ? FaPlay : FaBookOpen} />}
                    boxShadow="0 0 10px rgba(30, 136, 229, 0.5)"
                    _hover={{
                      bgGradient: 'linear(to-r, #AB47BC, #1E88E5)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 15px rgba(171, 71, 188, 0.8)',
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