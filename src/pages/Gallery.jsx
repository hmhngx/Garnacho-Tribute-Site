import { useEffect } from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, useColorModeValue, Button } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay } from 'react-icons/fa'; // For play button animation

const pinterestSections = [
  {
    title: "Wallpapers",
    url: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/wallpaper/",
    description: "Find stunning Garnacho wallpapers for your devices.",
    icon: "🖼️",
    color: "#D00027", // Manchester United red
  },
  {
    title: "Pictures",
    url: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/picture/",
    description: "Browse a curated collection of Garnacho's best moments.",
    icon: "📸",
    color: "#D00027", // Manchester United red
  },
  {
    title: "Argentina Moments",
    url: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/argentina/",
    description: "Relive Garnacho's highlights with the Argentina national team.",
    color: "#6EC1E4", // Argentina blue
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

    return () => {
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  const cardBg = useColorModeValue('rgba(42, 10, 10, 0.9)', 'rgba(42, 10, 10, 0.9)');
  const baseShadow = '0 8px 20px rgba(0,0,0,0.3)';

  // Define pulse animations for each color
  const pulseRed = `
    @keyframes pulseRed {
      0% { box-shadow: 0 0 0 #D00027; }
      50% { box-shadow: 0 0 10px #D00027; }
      100% { box-shadow: 0 0 0 #D00027; }
    }
  `;
  const pulseBlue = `
    @keyframes pulseBlue {
      0% { box-shadow: 0 0 0 #6EC1E4; }
      50% { box-shadow: 0 0 10px #6EC1E4; }
      100% { box-shadow: 0 0 0 #6EC1E4; }
    }
  `;

  // Vault door animation keyframes
  const vaultAnimation = `
    @keyframes vaultOpen {
      0% { transform: rotateY(0deg); background: radial-gradient(circle, #0A0A0A 0%, #1C1C1C 50%, #2A2A2A 100%); }
      50% { transform: rotateY(90deg); background: radial-gradient(circle, #D00027 0%, #1C1C1C 50%, #2A2A2A 100%); }
      100% { transform: rotateY(0deg); background: radial-gradient(circle, #0A0A0A 0%, #1C1C1C 70%, #2A2A2A 100%); }
    }
  `;

  // Flaming border animation keyframes
  const flameBorder = `
    @keyframes flameBorder {
      0% { box-shadow: 0 0 0 #D00027, 0 0 10px rgba(208,0,27,0.5); }
      50% { box-shadow: 0 0 15px #D00027, 0 0 20px rgba(208,0,27,0.7); }
      100% { box-shadow: 0 0 0 #D00027, 0 0 10px rgba(208,0,27,0.5); }
    }
  `;

  // Crowd roar animation keyframes
  const crowdRoar = `
    @keyframes crowdRoar {
      0% { background: radial-gradient(circle, rgba(208,0,27,0.1) 0%, transparent 70%); }
      50% { background: radial-gradient(circle, rgba(208,0,27,0.3) 0%, transparent 70%); }
      100% { background: radial-gradient(circle, rgba(208,0,27,0.1) 0%, transparent 70%); }
    }
  `;

  return (
    <Box
      minH="100vh"
      py={8}
      px={{ base: 2, md: 8 }}
      bg="radial-gradient(circle at center, #0A0A0A 0%, #1C1C1C 70%, #2A2A2A 100%)"
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.2,
        zIndex: -1,
      }}
      css={`
        ${vaultAnimation}
        ${flameBorder}
        ${crowdRoar}
        ${pulseRed}
        ${pulseBlue}
      `}
    >
      {/* Vault Door Animation */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 2, repeat: 1, repeatType: 'reverse' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          background: 'radial-gradient(circle, #0A0A0A 0%, #1C1C1C 70%, #2A2A2A 100%)',
          zIndex: 1,
        }}
      />

      {/* Header Banner */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          bg="linear-gradient(90deg, #D00027, #2A0A0A)"
          p={4}
          borderRadius="md"
          mb={8}
          boxShadow="0 0 20px #FFD700"
        >
          <Heading
            textAlign="center"
            fontSize={{ base: '4xl', md: '6xl' }}
            color="#FFD700"
            letterSpacing="wider"
            fontWeight="900"
            fontFamily="'Oswald', sans-serif"
            textShadow="0 0 15px #FFD700, 0 0 30px rgba(0,0,0,0.5)"
          >
            <motion.span
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
              style={{ display: 'inline-block' }}
            >
              RED DEVILS
            </motion.span>{' '}
            GARNACHO VAULT
          </Heading>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            opacity={0.1}
          >
          </Box>
        </Box>
      </motion.div>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 4, md: 8 }}
        maxW="1200px"
        w="100%"
        mx="auto"
        templateColumns={{ md: "1fr 2fr 1fr" }}
        position="relative"
        zIndex={2}
        minH="calc(100vh - 200px)" // Ensure enough vertical space for all sections
      >
        {pinterestSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 20px ${section.color}, 0 0 40px rgba(0,0,0,0.5)`,
              transition: { duration: 0.3 },
            }}
            style={{
              perspective: '1000px',
            }}
          >
            <Box
              bg={cardBg}
              borderRadius="20px"
              p={{ base: 4, md: 6 }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              minH={{ base: "auto", md: index === 1 ? "600px" : "400px" }}
              backdropFilter="blur(15px)"
              boxShadow={baseShadow}
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%) rotate(45deg)',
                width: '20px',
                height: '20px',
                background: `linear-gradient(45deg, ${section.color}, transparent)`,
                zIndex: -1,
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: '-10px',
                right: '50%',
                transform: 'translateX(50%) rotate(-45deg)',
                width: '20px',
                height: '20px',
                background: `linear-gradient(45deg, ${section.color}, transparent)`,
                zIndex: -1,
              }}
              animation="flameBorder 4s infinite"
            >
              <VStack align="flex-start" spacing={2} mb={4}>
                <Heading
                  as="h2"
                  fontSize="32px"
                  fontWeight="900"
                  color={section.color}
                  textTransform="uppercase"
                  fontFamily="'Oswald', sans-serif"
                  mb={1}
                  textShadow={`0 0 10px ${section.color}`}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {section.icon} {section.title}
                </Heading>
                <Text
                  color="#E0E0E0"
                  fontSize="18px"
                  fontWeight="400"
                  fontStyle="italic"
                  fontFamily="'Inter', sans-serif"
                >
                  {section.description}
                </Text>
                <Box
                  as="span"
                  bg="#2A0A0A"
                  color="#FFD700"
                  px={2}
                  py={1}
                  border="2px solid #FFD700"
                  borderRadius="md"
                  fontSize="14px"
                  fontWeight="700"
                >
                  17 Goals
                </Box>
              </VStack>
              <Box w="100%" display="flex" justifyContent="center" flexGrow={1} position="relative">
                <motion.div
                  whileHover={{ rotateY: 10, rotateX: -10 }}
                  style={{ perspective: '1000px', width: '100%' }}
                >
                  <Box
                    w="100%"
                    maxW="100%"
                    borderRadius="12px"
                    overflow="hidden"
                    bg="rgba(255, 255, 255, 0.05)"
                    boxShadow="inset 0 2px 4px rgba(0,0,0,0.3)"
                    position="relative"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `url(https://i.pinimg.com/736x/b8/8a/4d/b88a4d234d5e92a28e994d27facebea2.jpg) no-repeat center`,
                      opacity: 0.1,
                      zIndex: 0,
                    }}
                  >
                    <a
                      data-pin-do="embedBoard"
                      data-pin-board-width={index === 1 ? "500" : "300"}
                      data-pin-scale-height={index === 1 ? "400" : "300"} // Adjusted for better height
                      data-pin-scale-width={index === 1 ? "100" : "80"}
                      href={section.url}
                      style={{ display: 'block', maxWidth: '100%', height: '100%' }}
                    ></a>
                  </Box>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                >
                  <a
                    href={section.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      color: section.color,
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0,0,0,0.7)';
                      e.target.style.boxShadow = `0 0 20px ${section.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0,0,0,0.5)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <FaPlay style={{ marginRight: '8px' }} /> View Board
                  </a>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
      {/* Argentina Wallpapers Section */}
      <Box mt={12} maxW="1200px" w="100%" mx="auto" minH="500px"> {/* Increased minHeight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 0 20px #6EC1E4, 0 0 40px rgba(0,0,0,0.5)`,
            transition: { duration: 0.3 },
          }}
          style={{ perspective: '1000px' }}
        >
          <Box
            bg={cardBg}
            borderRadius="20px"
            p={{ base: 4, md: 6 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            backdropFilter="blur(15px)"
            boxShadow={baseShadow}
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: '20px',
              height: '20px',
              background: `linear-gradient(45deg, #6EC1E4, transparent)`,
              zIndex: -1,
            }}
            _after={{
              content: '""',
              position: 'absolute',
              top: '-10px',
              right: '50%',
              transform: 'translateX(50%) rotate(-45deg)',
              width: '20px',
              height: '20px',
              background: `linear-gradient(45deg, #6EC1E4, transparent)`,
              zIndex: -1,
            }}
            animation="flameBorder 4s infinite"
          >
            <VStack align="flex-start" spacing={2} mb={4}>
              <Heading
                as="h2"
                fontSize="32px"
                fontWeight="900"
                color="#6EC1E4"
                textTransform="uppercase"
                fontFamily="'Oswald', sans-serif"
                mb={1}
                textShadow="0 0 10px #6EC1E4"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.5 }}
              >
                Argentina Wallpapers
              </Heading>
              <Text
                color="#E0E0E0"
                fontSize="18px"
                fontWeight="400"
                fontStyle="italic"
                fontFamily="'Inter', sans-serif"
              >
                Garnacho's best Argentina-themed wallpapers.
              </Text>
              <Box
                as="span"
                bg="#2A0A0A"
                color="#FFD700"
                px={2}
                py={1}
                border="2px solid #FFD700"
                borderRadius="md"
                fontSize="14px"
                fontWeight="700"
              >
                🏆 International Star
              </Box>
            </VStack>
            <Box w="100%" display="flex" justifyContent="center" flexGrow={1} position="relative">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -10 }}
                style={{ perspective: '1000px', width: '100%' }}
              >
                <Box
                  w="100%"
                  maxW="100%"
                  borderRadius="12px"
                  overflow="hidden"
                  bg="rgba(255, 255, 255, 0.05)"
                  boxShadow="inset 0 2px 4px rgba(0,0,0,0.3)"
                  position="relative"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(https://i.pinimg.com/736x/b8/8a/4d/b88a4d234d5e92a28e994d27facebea2.jpg) no-repeat center`,
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                >
                  <a
                    data-pin-do="embedBoard"
                    data-pin-board-width="900"
                    data-pin-scale-height="400" // Adjusted for better height
                    data-pin-scale-width="100"
                    href="https://www.pinterest.com/pham3885055/alejandro-garnacho-17/argentina-wallpaper/"
                    style={{ display: 'block', maxWidth: '100%', height: '100%' }}
                  ></a>
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
              >
                <a
                  href="https://www.pinterest.com/pham3885055/alejandro-garnacho-17/argentina-wallpaper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    color: "#6EC1E4",
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0,0,0,0.7)';
                    e.target.style.boxShadow = `0 0 20px #6EC1E4`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0,0,0,0.5)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <FaPlay style={{ marginRight: '8px' }} /> View Board
                </a>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default PinterestGallery;