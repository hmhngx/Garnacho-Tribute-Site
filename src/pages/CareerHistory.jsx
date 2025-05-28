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
import { FaTrophy, FaFlag, FaFutbol } from 'react-icons/fa';

const player = {
  name: 'Alejandro Garnacho',
  position: 'Winger',
  nationality: 'Argentina',
  jersey: 17,
  image: 'src/assets/nobg3.png',
  career: {
    clubs: [
      { name: 'Atletico Madrid Youth', years: '2015-2020', matches: 50, goals: 15 },
      { name: 'Manchester United', years: '2020-Present', matches: 134, goals: 22 },
    ],
    honours: [
      { title: 'FA Youth Cup', count: 1 },
      { title: 'Premier League', count: 1 },
      { title: 'FA Cup', count: 1 },
      { title: 'Copa America', count: 1 },
    ],
  },
};

const gradientBg = 'linear-gradient(135deg, #1A2A44 0%, #0F1C2C 100%)'; // Deep navy to darker navy
const cardBg = 'rgba(255, 255, 255, 0.1)';


const CareerHistory = () => {
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

      <Container maxW="100vw" width="100%" position="relative" zIndex={1} p={0} mt={{ base: 16, md: 20 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
          gap={{ base: 8, md: 16 }}
          w="full"
          maxW="100%"
        >
          {/* Left Section: Player Info & Career Details */}
          <VStack
            spacing={8}
            align="start"
            w={{ base: '100%', md: '60%' }}
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="0 4px 24px rgba(0, 0, 0, 0.4)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.1)"
          >
            {/* Player Header */}
            <VStack spacing={2} align="start">
              <Heading
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="extrabold"
                color="white"
                fontFamily="sans-serif"
                lineHeight={1}
              >
                {player.name}
              </Heading>
              <HStack spacing={2}>
                <Tag
                  size="lg"
                  borderRadius="full"
                  bgGradient="linear(to-r, #1E3A8A, #4B6CB7)"
                  color="white"
                  fontWeight="medium"
                  boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
                >
                  {player.position}
                </Tag>
                <Icon as={FaFlag} color="white" />
                <Text fontSize="lg" color="white" fontWeight="light">
                  {player.nationality}
                </Text>
              </HStack>
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={12}
                h={12}
                bgGradient="linear(to-r, #1E3A8A, #4B6CB7)"
                borderRadius="full"
                color="white"
                fontSize="xl"
                fontWeight="bold"
                mt={2}
                boxShadow="0 0 10px rgba(75, 108, 183, 0.5)"
              >
                {player.jersey}
              </Box>
            </VStack>

            {/* Career Clubs */}
            <Box w="full">
              <Text fontSize="xl" fontWeight="medium" color="white" mb={4}>
                Career Clubs
              </Text>
              {player.career.clubs.map((club, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  p={4}
                  mb={4}
                  borderLeft="4px solid #A52A2A"
                  boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
                >
                  <Text fontSize="lg" color="white" fontWeight="medium">
                    {club.name}
                  </Text>
                  <HStack spacing={4} mt={2}>
                    <Text fontSize="sm" color="gray.300">Years: {club.years}</Text>
                    <Text fontSize="sm" color="gray.300">Matches: {club.matches}</Text>
                    <Text fontSize="sm" color="gray.300">Goals: {club.goals}</Text>
                  </HStack>
                </Box>
              ))}
            </Box>

            {/* Honours & Trophies */}
            <Box w="full">
              <Text fontSize="xl" fontWeight="medium" color="white" mb={4}>
                Honours & Trophies
              </Text>
              <HStack
                spacing={6}
                bg={cardBg}
                borderRadius="xl"
                p={4}
                boxShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
                border="1px solid rgba(255, 255, 255, 0.1)"
              >
                {player.career.honours.map((honour, index) => (
                  <VStack key={index} spacing={1}>
                    <Icon as={FaTrophy} color="white" boxSize={6} />
                    <Text fontSize="sm" color="white" fontWeight="light">
                      {honour.count}
                    </Text>
                    <Text fontSize="xs" color="gray.300" textTransform="uppercase">
                      {honour.title}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </Box>
          </VStack>

          {/* Right Section: Player Image */}
          <Box
            w={{ base: '100%', md: '40%' }}
            textAlign="center"
            pos="relative"
            overflow="hidden"
          >
            <Image
              src={player.image}
              alt={player.name}
              boxSize={{ base: '300px', md: '400px', lg: '500px' }}
              objectFit="contain"
              pos="absolute"
              top={0}
              right={0}
              transform="translateX(10%)"
              filter="drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CareerHistory;