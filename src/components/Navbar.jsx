import {
  Box,
  Flex,
  Link,
  Stack,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  VStack,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openQuizWebsite = () => {
    window.open('https://garnacho-quiz-app.vercel.app/', '_blank');
  };

  return (
    <Box
      bg="#0A0A0A"
      px={{ base: 2, md: 2 }} // Reduced horizontal padding
      py={3} // Reduced vertical padding from 5 (20px) to 3 (12px)
      position="fixed"
      w="100%"
      zIndex={999}
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      boxShadow="0 2px 10px rgba(0, 0, 0, 0.5)"
    >
      <Flex alignItems="center" justifyContent="space-between">
        {/* Left: Menu */}
        <Stack
          direction="row"
          spacing={4} // Reduced spacing from 10 to 4
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
        >
          <Link
            as={RouterLink}
            to="/bio"
            fontSize="sm"
            fontWeight="bold"
            color="#FFFFFF"
            textTransform="uppercase"
            letterSpacing="1px" // Reduced from 2px to 1px for compactness
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 3, borderRadius: 'full' }} // Reduced px from 4 to 3
          >
            Bio
          </Link>
          <Link
            as={RouterLink}
            to="/stats"
            fontSize="sm"
            fontWeight="bold"
            color="#FFFFFF"
            textTransform="uppercase"
            letterSpacing="1px"
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 3, borderRadius: 'full' }}
          >
            Stats
          </Link>
          <Link
            as={RouterLink}
            to="/career-history"
            fontSize="sm"
            fontWeight="bold"
            color="#FFFFFF"
            textTransform="uppercase"
            letterSpacing="1px"
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 3, borderRadius: 'full' }}
          >
            Career History
          </Link>
          <Link
            as={RouterLink}
            to="/goals"
            fontSize="sm"
            fontWeight="bold"
            color="#FFFFFF"
            textTransform="uppercase"
            letterSpacing="1px"
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 3, borderRadius: 'full' }}
          >
            Goals
          </Link>
          <Popover
            trigger="hover"
            placement="bottom-start"
            onOpen={() => setIsDropdownOpen(true)}
            onClose={() => setIsDropdownOpen(false)}
          >
            <PopoverTrigger>
              <Link
                fontSize="sm"
                fontWeight="bold"
                color="#FFFFFF"
                textTransform="uppercase"
                letterSpacing="1px"
                fontFamily="sans-serif"
                _hover={{
                  color: '#FF3C3C',
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
                  transition: 'all 0.3s',
                }}
              >
                More Info <Icon as={ChevronDownIcon} color="#FFFFFF" />
              </Link>
            </PopoverTrigger>
            <AnimatePresence>
              {isDropdownOpen && (
                <PopoverContent
                  p={2} // Reduced from 4 to 2
                  w="150px" // Reduced from 200px to 150px
                  bg="#0A0A0A"
                  border="1px solid rgba(255, 255, 255, 0.1)"
                  boxShadow="0 4px 12px rgba(0, 0, 0, 0.5)"
                  as={MotionBox}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <VStack align="start" spacing={2}> {/* Reduced spacing from 4 to 2 */}
                    <Link
                      as={RouterLink}
                      to="/merchandise"
                      fontSize="xs" // Reduced from sm to xs
                      fontWeight="bold"
                      color="#FFFFFF"
                      textTransform="uppercase"
                      letterSpacing="1px"
                      fontFamily="sans-serif"
                      _hover={{
                        color: '#FF3C3C',
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s',
                      }}
                    >
                      Merchandise
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/gallery"
                      fontSize="xs"
                      fontWeight="bold"
                      color="#FFFFFF"
                      textTransform="uppercase"
                      letterSpacing="1px"
                      fontFamily="sans-serif"
                      _hover={{
                        color: '#FF3C3C',
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s',
                      }}
                    >
                      Photo Gallery
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/kit-display"
                      fontSize="xs"
                      fontWeight="bold"
                      color="#FFFFFF"
                      textTransform="uppercase"
                      letterSpacing="1px"
                      fontFamily="sans-serif"
                      _hover={{
                        color: '#FF3C3C',
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s',
                      }}
                    >
                      Kit Display
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/gracias-garnacho"
                      fontSize="xs"
                      fontWeight="bold"
                      color="#FFFFFF"
                      textTransform="uppercase"
                      letterSpacing="1px"
                      fontFamily="sans-serif"
                      _hover={{
                        color: '#FF3C3C',
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s',
                      }}
                    >
                      Gracias Garnacho
                    </Link>
                  </VStack>
                </PopoverContent>
              )}
            </AnimatePresence>
          </Popover>
        </Stack>

        {/* Center: Logo */}
        <Box position="absolute" left="50%" transform="translateX(-50%)">
          <Link as={RouterLink} to="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
              alt="Manchester United Logo"
              boxSize={{ base: '30px', md: '40px' }} // Reduced from 40px/50px to 30px/40px
              objectFit="contain"
              _hover={{ transform: 'scale(1.1)', transition: 'all 0.3s' }}
            />
          </Link>
        </Box>

        {/* Right: Icons */}
        <Flex alignItems="center">
          <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }}> {/* Reduced spacing from 6 to 4 */}
            <MotionButton
              onClick={openQuizWebsite}
              bg="transparent"
              color="white"
              border="2px solid #D32F2F"
              borderRadius="full"
              px={4}
              py={2}
              fontWeight="bold"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.1em"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, #D32F2F, #FF4444, #D32F2F)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: -1
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(45deg, #D32F2F, #FF4444, #D32F2F)',
                borderRadius: 'full',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: -2,
                filter: 'blur(6px)'
              }}
              _hover={{
                color: 'white',
                transform: 'scale(1.05)',
                boxShadow: '0 0 15px rgba(211, 47, 47, 0.8), 0 0 30px rgba(255, 68, 68, 0.6), 0 0 45px rgba(211, 47, 47, 0.4)',
                _before: {
                  opacity: 0.1
                },
                _after: {
                  opacity: 0.6
                }
              }}
              _active={{
                transform: 'scale(0.98)',
                boxShadow: '0 0 12px rgba(211, 47, 47, 0.9), inset 0 0 8px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(211, 47, 47, 0.9), 0 0 40px rgba(255, 68, 68, 0.7), 0 0 60px rgba(211, 47, 47, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              sx={{
                '&:hover::before': {
                  opacity: 0.1
                },
                '&:hover::after': {
                  opacity: 0.6
                }
              }}
            >
              🧠 QUIZ
            </MotionButton>
          </Stack>

          {/* Mobile Hamburger */}
          <Flex display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={4} h={4} />} // Reduced icon size
              variant="ghost"
              color="#FFFFFF"
              border="1px solid #FFFFFF"
              borderRadius="full"
              _hover={{
                color: '#FF3C3C',
                borderColor: '#FF3C3C',
                transform: 'scale(1.1)',
                boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
                transition: 'all 0.3s',
              }}
              aria-label="Toggle Navigation"
              size="sm" // Reduced size
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={3} display={{ md: 'none' }}> {/* Reduced pb from 4 to 3 */}
          <Stack as="nav" spacing={3}> {/* Reduced spacing from 4 to 3 */}
            <Link
              as={RouterLink}
              to="/bio"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Bio
            </Link>
            <Link
              as={RouterLink}
              to="/stats"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Stats
            </Link>
            <Link
              as={RouterLink}
              to="/career-history"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Career History
            </Link>
            <Link
              as={RouterLink}
              to="/goals"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Goals
            </Link>
            <Link
              as={RouterLink}
              to="/merchandise"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Merchandise
            </Link>
            <Link
              as={RouterLink}
              to="/gallery"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Photo Gallery
            </Link>
            <Link
              as={RouterLink}
              to="/kit-display"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Kit Display
            </Link>
            <Link
              as={RouterLink}
              to="/gracias-garnacho"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="1px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Gracias Garnacho
            </Link>
            <MotionButton
              onClick={openQuizWebsite}
              bg="transparent"
              color="white"
              border="2px solid #D32F2F"
              borderRadius="full"
              px={4}
              py={2}
              fontWeight="bold"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.1em"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, #D32F2F, #FF4444, #D32F2F)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: -1
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(45deg, #D32F2F, #FF4444, #D32F2F)',
                borderRadius: 'full',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: -2,
                filter: 'blur(6px)'
              }}
              _hover={{
                color: 'white',
                transform: 'scale(1.05)',
                boxShadow: '0 0 15px rgba(211, 47, 47, 0.8), 0 0 30px rgba(255, 68, 68, 0.6), 0 0 45px rgba(211, 47, 47, 0.4)',
                _before: {
                  opacity: 0.1
                },
                _after: {
                  opacity: 0.6
                }
              }}
              _active={{
                transform: 'scale(0.98)',
                boxShadow: '0 0 12px rgba(211, 47, 47, 0.9), inset 0 0 8px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(211, 47, 47, 0.9), 0 0 40px rgba(255, 68, 68, 0.7), 0 0 60px rgba(211, 47, 47, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              sx={{
                '&:hover::before': {
                  opacity: 0.1
                },
                '&:hover::after': {
                  opacity: 0.6
                }
              }}
            >
              🧠 QUIZ
            </MotionButton>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;