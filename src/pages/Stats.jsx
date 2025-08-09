import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Flex,
  Badge,
  Icon,
  Button,
  SimpleGrid,
  Tooltip,
  Select,
  Collapse,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  ExternalLinkIcon,
  ArrowForwardIcon,
  InfoIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

// Enhanced player data with more detailed stats
const player = {
  name: 'Alejandro Garnacho',
  position: 'Winger',
  jersey: 17,
  nationality: 'Argentina',
  age: 21,
  height: '180 CM',
  weight: '70 KG',
  image: '/images/nobg6.png',
  seasonStats: {
    appearances: { total: 58, sub: 22, starts: 36 },
    goals: 11,
    assists: 10,
    shotsPerGame: 2.3,
    dribblesPerGame: 3.1,
    passAccuracy: 82,
    keyPasses: 1.8,
    crosses: 0.9,
    tackles: 0.7,
    interceptions: 0.4,
    clearances: 0.2,
    blocks: 0.1,
    fouls: 0.8,
    yellowCards: 3,
    redCards: 0,
    rating: 7.2,
  },
  preferredPositions: ['LW', 'RW'],
  form: [
    { opponent: 'Aston Villa', date: '2023-12-27', rating: 8.4, clubLogo: '/clubs/aston.png', goals: 2, assists: 0, minutes: 90, home: true },
    { opponent: 'Chelsea', date: '2024-04-05', rating: 8.5, clubLogo: '/clubs/chelsea.png', goals: 2, assists: 0, minutes: 85, home: false },
    { opponent: 'Leicester', date: '2024-10-31', rating: 8.6, clubLogo: '/clubs/leicester.png', goals: 1, assists: 1, minutes: 90, home: true },
    { opponent: 'West Ham', date: '2024-02-04', rating: 8.9, clubLogo: '/clubs/westham.png', goals: 2, assists: 0, minutes: 90, home: true },
    { opponent: 'Barnsley', date: '2024-09-18', rating: 9.8, clubLogo: '/clubs/barnsley.png', goals: 2, assists: 2, minutes: 90, home: true },
  ],
  trends: {
    goals: [2, 0, 1, 3, 1, 0, 2, 1, 0, 1],
    assists: [0, 1, 1, 0, 2, 1, 0, 1, 1, 0],
    ratings: [7.5, 8.2, 7.8, 8.9, 9.1, 7.3, 8.7, 8.1, 7.9, 8.4],
  },
  insights: [
    { type: 'improvement', stat: 'Goals per game', value: '+45%', period: 'Last 5 matches' },
    { type: 'consistency', stat: 'Assist rate', value: '85%', period: 'This season' },
    { type: 'highlight', stat: 'Best performance', value: 'vs Barnsley', period: '9.8 rating' },
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
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isOpen: isInsightsOpen, onToggle: onInsightsToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const averageRating = player.form.reduce((sum, match) => sum + match.rating, 0) / player.form.length;

  const getRatingColor = (rating) => {
    if (rating > 9.0) return neonBlue;
    if (rating > 8.0) return neonAqua;
    if (rating > 7.5) return neonGreen;
    if (rating > 6.5) return neonYellow;
    return neonRed;
  };

  const filteredForm = player.form.filter(match => {
    if (selectedFilter === 'home') return match.home;
    if (selectedFilter === 'away') return !match.home;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'goals') return b.goals - a.goals;
    if (sortBy === 'assists') return b.assists - a.assists;
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
    return 0;
  });

  const StatCard = ({ title, value, unit, color, trend, tooltip }) => (
    <MotionBox
      bg={cardBg}
      borderRadius={{ base: '1vw', md: '1.2vw' }}
      p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
      whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${color}40` }}
      backdropFilter="blur(10px)"
      position="relative"
      overflow="hidden"
    >
      <Tooltip label={tooltip} placement="top" hasArrow>
        <VStack spacing={{ base: '0.5vh', md: '1vh' }} align="center">
          <Text
            fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }}
            color={gray200}
            textTransform="uppercase"
            fontWeight={500}
          >
            {title}
          </Text>
          <HStack spacing={{ base: '0.5vw', md: '1vw' }} align="center">
            <Text
              fontSize={{ base: '3vw', sm: '2.5vw', md: '2vw', lg: '1.8vw' }}
              fontWeight="bold"
              color={color}
              textShadow={`0 0 8px ${color}`}
            >
              {value}
            </Text>
            {unit && (
              <Text
                fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }}
                color={gray200}
                opacity={0.7}
              >
                {unit}
              </Text>
            )}
          </HStack>
                     {trend && (
             <HStack spacing="0.5vw" align="center">
               <Text fontSize={{ base: '1.2vw', sm: '1vw', md: '0.8vw' }} color={trend > 0 ? neonGreen : neonRed}>
                 {trend > 0 ? '+' : ''}{trend}%
               </Text>
             </HStack>
           )}
        </VStack>
      </Tooltip>
    </MotionBox>
  );

  const TrendChart = ({ data, color, title }) => (
    <MotionBox
      bg={cardBg}
      borderRadius={{ base: '1vw', md: '1.2vw' }}
      p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
      whileHover={{ scale: 1.03, boxShadow: `0 0 15px ${color}40` }}
      backdropFilter="blur(10px)"
    >
      <Text
        fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }}
        fontWeight={600}
        color="white"
        mb={{ base: '0.5vh', md: '1vh' }}
      >
        {title}
      </Text>
      <Box h={{ base: '8vh', sm: '10vh', md: '12vh' }} position="relative">
        <svg width="100%" height="100%" viewBox="0 0 100 40">
          <polyline
            points={data.map((value, index) => `${(index / (data.length - 1)) * 100},${40 - (value / Math.max(...data)) * 35}`).join(' ')}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {data.map((value, index) => (
            <circle
              key={index}
              cx={(index / (data.length - 1)) * 100}
              cy={40 - (value / Math.max(...data)) * 35}
              r="1"
              fill={color}
            />
          ))}
        </svg>
      </Box>
    </MotionBox>
  );

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
        {/* Mobile Drawer Trigger */}
        {isMobile && (
          <IconButton
            icon={<HamburgerIcon />}
            position="fixed"
            top="2vh"
            right="2vw"
            zIndex={1000}
            onClick={() => setIsDrawerOpen(true)}
            bg={cardBg}
            color="white"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
          />
        )}

        {/* Mobile Drawer */}
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setIsDrawerOpen(false)}>
          <DrawerOverlay />
          <DrawerContent bg={gradientBg}>
            <DrawerCloseButton color="white" />
            <DrawerHeader color="white" borderBottom="1px solid rgba(255,255,255,0.1)">
              Filter Options
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing="2vh" align="stretch">
                <Box>
                  <Text color="white" mb="1vh">Filter by:</Text>
                                     <MotionBox
                     position="relative"
                     whileHover={{ scale: 1.02 }}
                   >
                     <Select
                       value={selectedFilter}
                       onChange={(e) => setSelectedFilter(e.target.value)}
                       bg="rgba(255,255,255,0.05)"
                       color="white"
                       border="1px solid rgba(255,255,255,0.3)"
                       borderRadius="0.8vw"
                       fontWeight={500}
                       fontSize="1.2vw"
                       _hover={{
                         border: '1px solid rgba(255,69,0,0.6)',
                         boxShadow: '0 0 10px rgba(255,69,0,0.3)',
                         bg: 'rgba(255,255,255,0.08)'
                       }}
                       _focus={{
                         border: '1px solid rgba(255,69,0,0.8)',
                         boxShadow: '0 0 15px rgba(255,69,0,0.5)',
                         bg: 'rgba(255,255,255,0.1)'
                       }}
                       sx={{
                         '& option': {
                           bg: 'rgba(26,26,64,0.95)',
                           color: 'white',
                           fontSize: '1vw',
                           padding: '0.5vh 1vw'
                         }
                       }}
                     >
                       <option value="all">⚽ All Matches</option>
                       <option value="home">🏠 Home Matches</option>
                       <option value="away">✈️ Away Matches</option>
                     </Select>
                   </MotionBox>
                </Box>
                <Box>
                  <Text color="white" mb="1vh">Sort by:</Text>
                                     <MotionBox
                     position="relative"
                     whileHover={{ scale: 1.02 }}
                   >
                     <Select
                       value={sortBy}
                       onChange={(e) => setSortBy(e.target.value)}
                       bg="rgba(255,255,255,0.05)"
                       color="white"
                       border="1px solid rgba(255,255,255,0.3)"
                       borderRadius="0.8vw"
                       fontWeight={500}
                       fontSize="1.2vw"
                       _hover={{
                         border: '1px solid rgba(0,255,0,0.6)',
                         boxShadow: '0 0 10px rgba(0,255,0,0.3)',
                         bg: 'rgba(255,255,255,0.08)'
                       }}
                       _focus={{
                         border: '1px solid rgba(0,255,0,0.8)',
                         boxShadow: '0 0 15px rgba(0,255,0,0.5)',
                         bg: 'rgba(255,255,255,0.1)'
                       }}
                       sx={{
                         '& option': {
                           bg: 'rgba(26,26,64,0.95)',
                           color: 'white',
                           fontSize: '1vw',
                           padding: '0.5vh 1vw'
                         }
                       }}
                     >
                       <option value="rating">⭐ Rating</option>
                       <option value="goals">⚽ Goals</option>
                       <option value="assists">🎯 Assists</option>
                       <option value="date">📅 Date</option>
                     </Select>
                   </MotionBox>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

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
                  src="/images/argentina.png"
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
                             {/* Filter Controls - Desktop Only */}
               {!isMobile && (
                 <MotionBox
                   bg="rgba(255,255,255,0.03)"
                   borderRadius={{ base: '1vw', md: '1.2vw' }}
                   p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                   backdropFilter="blur(10px)"
                   border="1px solid rgba(255,255,255,0.1)"
                   whileHover={{ 
                     scale: 1.01, 
                     boxShadow: '0 0 20px rgba(255,69,0,0.2)',
                     border: '1px solid rgba(255,69,0,0.3)'
                   }}
                   transition="all 0.3s ease"
                 >
                   <HStack justify="space-between" align="center">
                     <HStack spacing={{ base: '1vw', md: '2vw' }}>
                       <Box>
                         <Text 
                           fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }} 
                           color={neonOrange} 
                           mb="0.5vh"
                           fontWeight={600}
                           textTransform="uppercase"
                           letterSpacing="0.1vw"
                         >
                           🔍 Filter:
                         </Text>
                                                 <MotionBox
                           position="relative"
                           w={{ base: '15vw', md: '12vw' }}
                           whileHover={{ scale: 1.02 }}
                         >
                           <Select
                             value={selectedFilter}
                             onChange={(e) => setSelectedFilter(e.target.value)}
                             size="sm"
                             bg="rgba(255,255,255,0.05)"
                             color="white"
                             border="1px solid rgba(255,255,255,0.3)"
                             borderRadius="0.8vw"
                             fontWeight={500}
                             fontSize={{ base: '1.2vw', md: '1vw' }}
                             _hover={{
                               border: '1px solid rgba(255,69,0,0.6)',
                               boxShadow: '0 0 10px rgba(255,69,0,0.3)',
                               bg: 'rgba(255,255,255,0.08)'
                             }}
                             _focus={{
                               border: '1px solid rgba(255,69,0,0.8)',
                               boxShadow: '0 0 15px rgba(255,69,0,0.5)',
                               bg: 'rgba(255,255,255,0.1)'
                             }}
                             sx={{
                               '& option': {
                                 bg: 'rgba(26,26,64,0.95)',
                                 color: 'white',
                                 fontSize: '0.9vw',
                                 padding: '0.5vh 1vw'
                               }
                             }}
                           >
                             <option value="all">⚽ All Matches</option>
                             <option value="home">🏠 Home Matches</option>
                             <option value="away">✈️ Away Matches</option>
                           </Select>
                         </MotionBox>
                      </Box>
                                             <Box>
                         <Text 
                           fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }} 
                           color={neonGreen} 
                           mb="0.5vh"
                           fontWeight={600}
                           textTransform="uppercase"
                           letterSpacing="0.1vw"
                         >
                           📊 Sort:
                         </Text>
                                                 <MotionBox
                           position="relative"
                           w={{ base: '15vw', md: '12vw' }}
                           whileHover={{ scale: 1.02 }}
                         >
                           <Select
                             value={sortBy}
                             onChange={(e) => setSortBy(e.target.value)}
                             size="sm"
                             bg="rgba(255,255,255,0.05)"
                             color="white"
                             border="1px solid rgba(255,255,255,0.3)"
                             borderRadius="0.8vw"
                             fontWeight={500}
                             fontSize={{ base: '1.2vw', md: '1vw' }}
                             _hover={{
                               border: '1px solid rgba(0,255,0,0.6)',
                               boxShadow: '0 0 10px rgba(0,255,0,0.3)',
                               bg: 'rgba(255,255,255,0.08)'
                             }}
                             _focus={{
                               border: '1px solid rgba(0,255,0,0.8)',
                               boxShadow: '0 0 15px rgba(0,255,0,0.5)',
                               bg: 'rgba(255,255,255,0.1)'
                             }}
                             sx={{
                               '& option': {
                                 bg: 'rgba(26,26,64,0.95)',
                                 color: 'white',
                                 fontSize: '0.9vw',
                                 padding: '0.5vh 1vw'
                               }
                             }}
                           >
                             <option value="rating">⭐ Rating</option>
                             <option value="goals">⚽ Goals</option>
                             <option value="assists">🎯 Assists</option>
                             <option value="date">📅 Date</option>
                           </Select>
                         </MotionBox>
                      </Box>
                    </HStack>
                                         <MotionBox
                       whileHover={{ scale: 1.1, rotate: 5 }}
                       whileTap={{ scale: 0.95 }}
                     >
                       <IconButton
                         icon={<InfoIcon />}
                         onClick={onInsightsToggle}
                         variant="ghost"
                         color="white"
                         bg="rgba(255,255,255,0.05)"
                         borderRadius="full"
                         border="1px solid rgba(255,255,255,0.2)"
                         _hover={{ 
                           color: neonOrange, 
                           bg: 'rgba(255,69,0,0.1)',
                           border: '1px solid rgba(255,69,0,0.5)',
                           boxShadow: '0 0 15px rgba(255,69,0,0.3)'
                         }}
                         _active={{
                           transform: 'scale(0.95)',
                           bg: 'rgba(255,69,0,0.2)'
                         }}
                         transition="all 0.2s ease"
                       />
                     </MotionBox>
                  </HStack>
                </MotionBox>
              )}

              {/* Key Stats Cards */}
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: '1vh', md: '1.5vh' }}>
                <StatCard
                  title="Goals"
                  value={player.seasonStats.goals}
                  color={neonRed}
                  trend={45}
                  tooltip="Total goals scored this season"
                />
                <StatCard
                  title="Assists"
                  value={player.seasonStats.assists}
                  color={neonGreen}
                  trend={32}
                  tooltip="Total assists provided this season"
                />
                <StatCard
                  title="Rating"
                  value={player.seasonStats.rating}
                  color={neonAqua}
                  tooltip="Average performance rating"
                />
              </SimpleGrid>

              {/* Trend Charts */}
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: '1vh', md: '1.5vh' }}>
                <TrendChart data={player.trends.goals} color={neonRed} title="Goals Trend" />
                <TrendChart data={player.trends.assists} color={neonGreen} title="Assists Trend" />
                <TrendChart data={player.trends.ratings} color={neonAqua} title="Rating Trend" />
              </SimpleGrid>

              {/* AI Insights Panel */}
              <Collapse in={isInsightsOpen} animateOpacity>
                <MotionBox
                  bg={cardBg}
                  borderRadius={{ base: '1vw', md: '1.2vw' }}
                  p={{ base: '1vw', sm: '1.5vw', md: '2vw' }}
                  backdropFilter="blur(10px)"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Text
                    fontSize={{ base: '2vw', sm: '1.8vw', md: '1.5vw' }}
                    fontWeight={700}
                    color="white"
                    mb={{ base: '1vh', md: '1.5vh' }}
                    textTransform="uppercase"
                  >
                    AI Insights
                  </Text>
                  <VStack spacing={{ base: '1vh', md: '1.5vh' }} align="stretch">
                    {player.insights.map((insight, index) => (
                      <MotionBox
                        key={index}
                        p={{ base: '1vw', md: '1.5vw' }}
                        bg="rgba(255,255,255,0.05)"
                        borderRadius="0.8vw"
                        border="1px solid rgba(255,255,255,0.1)"
                        whileHover={{ scale: 1.02, bg: 'rgba(255,255,255,0.08)' }}
                      >
                        <HStack justify="space-between" align="center">
                          <VStack align="start" spacing="0.5vh">
                            <Text fontSize={{ base: '1.5vw', sm: '1.2vw', md: '1vw' }} color={gray200}>
                              {insight.stat}
                            </Text>
                            <Text fontSize={{ base: '1.2vw', sm: '1vw', md: '0.8vw' }} color={gray200} opacity={0.7}>
                              {insight.period}
                            </Text>
                          </VStack>
                          <Badge
                            bg={insight.type === 'improvement' ? neonGreen : insight.type === 'consistency' ? neonAqua : neonOrange}
                            color="white"
                            px={{ base: '1vw', md: '1.5vw' }}
                            py={{ base: '0.5vh', md: '0.8vh' }}
                            borderRadius="full"
                            fontSize={{ base: '1.2vw', sm: '1vw', md: '0.8vw' }}
                            fontWeight={600}
                          >
                            {insight.value}
                          </Badge>
                        </HStack>
                      </MotionBox>
                    ))}
                  </VStack>
                </MotionBox>
              </Collapse>

              {/* Enhanced Performance Panel */}
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
                  Match Performance
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
                  <MotionBox whileHover={{ color: neonAqua, textShadow: '0 0 8px #00ffff' }}>
                    <Text fontSize={{ base: '1.8vw', sm: '1.5vw', md: '1.2vw' }} fontWeight={500} color={gray200}>
                      Key Passes: <Text as="span" fontWeight={600} color={neonAqua}>{player.seasonStats.keyPasses}</Text>
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
                  bg="url('/images/pitch.png') center/contain no-repeat"
                  position="relative"
                />
              </MotionBox>

              {/* Enhanced Best Performance Panel */}
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
                  Recent Form
                </Text>
                <HStack spacing={{ base: '0.5vw', md: '1vw' }} wrap="wrap" justify="space-between">
                  {filteredForm.map((match, index) => (
                    <Tooltip
                      key={index}
                      label={`${match.opponent} - ${match.date} - ${match.goals}G ${match.assists}A`}
                      placement="top"
                      hasArrow
                    >
                      <MotionBox
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
                          <HStack spacing="0.2vw">
                            {match.goals > 0 && (
                              <Badge size="sm" bg={neonRed} color="white" fontSize={{ base: '1vw', md: '0.8vw' }}>
                                {match.goals}G
                              </Badge>
                            )}
                            {match.assists > 0 && (
                              <Badge size="sm" bg={neonGreen} color="white" fontSize={{ base: '1vw', md: '0.8vw' }}>
                                {match.assists}A
                              </Badge>
                            )}
                          </HStack>
                        </VStack>
                      </MotionBox>
                    </Tooltip>
                  ))}
                </HStack>
                <Box
                  position="relative"
                  h="1px"
                  bg="transparent"
                  mt={{ base: '0.5vh', md: '1vh' }}
                >
                  {filteredForm.map((match, index) => (
                    index < filteredForm.length - 1 && (
                      <Box
                        key={index}
                        position="absolute"
                        top="0"
                        left={`${(index / (filteredForm.length - 1)) * 100}%`}
                        width={`${100 / (filteredForm.length - 1)}%`}
                        height="1px"
                        bgGradient={`linear(to-r, ${getRatingColor(match.rating)}, ${getRatingColor(filteredForm[index + 1].rating)})`}
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
                      src="/images/stats-icon.png"
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