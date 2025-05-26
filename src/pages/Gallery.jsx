import { useEffect } from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

const pinterestSections = [
  {
    title: "Wallpapers",
    url: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/wallpaper/",
    description: "Find stunning Garnacho wallpapers for your devices."
  },
  {
    title: "Pictures",
    url: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/picture/",
    description: "Browse a curated collection of Garnacho's best moments."
  },
  {
    title: "Argentina Moments",
    url: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/argentina/",
    description: "Relive Garnacho's highlights with the Argentina national team."
  },
];

const PinterestGallery = () => {
  useEffect(() => {
    // Load Pinterest script only once
    if (!window.PinUtils) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = '//assets.pinterest.com/js/pinit.js';
      document.body.appendChild(script);
    }
  }, []);

  const cardBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.100');
  const cardShadow = '0 4px 24px rgba(0,0,0,0.4)';

  return (
    <Box
      minH="100vh"
      py={8}
      px={{ base: 2, md: 8 }}
      bgGradient="linear(to-br, #181c24 60%, #2d3748 100%)"
      w="100vw"
      minW="100vw"
      overflowX="hidden"
    >
      <Heading
        textAlign="center"
        fontSize={{ base: '3xl', md: '5xl' }}
        color="white"
        mb={10}
        letterSpacing="wider"
        fontWeight="extrabold"
        textShadow="2px 2px 8px rgba(0,0,0,0.4)"
      >
        GARNACHO GALLERY
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="100vw" w="100%" mx="auto">
        {/* Left Card */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          boxShadow={cardShadow}
          p={{ base: 4, md: 6 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          minH="500px"
        >
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="red.400" mb={2} textAlign="center">
            {pinterestSections[0].title}
          </Heading>
          <Text color="gray.500" fontSize="md" mb={4} textAlign="center">
            {pinterestSections[0].description}
          </Text>
          <Box w="100%" display="flex" justifyContent="center">
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="300"
              data-pin-scale-height="200"
              data-pin-scale-width="80"
              href={pinterestSections[0].url}
            ></a>
          </Box>
        </Box>
        {/* Center Card (Featured) */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          boxShadow={cardShadow}
          p={{ base: 4, md: 6 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          minH="500px"
        >
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="red.500" mb={2} textAlign="center">
            {pinterestSections[1].title}
          </Heading>
          <Text color="gray.500" fontSize="lg" mb={4} textAlign="center">
            {pinterestSections[1].description}
          </Text>
          <Box w="100%" display="flex" justifyContent="center">
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="500"
              data-pin-scale-height="300"
              data-pin-scale-width="100"
              href={pinterestSections[1].url}
            ></a>
          </Box>
        </Box>
        {/* Right Card */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          boxShadow={cardShadow}
          p={{ base: 4, md: 6 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          minH="500px"
        >
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="red.400" mb={2} textAlign="center">
            {pinterestSections[2].title}
          </Heading>
          <Text color="gray.500" fontSize="md" mb={4} textAlign="center">
            {pinterestSections[2].description}
          </Text>
          <Box w="100%" display="flex" justifyContent="center">
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="300"
              data-pin-scale-height="200"
              data-pin-scale-width="80"
              href={pinterestSections[2].url}
            ></a>
          </Box>
        </Box>
      </SimpleGrid>
      {/* Optionally, add a fourth section below for Argentina Wallpapers */}
      <Box mt={12} maxW="100vw" w="100%" mx="auto">
        <Box
          bg={cardBg}
          borderRadius="2xl"
          boxShadow={cardShadow}
          p={{ base: 4, md: 6 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="red.400" mb={2} textAlign="center">
            Argentina Wallpapers
          </Heading>
          <Text color="gray.500" fontSize="md" mb={4} textAlign="center">
            Garnacho's best Argentina-themed wallpapers.
          </Text>
          <Box w="100%" display="flex" justifyContent="center">
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="900"
              data-pin-scale-height="200"
              data-pin-scale-width="100"
              href="https://www.pinterest.com/pham3885055/alejandro-garnacho-17/argentina-wallpaper/"
            ></a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PinterestGallery;