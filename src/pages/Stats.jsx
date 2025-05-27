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
  Badge,
  Icon,
  Button,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { FaFutbol, FaFlag, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const player = {
  name: 'Alejandro Garnacho',
  position: 'Winger',
  jersey: 17,
  nationality: 'Argentina',
  age: 27,
  height: '180 cm',
  weight: '80 kg',
  image: 'src/assets/nobg2.png', // Assumes a cutout image
  seasonStats: {
    appearances: { total: 30, sub: 5 },
    goals: 8,
    assists: 6,
    shotsPerGame: 2.3,
    dribblesPerGame: 3.1,
    passAccuracy: 82,
  },
  preferredPositions: ['LW', 'RW'],
  form: [
    { opponent: 'Arsenal', date: '2025-05-15', rating: 7.2, color: '#00FF00' },
    { opponent: 'Chelsea', date: '2025-05-10', rating: 6.5, color: '#FFA500' },
    { opponent: 'Liverpool', date: '2025-05-05', rating: 5.8, color: '#FF0000' },
    { opponent: 'Tottenham', date: '2025-04-30', rating: 7.8, color: '#00FF00' },
    { opponent: 'Man City', date: '2025-04-25', rating: 6.9, color: '#FFA500' },
  ],
};

const gradientBg = 'linear-gradient(135deg, #1A1A40 0%, #2C1B47 100%)'; // Deep navy to purple
const cardBg = 'rgba(255, 255, 255, 0.05)';
const neonGreen = '#00FF00';
const neonRed = '#FF0000';
const neonOrange = '#FFA500';
const neonBlue = '#00B7EB';

const MotionBox = motion(Box);

const Stats = () => {
  const { isOpen: isIframeOpen, onToggle: toggleIframe } = useDisclosure();
  const { isOpen: isPositionMapOpen, onToggle: togglePositionMap } = useDisclosure();
  const averageRating = player.form.reduce((sum, match) => sum + match.rating, 0) / player.form.length;

  return (
    <Box
      minH="100vh"
      bg={gradientBg}
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12 }}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
    >
      {/* Navigation Bar */}
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        bg="rgba(0, 0, 0, 0.7)"
        py={3}
        px={{ base: 6, md: 12 }}
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      >
        <HStack justify="space-between" color="white">
          <Text fontSize="xl" fontWeight="bold">🏟️</Text>
          <HStack spacing={8}>
            <Text _hover={{ color: neonBlue, transform: 'scale(1.05)' }} transition="all 0.3s">Club</Text>
            <Text _hover={{ color: neonBlue, transform: 'scale(1.05)' }} transition="all 0.3s">Teams</Text>
            <Text _hover={{ color: neonBlue, transform: 'scale(1.05)' }} transition="all 0.3s">Awards</Text>
            <Text _hover={{ color: neonBlue, transform: 'scale(1.05)' }} transition="all 0.3s">Bio</Text>
            <Text _hover={{ color: neonBlue, transform: 'scale(1.05)' }} transition="all 0.3s">Stats</Text>
          </HStack>
          <HStack spacing={4}>
            <Text>🔍</Text>
            <Button
              variant="solid"
              bgGradient="linear(to-r, #333, #666)"
              color="white"
              borderRadius="full"
              size="sm"
              _hover={{ bgGradient: 'linear(to-r, #444, #777)', transform: 'scale(1.05)' }}
              transition="all 0.3s"
            >
              Sign In
            </Button>
          </HStack>
        </HStack>
      </MotionBox>

      <Container maxW="100vw" width="100%" position="relative" zIndex={1} p={0} mt={{ base: 16, md: 20 }}>
        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 16 }} w="full" maxW="100%">
          {/* Left Section: Player Image & Basic Bio */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            position="relative"
            flexShrink={0}
            w={{ base: '100%', md: '40%' }}
            textAlign="center"
          >
            <Image
              src={player.image}
              alt={player.name}
              boxSize={{ base: '250px', md: '400px' }}
              objectFit="contain"
              transform="rotate(-5deg)"
              position="relative"
              zIndex={2}
              mx="auto"
              filter="drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
            />
            {/* Basic Bio */}
            <HStack
              spacing={8}
              mt={6}
              justify={{ base: 'center', md: 'flex-start' }}
              color="white"
              textShadow="0 0 5px rgba(255, 255, 255, 0.5)"
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <Text>Age: {player.age}</Text>
              <Text>Height: {player.height}</Text>
              <Text>Weight: {player.weight}</Text>
            </HStack>
          </MotionBox>

          {/* Right Section: Player Info, Stats, Position Map, Iframe */}
          <VStack spacing={8} align="start" w={{ base: '100%', md: '60%' }}>
            {/* Player Info */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              w="full"
            >
              <Heading
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="extrabold"
                color="white"
                fontFamily="sans-serif"
                lineHeight={1}
              >
                {player.name}
              </Heading>
              <HStack spacing={3} mt={2}>
                <Text fontSize="lg" color="gray.400">{player.position}</Text>
                <Icon as={FaFlag} color="gray.400" />
                <Text fontSize="lg" color="gray.400">{player.nationality}</Text>
              </HStack>
              <Text fontSize="xl" color="white" fontWeight="bold" mt={1}>#{player.jersey}</Text>
            </MotionBox>

            <Flex w="full" gap={8} direction={{ base: 'column', md: 'row' }}>
              {/* Season Stats Box */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                bg={cardBg}
                borderRadius="2xl"
                p={6}
                w={{ base: '100%', md: '60%' }}
                boxShadow="0 4px 24px rgba(0, 0, 0, 0.4)"
                border="1px solid rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
              >
                <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
                  Season Stats
                </Text>
                <VStack spacing={4} align="start">
                  <StatRow label="Appearances" value={`${player.seasonStats.appearances.total} (${player.seasonStats.appearances.sub})`} color={neonGreen} />
                  <StatRow label="Goals" value={player.seasonStats.goals} color={neonRed} />
                  <StatRow label="Assists" value={player.seasonStats.assists} color={neonOrange} />
                  <StatRow label="Shots per game" value={player.seasonStats.shotsPerGame} color={neonBlue} />
                  <StatRow label="Dribbles per game" value={player.seasonStats.dribblesPerGame} color={neonGreen} />
                  <StatRow label="Pass accuracy" value={`${player.seasonStats.passAccuracy}%`} color={neonRed} />
                </VStack>
              </MotionBox>

              {/* Position Map */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                bg={cardBg}
                borderRadius="2xl"
                p={6}
                w={{ base: '100%', md: '40%' }}
                boxShadow="0 4px 24px rgba(0, 0, 0, 0.4)"
                border="1px solid rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
              >
                <HStack justify="space-between" mb={4}>
                  <Text fontSize="xl" fontWeight="bold" color="white">
                    Position Map
                  </Text>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="white"
                    onClick={togglePositionMap}
                    rightIcon={isPositionMapOpen ? <FaChevronUp /> : <FaChevronDown />}
                  >
                    {isPositionMapOpen ? 'Hide' : 'Show'}
                  </Button>
                </HStack>
                <Collapse in={isPositionMapOpen}>
                  <Box position="relative" w="full" h="200px" bg="gray.700" borderRadius="md">
                    <Box position="absolute" top="10%" left="10%" color={player.preferredPositions.includes('LW') ? 'red.500' : 'gray.500'}>LW</Box>
                    <Box position="absolute" top="10%" right="10%" color={player.preferredPositions.includes('RW') ? 'red.500' : 'gray.500'}>RW</Box>
                    <Box position="absolute" top="40%" left="40%" color={player.preferredPositions.includes('CAM') ? 'red.500' : 'gray.500'}>CAM</Box>
                    <Box position="absolute" bottom="10%" left="40%" color={player.preferredPositions.includes('ST') ? 'red.500' : 'gray.500'}>ST</Box>
                  </Box>
                </Collapse>
              </MotionBox>
            </Flex>

            {/* SofaScore Iframe */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              bg={cardBg}
              borderRadius="2xl"
              p={6}
              w="full"
              boxShadow="0 4px 24px rgba(0, 0, 0, 0.4)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
            >
              <HStack justify="space-between" mb={4}>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Live Stats (SofaScore)
                </Text>
                <Button
                  size="sm"
                  variant="ghost"
                  color="white"
                  onClick={toggleIframe}
                  rightIcon={isIframeOpen ? <FaChevronUp /> : <FaChevronDown />}
                >
                  {isIframeOpen ? 'Hide' : 'View'}
                </Button>
              </HStack>
              <Collapse in={isIframeOpen}>
                <Box w="full" maxW="730px" mx="auto">
                  <iframe
                    id="sofa-player-embed-1135873"
                    src="https://widgets.sofascore.com/en/embed/player/1135873?widgetTheme=light"
                    style={{ height: '830px', maxWidth: '730px', width: '100%' }}
                    frameBorder="0"
                    scrolling="no"
                  />
                </Box>
              </Collapse>
            </MotionBox>

            {/* Physical Form Tracking */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              bg={cardBg}
              borderRadius="2xl"
              p={6}
              w="full"
              boxShadow="0 4px 24px rgba(0, 0, 0, 0.4)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
            >
              <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
                Physical Form Tracking
              </Text>
              <HStack spacing={8} overflowX="auto" pb={2}>
                {player.form.map((match, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack spacing={1}>
                      <Text fontSize="sm" color="white">{match.opponent}</Text>
                      <Text fontSize="xs" color="gray.400">{match.date}</Text>
                      <Badge bg={match.color} color="black" borderRadius="full" px={2} py={1}>
                        {match.rating}
                      </Badge>
                    </VStack>
                  </MotionBox>
                ))}
              </HStack>
              <Text mt={4} fontSize="sm" color="white">
                Average Rating: {averageRating.toFixed(1)}
              </Text>
            </MotionBox>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

const StatRow = ({ label, value, color }) => (
  <MotionBox
    whileHover={{ scale: 1.03, x: 5 }}
    transition={{ duration: 0.3 }}
    w="full"
  >
    <HStack spacing={2}>
      <Text fontSize="md" color="white">{label}:</Text>
      <Text fontSize="md" fontWeight="bold" color={color}>{value}</Text>
    </HStack>
  </MotionBox>
);

export default Stats;