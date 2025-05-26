import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Badge,
  Input,
  Textarea,
} from '@chakra-ui/react';

const ProductCard = ({ image, title, price, description, badge }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Image src={image} alt={title} h="300px" w="100%" objectFit="cover" />
      <Box p={6}>
        {badge && (
          <Badge borderRadius="full" px="2" colorScheme="red" mb={2}>
            {badge}
          </Badge>
        )}
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
          {description}
        </Text>
        <HStack justify="space-between">
          <Text fontWeight="bold" fontSize="xl">
            ${price}
          </Text>
          <Button colorScheme="red">Add to Cart</Button>
        </HStack>
      </Box>
    </Box>
  );
};

const Merchandise = () => {
  const products = [
    {
      id: 1,
      title: "Garnacho Home Jersey",
      price: 89.99,
      description: "Official Manchester United home jersey with Garnacho's name and number",
      image: "/placeholder.jpg",
      badge: "New"
    },
    {
      id: 2,
      title: "Garnacho Poster",
      price: 19.99,
      description: "High-quality poster featuring Garnacho's iconic celebration",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Garnacho T-Shirt",
      price: 29.99,
      description: "Casual t-shirt with Garnacho's signature",
      image: "/placeholder.jpg"
    },
    // Add more products here
  ];

  return (
    <Box>
      {/* Header Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
        <Container maxW="100vw" width="100%">
          <VStack spacing={8} align={'center'} textAlign={'center'}>
            <Heading fontSize={'4xl'}>Official Merchandise</Heading>
            <Text fontSize={'xl'} color={useColorModeValue('gray.600', 'gray.400')}>
              Show your support with exclusive Garnacho merchandise
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Products Grid */}
      <Box py={20}>
        <Container maxW="100vw" width="100%">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
        <Container maxW="100vw" width="100%">
          <VStack spacing={8} align={'center'}>
            <Heading>Contact Us</Heading>
            <Text>Have questions about our merchandise? Get in touch!</Text>
            <VStack spacing={4} w="100%" maxW="500px">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button colorScheme="red" w="100%">
                Send Message
              </Button>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Merchandise; 