import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Badge,
  useColorModeValue,
  HStack,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Import goal images from assets
import goal1Img from '/src/assets/goals/sociedad.png';
import goal2Img from '/src/assets/goals/fulham.png';
import goal3Img from '/src/assets/goals/leeds.png';
import goal4Img from '/src/assets/goals/westham.png';
import goal5Img from '/src/assets/goals/wolves.png';
import goal6Img from '/src/assets/goals/palace.png';
import goal7Img from '/src/assets/goals/everton.png';
import goal8Img from '/src/assets/goals/gala.png';
import goal9Img from '/src/assets/goals/villa1.png';
import goal10Img from '/src/assets/goals/villa2.png';
import goal11Img from '/src/assets/goals/west1.png';
import goal12Img from '/src/assets/goals/west2.png';
import goal13Img from '/src/assets/goals/chelsea1.png';
import goal14Img from '/src/assets/goals/chelsea2.png';
import goal15Img from '/src/assets/goals/city1.png';
import goal16Img from '/src/assets/goals/city2.png';
import goal17Img from '/src/assets/goals/southampton.png';
import goal18Img from '/src/assets/goals/barn1.png';
import goal19Img from '/src/assets/goals/barn2.png';
import goal20Img from '/src/assets/goals/brent1.png';
import goal21Img from '/src/assets/goals/lei1.png';
import goal22Img from '/src/assets/goals/lei2.png';
import goal23Img from '/src/assets/goals/bodo.png';
import goal24Img from '/src/assets/goals/lei3.png';
import goal25Img from '/src/assets/goals/newcastle.png';
import goal26Img from '/src/assets/goals/brent2.png';

// Import Manchester United logo
import manUnitedLogo from '/src/assets/clubs/Manchester-United-FC-logo.png';

// Import opponent club logos (placeholders)
import fulhamLogo from '/src/assets/clubs/fulham.png';
import sociedadLogo from '/src/assets/clubs/sociedad.png';
import leedsLogo from '/src/assets/clubs/leeds.png';
import westHamLogo from '/src/assets/clubs/westham.png';
import wolvesLogo from '/src/assets/clubs/wolves.png';
import palaceLogo from '/src/assets/clubs/crystal.png';
import evertonLogo from '/src/assets/clubs/everton.png';
import galaLogo from '/src/assets/clubs/gala.png';
import villaLogo from '/src/assets/clubs/aston.png';
import chelseaLogo from '/src/assets/clubs/chelsea.png';
import cityLogo from '/src/assets/clubs/mancity.png';
import southamptonLogo from '/src/assets/clubs/southampton.png';
import barnsleyLogo from '/src/assets/clubs/barnsley.png';
import brentfordLogo from '/src/assets/clubs/brentford.png';
import leicesterLogo from '/src/assets/clubs/leicester.png';
import bodoLogo from '/src/assets/clubs/bodoglim.png';
import newcastleLogo from '/src/assets/clubs/newcastle.png';

// Import tournament logos (placeholders)
import premierLeagueLogo from '/src/assets/tournaments/epl.png';
import championsLeagueLogo from '/src/assets/tournaments/ucl.png';
import faCupLogo from '/src/assets/tournaments/fa.png';
import eflCupLogo from '/src/assets/tournaments/efl.png';
import europaLeagueLogo from '/src/assets/tournaments/uel.png';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px #DA1E28, 0 0 20px #DA1E28, 0 0 30px #ffffff; }
  50% { box-shadow: 0 0 20px #DA1E28, 0 0 40px #DA1E28, 0 0 60px #ffffff; }
  100% { box-shadow: 0 0 10px #DA1E28, 0 0 20px #DA1E28, 0 0 30px #ffffff; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const MotionBox = motion(Box);

const Goals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
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
  };

  const goals = [
    {
      id: 1,
      title: "FIRST PREMIER LEAGUE GOAL",
      date: "November 13, 2022",
      opponent: "Fulham",
      description: "A stunning overhead kick that secured a crucial victory for Manchester United.",
      image: goal1Img,
      competition: "Premier League",
      venue: "Old Trafford",
      minute: "81",
      type: "Overhead Kick",
      assist: "N/A",
    },
    {
      id: 2,
      title: "CHAMPIONS LEAGUE DEBUT GOAL",
      date: "September 20, 2023",
      opponent: "Bayern Munich",
      description: "A clinical finish that announced his arrival on the European stage.",
      image: goal2Img,
      competition: "Champions League",
      venue: "Allianz Arena",
      minute: "67",
      type: "Right Foot",
      assist: "Rashford",
    },
    {
      id: 3,
      title: "GOAL VS LEEDS",
      date: "February 12, 2023",
      opponent: "Leeds United",
      description: "A well-placed header to open the scoring.",
      image: goal3Img,
      competition: "Premier League",
      venue: "Elland Road",
      minute: "45",
      type: "Header",
      assist: "N/A",
    },
    {
      id: 4,
      title: "GOAL VS WEST HAM",
      date: "March 1, 2023",
      opponent: "West Ham United",
      description: "A curling volley from the edge of the box.",
      image: goal4Img,
      competition: "FA Cup",
      venue: "Old Trafford",
      minute: "73",
      type: "Volley",
      assist: "Fernandes",
    },
    {
      id: 5,
      title: "GOAL VS WOLVES",
      date: "May 13, 2023",
      opponent: "Wolves",
      description: "A late strike to secure three points.",
      image: goal5Img,
      competition: "Premier League",
      venue: "Molineux Stadium",
      minute: "89",
      type: "Left Foot",
      assist: "N/A",
    },
    {
      id: 6,
      title: "GOAL VS PALACE",
      date: "May 20, 2023",
      opponent: "Crystal Palace",
      description: "A towering header from a corner kick.",
      image: goal6Img,
      competition: "Premier League",
      venue: "Selhurst Park",
      minute: "55",
      type: "Header",
      assist: "Rashford",
    },
    {
      id: 7,
      title: "GOAL VS EVERTON",
      date: "October 9, 2022",
      opponent: "Everton",
      description: "A composed finish after a quick counterattack.",
      image: goal7Img,
      competition: "Premier League",
      venue: "Goodison Park",
      minute: "63",
      type: "Right Foot",
      assist: "N/A",
    },
    {
      id: 8,
      title: "GOAL VS GALATASARAY",
      date: "October 3, 2023",
      opponent: "Galatasaray",
      description: "A stunning volley to equalize in a crucial match.",
      image: goal8Img,
      competition: "Champions League",
      venue: "Old Trafford",
      minute: "77",
      type: "Volley",
      assist: "Fernandes",
    },
    {
      id: 9,
      title: "GOAL VS ASTON VILLA",
      date: "December 26, 2023",
      opponent: "Aston Villa",
      description: "A precise left-footed strike to open the scoring.",
      image: goal9Img,
      competition: "Premier League",
      venue: "Villa Park",
      minute: "42",
      type: "Left Foot",
      assist: "Fernandes",
    },
    {
      id: 10,
      title: "GOAL VS ASTON VILLA",
      date: "December 26, 2023",
      opponent: "Aston Villa",
      description: "A powerful strike to seal the win.",
      image: goal10Img,
      competition: "Premier League",
      venue: "Villa Park",
      minute: "90",
      type: "Header",
      assist: "Rashford",
    },
    {
      id: 11,
      title: "GOAL VS WEST HAM",
      date: "February 4, 2024",
      opponent: "West Ham",
      description: "A quick turn and shot to beat the keeper.",
      image: goal11Img,
      competition: "Premier League",
      venue: "London Stadium",
      minute: "66",
      type: "Right Foot",
      assist: "N/A",
    },
    {
      id: 12,
      title: "GOAL VS WEST HAM",
      date: "February 4, 2024",
      opponent: "West Ham",
      description: "A stunning volley from a tight angle.",
      image: goal12Img,
      competition: "Premier League",
      venue: "London Stadium",
      minute: "78",
      type: "Volley",
      assist: "Fernandes",
    },
    {
      id: 13,
      title: "GOAL VS CHELSEA",
      date: "April 4, 2024",
      opponent: "Chelsea",
      description: "A curling shot from outside the box.",
      image: goal13Img,
      competition: "Premier League",
      venue: "Stamford Bridge",
      minute: "50",
      type: "Left Foot",
      assist: "N/A",
    },
    {
      id: 14,
      title: "GOAL VS CHELSEA",
      date: "April 4, 2024",
      opponent: "Chelsea",
      description: "A towering header from a corner.",
      image: goal14Img,
      competition: "Premier League",
      venue: "Stamford Bridge",
      minute: "85",
      type: "Header",
      assist: "Rashford",
    },
    {
      id: 15,
      title: "GOAL VS CITY",
      date: "March 3, 2024",
      opponent: "Manchester City",
      description: "A clinical finish in a heated derby.",
      image: goal15Img,
      competition: "Premier League",
      venue: "Etihad Stadium",
      minute: "70",
      type: "Right Foot",
      assist: "N/A",
    },
    {
      id: 16,
      title: "GOAL VS CITY",
      date: "March 3, 2024",
      opponent: "Manchester City",
      description: "A stunning volley to equalize.",
      image: goal16Img,
      competition: "Premier League",
      venue: "Etihad Stadium",
      minute: "62",
      type: "Volley",
      assist: "Fernandes",
    },
    {
      id: 17,
      title: "GOAL VS SOUTHAMPTON",
      date: "September 14, 2024",
      opponent: "Southampton",
      description: "A late winner from a tight angle.",
      image: goal17Img,
      competition: "Premier League",
      venue: "St Mary's Stadium",
      minute: "88",
      type: "Left Foot",
      assist: "N/A",
    },
    {
      id: 18,
      title: "GOAL VS BARNSLEY",
      date: "September 17, 2024",
      opponent: "Barnsley",
      description: "A powerful header in a cup tie.",
      image: goal18Img,
      competition: "EFL Cup",
      venue: "Oakwell",
      minute: "44",
      type: "Header",
      assist: "Rashford",
    },
    {
      id: 19,
      title: "GOAL VS BARNSLEY",
      date: "September 17, 2024",
      opponent: "Barnsley",
      description: "A quick turn and shot to double the lead.",
      image: goal19Img,
      competition: "EFL Cup",
      venue: "Oakwell",
      minute: "72",
      type: "Right Foot",
      assist: "N/A",
    },
    {
      id: 20,
      title: "GOAL VS BRENTFORD",
      date: "October 19, 2024",
      opponent: "Brentford",
      description: "A curling volley from a cross.",
      image: goal20Img,
      competition: "Premier League",
      venue: "Gtech Community Stadium",
      minute: "60",
      type: "Volley",
      assist: "Fernandes",
    },
    {
      id: 21,
      title: "GOAL VS LEICESTER",
      date: "November 10, 2024",
      opponent: "Leicester",
      description: "A precise left-footed strike.",
      image: goal21Img,
      competition: "Premier League",
      venue: "King Power Stadium",
      minute: "75",
      type: "Left Foot",
      assist: "N/A",
    },
    {
      id: 22,
      title: "GOAL VS LEICESTER",
      date: "November 10, 2024",
      opponent: "Leicester",
      description: "A towering header to secure the win.",
      image: goal22Img,
      competition: "Premier League",
      venue: "King Power Stadium",
      minute: "82",
      type: "Header",
      assist: "Rashford",
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
      minute: "68",
      type: "Right Foot",
      assist: "N/A",
    },
    {
      id: 24,
      title: "GOAL VS LEICESTER",
      date: "November 10, 2024",
      opponent: "Leicester",
      description: "A stunning volley in stoppage time.",
      image: goal24Img,
      competition: "Premier League",
      venue: "King Power Stadium",
      minute: "90",
      type: "Volley",
      assist: "Fernandes",
    },
    {
      id: 25,
      title: "GOAL VS NEWCASTLE",
      date: "December 30, 2024",
      opponent: "Newcastle",
      description: "A composed finish after a solo run.",
      image: goal25Img,
      competition: "Premier League",
      venue: "St James' Park",
      minute: "54",
      type: "Left Foot",
      assist: "N/A",
    },
    {
      id: 26,
      title: "GOAL VS BRENTFORD",
      date: "October 19, 2024",
      opponent: "Brentford",
      description: "A towering header from a corner.",
      image: goal26Img,
      competition: "Premier League",
      venue: "Gtech Community Stadium",
      minute: "79",
      type: "Header",
      assist: "Rashford",
    },
  ];

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal);
    onOpen();
  };

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
      bgGradient="linear(to-br, #0ff2ff 0%, #8e59ff 100%)"
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
          />
          {/* Text Stack on the Right */}
          <VStack alignItems="flex-start" spacing={2}>
            <MotionBox>
              <Heading
                as="h1"
                fontFamily="'Poppins', sans-serif"
                fontWeight="800"
                fontSize={{ base: '50px', md: '50px' }}
                color="#ffffff"
                letterSpacing="-1px"
                lineHeight="1.1"
                textShadow="1px 1px 2px rgba(0,0,0,0.6)"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  textShadow: "0 0 15px #DA1E28, 0 0 30px #ffffff",
                  animation: `${glowAnimation} 1.5s infinite`,
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg, #8c30f5, #3c006b)",
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
              fontFamily="'Poppins', sans-serif"
              fontSize={{ base: '20px', md: '20px' }}
              fontWeight="400"
              color="#3c006b"
              letterSpacing="0.5px"
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
              bg="linear-gradient(to bottom, #333333, #1a1a1a)"
              borderRadius="16px"
              overflow="hidden"
              position="relative"
              boxShadow="inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.5)"
              p={{ base: 4, md: 6 }}
              minH="450px"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ transform: 'translateY(-8px)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 8px 20px rgba(218, 30, 40, 0.5)' }}
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
                bg="#DA1E28"
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
              />
              {/* Glow Effect Behind Garnacho Image */}
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
                  bgGradient="radial(white, rgba(255,255,255,0.2), transparent)"
                  opacity={0.3}
                  filter="blur(20px)"
                  zIndex={1}
                />
                {/* Goal Image with Shadow */}
                <Image
                  src={goal.image}
                  alt={goal.title}
                  width="100%"
                  height="280px"
                  objectFit="contain"
                  borderRadius="md"
                  mb={4}
                  style={{ transform: 'translateY(10px)' }}
                  filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
                  draggable={false}
                  userSelect="none"
                  zIndex={2}
                  position="relative"
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
                  fontFamily="'Inter', sans-serif"
                  fontSize="24px"
                  fontWeight="700"
                  color="#ffffff"
                  textTransform="uppercase"
                  mb={3}
                >
                  {goal.title}
                </Text>
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontSize="14px"
                  fontWeight="500"
                  color="#bbbbbb"
                  mb={3}
                >
                  {goal.date} • {goal.venue}
                </Text>
                <HStack spacing={2} mb={3}>
                  <Badge
                    display="inline-block"
                    bg="#DA1E28"
                    color="#ffffff"
                    fontSize="12px"
                    fontWeight="600"
                    textTransform="uppercase"
                    padding="4px 12px"
                    borderRadius="full"
                  >
                    {goal.competition}
                  </Badge>
                  <Badge
                    display="inline-block"
                    bg="#1c77ff"
                    color="#ffffff"
                    fontSize="12px"
                    fontWeight="600"
                    textTransform="uppercase"
                    padding="4px 12px"
                    borderRadius="full"
                  >
                    VS {goal.opponent.toUpperCase()}
                  </Badge>
                </HStack>
                {/* Stats Grid */}
                <HStack spacing={6} color="#c4c4c4" fontSize="14px" alignItems="flex-start">
                  <Text fontWeight="400">MINUTE: {goal.minute}</Text>
                  <Text fontWeight="400">STADIUM: {goal.venue}</Text>
                  <Text fontWeight="400">TYPE: {goal.type}</Text>
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
            border="1px solid #ffffff"
            color="#ffffff"
            fontFamily="'Inter', sans-serif"
            fontWeight="600"
            borderRadius="8px"
            transition="all 0.3s ease"
            _hover={{
              bg: currentPage === 0 ? "#0f0f0f" : "#ffffff",
              color: currentPage === 0 ? "#ffffff" : "#0f0f0f",
              boxShadow: currentPage === 0 ? "none" : "0 0 15px rgba(255,255,255,0.5)",
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
            border="1px solid #ffffff"
            color="#ffffff"
            fontFamily="'Inter', sans-serif"
            fontWeight="600"
            borderRadius="8px"
            transition="all 0.3s ease"
            _hover={{
              bg: currentPage === totalPages - 1 ? "#0f0f0f" : "#ffffff",
              color: currentPage === totalPages - 1 ? "#ffffff" : "#0f0f0f",
              boxShadow: currentPage === totalPages - 1 ? "none" : "0 0 15px rgba(255,255,255,0.5)",
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
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          borderRadius="2xl"
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="0 0 20px #DA1E28, 0 0 40px #ffffff"
          border="1px solid #DA1E28"
        >
          <ModalHeader
            fontFamily="'Bebas Neue', sans-serif"
            fontSize="24px"
            color={useColorModeValue('gray.800', 'white')}
            borderBottomWidth="1px"
            borderColor={useColorModeValue('gray.200', 'gray.600')}
          >
            {selectedGoal?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py={6}>
            <VStack spacing={6} align="stretch">
              <Image
                src={selectedGoal?.image}
                alt={selectedGoal?.title}
                borderRadius="lg"
                width="100%"
                height="300px"
                objectFit="cover"
              />
              <Box>
                <HStack spacing={4} mb={4}>
                  <Badge
                    bg="#da1e28"
                    color="#fff"
                    fontSize="11px"
                    fontWeight="600"
                    textTransform="uppercase"
                    padding="4px 10px"
                    borderRadius="9999px"
                    boxShadow="0 2px 6px rgba(0,0,0,0.2)"
                  >
                    {selectedGoal?.competition}
                  </Badge>
                  <Badge
                    bg="#1c77ff"
                    color="#fff"
                    fontSize="11px"
                    fontWeight="600"
                    textTransform="uppercase"
                    padding="4px 10px"
                    borderRadius="9999px"
                    boxShadow="0 2px 6px rgba(0,0,0,0.2)"
                  >
                    {selectedGoal?.venue}
                  </Badge>
                </HStack>
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontSize="lg"
                  fontWeight="600"
                  mb={2}
                  color={useColorModeValue('gray.800', 'white')}
                >
                  VS {selectedGoal?.opponent.toUpperCase()}
                </Text>
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontSize="sm"
                  color={useColorModeValue('gray.500', 'gray.400')}
                  mb={4}
                >
                  {selectedGoal?.date}
                </Text>
                <Text fontFamily="'Inter', sans-serif" color={useColorModeValue('gray.800', 'white')}>
                  {selectedGoal?.description}
                </Text>
                <HStack spacing={4} mt={4} color="#c4c4c4" fontSize="14px">
                  <Text fontWeight="400"><strong>GOAL #{selectedGoal?.id}</strong></Text>
                  <Text fontWeight="400">MINUTE: {selectedGoal?.minute}</Text>
                  <Text fontWeight="400">TYPE: {selectedGoal?.type}</Text>
                  <Text fontWeight="400">{selectedGoal?.assist !== "N/A" ? `ASSIST: ${selectedGoal?.assist.toUpperCase()}` : ""}</Text>
                </HStack>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Goals;