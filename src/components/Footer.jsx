import { Box, Container, Stack, Text, Icon } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      bg="#0A0A0A"
      color="#FFFFFF"
      borderTop="1px solid rgba(255, 255, 255, 0.1)"
      boxShadow="0 -2px 10px rgba(0, 0, 0, 0.5)"
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={6} // 24px vertical padding
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify="center"
        align="center"
      >
        <Text
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="2px"
          fontFamily="sans-serif"
          _hover={{
            color: '#FF3C3C',
            textDecoration: 'underline',
            transition: 'all 0.3s',
          }}
        >
          © 2025 Garnacho Tribute. All rights reserved
        </Text>
        <Stack direction="row" spacing={8}>
          <Box
            as="a"
            href="https://x.com/FanGarnacho"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: '#FF3C3C',
              borderColor: '#FF3C3C',
              transform: 'scale(1.1)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
          >
            <Icon
              as={FaTwitter}
              boxSize={6}
              color="#FFFFFF"
              border="1px solid #FFFFFF"
              borderRadius="full"
              p={1}
            />
          </Box>
          <Box
            as="a"
            href="https://instagram.com/garnacho7"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: '#FF3C3C',
              borderColor: '#FF3C3C',
              transform: 'scale(1.1)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
          >
            <Icon
              as={FaInstagram}
              boxSize={6}
              color="#FFFFFF"
              border="1px solid #FFFFFF"
              borderRadius="full"
              p={1}
            />
          </Box>
          <Box
            as="a"
            href="https://www.facebook.com/AlejandroGarnacho07"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: '#FF3C3C',
              borderColor: '#FF3C3C',
              transform: 'scale(1.1)',
              boxShadow: '0 0 10px rgba(255, 60, 60, 0.5)',
              transition: 'all 0.3s',
            }}
          >
            <Icon
              as={FaFacebook}
              boxSize={6}
              color="#FFFFFF"
              border="1px solid #FFFFFF"
              borderRadius="full"
              p={1}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;