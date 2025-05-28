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
  Tooltip,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon, ArrowRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const player = {
  name: 'Alejandro Garnacho',
  position: 'Winger',
  jersey: 17,
  nationality: 'Argentina',
  age: 21,
  height: '180 CM',
  weight: '70 KG',
  image: '/src/assets/nobg2.png',
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
    { opponent: 'Arsenal', date: '2025-05-15', rating: 7.2, minutes: 90, result: 'W 2-1', color: '#00FF00' },
    { opponent: 'Chelsea', date: '2025-05-10', rating: 6.5, minutes: 75, result: 'D 1-1', color: '#FF4500' },
    { opponent: 'Liverpool', date: '2025-05-05', rating: 5.8, minutes: 60, result: 'L 0-2', color: '#FF0000' },
    { opponent: 'Tottenham', date: '2025-04-30', rating: 7.8, minutes: 85, result: 'W 3-1', color: '#00FF00' },
    { opponent: 'Man City', date: '2025-04-25', rating: 6.9, minutes: 70, result: 'D 2-2', color: '#FF4500' },
  ],
};

const gradientBg = 'linear-gradient(135deg, #1A1A40 0%, #2C1B47 100%)';
const cardBg = 'rgba(255, 255, 255, 0.03)';
const neonGreen = '#00FF00';
const neonRed = '#FF3C3C';

const Stats = () => {
  const { isOpen: isPositionMapOpen, onToggle: togglePositionMap } = useDisclosure();
  const averageRating = player.form.reduce((sum, match) => sum + match.rating, 0) / player.form.length;

  return (
    <Box
      minH="100vh"
      bg={gradientBg}
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
    >
      {/* Background Gradient Accent */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={-1}
        bg="radial-gradient(circle, rgba(255,69,0,0.1) 0%, rgba(0,0,0,0) 70%)"
      />

      <Container maxW="100vw" width="100%" position="relative" zIndex={1} p={0} mt={{ base: 12, md: 16 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 6, md: 10 }}
          w="full"
          maxW="100%"
          alignItems="center"
        >
          {/* Left Section: Player Image & Basic Bio */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            w={{ base: '100%', md: '40%' }}
            textAlign="center"
          >
            <VStack spacing={4} align="center">
              {/* Player Name */}
              <Heading
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="extrabold"
                color="white"
                fontFamily="sans-serif"
                lineHeight={1}
                textShadow="0 0 5px rgba(255, 255, 255, 0.5)"
              >
                {player.name}
              </Heading>

              {/* Player Image */}
              <Box
                position="relative"
                w="full"
                h={{ base: '250px', md: '350px' }}
                background="radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)"
                filter="drop-shadow(0 0 15px rgba(255, 255, 255, 0.1))"
              >
                <Image
                  src={player.image}
                  alt={player.name}
                  boxSize={{ base: '200px', md: '300px' }}
                  objectFit="contain"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%) rotate(-5deg)"
                  zIndex={2}
                  filter="drop-shadow(0 0 20px rgba(255, 69, 0, 0.3))"
                  _hover={{ transform: 'translate(-50%, -50%) rotate(-5deg) scale(1.05)', transition: 'all 0.3s' }}
                />
              </Box>

              {/* Bio Details */}
              <HStack
                spacing={4}
                justify="center"
                color="white"
                textShadow="0 0 5px rgba(255, 255, 255, 0.5)"
                fontSize={{ base: 'sm', md: 'sm' }}
              >
                <Text>
                  <strong style={{ color: 'white', fontWeight: '700' }}>AGE:</strong> {player.age}
                </Text>
                <Text>
                  <strong style={{ color: 'white', fontWeight: '700' }}>HEIGHT:</strong> {player.height}
                </Text>
                <Text>
                  <strong style={{ color: 'white', fontWeight: '700' }}>WEIGHT:</strong> {player.weight}
                </Text>
              </HStack>

              {/* Full Bio Button */}
              <Button
                as={RouterLink}
                to="/bio"
                size="sm"
                backgroundColor="transparent"
                border="2px solid #FF3C3C"
                color="#FF3C3C"
                borderRadius="50px"
                padding="6px 16px"
                transition="0.3s ease"
                _hover={{ backgroundColor: '#FF3C3C', color: '#ffffff' }}
              >
                Full Bio
              </Button>
            </VStack>
          </MotionBox>

          {/* Right Section: Player Info, Stats, Position Map, Iframe */}
          <VStack spacing={6} align="start" w={{ base: '100%', md: '60%' }}>
            {/* Player Info */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              w="full"
            >
              <Heading
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="extrabold"
                color="white"
                fontFamily="sans-serif"
                lineHeight={1}
              >
                {player.name}
              </Heading>
              <HStack spacing={2} mt={2}>
                <Tag size="sm" bg={cardBg} color="white">{player.position}</Tag>
                <Text fontSize="sm" color="white">🇦🇷 {player.nationality}</Text>
              </HStack>
              <Text fontSize="xl" color="white" fontWeight="bold" mt={1}>#{player.jersey}</Text>
            </MotionBox>

            {/* Season Stats Box */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              bg={cardBg}
              borderRadius="12px"
              p={{ base: 4, md: 6 }}
              w="full"
              boxShadow="0 0 15px rgba(0, 0, 0, 0.4)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              _hover={{ transform: 'translateY(-2px)', transition: 'all 0.3s' }}
            >
              <Text fontSize="xl" fontWeight="700" color="white" mb={2}>
                Season Stats
              </Text>
              <VStack spacing={3} align="start">
                <StatRow label="Appearances" value={`${player.seasonStats.appearances.total} (${player.seasonStats.appearances.sub})`} color={neonGreen} />
                <StatRow label="Goals" value={player.seasonStats.goals} color={neonRed} />
                <StatRow label="Assists" value={player.seasonStats.assists} color={neonGreen} />
                <StatRow label="Shots per game" value={player.seasonStats.shotsPerGame} color={neonRed} />
                <StatRow label="Dribbles per game" value={player.seasonStats.dribblesPerGame} color={neonGreen} />
                <StatRow label="Pass Accuracy" value={`${player.seasonStats.passAccuracy}%`} color={neonRed} />
              </VStack>
            </MotionBox>

            {/* Position Map */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              bg={cardBg}
              borderRadius="12px"
              p={{ base: 4, md: 6 }}
              w="full"
              boxShadow="0 0 15px rgba(0, 0, 0, 0.4)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              _hover={{ transform: 'translateY(-2px)', transition: 'all 0.3s' }}
            >
              <HStack justify="space-between" mb={2}>
                <Text fontSize="xl" fontWeight="700" color="white">
                  Position Map
                </Text>
                <Button
                  size="sm"
                  variant="ghost"
                  color="white"
                  onClick={togglePositionMap}
                  rightIcon={
                    <MotionBox
                      animate={{ rotate: isPositionMapOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isPositionMapOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </MotionBox>
                  }
                >
                  {isPositionMapOpen ? 'Hide' : 'Show'}
                </Button>
              </HStack>
              <AnimatePresence>
                {isPositionMapOpen && (
                  <MotionBox
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      position="relative"
                      w="full"
                      h={{ base: '150px', md: '200px' }}
                      bg="url('/src/assets/pitch.png') center/cover"
                      borderRadius="md"
                      backgroundSize="contain"
                      backgroundRepeat="no-repeat"
                      backgroundPosition="center"
                    >
                    </Box>
                  </MotionBox>
                )}
              </AnimatePresence>
            </MotionBox>

            {/* Live Stats */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              bg={cardBg}
              borderRadius="12px"
              p={{ base: 4, md: 6 }}
              w="full"
              boxShadow="0 0 15px rgba(0, 0, 0, 0.4)"
              border="1px solid rgba(255, 255, 0.1)"
              backdropFilter="blur(10px)"
              _hover={{ transform: 'translateY(-2px)', transition: 'all 0.3s' }}
            >
              <HStack justify="space-between" mb={2}>
                <Text fontSize="xl" fontWeight="700" color="white">
                  Live Stats
                </Text>
                <Button
                  as="a"
                  href="https://www.sofascore.com/player/alejandro-garnacho/1135873"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="ghost"
                  color="white"
                  _hover={{ color: '#FF3C3C', textDecoration: 'underline' }}
                  rightIcon={<ExternalLinkIcon />}
                >
                  View
                </Button>
              </HStack>
            </MotionBox>

            {/* Physical Form Tracking */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              bg={cardBg}
              borderRadius="12px"
              p={{ base: 4, md: 6 }}
              w="full"
              boxShadow="0 0 15px rgba(0, 0, 0, 0.4)"
              border="1px solid rgba(255, 255, 0.1)"
              backdropFilter="blur(10px)"
              _hover={{ transform: 'translateY(-2px)', transition: 'all 0.3s' }}
            >
              <Text fontSize="xl" fontWeight="700" color="white" mb={2}>
                Physical Form Tracking
              </Text>
              <HStack spacing={{ base: 2, md: 4 }} overflowX={{ base: 'auto', md: 'visible' }} pb={2} css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
                {player.form.map((match, index) => (
                  <Tooltip key={index} label={`Minutes: ${match.minutes}, Result: ${match.result}`} hasArrow>
                    <MotionBox
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      position="relative"
                    >
                      <VStack spacing={1} minW="80px">
                        <Text fontSize="xs" color="white" textAlign="center">{match.opponent}</Text>
                        <Text fontSize="xs" color="gray.400">{match.date}</Text>
                        <Badge bg={match.color} color="black" borderRadius="full" px={2} py={1}>
                          {match.rating}
                        </Badge>
                      </VStack>
                      {/* Connecting line for trend */}
                      {index < player.form.length - 1 && (
                        <Box
                          position="absolute"
                          top="50%"
                          left="100%"
                          width={`calc(${100 / (player.form.length - 1)}vw * 0.8)`}
                          height="2px"
                          bg={match.color}
                          transform="translateY(-50%)"
                          zIndex={-1}
                        />
                      )}
                    </MotionBox>
                  </Tooltip>
                ))}
              </HStack>
              <Text mt={2} fontSize="sm" color="white">
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
      <strong style={{ color: 'white', fontSize: 'sm' }}>{label}:</strong>
      <span style={{ color: color, fontSize: 'sm', fontWeight: 'bold' }}>{value}</span>
    </HStack>
  </MotionBox>
);

export default Stats;