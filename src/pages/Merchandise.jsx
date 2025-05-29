import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  VStack,
  HStack,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const ProductCard = ({ image, title, price, description, badge, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionBox
      className="card"
      bg="#1e133a"
      borderRadius="12px"
      overflow="hidden"
      boxShadow={isHovered ? '0 6px 30px rgba(255, 255, 255, 0.15)' : '0 4px 20px rgba(255, 255, 255, 0.05)'}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      p={2}
      w="100%"
    >
      <MotionBox>
        <Image
          src={image}
          alt={title}
          h="200px"
          w="100%"
          objectFit="cover"
          borderRadius="10px"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </MotionBox>
      <Box p={3}>
        {badge && (
          <Badge
            borderRadius="full"
            px="1"
            colorScheme="red"
            mb={1}
            boxShadow={isHovered ? '0 0 10px rgba(255, 69, 0, 0.5)' : 'none'}
            transition="box-shadow 0.3s"
            fontSize="xs"
          >
            {badge}
          </Badge>
        )}
        <Heading
          className="card-title"
          size="sm"
          mb={1}
          textTransform="uppercase"
          letterSpacing="1px"
          fontWeight={700}
          fontFamily="'Poppins', sans-serif"
          fontSize="18px"
          color="white"
          bgGradient="linear(to-r, white, #FFA723)"
          bgClip="text"
          textShadow={isHovered ? '0 0 5px rgba(255, 69, 0, 0.3)' : 'none'}
          transition="text-shadow 0.3s"
        >
          {title}
        </Heading>
        <Text
          color="gray.400"
          mb={2}
          fontSize="12px"
          fontFamily="'Poppins', sans-serif"
          fontWeight={400}
        >
          {description}
        </Text>
        <HStack justify="space-between" align="center">
          <Text
            fontWeight="bold"
            fontSize="lg"
            color="#f4364c"
            textShadow={isHovered ? '0 0 5px rgba(244, 54, 76, 0.5)' : 'none'}
            transition="text-shadow 0.3s"
          >
            ${price}
          </Text>
          <Button
            className="shop-btn"
            as="a"
            href={href}
            bgGradient="linear(to right, #A12FFF, #FFA723)"
            color="white"
            fontWeight="bold"
            borderRadius="6px"
            size="sm"
            rightIcon={<Icon as={ArrowForwardIcon} />}
            _hover={{
              bgGradient: 'linear(to right, #FFA723, #A12FFF)',
              boxShadow: '0 0 15px rgba(255, 69, 0, 0.7)',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s"
            px={3}
            py={1}
          >
            Add to Cart
          </Button>
        </HStack>
      </Box>
    </MotionBox>
  );
};

const Merchandise = () => {
  const products = [
    {
      id: 1,
      title: "Garnacho Home Jersey",
      price: 89.99,
      description: "Limited edition authentic MUFC kit",
      image: "/src/assets/cool.png",
      badge: "New",
      href: "https://www.kitbag.com/en/alejandro-garnacho/a-2581410041+z-902965-451765480"
    },
    {
      id: 2,
      title: "Iconic Poster",
      price: 19.99,
      description: "Garnacho aesthetic poster",
      image: "/src/assets/poster.png",
      href: "https://www.etsy.com/search?q=garnacho+poster&ref=search_bar&dd_referrer=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1632801929%2Falejandro-garnacho-poster-alejandro"
    },
    {
      id: 3,
      title: "Signature T-Shirt",
      price: 29.99,
      description: "Designed with Garnacho’s autograph",
      image: "/src/assets/signed.png",
      href: "https://www.ebay.co.uk/itm/256421464540"
    },
    {
      id: 4,
      title: "Training Kit",
      price: 59.99,
      description: "Official training gear for fans",
      image: "/src/assets/training.png",
      href: "https://www.uksoccershop.com/p-374298/2024-2025-man-utd-pre-match-shirt-black-kids-garnacho-17.html"
    },
    {
      id: 5,
      title: "Cap",
      price: 14.99,
      description: "Stylish cap with Garnacho logo",
      image: "/src/assets/cap.png",
      href: "https://www.redbubble.com/shop?query=garnacho%20cap&ref=search_box"
    },
    {
      id: 6,
      title: "Mug",
      price: 9.99,
      description: "Collectible mug with player design",
      image: "/src/assets/mug.png",
      href: "https://mustshop.org/products/Alejandro-Garnacho-Mug.html?fullSite=1"
    },
  ];

  return (
    <Box
      bg="linear-gradient(180deg, #1a0f2e 0%, #2b0c44 100%)"
      w="100vw"
      minW="100vw"
      minH="100vh"
      overflowX="hidden"
      py={6}
      px={{ base: 2, md: 8 }}
    >
      {/* Twinkling Dot Particles */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          w="2px"
          h="2px"
          bg="white"
          opacity={0.3}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          animation="twinkle 2s infinite alternate"
          _before={{
            content: '""',
            position: 'absolute',
            w: '4px',
            h: '4px',
            bg: 'white',
            opacity: 0.1,
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Header Section */}
      <Box w="100%">
        <VStack spacing={4} align="center" textAlign="center" w="100%" mt={7}>
          <HStack spacing={2}>
            <Box as="span" fontSize="2xl" color="orange.400">🔥</Box>
            <Heading
              fontSize={{ base: '32px', md: '48px' }}
              textTransform="uppercase"
              letterSpacing="2px"
              fontWeight={800}
              fontFamily="'Poppins', sans-serif"
              color="white"
              bgGradient="linear(to-r, white, #FFA723)"
              bgClip="text"
              textShadow="0 0 10px #FFA723"
            >
              Official Garnacho Collection
            </Heading>
          </HStack>
          <Text
            fontSize={{ base: '14px', md: '20px' }}
            color="gray.300"
            fontFamily="'Poppins', sans-serif"
            maxW="600px"
          >
            Support the rising star with official merchandise
          </Text>
          <Button
            className="shop-btn"
            as="a"
            href="https://www.ebay.com/sch/i.html?_nkw=garnacho+merch&_sacat=0&_from=R40&_trksid=p2334524.m570.l1313&_odkw=garnacho&_osacat=0"
            bgGradient="linear(to right, #A12FFF, #FFA723)"
            color="white"
            fontWeight="bold"
            borderRadius="6px"
            rightIcon={<Icon as={ArrowForwardIcon} />}
            _hover={{
              bgGradient: 'linear(to right, #FFA723, #A12FFF)',
              boxShadow: '0 0 15px rgba(255, 69, 0, 0.7)',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s"
            px={6}
            py={2}
          >
            Shop Now
          </Button>
        </VStack>
      </Box>
      {/* Products Grid */}
      <Box py={6} id="products" w="100%">
        <SimpleGrid
          className="product-grid"
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={4}
          maxW="100vw"
          w="100%"
          mx="auto"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </SimpleGrid>
      </Box>

      <style>
        {`
          @keyframes twinkle {
            from { opacity: 0.3; }
            to { opacity: 0.7; }
          }
          @media (max-width: 768px) {
            .product-grid {
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            .chakra-heading {
              font-size: 24px;
            }
            .chakra-text {
              font-size: 14px;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Merchandise;