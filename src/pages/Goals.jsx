import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Badge,
  useColorModeValue,
  HStack,
  Button,
  SimpleGrid,
  ScaleFade,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import goal images from assets
import goal1Img from '/public/goals/sociedad.png';
import goal2Img from '/public/goals/fulham.png';
import goal3Img from '/public/goals/leeds.png';
import goal4Img from '/public/goals/westham.png';
import goal5Img from '/public/goals/wolves.png';
import goal6Img from '/public/goals/palace.png';
import goal7Img from '/public/goals/everton.png';
import goal8Img from '/public/goals/gala.png';
import goal9Img from '/public/goals/villa1.png';
import goal10Img from '/public/goals/villa2.png';
import goal11Img from '/public/goals/west1.png';
import goal12Img from '/public/goals/west2.png';
import goal13Img from '/public/goals/chelsea1.png';
import goal14Img from '/public//goals/chelsea2.png';
import goal15Img from '/public/goals/city1.png';
import goal16Img from '/public/goals/city2.png';
import goal17Img from '/public/goals/southampton.png';
import goal18Img from '/public/goals/barn1.png';
import goal19Img from '/public/goals/barn2.png';
import goal20Img from '/public/goals/brent1.png';
import goal21Img from '/public/goals/lei1.png';
import goal22Img from '/public/goals/lei2.png';
import goal23Img from '/public/goals/bodo.png';
import goal24Img from '/public/goals/lei3.png';
import goal25Img from '/public/goals/newcastle.png';
import goal26Img from '/public/goals/brent2.png';

// Import Manchester United logo
import manUnitedLogo from '/public/clubs/Manchester-United-FC-logo.png';

// Import opponent club logos (placeholders)
import fulhamLogo from '/public/clubs/fulham.png';
import sociedadLogo from '/public/clubs/sociedad.png';
import leedsLogo from '/public/clubs/leeds.png';
import westHamLogo from '/public/clubs/westham.png';
import wolvesLogo from '/public/clubs/wolves.png';
import palaceLogo from '/public/clubs/crystal.png';
import evertonLogo from '/public/clubs/everton.png';
import galaLogo from '/public/clubs/gala.png';
import villaLogo from '/public/clubs/aston.png';
import chelseaLogo from '/public/clubs/chelsea.png';
import cityLogo from '/public/clubs/mancity.png';
import southamptonLogo from '/public/clubs/southampton.png';
import barnsleyLogo from '/public/clubs/barnsley.png';
import brentfordLogo from '/public/clubs/brentford.png';
import leicesterLogo from '/public/clubs/leicester.png';
import bodoLogo from '/public/clubs/bodoglim.png';
import newcastleLogo from '/public/clubs/newcastle.png';

// Import tournament logos (placeholders)
import premierLeagueLogo from '/public/tournaments/epl.png';
import championsLeagueLogo from '/public/tournaments/ucl.png';
import faCupLogo from '/public/tournaments/fa.png';
import eflCupLogo from '/public/tournaments/efl.png';
import europaLeagueLogo from '/public/tournaments/uel.png';
import communityLogo from '/public/tournaments/community.png';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px #D00000, 0 0 20px #D00000, 0 0 30px #ffffff; }
  50% { box-shadow: 0 0 20px #D00000, 0 0 40px #D00000, 0 0 60px #ffffff; }
  100% { box-shadow: 0 0 10px #D00000, 0 0 20px #D00000, 0 0 30px #ffffff; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const MotionBox = motion(Box);
const MotionModalContent = motion(ModalContent);
const MotionText = motion(Text);

const Goals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [goalNumber, setGoalNumber] = useState(0);
  const goalsPerPage = 6;

  // Mapping of opponents to their logos
  const opponentLogos = {
    'Fulham': fulhamLogo,
    'Real Sociedad': sociedadLogo,
    'Leeds United': leedsLogo,
    'West Ham United': westHamLogo,
    'West Ham': westHamLogo,
    'Wolves': wolvesLogo,
    'Crystal Palace': palaceLogo,
    'Everton': evertonLogo,
    'Galatasaray': galaLogo,
    'Aston Villa': villaLogo,
    'Chelsea': chelseaLogo,
    'Manchester City': cityLogo,
    'Southampton': southamptonLogo,
    'Barnsley': barnsleyLogo,
    'Brentford': brentfordLogo,
    'Leicester': leicesterLogo,
    'Bodo/Glimt': bodoLogo,
    'Newcastle': newcastleLogo,
  };

  // Mapping of competitions to their logos
  const tournamentLogos = {
    'Premier League': premierLeagueLogo,
    'Champions League': championsLeagueLogo,
    'FA Cup': faCupLogo,
    'EFL Cup': eflCupLogo,
    'Europa League': europaLeagueLogo,
    'Community Shield': communityLogo
  };

  // Mock match outcomes for each goal
  const matchOutcomes = {
    1: "W 1–0", 2: "W 1–0", 3: "W 2–0", 4: "W 3–1", 5: "W 2–0", 6: "W 3–0",
    7: "W 3–0", 8: "D 3–3", 9: "W 3–2", 10: "W 3–2", 11: "W 3–0", 12: "W 3–0",
    13: "L 3–4", 14: "L 3–4", 15: "W 2–1", 16: "L 1–2", 17: "W 3–0", 18: "W 7–0",
    19: "W 7–0", 20: "W 2–1", 21: "W 5–2", 22: "W 3–0", 23: "W 3–2", 24: "W 3–0",
    25: "L 1–4", 26: "L 3–4",
  };

  const goals = [
    {
      id: 1,
      title: "FIRST DEBUT GOAL",
      date: "November 3, 2022",
      opponent: "Real Sociedad",
      description: "A stunning left foot strike to seal a crucial victory for Manchester United.",
      image: goal1Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "17",
      type: "Left Foot",
      assist: "Ronaldo",
    },
    {
      id: 2,
      title: "FIRST PREMIER LEAGUE GOAL",
      date: "November 13, 2022",
      opponent: "Fulham",
      description: "A late goal that secured a crucial victory for Manchester United.",
      image: goal2Img,
      competition: "Premier League",
      venue: "Craven Cottage",
      minute: "90+3",
      type: "Left Foot",
      assist: "Eriksen",
    },
    {
      id: 3,
      title: "GOAL VS LEEDS",
      date: "February 12, 2023",
      opponent: "Leeds United",
      description: "A well made finish to seal the win.",
      image: goal3Img,
      competition: "Premier League",
      venue: "Elland Road",
      minute: "85",
      type: "Right Foot",
      assist: "Weghorst",
    },
    {
      id: 4,
      title: "GOAL VS WEST HAM",
      date: "March 1, 2023",
      opponent: "West Ham United",
      description: "A right-footed curve to the under edge of the box.",
      image: goal4Img,
      competition: "FA Cup",
      venue: "Old Trafford",
      minute: "90",
      type: "Right Foot",
      assist: "N/A",
    },
    {
      id: 5,
      title: "GOAL VS WOLVES",
      date: "May 13, 2023",
      opponent: "Wolves",
      description: "A late strike to secure three points.",
      image: goal5Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "90 + 4",
      type: "Counter attack",
      assist: "Fernandes",
    },
    {
      id: 6,
      title: "GOAL VS PALACE",
      date: "September 26, 2023",
      opponent: "Crystal Palace",
      description: "A clean finish after a pass from Dalot.",
      image: goal6Img,
      competition: "EFL Cup",
      venue: "Old Trafford",
      minute: "21",
      type: "Right Foot",
      assist: "Dalot",
    },
    {
      id: 7,
      title: "GOAL VS EVERTON",
      date: "November 26, 2023",
      opponent: "Everton",
      description: "Puskas-winning bycicle kick.",
      image: goal7Img,
      competition: "Premier League",
      venue: "Goodison Park",
      minute: "3",
      type: "Bicycle Kick",
      assist: "Dalot",
    },
    {
      id: 8,
      title: "GOAL VS GALATASARAY",
      date: "November 29, 2023",
      opponent: "Galatasaray",
      description: "A stunning top bin strike.",
      image: goal8Img,
      competition: "Champions League",
      venue: "Ali Sami Yen Spor Kompleksi RAMS Park",
      minute: "11",
      type: "Left Foot",
      assist: "Fernandes",
    },
    {
      id: 9,
      title: "GOAL VS ASTON VILLA",
      date: "December 26, 2023",
      opponent: "Aston Villa",
      description: "A precise left-footed strike to start a comeback.",
      image: goal9Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "59",
      type: "Tap In",
      assist: "Rashford",
    },
    {
      id: 10,
      title: "GOAL VS ASTON VILLA",
      date: "December 26, 2023",
      opponent: "Aston Villa",
      description: "A powerful strike to tie the game 2-2.",
      image: goal10Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "71",
      type: "Left Foot",
      assist: "N/A",
    },
    {
      id: 11,
      title: "GOAL VS WEST HAM",
      date: "February 4, 2024",
      opponent: "West Ham",
      description: "A quick turn and shot to beat the keeper.",
      image: goal11Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "49",
      type: "Left Foot",
      assist: "Casemiro",
    },
    {
      id: 12,
      title: "GOAL VS WEST HAM",
      date: "February 4, 2024",
      opponent: "West Ham",
      description: "A counter attack to seal the 3-0 win.",
      image: goal12Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "84",
      type: "Counter Attack",
      assist: "McTominay",
    },
    {
      id: 13,
      title: "GOAL VS CHELSEA",
      date: "April 4, 2024",
      opponent: "Chelsea",
      description: "A left=footed shot to end the counter attack.",
      image: goal13Img,
      competition: "Premier League",
      venue: "Stamford Bridge",
      minute: "34",
      type: "Left Foot",
      assist: "N/A",
    },
    {
      id: 14,
      title: "GOAL VS CHELSEA",
      date: "April 4, 2024",
      opponent: "Chelsea",
      description: "A towering header from a magnificient assist by Antony.",
      image: goal14Img,
      competition: "Premier League",
      venue: "Stamford Bridge",
      minute: "67",
      type: "Header",
      assist: "Antony",
    },
    {
      id: 15,
      title: "GOAL VS CITY",
      date: "May 25, 2024",
      opponent: "Manchester City",
      description: "A clinical finish in a heated derby during the FA Cup Final.",
      image: goal15Img,
      competition: "FA Cup",
      venue: "Wembley Stadium",
      minute: "30",
      type: "Right Foot",
      assist: "N/A",
    },
    {
      id: 16,
      title: "GOAL VS CITY",
      date: "August 10, 2024",
      opponent: "Manchester City",
      description: "A stunning goal after being subbed in.",
      image: goal16Img,
      competition: "Community Shield",
      venue: "Wembley Stadium",
      minute: "82",
      type: "Right Foot",
      assist: "Fernandes",
    },
    {
      id: 17,
      title: "GOAL VS SOUTHAMPTON",
      date: "September 14, 2024",
      opponent: "Southampton",
      description: "A late top bin from a tight angle.",
      image: goal17Img,
      competition: "Premier League",
      venue: "St Mary's Stadium",
      minute: "90+6",
      type: "Right Foot",
      assist: "Dalot",
    },
    {
      id: 18,
      title: "GOAL VS BARNSLEY",
      date: "September 17, 2024",
      opponent: "Barnsley",
      description: "A right-footed strike before the half ended.",
      image: goal18Img,
      competition: "EFL Cup",
      venue: "Old Trafford",
      minute: "45+2",
      type: "Right Foot",
      assist: "Rashford",
    },
    {
      id: 19,
      title: "GOAL VS BARNSLEY",
      date: "September 17, 2024",
      opponent: "Barnsley",
      description: "A quick counter attack ended with a right-footed goal.",
      image: goal19Img,
      competition: "EFL Cup",
      venue: "Old Trafford",
      minute: "49",
      type: "Right Foot",
      assist: "Eriksen",
    },
    {
      id: 20,
      title: "GOAL VS BRENTFORD",
      date: "October 19, 2024",
      opponent: "Brentford",
      description: "A magnificient volley to equalize the match.",
      image: goal20Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "47",
      type: "Volley",
      assist: "Rashford",
    },
    {
      id: 21,
      title: "GOAL VS LEICESTER",
      date: "October 30, 2024",
      opponent: "Leicester",
      description: "A precise right-footed strike from a cross by Dalot.",
      image: goal21Img,
      competition: "EFL Cup",
      venue: "Old Trafford",
      minute: "28",
      type: "Right Foot",
      assist: "Dalot",
    },
    {
      id: 22,
      title: "GOAL VS LEICESTER",
      date: "November 10, 2024",
      opponent: "Leicester",
      description: "A magnificient curve into the right top corner to seal the 3 - 0 win.",
      image: goal22Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "82",
      type: "Right Foot",
      assist: "Fernandes",
    },
    {
      id: 23,
      title: "GOAL VS BODO/GLIMT",
      date: "November 28, 2024",
      opponent: "Bodo/Glimt",
      description: "A quick finish in a European night.",
      image: goal23Img,
      competition: "Europa League",
      venue: "Old Trafford",
      minute: "1",
      type: "Right Foot",
      assist: "Hojlund",
    },
    {
      id: 24,
      title: "GOAL VS LEICESTER",
      date: "March 16, 2025",
      opponent: "Leicester",
      description: "A quick turn after the pass from Fernandes.",
      image: goal24Img,
      competition: "Premier League",
      venue: "King Power Stadium",
      minute: "67",
      type: "Right Foot",
      assist: "Fernandes",
    },
    {
      id: 25,
      title: "GOAL VS NEWCASTLE",
      date: "April 13, 2025",
      opponent: "Newcastle",
      description: "A composed finish after a pass from Dalot to end the counter attack.",
      image: goal25Img,
      competition: "Premier League",
      venue: "St James' Park",
      minute: "37",
      type: "Counter Attack",
      assist: "Dalot",
    },
    {
      id: 26,
      title: "GOAL VS BRENTFORD",
      date: "May 4, 2025",
      opponent: "Brentford",
      description: "A powerful curve with right foot to put the ball in the top corner.",
      image: goal26Img,
      competition: "Premier League",
      venue: "Gtech Community Stadium",
      minute: "82",
      type: "Right Foot",
      assist: "Eriksen",
    },
  ];

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal);
    setGoalNumber(0); // Reset goal number for animation
    onOpen();
  };

  // Animate goal number counter when modal opens
  useEffect(() => {
    if (isOpen && selectedGoal) {
      const targetNumber = selectedGoal.id;
      let currentNumber = 0;
      const interval = setInterval(() => {
        if (currentNumber < targetNumber) {
          currentNumber++;
          setGoalNumber(currentNumber);
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isOpen, selectedGoal]);

  const startIndex = currentPage * goalsPerPage;
  const currentGoals = goals.slice(startIndex, startIndex + goalsPerPage);
  const totalPages = Math.ceil(goals.length / goalsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box
      minH="100vh"
      position="relative"
      bg="radial-gradient(circle at top left, #6C0000, #0A0A0A)"
      overflow="hidden"
      py={12}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
    >
      <Container maxW="1200px" w="100%" position="relative" zIndex={1}>
        {/* Header */}
        <HStack
          spacing={6}
          alignItems="center"
          justifyContent="flex-start"
          padding="40px 20px"
          className="heading-container"
        >
          {/* Manchester United Logo on the Left */}
          <Image
            src={manUnitedLogo}
            alt="Manchester United Logo"
            height={{ base: '100px', md: '100px' }}
            objectFit="contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              animation: `${glowAnimation} 1.5s infinite`,
            }}
            filter="drop-shadow(0 10px 25px rgba(255, 0, 0, 0.4))"
          />
          {/* Text Stack on the Right */}
          <VStack alignItems="flex-start" spacing={2}>
            <MotionBox>
              <Heading
                as="h1"
                fontFamily="'Oswald', sans-serif"
                fontWeight="700"
                fontSize={{ base: '50px', md: '50px' }}
                color="#ffffff"
                letterSpacing="wider"
                lineHeight="1.1"
                textTransform="uppercase"
                textShadow="1px 1px 2px rgba(0,0,0,0.6)"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  textShadow: "0 0 15px #D00000, 0 0 30px #ffffff",
                  animation: `${glowAnimation} 1.5s infinite`,
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg,rgb(163, 51, 51),rgb(255, 255, 255))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "900",
                  }}
                >
                  ALL 26 GOALS FOR MAN UNITED
                </span>{' '}
              </Heading>
            </MotionBox>
            <Text
              fontFamily="'Oswald', sans-serif"
              fontSize={{ base: '20px', md: '20px' }}
              fontWeight="700"
              color="#D00000"
              letterSpacing="wider"
              textTransform="uppercase"
              maxW="600px"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              EACH GOAL TELLS A STORY. RELIVE THEM HERE.
            </Text>
          </VStack>
        </HStack>

        {/* Goal Cards Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 6, md: 8 }}
          w="100%"
          maxW="100%"
          transition="all 0.5s ease"
        >
          {currentGoals.map((goal, idx) => (
            <MotionBox
              key={goal.id}
              bg="linear-gradient(to bottom, #2A2A2A, #111111)"
              borderRadius="16px"
              overflow="hidden"
              position="relative"
              boxShadow="inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.5)"
              p={{ base: 4, md: 6 }}
              minH="450px"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.3)",
                border: "1px solid #D00000",
                transition: { duration: 0.3 }
              }}
              cursor="pointer"
              onClick={() => handleGoalClick(goal)}
            >
              {/* Vertical Team-Colored Stripe */}
              <Box
                position="absolute"
                left="0"
                top="0"
                width="6px"
                height="100%"
                bg="#D00000"
                zIndex={1}
              />
              {/* Opponent Club Logo (Top-Left) */}
              <Image
                src={opponentLogos[goal.opponent]}
                alt={`${goal.opponent} Logo`}
                position="absolute"
                top="10px"
                left="10px"
                width="60px"
                height="60px"
                objectFit="contain"
                zIndex={10}
                transition="all 0.3s ease"
                _hover={{ transform: "scale(1.1)" }}
              />
              {/* Tournament Logo (Top-Right) */}
              <Image
                src={tournamentLogos[goal.competition]}
                alt={`${goal.competition} Logo`}
                position="absolute"
                top="10px"
                right="10px"
                width="60px"
                height="60px"
                objectFit="contain"
                zIndex={4}
                transition="all 0.3s ease"
                _hover={{ transform: "scale(1.1)" }}
              />
              {/* Red Light Ray Effect Behind Player */}
              <Box
                position="relative"
                width="100%"
                height="280px"
                zIndex={2}
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="80%"
                  height="80%"
                  bgGradient="radial(#D00000, rgba(208,0,0,0.2), transparent)"
                  opacity={0.2}
                  filter="blur(30px)"
                  zIndex={1}
                />
                {/* Goal Image with Red Glow */}
                <Image
                  src={goal.image}
                  alt={goal.title}
                  width="100%"
                  height="280px"
                  objectFit="contain"
                  borderRadius="md"
                  mb={4}
                  style={{ transform: 'translateY(10px)' }}
                  filter="drop-shadow(0 10px 25px rgba(255, 0, 0, 0.4))"
                  draggable={false}
                  userSelect="none"
                  zIndex={2}
                  position="relative"
                  transition="all 0.3s ease"
                  _hover={{ filter: "drop-shadow(0 10px 30px rgba(255, 0, 0, 0.6))" }}
                />
              </Box>
              {/* Card Content */}
              <Box
                p={2}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-end"
                zIndex={3}
              >
                <Text
                  fontFamily="'Oswald', sans-serif"
                  fontSize="24px"
                  fontWeight="700"
                  color="#ffffff"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  mb={3}
                  transition="all 0.3s ease"
                  _hover={{ color: "#D00000" }}
                >
                  {goal.title}
                </Text>
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontSize="14px"
                  fontWeight="700"
                  color="#D00000"
                  mb={3}
                >
                  {goal.date} • {goal.venue}
                </Text>
                <HStack spacing={2} mb={3}>
                  <Badge
                    bg="#B80000"
                    color="white"
                    fontSize="12px"
                    fontWeight="600"
                    textTransform="uppercase"
                    padding="4px 12px"
                    borderRadius="full"
                    transition="all 0.3s ease"
                    _hover={{ transform: "scale(1.05)", bg: "#A00000" }}
                  >
                    {goal.competition}
                  </Badge>
                  <Badge
                    bg="gray.800"
                    color="gray.200"
                    fontSize="12px"
                    fontWeight="600"
                    textTransform="uppercase"
                    padding="4px 12px"
                    borderRadius="full"
                    transition="all 0.3s ease"
                    _hover={{ transform: "scale(1.05)", bg: "gray.700" }}
                  >
                    VS {goal.opponent.toUpperCase()}
                  </Badge>
                </HStack>
                {/* Stats Grid */}
                <HStack spacing={6} color="#c4c4c4" fontSize="14px" alignItems="flex-start">
                  <Text fontWeight="600">
                    🕒 MINUTE: <strong style={{ color: "#D00000" }}>{goal.minute}</strong>
                  </Text>
                  <Text fontWeight="600">🏟️ STADIUM: {goal.venue}</Text>
                  <Badge
                    bg="#770000"
                    color="white"
                    fontSize="12px"
                    fontWeight="600"
                    textTransform="uppercase"
                    padding="4px 12px"
                    borderRadius="full"
                    transition="all 0.3s ease"
                    _hover={{ transform: "scale(1.05)", bg: "#5A0000" }}
                  >
                    🥅 {goal.type}
                  </Badge>
                </HStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Pagination Controls */}
        <HStack justify="center" mt={12} spacing={4}>
          <Button
            onClick={handlePrevPage}
            isDisabled={currentPage === 0}
            padding="10px 20px"
            bg="#0f0f0f"
            border="1px solid #D00000"
            color="#D00000"
            fontFamily="'Oswald', sans-serif"
            fontWeight="600"
            borderRadius="8px"
            transition="all 0.3s ease"
            _hover={{
              bg: currentPage === 0 ? "#0f0f0f" : "#D00000",
              color: currentPage === 0 ? "#D00000" : "#ffffff",
              boxShadow: currentPage === 0 ? "none" : "0 0 15px rgba(208,0,0,0.5)",
            }}
            _disabled={{
              opacity: 0.3,
              cursor: "not-allowed",
            }}
          >
            BACK
          </Button>
          <Button
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages - 1}
            padding="10px 20px"
            bg="#0f0f0f"
            border="1px solid #D00000"
            color="#D00000"
            fontFamily="'Oswald', sans-serif"
            fontWeight="600"
            borderRadius="8px"
            transition="all 0.3s ease"
            _hover={{
              bg: currentPage === totalPages - 1 ? "#0f0f0f" : "#D00000",
              color: currentPage === totalPages - 1 ? "#D00000" : "#ffffff",
              boxShadow: currentPage === totalPages - 1 ? "none" : "0 0 15px rgba(208,0,0,0.5)",
            }}
            _disabled={{
              opacity: 0.3,
              cursor: "not-allowed",
            }}
          >
            NEXT
          </Button>
        </HStack>
      </Container>

      {/* Modal for Goal Details */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          backdropFilter="blur(12px)"
          bg="rgba(0, 0, 0, 0.6)"
        />
        <ScaleFade initialScale={0.9} in={isOpen}>
          <MotionModalContent
            bg="rgba(255, 255, 255, 0.95)"
            borderRadius="xl"
            p={6}
            maxW="550px"
            boxShadow="xl"
            backdropFilter="blur(5px)"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ModalCloseButton
              bg="black"
              color="white"
              borderRadius="full"
              size="sm"
              _hover={{
                bg: "#ff3c3c",
                boxShadow: "0 0 10px #ff3c3c",
                transform: "scale(1.1)",
              }}
              w="32px"
              h="32px"
              p={2}
              top={2}
              right={2}
            />
            <ModalBody py={4}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <VStack spacing={4} align="stretch">
                  <Box position="relative">
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      width="90%"
                      height="90%"
                      bgGradient="linear-gradient(45deg, rgba(255, 0, 0, 0.3), rgba(208, 0, 0, 0.1))"
                      filter="blur(1px)"
                      boxShadow="0 0 80px rgba(255, 0, 0, 0.3)"
                      borderRadius="full"
                      zIndex={1}
                    />
                    <Image
                      src={selectedGoal?.image}
                      alt={selectedGoal?.title}
                      maxH="240px"
                      mx="auto"
                      objectFit="contain"
                      filter="drop-shadow(0 10px 25px rgba(255, 0, 0, 0.4))"
                      zIndex={2}
                      position="relative"
                    />
                  </Box>
                  <Box>
                    <Text
                      fontFamily="'Oswald', sans-serif"
                      fontSize="lg"
                      fontWeight="extrabold"
                      textTransform="uppercase"
                      letterSpacing="1px"
                      mt={2}
                    >
                      {selectedGoal?.title}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      <strong style={{ color: "#D00000" }}>{selectedGoal?.date}</strong> • <Text as="span" color="#800000" fontWeight="600">🏟️ {selectedGoal?.venue}</Text>
                    </Text>
                    <HStack spacing={2} mt={3}>
                      <Badge
                        bg="#B80000"
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        transition="all 0.3s ease"
                        _hover={{ transform: "scale(1.05)", bg: "#A00000" }}
                      >
                        {selectedGoal?.competition}
                      </Badge>
                      <Badge
                        bg="gray.800"
                        color="gray.200"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        transition="all 0.3s ease"
                        _hover={{ transform: "scale(1.05)", bg: "gray.700" }}
                      >
                        {selectedGoal?.venue}
                      </Badge>
                    </HStack>
                    <Text mt={4} fontSize="sm" color={useColorModeValue("gray.700", "gray.300")}>
                      {selectedGoal?.description}
                    </Text>
                    <HStack spacing={3} mt={2} fontSize="xs" color="gray.600">
                      <AnimatePresence>
                        <MotionText
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <strong style={{ color: "#D00000", fontWeight: "bold", textShadow: "1px 1px #000", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.5px" }}>
                            Goal #{goalNumber}
                          </strong>
                        </MotionText>
                      </AnimatePresence>
                      <Text fontFamily="'Rajdhani', sans-serif" letterSpacing="0.5px">
                        🕒 Minute: <strong style={{ color: "#D00000" }}>{selectedGoal?.minute}</strong>
                      </Text>
                      <Badge
                        bg="#770000"
                        color="white"
                        px={2}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        boxShadow="0 2px 6px rgba(0, 0, 0, 0.15)"
                        transition="all 0.3s ease"
                        _hover={{ transform: "scale(1.05)", bg: "#5A0000" }}
                      >
                        ⚽ {selectedGoal?.type}
                      </Badge>
                      {selectedGoal?.assist !== "N/A" && (
                        <Text>
                          👟 Assist: <strong style={{ color: "#D00000" }}>{selectedGoal?.assist.toUpperCase()}</strong>
                        </Text>
                      )}
                    </HStack>
                    <Text fontSize="xs" color="gray.600" mt={2}>
                      ⚽ Match Result: <strong>{matchOutcomes[selectedGoal?.id]}</strong>
                    </Text>
                  </Box>
                </VStack>
              </MotionBox>
            </ModalBody>
          </MotionModalContent>
        </ScaleFade>
      </Modal>
    </Box>
  );
};

export default Goals;