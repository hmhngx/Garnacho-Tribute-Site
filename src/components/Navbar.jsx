import {
  Box,
  Flex,
  Link,
  Stack,
  useColorModeValue,
  Button,
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
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      position="fixed"
      w="100%"
      zIndex={999}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
            Garnacho Tribute
          </Link>
        </Box>

        <Stack direction={'row'} spacing={7} display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/bio">Bio</Link>
          <Link as={RouterLink} to="/stats">Stats</Link>
          <Link as={RouterLink} to="/career-history">Career History</Link>
          <Link as={RouterLink} to="/goals">Goals</Link>
          <Popover
            trigger={'hover'}
            placement={'bottom-start'}
            onOpen={() => setIsDropdownOpen(true)}
            onClose={() => setIsDropdownOpen(false)}
          >
            <PopoverTrigger>
              <Link
                p={2}
                href={'#'}
                fontSize={'sm'}
                fontWeight={500}
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.800', 'white'),
                }}
              >
                More Info <Icon as={ChevronDownIcon} />
              </Link>
            </PopoverTrigger>
            <AnimatePresence>
              {isDropdownOpen && (
                <PopoverContent
                  p={4}
                  w={'200px'}
                  as={MotionBox}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <VStack align="start">
                    <Link as={RouterLink} to="/merchandise">Merchandise</Link>
                    <Link as={RouterLink} to="/gallery">Photo Gallery</Link>
                    <Link as={RouterLink} to="/gracias-garnacho">Gracias Garnacho</Link>
                  </VStack>
                </PopoverContent>
              )}
            </AnimatePresence>
          </Popover>
        </Stack>

        <Flex display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link as={RouterLink} to="/bio">Bio</Link>
            <Link as={RouterLink} to="/stats">Stats</Link>
            <Link as={RouterLink} to="/career-history">Career History</Link>
            <Link as={RouterLink} to="/goals">Goals</Link>
            <Link as={RouterLink} to="/merchandise">Merchandise</Link>
            <Link as={RouterLink} to="/gallery">Photo Gallery</Link>
            <Link as={RouterLink} to="/gracias-garnacho">Gracias Garnacho</Link>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar; 