import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Button,
  Input,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { FaFutbol, FaTrophy, FaTshirt, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { RxChevronRight } from 'react-icons/rx';

const MotionBox = motion(Box);

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Icon as={icon} w={10} h={10} color="red.500" />
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>{text}</Text>
    </Stack>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        height="100vh"
        minHeight="100vh"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
        >
          <Image
            src="/images/garnacho-hero.jpg"
            alt="Alejandro Garnacho"
            objectFit="cover"
            width="100%"
            height="100%"
            filter="brightness(0.7)"
          />
        </Box>

        <Container maxW="100vw" width="100%" position="relative" zIndex={1}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 8, md: 12, lg: 20 }}
            py={{ base: 12, md: 18, lg: 20 }}
            align="start"
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              flex={1}
            >
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                fontWeight="bold"
                color="white"
                textShadow="2px 2px 4px rgba(0,0,0,0.5)"
              >
                Celebrate the Magic of Garnacho's Journey
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              flex={1}
            >
              <VStack align="start" spacing={6}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="white"
                  textShadow="1px 1px 2px rgba(0,0,0,0.5)"
                >
                  Join us in honoring Alejandro Garnacho, a rising star in soccer.
                  Experience his incredible journey through goals, stats, and
                  unforgettable moments.
                </Text>
                <HStack spacing={4}>
                  <Button
                    as={RouterLink}
                    to="/bio"
                    size="lg"
                    colorScheme="red"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  >
                    Learn More
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/newsletter"
                    size="lg"
                    variant="outline"
                    color="white"
                    borderColor="white"
                    _hover={{
                      bg: 'whiteAlpha.200',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    Sign Up
                  </Button>
                </HStack>
              </VStack>
            </MotionBox>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="100vw" width="100%">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            <Feature
              icon={FaFutbol}
              title="Bio"
              text="Learn about Alejandro's journey from youth to professional football"
            />
            <Feature
              icon={FaTrophy}
              title="Stats"
              text="Explore detailed statistics and achievements"
            />
            <Feature
              icon={FaTshirt}
              title="Merchandise"
              text="Get official Garnacho merchandise and collectibles"
            />
            <Feature
              icon={FaCamera}
              title="Gallery"
              text="View amazing photos and moments from his career"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
        <Container maxW="100vw" width="100%">
          <Stack spacing={8} align={'center'} textAlign={'center'}>
            <Heading>What They Say</Heading>
            <Text fontSize={'xl'}>
              "Garnacho is one of the most exciting young talents I've seen in years."
              <br />
              - Erik ten Hag
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box py={20}>
        <Container maxW="100vw" width="100%">
          <VStack spacing={8} align={'center'} textAlign={'center'}>
            <Heading>Stay Updated</Heading>
            <Text>Subscribe to our newsletter for the latest updates on Garnacho's career</Text>
            <HStack>
              <Input placeholder="Enter your email" />
              <Button colorScheme="red">Subscribe</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Rest of the content */}
      <Container maxW="100vw" width="100%" py={16}>
        <VStack spacing={16}>
          {/* Journey Section */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="red.500"
              mb={3}
            >
              Tribute
            </Text>
            <Heading
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="bold"
              mb={6}
            >
              Explore Alejandro Garnacho's Incredible Journey
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={useColorModeValue('gray.600', 'gray.400')}>
              Dive into the life and achievements of Alejandro Garnacho.
              Discover his bio, stats, career milestones, and unforgettable
              goals.
            </Text>
          </Box>

          {/* Feature Grid */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 12, md: 8, lg: 12 }}
            justify="center"
            align="stretch"
          >
            <FeatureCard
              icon="/images/career-icon.svg"
              title="Uncover His Inspiring Career History"
              description="Learn about the key moments that shaped his career."
              link="/career-history"
            />
            <FeatureCard
              icon="/images/goals-icon.svg"
              title="Celebrate His Memorable Goals"
              description="Relive each goal with stunning visuals and videos."
              link="/goals"
            />
            <FeatureCard
              icon="/images/merch-icon.svg"
              title="Shop Exclusive Merchandise"
              description="Get your hands on unique items celebrating Garnacho."
              link="/merchandise"
            />
          </Stack>

          {/* CTA Buttons */}
          <HStack spacing={4} justify="center">
            <Button
              as={RouterLink}
              to="/bio"
              size="lg"
              colorScheme="red"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              Learn More
            </Button>
            <Button
              as={RouterLink}
              to="/newsletter"
              size="lg"
              variant="outline"
              rightIcon={<Icon as={RxChevronRight} />}
            >
              Sign Up
            </Button>
          </HStack>

          {/* Featured Stats Section */}
          // ... existing code ...
        </VStack>
      </Container>
    </Box>
  );
};

const FeatureCard = ({ icon, title, description, link }) => (
  <Box
    flex={1}
    maxW="400px"
    p={8}
    bg={useColorModeValue('white', 'gray.800')}
    rounded="lg"
    shadow="lg"
    textAlign="center"
    transition="all 0.3s"
    _hover={{
      transform: 'translateY(-5px)',
      shadow: 'xl',
    }}
  >
    <Box mb={6}>
      <Image
        src={icon}
        alt={title}
        boxSize="48px"
        mx="auto"
      />
    </Box>
    <Heading
      fontSize={{ base: '2xl', md: '3xl' }}
      fontWeight="bold"
      mb={4}
    >
      {title}
    </Heading>
    <Text color={useColorModeValue('gray.600', 'gray.400')} mb={6}>
      {description}
    </Text>
    <Button
      as={RouterLink}
      to={link}
      variant="ghost"
      colorScheme="red"
      rightIcon={<Icon as={RxChevronRight} />}
    >
      Explore
    </Button>
  </Box>
);

const StatCard = ({ title, value, description }) => (
  <Box
    p={6}
    bg={useColorModeValue('white', 'gray.800')}
    rounded="lg"
    shadow="lg"
    textAlign="center"
    flex={1}
    maxW="300px"
  >
    <Text fontSize="2xl" fontWeight="bold" color="red.500">
      {value}
    </Text>
    <Text fontSize="xl" fontWeight="semibold" mt={2}>
      {title}
    </Text>
    <Text color={useColorModeValue('gray.600', 'gray.400')} mt={2}>
      {description}
    </Text>
  </Box>
);

const NewsCard = ({ title, date, description }) => (
  <Box
    p={6}
    bg={useColorModeValue('white', 'gray.800')}
    rounded="lg"
    shadow="lg"
    flex={1}
    maxW="300px"
  >
    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
      {date}
    </Text>
    <Text fontSize="xl" fontWeight="semibold" mt={2}>
      {title}
    </Text>
    <Text color={useColorModeValue('gray.600', 'gray.400')} mt={2}>
      {description}
    </Text>
  </Box>
);

export default Home; 