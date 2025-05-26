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
    appearances: 134,
    goals: 22,
    assists: 56,
    wins: 85,
  },
  age: 27, // Born 1997, current year 2025
  born: '01-10-1997',
  nationality: 'Argentina/Spain',
  height: '180 cm',
  debut: 2022,
  marketValue: '€45M',
  jersey: 17,
  teamLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
  image: '/images/garnacho-hero.jpg',
  socials: {
    twitter: 'https://twitter.com/agarnacho7',
    instagram: 'https://instagram.com/garnacho7',
    facebook: 'https://facebook.com/garnacho.official',
  },
};

const gradientBg = 'linear-gradient(135deg, #DA291C 0%, #2C1B47 100%)'; // Manchester United Red to Dark
const cardBg = 'rgba(255, 255, 255, 0.1)';
const neonYellow = '#FFFF00';

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
    >
      {/* Navigation Bar */}
      <Box
        bg="rgba(0, 0, 0, 0.5)"
        py={2}
        px={{ base: 4, md: 8 }}
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      >
        <HStack justify="space-between" color="white">
          <Text fontSize="xl" fontWeight="bold">🏟️</Text>
          <HStack spacing={6}>
            <Text _hover={{ color: 'whiteAlpha.900', transform: 'scale(1.05)' }} transition="all 0.3s">Club</Text>
            <Text _hover={{ color: 'whiteAlpha.900', transform: 'scale(1.05)' }} transition="all 0.3s">Teams</Text>
            <Text _hover={{ color: 'whiteAlpha.900', transform: 'scale(1.05)' }} transition="all 0.3s">Awards</Text>
            <Text _hover={{ color: 'whiteAlpha.900', transform: 'scale(1.05)' }} transition="all 0.3s">Bio</Text>
            <Text _hover={{ color: 'whiteAlpha.900', transform: 'scale(1.05)' }} transition="all 0.3s">Stats</Text>
          </HStack>
          <HStack spacing={4}>
            <Text>🔍</Text>
            <Text _hover={{ color: 'whiteAlpha.900', transform: 'scale(1.05)' }} transition="all 0.3s">Sign In</Text>
          </HStack>
        </HStack>
      </Box>

      <Container maxW="100vw" width="100%" position="relative" zIndex={1} p={0} mt={{ base: 12, md: 16 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
          gap={{ base: 6, md: 10 }}
          w="full"
          maxW="100%"
        >
          {/* Left Section: Player Image & Socials */}
          <Box position="relative" flexShrink={0} w={{ base: '100%', md: '40%' }} textAlign="center">
            <Image
              src={player.image}
              alt={player.name}
              boxSize={{ base: '200px', md: '300px', lg: '350px' }}
              objectFit="cover"
              borderRadius="full"
              border="6px solid rgba(255, 255, 255, 0.5)"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.3)"
              mx="auto"
              transform="rotate(-5deg)"
            />
            <Image
              src={player.teamLogo}
              alt="Team Logo"
              boxSize={{ base: '40px', md: '60px' }}
              pos="absolute"
              bottom={{ base: 2, md: 4 }}
              right={{ base: '50%', md: '10%' }}
              transform={{ base: 'translateX(50%)', md: 'none' }}
              borderRadius="full"
              border="4px solid rgba(255, 255, 255, 0.5)"
              bg="white"
              boxShadow="md"
            />
            {/* Social Media Icons */}
            <HStack
              spacing={4}
              mt={{ base: 4, md: 6 }}
              justify={{ base: 'center', md: 'flex-start' }}
              bg="whiteAlpha.900"
              borderRadius="full"
              p={2}
              boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
              transform="rotate(-5deg)"
            >
              <a href={player.socials.facebook} target="_blank" rel="noopener noreferrer">
                <Icon as={FaFacebook} boxSize={6} color="#1877F3" _hover={{ transform: 'scale(1.2)' }} transition="all 0.3s" />
              </a>
              <a href={player.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Icon as={FaTwitter} boxSize={6} color="#1DA1F2" _hover={{ transform: 'scale(1.2)' }} transition="all 0.3s" />
              </a>
              <a href={player.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Icon as={FaInstagram} boxSize={6} color="#E1306C" _hover={{ transform: 'scale(1.2)' }} transition="all 0.3s" />
              </a>
            </HStack>
          </Box>

          {/* Right Section: Player Info & Stats */}
          <VStack
            spacing={6}
            align="start"
            w={{ base: '100%', md: '60%' }}
            p={{ base: 4, md: 6, lg: 8 }}
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="0 4px 24px rgba(0, 0, 0, 0.4)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.1)"
          >
            {/* Player Info */}
            <VStack spacing={2} align="start">
              <VStack spacing={0}>
                <Heading
                  fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                  fontWeight="extrabold"
                  color="white"
                  lineHeight={1}
                  fontFamily="sans-serif"
                >
                  {firstName}
                </Heading>
                <Heading
                  fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                  fontWeight="extrabold"
                  color="white"
                  lineHeight={1}
                  fontFamily="sans-serif"
                >
                  {lastName}
                </Heading>
              </VStack>
              <HStack spacing={3}>
                <Tag
                  size="lg"
                  borderRadius="full"
                  bgGradient="linear(to-r, #FF69B4, #FFB6C1)"
                  color="white"
                  fontWeight="medium"
                  boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
                >
                  <Icon as={FaFutbol} mr={2} />
                  {player.position}
                </Tag>
                <Tag
                  size="lg"
                  borderRadius="full"
                  bgGradient="linear(to-r, #FF69B4, #FFB6C1)"
                  color="white"
                  fontWeight="medium"
                  boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
                >
                  <Icon as={FaShoePrints} mr={2} />
                  {player.foot}
                </Tag>
              </HStack>
            </VStack>

            {/* Stats Box */}
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={{ base: 4, md: 6 }}
              w="full"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
            >
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="white" mb={4}>
                Stats
              </Text>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full">
                <StatCard label="APPEARANCES" value={player.stats.appearances} />
                <StatCard label="GOALS" value={player.stats.goals} />
                <StatCard label="ASSISTS" value={player.stats.assists} />
                <StatCard label="WINS" value={player.stats.wins} />
              </SimpleGrid>
            </Box>

            {/* Player Info Box */}
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={{ base: 4, md: 6 }}
              w="full"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
            >
              <SimpleGrid columns={2} spacing={4}>
                <InfoCard label="BORN" value={player.born} />
                <InfoCard label="AGE" value={`${player.age} YEARS`} color="#FFFF00" />
                <InfoCard label="NATIONALITY" value={player.nationality} />
                <InfoCard label="HEIGHT" value={player.height} />
                <InfoCard label="DEBUT" value={player.debut} />
              </SimpleGrid>
            </Box>

            {/* Player Value */}
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={{ base: 4, md: 6 }}
              w="full"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              textAlign="center"
            >
              <Text fontSize={{ base: 'sm', md: 'md' }} color="white" fontWeight="bold">
                PLAYER VALUE
              </Text>
              <Text fontSize={{ base: 'xl', md: '2xl' }} color="white" fontWeight="extrabold">
                <Text as="span" color={neonYellow}>€</Text>{player.marketValue}
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );

};

const StatCard = ({ label, value }) => (
  <VStack spacing={1}>
    <Text fontSize={{ base: 'xs', md: 'sm' }} color="white" fontWeight="bold" textTransform="uppercase">
      {label}
    </Text>
    <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color={neonYellow}>
      {value}
    </Text>
  </VStack>
);

const InfoCard = ({ label, value, color = 'white' }) => (
  <HStack spacing={2}>
    <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.300" fontWeight="bold" textTransform="uppercase">
      {label}
    </Text>
    <Text fontSize={{ base: 'md', md: 'lg' }} color={color} fontWeight="bold">
      {value}
    </Text>
  </HStack>
);

export default Bio;