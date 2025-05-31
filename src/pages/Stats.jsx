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
  image: '/public/images/nobg6.png',
  seasonStats: {
    appearances: { total: 58, sub: 22 },
    goals: 11,
    assists: 10,
    shotsPerGame: 2.3,
    dribblesPerGame: 3.1,
    passAccuracy: 82,
  },
  preferredPositions: ['LW', 'RW'],
  form: [
    { opponent: 'Aston Villa', date: '2023-12-27', rating: 8.4, clubLogo: '/public/clubs/aston.png' },
    { opponent: 'Chelsea', date: '2024-04-05', rating: 8.5, clubLogo: '/public/clubs/chelsea.png' },
    { opponent: 'Leicester', date: '2024-10-31', rating: 8.6, clubLogo: '/public/clubs/leicester.png' },
    { opponent: 'West Ham', date: '2024-02-04', rating: 8.9, clubLogo: '/public/clubs/westham.png' },
    { opponent: 'Barnsley', date: '2024-09-18', rating: 9.8, clubLogo: '/public/clubs/barnsley.png' },
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
    if (rating > 6.5) return neonYellow;
    return neonRed;
  };

  return (
    <Box
      minH="100vh"
      bg={gradientBg}
      py={{ base: '1vh', sm: '1.5vh', md: '2vh', lg: '2.5vh' }}
      px={0}
      w="100vw"
      minW="100vw"
      maxW="100vw"
      overflowX="hidden"
      position="relative"
      filter="drop-shadow(0 0 15px rgba(255, 69, 0, 0.15))"
    >
      <Container
        maxW="100%"
        width="100%"
        position="relative"
        zIndex={1}
        p={0}
        m={0}
        h="100%"
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '1vh', sm: '1.5vh', md: '2vh', lg: '2.5vh' }}
          w="100%"
          maxW="100%"
          h="100%"
          minH="0"
          alignItems="stretch"
          px={{ base: '2vw', sm: '3vw', md: '4vw', lg: '5vw' }}
        >
          {/* Left Section: Player Identity */}
          <MotionBox
            w={{ base: '100%', md: '1fr' }}
            mb={{ base: '1vh', md: 0 }}
            h="100%"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <VStack spacing={{ base: '1vh', sm: '1.5vh', md: '2vh' }} align="left" h="100%">
              {/* Player Image with Jersey Number Overlay */}
              <Box
                position="relative"
                w="100%"
                h={{ base: '25vh', sm: '30vh', md: '35vh', lg: '40vh' }}
              >
                {/* Background Spotlight Effect */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w={{ base: '20vw', sm: '18vw', md: '15vw', lg: '12vw' }}
                  h={{ base: '20vw', sm: '18vw', md: '15vw', lg: '12vw' }}
                  bg="radial-gradient(circle, rgba(255, 60, 60, 0.15) 0%, transparent 70%)"
                  borderRadius="full"
                  zIndex={1}
                />
                {/* Jersey Number */}
                <Box
                  position="absolute"
                  top={{ base: '1vh', md: '2vh' }}
                  left={{ base: '25vw', sm: '20vw', md: '18vw', lg: '15vw' }}
                  fontSize={{ base: '8vw', sm: '7vw', md: '6vw', lg: '5vw' }}
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
                    boxSize={{ base: '25vw', sm: '22vw', md: '20vw', lg: '18vw' }}
                    objectFit="contain"
                    filter="drop-shadow(0 0 10px rgba(255, 69, 0, 0.3))"
                    _hover={{ filter: 'drop-shadow(0 0 20px rgba(255, 69, 0, 0.7))' }}
                    transition="filter 0.3s ease"
                  />
                </MotionBox>
              </Box>

              {/* Player Info Text */}
              <HStack spacing={{ base: '0.5vw', md: '1vw' }} align="center">
                <MotionBox
                  whileHover={{ scale: 1.1, color: neonPurple, textShadow: '0 0 8px #BF00FF' }}
                >
                  <Heading
                    fontSize={{ base: '4vw', sm: '3.5vw', md: '3vw', lg: '2.5vw' }}
                    fontWeight={800}
                    color="white"
                    fontFamily="'Poppins', sans-serif"
                    textTransform="uppercase"
                    letterSpacing={{ base: '0.05vw', md: '0.1vw' }}
                    textShadow="0 1px 2px rgba(255, 255, 255, 0.1)"
                  >
                    {player.name}
                  </Heading>
                </MotionBox>
                <Image
                  src="/public/images/argentina.png"
                  alt="Argentina Flag"
                  boxSize={{ base: '3vw', sm: '2.5vw', md: '2vw' }}
                  objectFit="contain"
                  alignSelf="center"
                />
              </HStack>
              <Text
                fontSize={{ base: '2vw', sm: '1.8vw', md: '1.5vw' }}
                fontWeight={500}
                color={gray300}
                letterSpacing={{ base: '0.05vw', md: '0.1vw' }}
                mt={{ base: '-1vh', md: '-0.8vh' }}
              >
                {player.position}
              </Text>

              {/* Bio Stats Panel */}
              <MotionBox
                bg={cardBg}
                borderRadius={{ base: '1vw', md: '1.2vw' }}
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 69, 0, 0.1)"
                p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                w="100%"
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 69, 0, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize={{ base: '2.2vw', sm: '2vw', md: '1.8vw' }}
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={{ base: '0.5vh', md: '1vh' }}
                >
                  Bio Stats
                </Text>
                <Flex
                  color="white"
                  justify="space-between"
                  align="center"
                  px={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                  py={{ base: '0.5vh', md: '1vh' }}
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap={{ base: '1vh', md: 0 }}
                  borderRadius="0.8vw"
                >
                  {[
                    { value: player.age, unit: "YR" },
                    { value: parseInt(player.height.split(' ')[0]), unit: "CM" },
                    { value: parseInt(player.weight.split(' ')[0]), unit: "KG" },
                  ].map((stat, index) => (
                    <MotionBox
                      key={index}
                      textAlign="center"
                      px={{ base: '0.5vw', md: '1vw' }}
                      borderRight={index < 2 ? "1px solid rgba(255,255,255,0.1)" : "none"}
                      whileHover={{ scale: 1.1, color: neonOrange, textShadow: '0 0 12px #FF4500' }}
                    >
                      <Text
                        fontSize={{ base: '3vw', sm: '2.5vw', md: '2vw', lg: '1.8vw' }}
                        fontWeight="bold"
                        letterSpacing="0.1vw"
                        textTransform="uppercase"
                        fontFamily="'Poppins', sans-serif"
                      >
                        {stat.value}
                      </Text>
                      <Text
                        fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }}
                        opacity={0.7}
                        letterSpacing="0.15vw"
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
                padding={{ base: '0.5vw 1.5vw', md: '0.8vw 2vw' }}
                textTransform="uppercase"
                fontWeight={600}
                letterSpacing="0.1vw"
                fontFamily="'Poppins', sans-serif"
                fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }}
                rightIcon={<ArrowForwardIcon boxSize={{ base: '2vw', sm: '1.5vw', md: '1vw' }} />}
                _hover={{ backgroundColor: '#FF3C3C', color: 'white', transform: 'translateY(-2px)' }}
              >
                Full Bio
              </Button>
            </VStack>
          </MotionBox>

          {/* Right Section: Performance Dashboard */}
          <Box w={{ base: '100%', md: '2fr' }} h="100%">
            <VStack spacing={{ base: '1vh', sm: '1.5vh', md: '2vh' }} align="stretch" h="100%">
              {/* Season Stats Panel */}
              <MotionBox
                bg={cardBg}
                borderRadius={{ base: '1vw', md: '1.2vw' }}
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 255, 0, 0.1)"
                p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                w="100%"
                minHeight="auto"
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0, 255, 0, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize={{ base: '2.2vw', sm: '2vw', md: '1.8vw' }}
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={{ base: '0.5vh', md: '1vh' }}
                >
                  2024/2025 Season Stats
                </Text>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: '0.5vh', md: '1vh' }} w="100%">
                  <MotionBox whileHover={{ color: neonGreen, textShadow: '0 0 8px #00FF00' }}>
                    <Text fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }} fontWeight={500} color={gray200}>
                      Appearances: <Text as="span" fontWeight={600} color="white">{player.seasonStats.appearances.total} ({player.seasonStats.appearances.sub})</Text>
                    </Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonGreen, textShadow: '0 0 8px #00FF00' }}>
                    <Text fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }} fontWeight={500} color={gray200}>
                      Goals / Assists: <Text as="span" fontWeight={600} color="white">{player.seasonStats.goals} / {player.seasonStats.assists}</Text>
                    </Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonRed, textShadow: '0 0 8px #FF3C3C' }}>
                    <Text fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }} fontWeight={500} color={gray200}>
                      Shots/Game: <Text as="span" fontWeight={600} color={player.seasonStats.shotsPerGame < 3 ? neonRed : gray200}>{player.seasonStats.shotsPerGame}</Text>
                    </Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonGreen, textShadow: '0 0 8px #00FF00' }}>
                    <Text fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }} fontWeight={500} color={gray200}>
                      Dribbles/Game: <Text as="span" fontWeight={600} color={neonGreen}>{player.seasonStats.dribblesPerGame}</Text>
                    </Text>
                  </MotionBox>
                  <MotionBox whileHover={{ color: neonRed, textShadow: '0 0 8px #FF3C3C' }}>
                    <Text fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }} fontWeight={500} color={gray200}>
                      Pass Acc.: <Text as="span" fontWeight={600} color={player.seasonStats.passAccuracy >= 85 ? "white" : neonRed}>{player.seasonStats.passAccuracy}%</Text>
                    </Text>
                  </MotionBox>
                </SimpleGrid>
              </MotionBox>

              {/* Playing Positions Map */}
              <MotionBox
                bg={cardBg}
                borderRadius={{ base: '1vw', md: '1.2vw' }}
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 255, 0.1)"
                p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0, 0, 255, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize={{ base: '2.2vw', sm: '2vw', md: '1.8vw' }}
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={{ base: '0.5vh', md: '1vh' }}
                >
                  Playing Positions
                </Text>
                <Box
                  w="100%"
                  h={{ base: '10vh', sm: '12vh', md: '14vh', lg: '16vh' }}
                  bg="url('/public/images/pitch.png') center/contain no-repeat"
                  position="relative"
                />
              </MotionBox>

              {/* Best Performance Panel */}
              <MotionBox
                bg={cardBg}
                borderRadius={{ base: '1vw', md: '1.2vw' }}
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 165, 0, 0.1)"
                p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 165, 0, 0.7)' }}
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize={{ base: '2.2vw', sm: '2vw', md: '1.8vw' }}
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={{ base: '0.5vh', md: '1vh' }}
                >
                  Best Performance
                </Text>
                <HStack spacing={{ base: '0.5vw', md: '1vw' }} wrap="wrap" justify="space-between">
                  {player.form.map((match, index) => (
                    <MotionBox
                      key={index}
                      spacing={{ base: '0.2vh', md: '0.5vh' }}
                      align="center"
                      whileHover={{ scale: 1.1, boxShadow: `0 0 12px ${getRatingColor(match.rating)}` }}
                    >
                      <VStack spacing={{ base: '0.2vh', md: '0.5vh' }}>
                        <Image
                          src={match.clubLogo}
                          alt={`${match.opponent} logo`}
                          boxSize={{ base: '3vw', sm: '2.5vw', md: '2vw' }}
                          objectFit="contain"
                          borderRadius="full"
                          filter="drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))"
                          _hover={{ filter: `drop-shadow(0 0 8px ${getRatingColor(match.rating)})` }}
                        />
                        <Text fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }} color={gray200}>
                          {match.date.split('-')[1] + '.' + match.date.split('-')[2]}
                        </Text>
                        <Badge
                          bg={getRatingColor(match.rating)}
                          color="white"
                          borderRadius="full"
                          px={{ base: '0.5vw', md: '0.8vw' }}
                          py={{ base: '0.2vh', md: '0.3vh' }}
                          fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }}
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
                  mt={{ base: '0.5vh', md: '1vh' }}
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
                <Text fontSize={{ base: '1.6vw', sm: '1.3vw', md: '1.1vw' }} color={gray200} mt={{ base: '0.5vh', md: '1vh' }}>
                  Average Rating: <Text as="span" color={neonOrange} fontWeight={600} textShadow="0 0 8px #FF4500">{averageRating.toFixed(1)}</Text>
                </Text>
              </MotionBox>

              {/* Live Stats */}
              <MotionBox
                bg={cardBg}
                borderRadius={{ base: '1vw', md: '1.2vw' }}
                boxShadow="0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 0, 255, 0.1)"
                p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 0, 255, 0.7)' }}
                position="relative"
                minWidth={{ base: '40vw', sm: '35vw', md: '30vw' }}
                maxWidth="100%"
                backdropFilter="blur(10px)"
              >
                <Text
                  fontSize={{ base: '2.2vw', sm: '2vw', md: '1.8vw' }}
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                  textShadow="0 0 4px rgba(255, 255, 255, 0.3)"
                  mb={{ base: '0.5vh', md: '1vh' }}
                >
                  Live Stats
                </Text>
                <HStack justify="space-between" spacing={{ base: '1vw', md: '2vw' }} align="center" w="100%">
                  <Box
                    position="relative"
                    minWidth={{ base: '25vw', sm: '20vw', md: '15vw' }}
                    maxWidth={{ base: '25vw', sm: '20vw', md: '15vw' }}
                    height={{ base: '10vh', sm: '12vh', md: '14vh' }}
                  >
                    <Image
                      src="/public/images/stats-icon.png"
                      alt="Live Stats Icon"
                      width={{ base: '25vw', sm: '20vw', md: '15vw' }}
                      height={{ base: '10vh', sm: '12vh', md: '14vh' }}
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
                    rightIcon={<ExternalLinkIcon boxSize={{ base: '2vw', sm: '1.5vw', md: '1vw' }} />}
                    fontWeight={600}
                    textTransform="uppercase"
                    padding={{ base: '0.5vw 1.5vw', md: '0.8vw 2vw' }}
                    borderRadius="50px"
                    fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }}
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