import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  Tag,
  HStack,
  VStack,
  SimpleGrid,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebook, FaFutbol, FaShoePrints } from 'react-icons/fa';

const player = {
  name: 'Alejandro Garnacho',
  position: 'Winger',
  foot: 'Right-Foot',
  stats: {
    appearances: 144,
    goals: 26,
    assists: 19,
    minutes: 8368,
  },
  age: 21, 
  born: '01-07-2004',
  nationality: 'Argentina/Spain',
  height: '180 cm',
  debut: 2022,
  marketValue: '45M',
  jersey: 17,
  teamLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
  image: '/public/images/nobg5.png',
  socials: {
    twitter: 'https://x.com/FanGarnacho',
    instagram: 'https://instagram.com/garnacho7',
    facebook: 'https://www.facebook.com/AlejandroGarnacho07',
  },
};

const gradientBg = 'linear-gradient(135deg, #C60010 0%, #0A0002 100%)'; // Crimson Red to Deep Black
const glassBg = 'rgba(37, 0, 9, 0.5)'; // Charcoal Maroon with transparency
const neonGlow = '#FF4500'; // Glow Orange

const Bio = () => {
  const [firstName, lastName] = player.name.split(' ');

  return (
    <Box
      minH="100vh"
      bg={gradientBg}
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 8 }}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
      fontFamily="'Montserrat', 'Segoe UI', Arial, sans-serif"
      _hover={{ cursor: 'default' }} // Base box hover for interactivity hint
    >
      {/* Animated Background Particles */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(246, 124, 168, 0.1) 0%, transparent 70%),
            radial-gradient(circle at 80% 70%, rgba(246, 124, 168, 0.1) 0%, transparent 70%)
          `,
          animation: 'float 15s infinite linear',
        }}
        css={{
          '@keyframes float': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
            '100%': { transform: 'translateY(0)' },
          },
        }}
        _hover={{ transform: 'scale(1.01)', transition: 'all 0.3s' }} // Subtle background zoom
      />

      {/* Large, semi-transparent player number overlay */}
      <Text
        position="absolute"
        top={{ base: '18%', md: '10%' }}
        left={{ base: '2%', md: '5%' }}
        fontSize={{ base: '7xl', md: '9xl', lg: '220px' }}
        fontWeight="extrabold"
        color="whiteAlpha.300"
        zIndex={0}
        userSelect="none"
        pointerEvents="none"
        lineHeight={1}
        textTransform="uppercase"
        _hover={{ color: 'whiteAlpha.400', transition: 'all 0.3s' }} // Subtle color shift
      >
        {player.jersey}
      </Text>

      <Container maxW="100vw" width="100%" position="relative" zIndex={1} p={0} mt={{ base: 16, md: 20 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          gap={{ base: 6, md: 12 }}
          w="full"
          maxW="100%"
        >
          {/* Left Section: Player Image & Socials */}
          <Box
            position="relative"
            flexShrink={0}
            w={{ base: '100%', md: '40%' }}
            textAlign="center"
            _hover={{ transform: 'translateY(-2px)', transition: 'all 0.3s' }}
          >
            <Image
              src={player.image}
              alt={player.name}
              maxW="100%"
              maxH="auto"
              objectFit="contain" // Changed to contain to show full image
              mx="auto"
              transform="rotate(-5deg)"
              zIndex={2}
              _hover={{ transform: 'scale(1.05) rotate(-5deg)', boxShadow: '0 0 40px rgba(198, 0, 16, 0.5), 0 12px 40px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s' }}
            />
            <Image
              src={player.teamLogo}
              alt="Team Logo"
              boxSize={{ base: '44px', md: '64px' }}
              pos="absolute"
              bottom={{ base: 2, md: 4 }}
              right={{ base: '50%', md: '10%' }}
              transform={{ base: 'translateX(50%)', md: 'none' }}
              borderRadius="full"
              border="4px solid rgba(255, 255, 255, 0.7)"
              bg="white"
              boxShadow="0 2px 12px 0 rgba(0, 0, 0, 0.18)"
              zIndex={3}
              _hover={{ transform: 'scale(1.1)', boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.25)', transition: 'all 0.3s' }}
            />
            {/* Social Media Icons */}
            <HStack
              spacing={4}
              mt={{ base: 2, md: -1 }} // Reduced margin to move up the social bar
              justify={{ base: 'center', md: 'flex-start' }}
              bg="rgba(255, 255, 255, 0.9)"
              borderRadius="full"
              p={2}
              boxShadow="0 2px 12px 0 rgba(0, 0, 0, 0.18)"
              transform="rotate(-5deg)"
              zIndex={4}
              _hover={{ boxShadow: '0 4px 16px 0 rgba(255, 69, 0, 0.3)', transition: 'all 0.3s' }}
            >
              <a href={player.socials.facebook} target="_blank" rel="noopener noreferrer">
                <Icon
                  as={FaFacebook}
                  boxSize={7}
                  color="#1877F3"
                  _hover={{ transform: 'scale(1.2) translateY(-2px)', color: neonGlow, transition: 'all 0.3s' }}
                />
              </a>
              <a href={player.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Icon
                  as={FaTwitter}
                  boxSize={7}
                  color="#1DA1F2"
                  _hover={{ transform: 'scale(1.2) translateY(-2px)', color: neonGlow, transition: 'all 0.3s' }}
                />
              </a>
              <a href={player.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Icon
                  as={FaInstagram}
                  boxSize={7}
                  color="#E1306C"
                  _hover={{ transform: 'scale(1.2) translateY(-2px)', color: neonGlow, transition: 'all 0.3s' }}
                />
              </a>
            </HStack>
          </Box>

          {/* Right Section: Player Info & Stats */}
          <VStack
            spacing={8}
            align="start"
            w={{ base: '100%', md: '60%' }}
            p={{ base: 6, md: 8 }}
            bg={glassBg}
            borderRadius="2xl"
            boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.25)"
            backdropFilter="blur(18px)"
            border="1.5px solid rgba(255, 255, 255, 0.18)"
            zIndex={2}
            mt={{ base: 4, md: 0 }}
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.35)', transition: 'all 0.3s' }}
          >
            {/* Player Info */}
            <VStack spacing={2} align="start" w="full" _hover={{ transform: 'translateY(-1px)', transition: 'all 0.3s' }}>
              <VStack spacing={0} align="start" w="full" _hover={{ transform: 'translateY(-1px)', transition: 'all 0.3s' }}>
                <Heading
                  fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                  fontWeight="extrabold"
                  color="#C60010" // Crimson Red
                  lineHeight={1}
                  fontFamily="inherit"
                  textAlign="left"
                  letterSpacing="-1px"
                  textTransform="uppercase"
                  mb={-1}
                  _hover={{ color: neonGlow, transition: 'all 0.3s' }}
                >
                  {firstName}
                </Heading>
                <Heading
                  fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                  fontWeight="extrabold"
                  color="#C60010" // Crimson Red
                  lineHeight={1}
                  fontFamily="inherit"
                  textAlign="left"
                  letterSpacing="-1px"
                  textTransform="uppercase"
                  _hover={{ color: neonGlow, transition: 'all 0.3s' }}
                >
                  {lastName}
                </Heading>
              </VStack>
              <HStack spacing={3} mt={2}>
                <Tag
                  size="lg"
                  borderRadius="full"
                  bg="#C60010" // Crimson Red
                  color="white"
                  fontWeight="bold"
                  fontSize="md"
                  px={6}
                  py={2}
                  boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
                  letterSpacing="0.5px"
                  leftIcon={<Icon as={FaFutbol} mr={2} />}
                  _hover={{ transform: 'scale(1.05)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s' }}
                >
                  {player.position}
                </Tag>
                <Tag
                  size="lg"
                  borderRadius="full"
                  bg="#C60010" // Crimson Red
                  color="white"
                  fontWeight="bold"
                  fontSize="md"
                  px={6}
                  py={2}
                  boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
                  letterSpacing="0.5px"
                  leftIcon={<Icon as={FaShoePrints} mr={2} />}
                  _hover={{ transform: 'scale(1.05)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s' }}
                >
                  {player.foot}
                </Tag>
              </HStack>
            </VStack>

            {/* Stats Box */}
            <Box
              bg={glassBg} // Flatter Charcoal Maroon tone
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              w="full"
              boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.25)"
              backdropFilter="blur(8px)"
              border="1.5px solid rgba(255, 255, 255, 0.18)"
              mt={4}
              _hover={{ transform: 'translateY(-2px)', boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.35)', transition: 'all 0.3s' }}
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                color="#C60010"
                mb={2}
                letterSpacing="2px"
                textTransform="uppercase"
                _hover={{ color: neonGlow, transition: 'all 0.3s' }}
              >
                Stats
              </Text>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full">
                <StatCard label="APPEARANCES" value={player.stats.appearances} />
                <StatCard label="GOAL" value={player.stats.goals} />
                <StatCard label="ASSIST" value={player.stats.assists} />
                <StatCard label="MINUTES" value={player.stats.minutes} />
              </SimpleGrid>
            </Box>

            {/* Player Info Box */}
            <Box
              bg={glassBg}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              w="full"
              boxShadow="0 4px 16px 0 rgba(0, 0, 0, 0.18)"
              backdropFilter="blur(8px)"
              border="1.5px solid rgba(255, 255, 255, 0.18)"
              mt={4}
              _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.25)', transition: 'all 0.3s' }}
            >
              <SimpleGrid columns={2} spacing={4}>
                <InfoCard label="BORN" value={player.born} />
                <InfoCard label="AGE" value={`${player.age} YEARS`} />
                <InfoCard label="NATIONALITY" value={player.nationality} />
                <InfoCard label="HEIGHT" value={player.height} />
                <InfoCard label="DEBUT" value={player.debut} />
              </SimpleGrid>
            </Box>

            {/* Player Value */}
            <Box
              bg={glassBg}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              w="full"
              boxShadow="0 4px 16px 0 rgba(0, 0, 0, 0.18)"
              backdropFilter="blur(8px)"
              border="1.5px solid rgba(255, 255, 255, 0.18)"
              textAlign="center"
              mt={4}
              _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.25)', transition: 'all 0.3s' }}
            >
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="white"
                fontWeight="bold"
                letterSpacing="1px"
                textTransform="uppercase"
                _hover={{ color: neonGlow, transition: 'all 0.3s' }}
              >
                PLAYER VALUE
              </Text>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                color="white"
                fontWeight="extrabold"
                _hover={{ color: neonGlow, transition: 'all 0.3s' }}
              >
                <Text as="span" color="#C60010">€</Text>{player.marketValue}
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

const StatCard = ({ label, value }) => (
  <VStack spacing={1} align="center" _hover={{ transform: 'scale(1.05)', boxShadow: '0 4px 16px 0 rgba(255, 69, 0, 0.3)', transition: 'all 0.3s' }}>
    <Text
      fontSize={{ base: 'xs', md: 'sm' }}
      color="white"
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="2px"
      _hover={{ color: neonGlow, transition: 'all 0.3s' }}
    >
      {label}
    </Text>
    <Text
      fontSize={{ base: 'lg', md: '2xl' }}
      fontWeight="extrabold"
      color="white"
      letterSpacing="1px"
      _hover={{ color: neonGlow, transition: 'all 0.3s' }}
    >
      {value}
    </Text>
  </VStack>
);

const InfoCard = ({ label, value, color = 'white' }) => (
  <HStack spacing={2} _hover={{ transform: 'scale(1.05)', boxShadow: '0 4px 16px 0 rgba(255, 69, 0, 0.3)', transition: 'all 0.3s' }}>
    <Text
      fontSize={{ base: 'xs', md: 'sm' }}
      color="gray.300"
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="1px"
      _hover={{ color: 'white', transition: 'all 0.3s' }}
    >
      {label}
    </Text>
    <Text
      fontSize={{ base: 'md', md: 'lg' }}
      color={color}
      fontWeight="bold"
      _hover={{ color: neonGlow, transition: 'all 0.3s' }}
    >
      {value}
    </Text>
  </HStack>
);

export default Bio;