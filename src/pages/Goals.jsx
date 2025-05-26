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
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

// Import goal images from assets
import goal1Img from '../assets/goals/sociedad.png';
import goal2Img from '../assets/goals/fulham.png';
import goal3Img from '../assets/goals/leeds.png';
import goal4Img from '../assets/goals/westham.png';
import goal5Img from '../assets/goals/wolves.png';
import goal6Img from '../assets/goals/palace.png';
import goal7Img from '../assets/goals/everton.png';
import goal8Img from '../assets/goals/gala.png';
import goal9Img from '../assets/goals/villa1.png';
import goal10Img from '../assets/goals/villa2.png';
import goal11Img from '../assets/goals/west1.png';
import goal12Img from '../assets/goals/west2.png';
import goal13Img from '../assets/goals/chelsea1.png';
import goal14Img from '../assets/goals/chelsea2.png';
import goal15Img from '../assets/goals/city1.png';
import goal16Img from '../assets/goals/city2.png';
import goal17Img from '../assets/goals/southampton.png';
import goal18Img from '../assets/goals/barn1.png';
import goal19Img from '../assets/goals/barn2.png';
import goal20Img from '../assets/goals/brent1.png';
import goal21Img from '../assets/goals/lei1.png';
import goal22Img from '../assets/goals/lei2.png';
import goal23Img from '../assets/goals/bodo.png';
import goal24Img from '../assets/goals/lei3.png';
import goal25Img from '../assets/goals/newcastle.png';
import goal26Img from '../assets/goals/brent2.png';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px #ff1744, 0 0 20px #ff1744, 0 0 30px #ff1744; }
  50% { box-shadow: 0 0 40px #ff1744, 0 0 60px #ff1744, 0 0 80px #ff1744; }
  100% { box-shadow: 0 0 10px #ff1744, 0 0 20px #ff1744, 0 0 30px #ff1744; }
`;

// Helper to generate random collage positions/rotations
const getRandomStyles = (idx) => {
  const cols = 4;
  const col = idx % cols;
  const row = Math.floor(idx / cols);
  const baseW = 220;
  const baseH = 220;
  const left = col * 23 + Math.random() * 7;
  const top = row * 33 + Math.random() * 7;
  const rotate = Math.random() * 30 - 15;
  const z = 10 + Math.floor(Math.random() * 10);
  return {
    position: 'absolute',
    left: `${left}%`,
    top: `${top}%`,
    width: `${baseW + Math.random() * 40}px`,
    height: `${baseH + Math.random() * 40}px`,
    transform: `rotate(${rotate}deg)`,
    zIndex: z,
    transition: 'all 0.3s',
    boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
    borderRadius: '18px',
    cursor: 'pointer',
    overflow: 'hidden',
  };
};

const Goals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    {
      id: 1,
      title: "First Premier League Goal",
      date: "November 13, 2022",
      opponent: "Fulham",
      description: "A stunning overhead kick that secured a crucial victory for Manchester United.",
      image: goal1Img,
      competition: "Premier League",
      venue: "Old Trafford",
    },
    {
      id: 2,
      title: "Champions League Debut Goal",
      date: "September 20, 2023",
      opponent: "Bayern Munich",
      description: "A clinical finish that announced his arrival on the European stage.",
      image: goal2Img,
      competition: "Champions League",
      venue: "Allianz Arena",
    },
    {
      id: 3,
      title: "Goal vs Leeds",
      date: "Date here",
      opponent: "Leeds United",
      description: "Description here.",
      image: goal3Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 4,
      title: "Goal vs West Ham",
      date: "Date here",
      opponent: "West Ham United",
      description: "Description here.",
      image: goal4Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 5,
      title: "Goal vs Wolves",
      date: "Date here",
      opponent: "Wolves",
      description: "Description here.",
      image: goal5Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 6,
      title: "Goal vs Palace",
      date: "Date here",
      opponent: "Palace",
      description: "Description here.",
      image: goal6Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 7,
      title: "Goal vs Everton",
      date: "Date here",
      opponent: "Everton",
      description: "Description here.",
      image: goal7Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 8,
      title: "Goal vs Galatasaray",
      date: "Date here",
      opponent: "Galatasaray",
      description: "Description here.",
      image: goal8Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 9,
      title: "Goal vs Villa",
      date: "Date here",
      opponent: "Aston Villa",
      description: "Description here.",
      image: goal9Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 10,
      title: "Goal vs Villa",
      date: "Date here",
      opponent: "Aston Villa",
      description: "Description here.",
      image: goal10Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 11,
      title: "Goal vs West",
      date: "Date here",
      opponent: "West",
      description: "Description here.",
      image: goal11Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 12,
      title: "Goal vs West",
      date: "Date here",
      opponent: "West",
      description: "Description here.",
      image: goal12Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 13,
      title: "Goal vs Chelsea",
      date: "Date here",
      opponent: "Chelsea",
      description: "Description here.",
      image: goal13Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 14,
      title: "Goal vs Chelsea",
      date: "Date here",
      opponent: "Chelsea",
      description: "Description here.",
      image: goal14Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 15,
      title: "Goal vs City",
      date: "Date here",
      opponent: "City",
      description: "Description here.",
      image: goal15Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 16,
      title: "Goal vs City",
      date: "Date here",
      opponent: "City",
      description: "Description here.",
      image: goal16Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 17,
      title: "Goal vs Southampton",
      date: "Date here",
      opponent: "Southampton",
      description: "Description here.",
      image: goal17Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 18,
      title: "Goal vs Barnsley",
      date: "Date here",
      opponent: "Barnsley",
      description: "Description here.",
      image: goal18Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 19,
      title: "Goal vs Barnsley",
      date: "Date here",
      opponent: "Barnsley",
      description: "Description here.",
      image: goal19Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 20,
      title: "Goal vs Brentford",
      date: "Date here",
      opponent: "Brentford",
      description: "Description here.",
      image: goal20Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 21,
      title: "Goal vs Leicester",
      date: "Date here",
      opponent: "Leicester",
      description: "Description here.",
      image: goal21Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 22,
      title: "Goal vs Leicester",
      date: "Date here",
      opponent: "Leicester",
      description: "Description here.",
      image: goal22Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 23,
      title: "Goal vs Bodo/Glimt",
      date: "Date here",
      opponent: "Bodo/Glimt",
      description: "Description here.",
      image: goal23Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 24,
      title: "Goal vs Leicester",
      date: "Date here",
      opponent: "Leicester",
      description: "Description here.",
      image: goal24Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 25,
      title: "Goal vs Newcastle",
      date: "Date here",
      opponent: "Newcastle",
      description: "Description here.",
      image: goal25Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    {
      id: 26,
      title: "Goal vs Brentford",
      date: "Date here",
      opponent: "Brentford",
      description: "Description here.",
      image: goal26Img,
      competition: "Competition here",
      venue: "Venue here",
    },
    // Add more goals as needed
  ];

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal);
    onOpen();
  };

  return (
    <Box
      minH="1200px"
      position="relative"
      bgGradient="linear(to-br, red.600 60%, red.400 100%)"
      overflow="hidden"
      py={20}
      w="100vw"
      minW="100vw"
      overflowX="hidden"
    >
      <Container maxW="100vw" width="100%" position="relative" zIndex={1}>
        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          textAlign="center"
          color="white"
          mb={12}
          textShadow="2px 2px 8px rgba(0,0,0,0.4)"
        >
          Garnacho's Goals
        </Heading>
        <Box position="relative" width="100%" height="900px" minH="900px" w="full" maxW="100%">
          {goals.map((goal, idx) => (
            <Box
              key={goal.id}
              style={getRandomStyles(idx)}
              _hover={{
                transform: `${getRandomStyles(idx).transform} scale(1.08)`,
                animation: `${glowAnimation} 1.2s infinite`,
                zIndex: 99,
                boxShadow: '0 0 40px 10px #fff176, 0 0 80px 20px #ff1744',
              }}
              onClick={() => handleGoalClick(goal)}
            >
              <Image
                src={goal.image}
                alt={goal.title}
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="18px"
                draggable={false}
                userSelect="none"
              />
            </Box>
          ))}
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          borderRadius="2xl"
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="2xl"
        >
          <ModalHeader borderBottomWidth="1px">
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
                  <Badge colorScheme="red" fontSize="md">
                    {selectedGoal?.competition}
                  </Badge>
                  <Badge colorScheme="blue" fontSize="md">
                    {selectedGoal?.venue}
                  </Badge>
                </HStack>
                <Text fontSize="lg" fontWeight="semibold" mb={2}>
                  vs {selectedGoal?.opponent}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={4}>
                  {selectedGoal?.date}
                </Text>
                <Text>{selectedGoal?.description}</Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Goals;