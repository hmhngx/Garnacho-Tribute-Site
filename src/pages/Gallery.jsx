import { Box, Heading, Text, VStack, Flex, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import argentinaFlag from '../assets/argentina.png';
import { FaPinterest } from 'react-icons/fa';

const sections = [
  {
    title: "Wallpapers",
    board: "wallpaper",
    description: "Find stunning Garnacho wallpapers for your devices.",
    icon: "🖼️",
    color: "#D00027", // Manchester United red
    direction: "ltr",
    pinterestUrl: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/wallpaper/",
    photos: [
      {
        image_url: "https://i.pinimg.com/736x/f9/e1/0a/f9e10aeab03a1aa8e78cc3c9e643d08b.jpg",
        title: "Garnacho Celebration"
      },
      {
        image_url: "https://i.pinimg.com/736x/44/09/de/4409dee527c0f5f49825f2f1514b9989.jpg",
        title: "Garnacho Training"
      },
      {
        image_url: "https://i.pinimg.com/736x/82/12/2e/82122ea436682b22cfcfa355e1d15ffe.jpg",
        title: "Garnacho Match"
      },
      {
        image_url: "https://i.pinimg.com/736x/64/bc/9e/64bc9ea13cf2b3272a6b01f762c0d7bb.jpg",
        title: "Garnacho Portrait"
      },
      {
        image_url: "https://i.pinimg.com/736x/ab/46/5e/ab465e1d75f0c8bf445ae6143f36ade7.jpg",
        title: "Garnacho Celebration 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/55/00/9a/55009aa2703cdd8592aafc9750d1f8dd.jpg",
        title: "Garnacho Training 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/7e/c5/23/7ec523bd9317d581c667309d31d2f9c7.jpg",
        title: "Garnacho Match 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/20/92/6c/20926c9c2b95c1873a0eaed7110fb5d6.jpg",
        title: "Garnacho Portrait 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/4a/91/50/4a9150788d937776ee98b6eae18e2501.jpg",
        title: "Garnacho Celebration 3"
      },
      {
        image_url: "https://i.pinimg.com/736x/1d/c5/38/1dc5389d0b153d89e5e32c52a9bb938d.jpg",
        title: "Garnacho Training 3"
      }
    ]
  },
  {
    title: "Pictures",
    board: "picture",
    description: "Browse a curated collection of Garnacho's best moments.",
    icon: "📸",
    color: "#D00027", // Manchester United red
    direction: "rtl",
    pinterestUrl: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/picture/",
    photos: [
      {
        image_url: "https://i.pinimg.com/736x/41/08/b0/4108b0fc5d4be95da907e0e4d7d85fc3.jpg",
        title: "Garnacho Skills"
      },
      {
        image_url: "https://i.pinimg.com/736x/cb/1e/80/cb1e80018bb7a2d26ab11ad89830fcdb.jpg",
        title: "Garnacho Goal"
      },
      {
        image_url: "https://i.pinimg.com/736x/6f/2c/3b/6f2c3be688f7c47c973b370401547adf.jpg",
        title: "Garnacho Assist"
      },
      {
        image_url: "https://i.pinimg.com/736x/07/08/28/070828b8a4e9f5edbbef2e2c1da64b30.jpg",
        title: "Garnacho Team"
      },
      {
        image_url: "https://i.pinimg.com/736x/a4/c9/e4/a4c9e4db7737609ac53f57dfa3018642.jpg",
        title: "Garnacho Skills 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/a8/f8/57/a8f857772a129e6ae2fcd927eafa58f6.jpg",
        title: "Garnacho Goal 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/b2/41/49/b241494be8976f7f7634def36ebd483f.jpg",
        title: "Garnacho Assist 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/48/0b/a0/480ba0639a64d17278fa675ec29ac8ff.jpg",
        title: "Garnacho Team 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/d3/28/95/d32895f85cf2a800f5999f3a9cd5f177.jpg",
        title: "Garnacho Skills 3"
      },
      {
        image_url: "https://i.pinimg.com/736x/24/ec/f4/24ecf46f6dcbd9c11e495f880fc4b121.jpg",
        title: "Garnacho Goal 3"
      }
    ]
  },
  {
    title: "Argentina Moments",
    board: "argentina",
    description: "Relive Garnacho's highlights with the Argentina national team.",
    icon: <Box as="span" display="inline-block" boxSize="32px" verticalAlign="middle">
      <img src={argentinaFlag} alt="Argentina Flag" style={{ base: '24px', md: '24px', filter: 'drop-shadow(0 0 8px #6EC1E4) drop-shadow(0 0 16px #6EC1E4)' }} />
    </Box>,
    color: "#6EC1E4", // Argentina blue
    direction: "ltr",
    pinterestUrl: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/argentina/",
    photos: [
      {
        image_url: "https://i.pinimg.com/736x/1a/a9/0e/1aa90ead633363c04360505c6d0baaaf.jpg",
        title: "Argentina Debut"
      },
      {
        image_url: "https://i.pinimg.com/736x/71/38/8a/71388a91aa4c40ed2d9091a0af0120cf.jpg",
        title: "Argentina Training"
      },
      {
        image_url: "https://i.pinimg.com/736x/9f/fa/ec/9ffaec129a9f0be0220b29c66ed73c14.jpg",
        title: "Argentina Match"
      },
      {
        image_url: "https://i.pinimg.com/736x/e4/ab/30/e4ab304ff6915a2dc9b1ef29f73378f7.jpg ",
        title: "Argentina Celebration"
      },
      {
        image_url: "https://i.pinimg.com/736x/6e/71/0e/6e710e5340a5945b03f586eb4f60fe5d.jpg",
        title: "Argentina Debut 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/99/c1/54/99c1547788f280100e309f6de8844bd7.jpg",
        title: "Argentina Training 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/15/34/3e/15343eb6f3a2ff871f87c130df1bc72d.jpg",
        title: "Argentina Match 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/fa/ea/0c/faea0cf0e6b390ddf010baaeffcacc6e.jpg",
        title: "Argentina Celebration 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/98/57/54/98575461a48598c264f280dfba57d63c.jpg",
        title: "Argentina Debut 3"
      },
      {
        image_url: "https://i.pinimg.com/736x/63/cb/96/63cb96efd0fc159c488b986290ac4821.jpg",
        title: "Argentina Training 3"
      }
    ]
  },
  {
    title: "Argentina Wallpapers",
    board: "argentina-wallpaper",
    description: "Garnacho's best Argentina-themed wallpapers.",
    icon: <Box as="span" display="inline-block" boxSize="32px" verticalAlign="middle">
      <img src={argentinaFlag} alt="Argentina Flag" style={{ base: '24px', md: '24px', filter: 'drop-shadow(0 0 8px #6EC1E4) drop-shadow(0 0 16px #6EC1E4)' }} />
    </Box>,
    color: "#6EC1E4", // Argentina blue
    direction: "rtl",
    pinterestUrl: "https://www.pinterest.com/pham3885055/alejandro-garnacho-17/argentina-wallpaper/",
    photos: [
      {
        image_url: "https://i.pinimg.com/736x/2c/71/a4/2c71a4053fa9b6001a941c11b257f02d.jpg",
        title: "Argentina Wallpaper 1"
      },
      {
        image_url: "https://i.pinimg.com/736x/85/42/aa/8542aa24e5e07ad3101ec1845847ff79.jpg",
        title: "Argentina Wallpaper 2"
      },
      {
        image_url: "https://i.pinimg.com/736x/9d/c4/e0/9dc4e0a43839e1c22a528929ea184ef2.jpg",
        title: "Argentina Wallpaper 3"
      },
      {
        image_url: "https://i.pinimg.com/736x/85/42/aa/8542aa24e5e07ad3101ec1845847ff79.jpg",
        title: "Argentina Wallpaper 4"
      },
      {
        image_url: "https://i.pinimg.com/736x/e2/a5/4b/e2a54bf5956ba03c75de2baf5ac45ae6.jpg",
        title: "Argentina Wallpaper 5"
      },
      {
        image_url: "https://i.pinimg.com/736x/f9/8a/f6/f98af6b8bb59f4530c7550cf783b50ec.jpg",
        title: "Argentina Wallpaper 6"
      },
      {
        image_url: "https://i.pinimg.com/736x/6e/8f/11/6e8f1144a614f9d5b6ee88856310216f.jpg",
        title: "Argentina Wallpaper 7"
      },
      {
        image_url: "https://i.pinimg.com/736x/e0/57/1c/e0571ce57a53eaf3d4c13763da03632d.jpg",
        title: "Argentina Wallpaper 8"
      },
      {
        image_url: "https://i.pinimg.com/736x/f0/da/57/f0da5763b5484769bf8a20e9c1434c41.jpg",
        title: "Argentina Wallpaper 9"
      },
      {
        image_url: "https://i.pinimg.com/736x/d3/c1/72/d3c1723cfc65ab07b557a20c715fca71.jpg",
        title: "Argentina Wallpaper 10"
      }
    ]
  },
];

const MotionBox = motion(Box);

const PinterestGallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <MotionBox
      minH="100vh"
      py={8}
      px={{ base: 4, md: 8 }}
      bg="radial-gradient(circle at center, #0A0A0A 0%, #1C1C1C 70%, #2A2A2A 100%)"
      w="100vw"
      minW="100vw"
      overflowX="hidden"
      position="relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: -1,
      }}
    >
      {/* Header Banner */}
      <MotionBox
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
        mb={8}
      >
        <Box
          bg="linear-gradient(90deg, #D00027, #2A0A0A)"
          p={6}
          borderRadius="xl"
          boxShadow="0 0 30px rgba(208, 0, 39, 0.3)"
          position="relative"
          overflow="hidden"
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
              GARNACHO GALLERY
            </motion.span>
          </Heading>
          <Text
            textAlign="center"
            color="#FFD700"
            fontSize="xl"
            mt={2}
            fontStyle="italic"
          >
            Each Frame a Moment. Each Moment, a Legacy.
          </Text>
        </Box>
      </MotionBox>

      <VStack spacing={8}>
        {sections.map((section) => (
          <MotionBox
            key={section.title}
            w="100%"
            variants={sectionVariants}
          >
            <Box
              bg="rgba(42, 10, 10, 0.9)"
              borderRadius="2xl"
              p={4}
              position="relative"
              boxShadow={`0 0 20px ${section.color}40`}
              _hover={{
                boxShadow: `0 0 30px ${section.color}60`,
              }}
              transition="all 0.2s ease"
              group
            >
              <VStack align="flex-start" spacing={2} mb={4}>
                <Flex align="center" gap={2}>
                  <Box as="span" display="inline-block" boxSize="24px">
                    <img
                      src={argentinaFlag}
                      alt="Argentina Flag"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 8px #6EC1E4) drop-shadow(0 0 16px #6EC1E4)'
                      }}
                    />
                  </Box>
                  <Text
                    as="span"
                    fontSize="2xl"
                    fontWeight="900"
                    color={section.color}
                    textTransform="uppercase"
                    fontFamily="'Oswald', sans-serif"
                    textShadow={`0 0 10px ${section.color}`}
                  >
                    {section.title}
                  </Text>
                  <Button
                    as="a"
                    href={section.pinterestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    leftIcon={<FaPinterest />}
                    bgGradient={`linear(to-r, ${section.color}, #FFD700)`}
                    color="white"
                    _hover={{
                      bg: `${section.color}dd`,
                      boxShadow: `0 0 20px #FFD700, 0 0 40px ${section.color}80`,
                      transform: 'scale(1.08) rotate(-2deg)',
                      textShadow: '0 0 10px #FFD700',
                    }}
                    _active={{
                      transform: 'scale(0.97)',
                      boxShadow: `0 0 10px #FFD700, 0 0 20px ${section.color}80`,
                    }}
                    borderRadius="full"
                    px={6}
                    py={4}
                    fontSize="md"
                    fontWeight="bold"
                    letterSpacing="wider"
                    textTransform="uppercase"
                    boxShadow={`0 0 15px ${section.color}80, 0 0 10px #FFD70080`}
                    transition="all 0.2s cubic-bezier(.4,2,.6,1)"
                  >
                    View Board
                  </Button>
                </Flex>
                <Text
                  color="#E0E0E0"
                  fontSize="md"
                  fontWeight="400"
                  fontStyle="italic"
                >
                  {section.description}
                </Text>
              </VStack>

              <Box
                position="relative"
                overflow="hidden"
                h="200px"
                transition="all 0.2s ease"
                _groupHover={{
                  filter: "blur(4px)",
                  transform: "scale(0.98)",
                }}
              >
                <motion.div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    position: 'absolute',
                    width: 'max-content',
                    [section.direction === 'rtl' ? 'right' : 'left']: 0,
                  }}
                  animate={{
                    [section.direction === 'rtl' ? 'right' : 'left']: [
                      section.direction === 'rtl' ? '0%' : '0%',
                      section.direction === 'rtl' ? '-50%' : '-50%',
                    ],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...section.photos, ...section.photos].map((photo, idx) => (
                    <MotionBox
                      key={idx}
                      variants={photoVariants}
                      whileHover="hover"
                      cursor="pointer"
                      flex="0 0 auto"
                      w="180px"
                      h="180px"
                      borderRadius="xl"
                      overflow="hidden"
                      position="relative"
                      boxShadow={`0 0 15px ${section.color}40`}
                      _hover={{
                        boxShadow: `0 0 25px ${section.color}60`,
                      }}
                    >
                      <motion.img
                        src={photo.image_url}
                        alt={photo.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      />
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        p={2}
                        bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                        opacity={0}
                        transition="opacity 0.3s ease"
                        _groupHover={{ opacity: 1 }}
                      >
                        <Text color="white" fontSize="xs">
                          {photo.title}
                        </Text>
                      </Box>
                    </MotionBox>
                  ))}
                </motion.div>
              </Box>
            </Box>
          </MotionBox>
        ))}
      </VStack>
    </MotionBox>
  );
};

export default PinterestGallery;