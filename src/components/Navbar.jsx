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
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Box
      bg="#0A0A0A"
      px={{ base: 4, md: 8 }}
      py={5} // 20px vertical padding
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
          spacing={10} // Wide spacing
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
            letterSpacing="2px"
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 4, borderRadius: 'full' }}
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
            letterSpacing="2px"
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 4, borderRadius: 'full' }}
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
            letterSpacing="2px"
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 4, borderRadius: 'full' }}
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
            letterSpacing="2px"
            fontFamily="sans-serif"
            _hover={{
              color: '#FF3C3C',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
            _active={{ bg: '#FF3C3C', px: 4, borderRadius: 'full' }}
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
                letterSpacing="2px"
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
                  p={4}
                  w="200px"
                  bg="#0A0A0A"
                  border="1px solid rgba(255, 255, 255, 0.1)"
                  boxShadow="0 4px 12px rgba(0, 0, 0, 0.5)"
                  as={MotionBox}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <VStack align="start">
                    <Link
                      as={RouterLink}
                      to="/merchandise"
                      fontSize="sm"
                      fontWeight="bold"
                      color="#FFFFFF"
                      textTransform="uppercase"
                      letterSpacing="2px"
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
                      fontSize="sm"
                      fontWeight="bold"
                      color="#FFFFFF"
                      textTransform="uppercase"
                      letterSpacing="2px"
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
                      to="/gracias-garnacho"
                      fontSize="sm"
                      fontWeight="bold"
                      color="#FFFFFF"
                      textTransform="uppercase"
                      letterSpacing="2px"
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
              boxSize={{ base: '40px', md: '50px' }}
              objectFit="contain"
              _hover={{ transform: 'scale(1.1)', transition: 'all 0.3s' }}
            />
          </Link>
        </Box>

        {/* Right: Icons */}
        <Flex alignItems="center">
          <Stack direction="row" spacing={6} display={{ base: 'none', md: 'flex' }}>
            <IconButton
              as={RouterLink}
              to="/#cards"
              icon={<SearchIcon />}
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
              aria-label="Scroll to Cards"
            />
          </Stack>

          {/* Mobile Hamburger */}
          <Flex display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
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
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link
              as={RouterLink}
              to="/bio"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="2px"
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
              letterSpacing="2px"
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
              letterSpacing="2px"
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
              letterSpacing="2px"
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
              letterSpacing="2px"
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
              letterSpacing="2px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Photo Gallery
            </Link>
            <Link
              as={RouterLink}
              to="/gracias-garnacho"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
              textTransform="uppercase"
              letterSpacing="2px"
              fontFamily="sans-serif"
              _hover={{ color: '#FF3C3C', transform: 'scale(1.05)', transition: 'all 0.3s' }}
            >
              Gracias Garnacho
            </Link>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;