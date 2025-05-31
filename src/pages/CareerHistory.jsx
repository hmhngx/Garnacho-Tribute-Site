import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Flex,
  Icon,
  Button,
  Tag,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const player = {
  name: 'Alejandro Garnacho',
  nickname: 'El Bichito',
  position: 'Winger',
  nationality: 'Argentina',
  jersey: 17,
  image: '/images/armfolded.png',
  career: {
    clubs: [
      { name: 'Atletico Madrid Youth', years: '2015-2020', matches: 50, goals: 15 },
      { name: 'Manchester United', years: '2020-Present', matches: 144, goals: 26 },
    ],
    honours: [
      { title: 'FA Youth Cup', count: 1, image: '/trophies/youth.png' },
      { title: 'EFL League Cup', count: 1, image: '/trophies/league-cup.png' },
      { title: 'FA Cup', count: 1, image: '/trophies/fa-cup.png' },
      { title: 'Copa America', count: 1, image: '/trophies/copa.png' },
      { title: 'FIFA Puskas Award', count: 1, image: '/trophies/puskas.png' },
      { title: 'Goal of the Season', count: 1, image: '/trophies/goal-season.png' },
      { title: 'Jimmy Murphy Award', count: 1, image: '/trophies/jimmy.png' },
    ],
  },
  bio: 'Alejandro Garnacho is an Argentine professional footballer who plays as a winger for Manchester United and the Argentina national team. After starting at Atletico Madrid Youth, he joined Manchester United in 2020.',
};

const cardBg = 'rgba(255, 255, 255, 0.05)';
const neonPurple = '#BF00FF';
const neonRed = '#FF3C3C';

const CareerHistory = () => {
  return (
    <Box
      minH="100vh"
      bg="#0F172A"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12 }}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
      p={10}
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative" zIndex={1} p={0} mt={{ base: 8, md: 12 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 12 }} w="full" alignItems="flex-start">
          {/* Left Section: Player Info, Trophies, Clubs, Bio */}
          <VStack spacing={6} align="start" w="full">
            {/* Player Header */}
            <VStack spacing={2} align="start" w="full">
              <HStack spacing={4} align="center">
                <MotionBox
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(191, 0, 255, 0.7)' }}
                  transition={{ duration: 0.3 }}
                >
                  <Tag
                    size="lg"
                    bgGradient="linear(to-r, #BF00FF, #FF4081)"
                    color="white"
                    borderRadius="full"
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="13px"
                    fontFamily="'Poppins', sans-serif"
                  >
                    {player.position}
                  </Tag>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.05, color: neonPurple, textShadow: '0 0 20px #BF00FF' }}
                  transition={{ duration: 0.3 }}
                >
                  <Heading
                    fontSize={{ base: '36px', md: '40px' }}
                    fontWeight="800"
                    color="white"
                    fontFamily="'Poppins', sans-serif"
                    lineHeight={1}
                    textTransform="uppercase"
                    letterSpacing="1px"
                  >
                    {player.name}
                  </Heading>
                </MotionBox>
              </HStack>
              <MotionBox
                whileHover={{ scale: 1.1, color: 'gray.200', textShadow: '0 0 10px #BF00FF' }}
                transition={{ duration: 0.3 }}
              >
                <HStack spacing={2} align="center">
                  <Image
                  src="/images/argentina.png"
                  alt="Argentina Flag"
                  boxSize={{ base: '24px', md: '24px' }}
                  objectFit="contain"
                  alignSelf="center"
                  />
                  <Text fontSize="sm" color="gray.300" fontFamily="'Poppins', sans-serif">
                    {player.nationality}
                  </Text>
                </HStack>
              </MotionBox>
            </VStack>

            {/* Career Trophies */}
            <Box w="full">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="white"
                mb={4}
                textTransform="uppercase"
                fontFamily="'Poppins', sans-serif"
                letterSpacing="1px"
              >
                Career Trophies & Hounours
              </Text>
              <HStack spacing={4} wrap="wrap" justify="center">
                {player.career.honours.map((honour, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 60, 80, 0.8)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack spacing={1} align="center">
                      <Image
                        src={honour.image}
                        alt={`${honour.title} Trophy`}
                        boxSize={{ base: '40px', md: '50px' }}
                        objectFit="contain"
                        filter="drop-shadow(0 0 8px rgba(255, 60, 80, 0.4))"
                        transition="all 0.3s ease"
                        _hover={{ filter: 'drop-shadow(0 0 15px #FF3C3C)' }}
                      />
                      <Text
                        fontSize="md"
                        fontWeight="bold"
                        color="white"
                        textShadow="0 0 5px #FF3C3C"
                        fontFamily="'Poppins', sans-serif"
                        _hover={{ textShadow: '0 0 10px #FF3C3C' }}
                      >
                        {honour.count}x
                      </Text>
                    </VStack>
                  </MotionBox>
                ))}
              </HStack>
            </Box>

            {/* Career Clubs */}
            <Box w="full">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="white"
                mb={4}
                textTransform="uppercase"
                fontFamily="'Poppins', sans-serif"
                letterSpacing="1px"
              >
                Career Clubs
              </Text>
              {player.career.clubs.map((club, index) => (
                <MotionBox
                  key={index}
                  bg={cardBg}
                  borderRadius="lg"
                  p={4}
                  mb={4}
                  borderLeft="4px solid #FF3C3C"
                  boxShadow="0 2px 12px rgba(0, 0, 0, 0.3)"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 25px rgba(255, 60, 60, 0.7)',
                    borderLeftColor: neonRed,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Text
                    fontSize="lg"
                    color="white"
                    fontWeight="bold"
                    fontFamily="'Poppins', sans-serif"
                    _hover={{ color: 'gray.200', textShadow: '0 0 10px #BF00FF' }}
                  >
                    {club.name}
                  </Text>
                  <HStack spacing={4} mt={2}>
                    <Text
                      fontSize="xs"
                      color="gray.400"
                      opacity={0.7}
                      fontFamily="'Poppins', sans-serif"
                      _hover={{ color: 'gray.300', textShadow: '0 0 5px #BF00FF' }}
                    >
                      Years: {club.years}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="gray.400"
                      opacity={0.7}
                      fontFamily="'Poppins', sans-serif"
                      _hover={{ color: 'gray.300', textShadow: '0 0 5px #BF00FF' }}
                    >
                      Matches: {club.matches}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="gray.400"
                      opacity={0.7}
                      fontFamily="'Poppins', sans-serif"
                      _hover={{ color: 'gray.300', textShadow: '0 0 5px #BF00FF' }}
                    >
                      Goals: {club.goals}
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </Box>

            {/* Bio */}
            <MotionBox
              w="full"
              bg={cardBg}
              p={4}
              borderRadius="lg"
              boxShadow="0 2px 12px rgba(0, 0, 0, 0.3)"
              whileHover={{ boxShadow: '0 0 20px rgba(191, 0, 255, 0.5)' }}
              transition={{ duration: 0.3 }}
            >
              <Text fontSize="sm" color="gray.300" fontFamily="'Poppins', sans-serif" _hover={{ color: 'gray.200' }}>
                {player.bio}
              </Text>
            </MotionBox>
          </VStack>

          {/* Right Section: Player Image */}
          <Box
            position="relative"
            p={10}
            bg="#0F172A"
            overflow="hidden"
            w="full"
            _hover={{ boxShadow: '0 0 20px rgba(191, 0, 255, 0.4)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Glow */}
            <Box
              position="absolute"
              w={{ base: '350px', md: '450px' }}
              h={{ base: '350px', md: '450px' }}
              bgGradient="radial(circle, rgba(140, 0, 255, 0.4), transparent)"
              borderRadius="full"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex={0}
            />

            {/* Second Glow Layer */}
            <Box
              position="absolute"
              w={{ base: '300px', md: '400px' }}
              h={{ base: '300px', md: '400px' }}
              bgGradient="radial(circle, rgba(255, 105, 180, 0.3), transparent)"
              borderRadius="full"
              top="60%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex={0}
            />

            {/* Smoke Texture */}
            <Image
              src="/images/cloud.png"
              position="absolute"
              top="0"
              left="0"
              opacity={0.2}
              zIndex={0}
              w={{ base: '400px', md: '600px' }}
              h={{ base: '400px', md: '600px' }}
              objectFit="contain"
              filter="blur(10px)"
            />

            {/* Garnacho Render */}
            <MotionBox whileHover={{ scale: 1.05 }}>
              <Image
                src={player.image}
                alt="Garnacho"
                maxH="80vh"
                zIndex={1}
                position="relative"
                objectFit="contain"
                filter="drop-shadow(0 10px 25px rgba(0, 0, 0, 0.35))"
                _hover={{ boxShadow: '0 0 25px rgba(191, 0, 255, 0.7)' }}
                transition="box-shadow 0.3s ease"
              />
            </MotionBox>

            {/* Player Info Text */}
            <VStack spacing={2} align="center" mt={8} zIndex={2}>
              <Text
                fontSize={{ base: '36px', md: '48px' }}
                fontWeight="extrabold"
                color="white"
                fontFamily="'Poppins', sans-serif"
                textTransform="uppercase"
                letterSpacing="1px"
              >
                {player.nickname}
              </Text>
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                textTransform="uppercase"
                letterSpacing="wider"
                color="gray.400"
                fontFamily="'Poppins', sans-serif"
              >
                Manchester United • {player.nationality}
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CareerHistory;