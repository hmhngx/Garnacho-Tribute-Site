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
  Flex,
  Badge,
  Icon,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
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
  image: '/src/assets/nobg6.png',
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
    { opponent: 'Aston Villa', date: '2023-12-27', rating: 8.4, clubLogo: '/src/assets/clubs/aston.png' },
    { opponent: 'Chelsea', date: '2024-04-05', rating: 8.5, clubLogo: '/src/assets/clubs/chelsea.png' },
    { opponent: 'Leicester', date: '2024-10-31', rating: 8.6, clubLogo: '/src/assets/clubs/leicester.png' },
    { opponent: 'West Ham', date: '2024-02-04', rating: 8.9, clubLogo: '/src/assets/clubs/westham.png' },
    { opponent: 'Barnsley', date: '2024-09-18', rating: 9.8, clubLogo: '/src/assets/clubs/barnsley.png' },
  ],
};

const gradientBg = 'linear-gradient(135deg, #1A1A40 0%, #2C1B47 100%), radial-gradient(circle at 20% 20%, rgba(255, 69, 0, 0.1) 0%, transparent 70%)';
const cardBg = 'rgba(255, 255, 255, 0.02)';
const neonGreen = '#00FF00';
const neonRed = '#FF3C3C';
const neonYellow = '#FFFF00';
const neonOrange = '#FF4500';
const neonPurple = '#BF00FF';
const gray300 = '#BBBBBB';
const gray200 = '#AAAAAA';
const neonAqua = '#00ffff';
const neonBlue = '#0040ff';

const Stats = () => {
  const averageRating = player.form.reduce((sum, match) => sum + match.rating, 0) / player.form.length;

  const getRatingColor = (rating) => {
    if (rating > 9.0) return neonBlue;
    if (rating > 8.0) return neonAqua;
    if (rating > 7.5) return neonGreen;
    if (rating >= 6.5) return neonYellow;
    return neonRed;
  };

  return (
    <Box
      minH="auto"
      bg={gradientBg}
      py={4}
      px={{ base: 2, md: 4 }}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
      filter="drop-shadow(0 0 15px rgba(255, 69, 0, 0.15))"
    >
      <Container maxW="100vw" width="100%" position="relative" zIndex={1} p={0}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 4, md: 6 }}
          w="full"
          alignItems="flex-start"
        >
          {/* Left Section: Player Identity */}
          <MotionBox
            w={{ base: '100%', md: '1fr' }}
            mb={{ base: 4, md: 0 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <VStack spacing={4} align="left">
              {/* Player Image with Jersey Number Overlay */}
              <Box position="relative" w="full" h={{ base: '300px', md: '400px' }}>
                {/* Background Spotlight Effect */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w={{ base: '150px', md: '200px' }}
                  h={{ base: '150px', md: '200px' }}
                  bg="radial-gradient(circle, rgba(255, 60, 60, 0.15) 0%, transparent 70%)"
                  borderRadius="full"
                  zIndex={1}
                />
                {/* Jersey Number */}
                <Box
                  position="absolute"
                  top={{ base: '10px', md: '20px' }}
                  left={{ base: '150px', md: '200px' }}
                  fontSize={{ base: '60px', md: '80px' }}
                  fontWeight={900}
                  color={neonRed}
                  opacity={0.25}
                  textShadow="0 0 15px #FF4500, 0 0 8px #FF4500"
                  zIndex={0}
                >
                  #{player.jersey}
                </Box>
                <MotionBox
                  position="absolute"
                  bottom="0"
                  left="0"
                  whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 20px rgba(255, 69, 0, 0.5))' }}
                  zIndex={2}
                >
                  <Image
                    src={player.image}
                    alt={player.name}
                    boxSize={{ base: '200px', md: '350px' }}
                    objectFit="contain"
                    filter="drop-shadow(0 0 10px rgba(255, 69, 0, 0.3))"
                    _hover={{ filter: 'drop-shadow(0 0 20px rgba(255, 69, 0, 0.7))' }}
                    transition="filter 0.3s ease"
                  />
                </MotionBox>
              </Box>

              {/* Player Info Text */}
              <HStack spacing={2} align="center">
                <MotionBox
                  whileHover={{ scale: 1.1, color: neonPurple, textShadow: '0 0 8px #BF00FF' }}
                >
                  <Heading
                    fontSize={{ base: '24px', md: '28px' }}
                    fontWeight={800}
                    color="white"
                    fontFamily="'Poppins', sans-serif"
                    textTransform="uppercase"
                    letterSpacing="1px"
                    textShadow="0 1px 2px rgba(255, 255, 255, 0.1)"
                  >
                    {player.name}
                  </Heading>
                </MotionBox>
                <Image
                  src="/src/assets/argentina.png"
                  alt="Argentina Flag"
                  boxSize={{ base: '20px', md: '20px' }}
                  objectFit="contain"
                  alignSelf="center"
                />
              </HStack>
              <Text
                fontSize={{ base: '12px', md: '12px' }}
                fontWeight={500}
                color={gray300}
                letterSpacing="1px"
                mt={{ base: '-8px', md: '-8px' }}
              >
                {player.position}
              </Text>

              {/* Bio Stats Panel */}
              <MotionBox
                bg={cardBg}
                borderRadius="12px"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 69, 0, 0.1)"
                p={{ base: 3, md: 4 }}
                w="full"
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 69, 0, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={3}
                >
                  Bio Stats
                </Text>
                <Flex
                  color="white"
                  justify="space-between"
                  align="center"
                  px={{ base: 3, md: 4 }}
                  py={{ base: 1, md: 2 }}
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap={{ base: 3, md: 0 }}
                  borderRadius="8px"
                >
                  {[
                    { value: player.age, unit: "YR" },
                    { value: parseInt(player.height.split(' ')[0]), unit: "CM" },
                    { value: parseInt(player.weight.split(' ')[0]), unit: "KG" },
                  ].map((stat, index) => (
                    <MotionBox
                      key={index}
                      textAlign="center"
                      px={{ base: 1, md: 3 }}
                      borderRight={index < 2 ? "1px solid rgba(255,255,255,0.1)" : "none"}
                      whileHover={{ scale: 1.1, color: neonOrange, textShadow: '0 0 12px #FF4500' }}
                    >
                      <Text
                        fontSize={{ base: '16px', md: '18px' }}
                        fontWeight="bold"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        fontFamily="'Poppins', sans-serif"
                      >
                        {stat.value}
                      </Text>
                      <Text
                        fontSize={{ base: '10px', md: '12px' }}
                        opacity={0.7}
                        letterSpacing="1.5px"
                        textTransform="uppercase"
                        fontFamily="'Poppins', sans-serif"
                      >
                        {stat.unit}
                      </Text>
                    </MotionBox>
                  ))}
                </Flex>
              </MotionBox>

              <Button
                as={RouterLink}
                to="/bio"
                size="xs"
                backgroundColor="transparent"
                border="1px solid #FF3C3C"
                color="#FF3C3C"
                borderRadius="50px"
                padding="4px 12px"
                textTransform="uppercase"
                fontWeight={600}
                letterSpacing="1px"
                fontFamily="'Poppins', sans-serif"
                fontSize="12px"
                rightIcon={<ArrowForwardIcon boxSize={3} />}
                _hover={{ backgroundColor: '#FF3C3C', color: 'white', transform: 'translateY(-2px)' }}
              >
                Full Bio
              </Button>
            </VStack>
          </MotionBox>

          {/* Right Section: Performance Dashboard */}
          <Box w={{ base: '100%', md: '2fr' }}>
            <VStack spacing={4} align="stretch">
              {/* Season Stats Panel */}
              <MotionBox
                bg={cardBg}
                borderRadius="12px"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 255, 0, 0.1)"
                p={{ base: 3, md: 4 }}
                w="full" // Ensure full width
                minHeight="auto" // Allow content to dictate height
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0, 255, 0, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={3}
                >
                  Season Stats
                </Text>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2} w="100%">
                  <MotionBox whileHover={{ color: neonGreen, textShadow: '0 0 8px #00FF00' }}>
                    <Text fontSize="12px" fontWeight={500} color={gray200}>Appearances: <Text as="span" fontWeight={600} color="white">{player.seasonStats.appearances.total} ({player.seasonStats.appearances.sub})</Text></Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonGreen, textShadow: '0 0 8px #00FF00' }}>
                    <Text fontSize="12px" fontWeight={500} color={gray200}>Goals / Assists: <Text as="span" fontWeight={600} color="white">{player.seasonStats.goals} / {player.seasonStats.assists}</Text></Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonRed, textShadow: '0 0 8px #FF3C3C' }}>
                    <Text fontSize="12px" fontWeight={500} color={gray200}>Shots/Game: <Text as="span" fontWeight={600} color={player.seasonStats.shotsPerGame < 3 ? neonRed : gray200}>{player.seasonStats.shotsPerGame}</Text></Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonGreen, textShadow: '0 0 8px #00FF00' }}>
                    <Text fontSize="12px" fontWeight={500} color={gray200}>Dribbles/Game: <Text as="span" fontWeight={600} color={neonGreen}>{player.seasonStats.dribblesPerGame}</Text></Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonRed, textShadow: '0 0 8px #FF3C3C' }}>
                    <Text fontSize="12px" fontWeight={500} color={gray200}>Pass Acc.: <Text as="span" fontWeight={600} color={player.seasonStats.passAccuracy >= 85 ? "white" : neonRed}>{player.seasonStats.passAccuracy}%</Text></Text>
                  </MotionBox>
                </SimpleGrid>
              </MotionBox>

              {/* Playing Positions Map */}
              <MotionBox
                bg={cardBg}
                borderRadius="12px"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 255, 0.1)"
                p={{ base: 3, md: 4 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0, 0, 255, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={3}
                >
                  Playing Positions
                </Text>
                <Box
                  w="full"
                  h={{ base: '100px', md: '120px' }}
                  bg="url('/src/assets/pitch.png') center/contain no-repeat"
                  position="relative"
                />
              </MotionBox>

              {/* Best Performance Panel */}
              <MotionBox
                bg={cardBg}
                borderRadius="12px"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 165, 0, 0.1)"
                p={{ base: 3, md: 4 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 165, 0, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={3}
                >
                  Best Performance
                </Text>
                <HStack spacing={3} wrap="wrap" justify="space-between">
                  {player.form.map((match, index) => (
                    <MotionBox
                      key={index}
                      spacing={1}
                      align="center"
                      whileHover={{ scale: 1.1, boxShadow: `0 0 12px ${getRatingColor(match.rating)}` }}
                    >
                      <VStack spacing={1}>
                        <Image
                          src={match.clubLogo}
                          alt={`${match.opponent} logo`}
                          boxSize="20px"
                          objectFit="contain"
                          borderRadius="full"
                          filter="drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))"
                          _hover={{ filter: `drop-shadow(0 0 8px ${getRatingColor(match.rating)})` }}
                        />
                        <Text fontSize="10px" color={gray200}>{match.date.split('-')[1] + '.' + match.date.split('-')[2]}</Text>
                        <Badge
                          bg={getRatingColor(match.rating)}
                          color="white"
                          borderRadius="full"
                          px={1.5}
                          py={0.5}
                          fontSize="10px"
                          fontWeight={600}
                          boxShadow={`0 0 8px ${getRatingColor(match.rating)}`}
                          _hover={{ boxShadow: `0 0 15px ${getRatingColor(match.rating)}` }}
                        >
                          {match.rating}
                        </Badge>
                      </VStack>
                    </MotionBox>
                  ))}
                </HStack>
                <Box
                  position="relative"
                  h="1px"
                  bg="transparent"
                  mt={1.5}
                >
                  {player.form.map((match, index) => (
                    index < player.form.length - 1 && (
                      <Box
                        key={index}
                        position="absolute"
                        top="0"
                        left={`${(index / (player.form.length - 1)) * 100}%`}
                        width={`${100 / (player.form.length - 1)}%`}
                        height="1px"
                        bgGradient={`linear(to-r, ${getRatingColor(match.rating)}, ${getRatingColor(player.form[index + 1].rating)})`}
                        boxShadow={`0 0 4px ${getRatingColor(match.rating)}`}
                        zIndex={-1}
                      />
                    )
                  ))}
                </Box>
                <Text fontSize="11px" color={gray200} mt={1.5}>
                  Average Rating: <Text as="span" color={neonOrange} fontWeight={600} textShadow="0 0 8px #FF4500">{averageRating.toFixed(1)}</Text>
                </Text>
              </MotionBox>

              {/* Live Stats */}
              <MotionBox
                bg={cardBg}
                borderRadius="12px"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 0, 255, 0.1)"
                p={{ base: 3, md: 4 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 0, 255, 0.7)' }}
                position="relative"
                minWidth="250px"
                maxWidth="100%"
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={3}
                >
                  Live Stats
                </Text>
                <HStack justify="space-between" spacing={4} align="center" w="full">
                  <Box position="relative" minWidth="150px" maxWidth="150px" height="80px">
                    <Image
                      src="/src/assets/stats-icon.png"
                      alt="Live Stats Icon"
                      width={{ base: '150px', md: '150px' }}
                      height={{ base: '80px', md: '80px' }}
                      objectFit="contain"
                      position="center"
                      top="0"
                      left="0"
                      filter="drop-shadow(0 0 4px #FF4500)"
                      _hover={{ filter: 'drop-shadow(0 0 8px #FF4500)' }}
                    />
                  </Box>
                  <Button
                    as="a"
                    href="https://www.sofascore.com/player/alejandro-garnacho/1135873"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="ghost"
                    color="white"
                    _hover={{ color: neonPurple, transform: 'translateY(-2px)', textShadow: '0 0 8px #BF00FF' }}
                    rightIcon={<ExternalLinkIcon boxSize={3} />}
                    fontWeight={600}
                    textTransform="uppercase"
                    padding="4px 12px"
                    borderRadius="50px"
                    fontSize="12px"
                  >
                    View
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Stats;