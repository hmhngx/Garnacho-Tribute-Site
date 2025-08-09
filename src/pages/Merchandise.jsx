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
  Flex,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Tag,
  Progress,
  useToast,
  Tooltip,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowForwardIcon, 
  SearchIcon, 
  StarIcon, 
  AddIcon, 
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

// Enhanced Product Card with Quick View
const ProductCard = ({ 
  product, 
  onQuickView, 
  onAddToWishlist, 
  isWishlisted = false,
  isLimitedEdition = false,
  discount = 0,
  isNew = false,
  isBestSeller = false,
  isGarnachoPick = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getBadgeColor = () => {
    if (isLimitedEdition) return 'red';
    if (isNew) return 'green';
    if (isBestSeller) return 'yellow';
    if (isGarnachoPick) return 'purple';
    return 'blue';
  };

  const getBadgeText = () => {
    if (isLimitedEdition) return 'Limited Edition';
    if (isNew) return 'New';
    if (isBestSeller) return 'Best Seller';
    if (isGarnachoPick) return "Garnacho's Pick";
    return '';
  };

  const getBadgeIcon = () => {
    if (isLimitedEdition) return <StarIcon />;
    if (isNew) return <StarIcon />;
    if (isBestSeller) return <StarIcon />;
    if (isGarnachoPick) return <StarIcon />;
    return null;
  };

  return (
    <MotionBox
      className="product-card"
      bg="linear-gradient(145deg, #1e133a 0%, #2a1b4a 100%)"
      borderRadius="16px"
      overflow="hidden"
      boxShadow={isHovered ? '0 8px 40px rgba(255, 255, 255, 0.2)' : '0 4px 20px rgba(255, 255, 255, 0.05)'}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      p={3}
      w="100%"
      position="relative"
      border="1px solid"
      borderColor={isHovered ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
    >
      {/* Badge Overlay */}
      {(isLimitedEdition || isNew || isBestSeller || isGarnachoPick) && (
        <MotionBox
          position="absolute"
          top={3}
          left={3}
          zIndex={2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <HStack
            bg={getBadgeColor() === 'red' ? '#E53E3E' : getBadgeColor() === 'orange' ? '#DD6B20' : getBadgeColor() === 'blue' ? '#3182CE' : '#38A169'}
            color="white"
            borderRadius="full"
            px={3}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            boxShadow={isHovered ? '0 0 15px rgba(255, 69, 0, 0.6)' : '0 0 8px rgba(255, 69, 0, 0.3)'}
            transition="all 0.3s ease"
            transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
            spacing={1}
          >
            {getBadgeIcon()}
            <Text>{getBadgeText()}</Text>
          </HStack>
        </MotionBox>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <MotionBox
          position="absolute"
          top={3}
          right={3}
          zIndex={2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Badge
            colorScheme="green"
            borderRadius="full"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            boxShadow="0 0 10px rgba(0, 255, 0, 0.5)"
          >
            -{discount}%
          </Badge>
        </MotionBox>
      )}

      {/* Wishlist Button */}
      <MotionBox
        position="absolute"
        top={3}
        right={discount > 0 ? 12 : 3}
        zIndex={2}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
                 <IconButton
           icon={<StarIcon />}
           colorScheme={isWishlisted ? "red" : "gray"}
           variant="solid"
           size="sm"
           borderRadius="full"
           onClick={() => onAddToWishlist(product.id)}
           _hover={{
             transform: 'scale(1.1)',
             boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)'
           }}
           transition="all 0.2s"
         />
      </MotionBox>

      {/* Image Container */}
      <MotionBox
        position="relative"
        overflow="hidden"
        borderRadius="12px"
        mb={3}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MotionImage
          src={product.image}
          alt={product.title}
          h="250px"
          w="100%"
          objectFit="cover"
          borderRadius="12px"
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          whileHover={{ 
            scale: 1.08,
            filter: 'brightness(1.1) contrast(1.1)'
          }}
          onLoad={() => setImageLoaded(true)}
          opacity={imageLoaded ? 1 : 0}
          transform={imageLoaded ? 'scale(1)' : 'scale(0.9)'}
        />
        
        {/* Quick View Overlay */}
        <AnimatePresence>
          {isHovered && (
            <MotionBox
              position="absolute"
              inset={0}
              bg="rgba(0, 0, 0, 0.7)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="12px"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <VStack spacing={3}>
                                 <Button
                   leftIcon={<AddIcon />}
                   colorScheme="blue"
                   size="sm"
                   onClick={() => onQuickView(product)}
                   _hover={{
                     transform: 'scale(1.05)',
                     boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
                   }}
                 >
                   Quick View
                 </Button>
                                 <Button
                   leftIcon={<AddIcon />}
                   colorScheme="green"
                   size="sm"
                   as="a"
                   href={product.href}
                   target="_blank"
                   _hover={{
                     transform: 'scale(1.05)',
                     boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)'
                   }}
                 >
                   Buy Now
                 </Button>
              </VStack>
            </MotionBox>
          )}
        </AnimatePresence>
      </MotionBox>

      {/* Product Info */}
      <Box p={3}>
        <Heading
          size="sm"
          mb={2}
          textTransform="uppercase"
          letterSpacing="1px"
          fontWeight={700}
          fontFamily="'Poppins', sans-serif"
          fontSize="16px"
          color="white"
          bgGradient="linear(to-r, white, #FFA723)"
          bgClip="text"
          textShadow={isHovered ? '0 0 8px rgba(255, 167, 35, 0.5)' : 'none'}
          transition="text-shadow 0.3s"
          noOfLines={2}
        >
          {product.title}
        </Heading>
        
        <Text
          color="gray.400"
          mb={3}
          fontSize="12px"
          fontFamily="'Poppins', sans-serif"
          fontWeight={400}
          noOfLines={2}
        >
          {product.description}
        </Text>

        {/* Price Section */}
        <HStack justify="space-between" align="center" mb={3}>
          <VStack align="start" spacing={0}>
            {discount > 0 && (
              <Text
                fontSize="sm"
                color="gray.500"
                textDecoration="line-through"
                fontWeight="normal"
              >
                ${product.price}
              </Text>
            )}
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={discount > 0 ? "#22c55e" : "#f4364c"}
              textShadow={isHovered ? '0 0 8px rgba(244, 54, 76, 0.5)' : 'none'}
              transition="text-shadow 0.3s"
            >
              ${discount > 0 ? (product.price * (1 - discount / 100)).toFixed(2) : product.price}
            </Text>
          </VStack>
          
          <Button
            size="sm"
            colorScheme="blue"
            borderRadius="full"
            leftIcon={<AddIcon />}
            onClick={() => onQuickView(product)}
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
            }}
            transition="all 0.2s"
          >
            View
          </Button>
        </HStack>

        {/* Stock Indicator for Limited Edition */}
        {isLimitedEdition && (
          <Box mb={2}>
            <Text fontSize="xs" color="gray.400" mb={1}>
              Limited Stock
            </Text>
            <Progress 
              value={product.stockPercentage || 30} 
              size="sm" 
              colorScheme="red"
              borderRadius="full"
            />
          </Box>
        )}
      </Box>
    </MotionBox>
  );
};

// Quick View Modal
const QuickViewModal = ({ isOpen, onClose, product }) => {
  const toast = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.title} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="linear-gradient(145deg, #1e133a 0%, #2a1b4a 100%)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderRadius="16px"
        color="white"
      >
        <ModalHeader borderBottom="1px solid rgba(255, 255, 255, 0.1)">
          <HStack>
            <Image src={product.image} alt={product.title} w="50px" h="50px" borderRadius="8px" />
            <VStack align="start" spacing={0}>
              <Heading size="md">{product.title}</Heading>
              <Text fontSize="sm" color="gray.400">{product.category}</Text>
            </VStack>
          </HStack>
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody py={6}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box>
              <Image
                src={product.image}
                alt={product.title}
                w="100%"
                h="300px"
                objectFit="cover"
                borderRadius="12px"
                mb={4}
              />
              <HStack spacing={3}>
                                 <Button
                   colorScheme="blue"
                   leftIcon={<AddIcon />}
                   onClick={handleAddToCart}
                   flex={1}
                 >
                   Add to Cart
                 </Button>
                <Button
                  as="a"
                  href={product.href}
                  target="_blank"
                  colorScheme="green"
                  leftIcon={<ArrowForwardIcon />}
                  flex={1}
                >
                  Buy Now
                </Button>
              </HStack>
            </Box>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading size="md" mb={2}>Description</Heading>
                <Text color="gray.300" lineHeight="1.6">
                  {product.description}
                </Text>
              </Box>
              
              <Box>
                <Heading size="md" mb={2}>Features</Heading>
                <List spacing={2}>
                  {product.features?.map((feature, index) => (
                    <ListItem key={index} color="gray.300">
                      <ListIcon as={StarIcon} color="yellow.400" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Heading size="md" mb={2}>Price</Heading>
                <Text fontSize="2xl" fontWeight="bold" color="#f4364c">
                  ${product.price}
                </Text>
                {product.discount && (
                  <Text fontSize="sm" color="green.400">
                    Save ${(product.price * product.discount / 100).toFixed(2)} ({product.discount}% off)
                  </Text>
                )}
              </Box>
            </VStack>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

// Filter and Sort Component
const FilterSortBar = ({ filters, setFilters, sortBy, setSortBy }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Box mb={6}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          align="center"
          justify="space-between"
          bg="linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)"
          p={6}
          borderRadius="20px"
          border="1px solid rgba(255, 255, 255, 0.15)"
          backdropFilter="blur(10px)"
          boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
          _hover={{
            borderColor: 'rgba(255, 167, 35, 0.3)',
            boxShadow: '0 12px 40px rgba(255, 167, 35, 0.1)',
            transform: 'translateY(-2px)',
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <HStack spacing={4} flex={1}>
            <InputGroup maxW="300px">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="orange.400" />
              </InputLeftElement>
              <Input
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                bg="rgba(255, 255, 255, 0.08)"
                border="2px solid rgba(255, 255, 255, 0.1)"
                borderRadius="12px"
                color="white"
                fontSize="sm"
                fontWeight="500"
                _placeholder={{ color: 'gray.400', fontWeight: 'normal' }}
                _focus={{
                  borderColor: '#FFA723',
                  boxShadow: '0 0 0 3px rgba(255, 167, 35, 0.2)',
                  bg: 'rgba(255, 255, 255, 0.12)',
                }}
                _hover={{
                  borderColor: 'rgba(255, 167, 35, 0.5)',
                  bg: 'rgba(255, 255, 255, 0.1)',
                }}
                transition="all 0.3s ease"
              />
            </InputGroup>
            
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                leftIcon={<ChevronDownIcon />}
                variant="outline"
                colorScheme="orange"
                onClick={() => setShowFilters(!showFilters)}
                size="md"
                borderRadius="12px"
                border="2px solid"
                borderColor="rgba(255, 167, 35, 0.3)"
                bg="rgba(255, 167, 35, 0.05)"
                color="orange.400"
                fontWeight="600"
                _hover={{
                  bg: 'rgba(255, 167, 35, 0.15)',
                  borderColor: 'orange.400',
                  boxShadow: '0 0 20px rgba(255, 167, 35, 0.3)',
                  transform: 'translateY(-2px)',
                }}
                _active={{
                  bg: 'rgba(255, 167, 35, 0.2)',
                  transform: 'translateY(0px)',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Filters
              </Button>
            </MotionBox>
          </HStack>

          <MotionBox
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              maxW="220px"
              bg="rgba(255, 255, 255, 0.08)"
              border="2px solid rgba(255, 255, 255, 0.1)"
              borderRadius="12px"
              color="white"
              fontSize="sm"
              fontWeight="500"
              _focus={{
                borderColor: '#FFA723',
                boxShadow: '0 0 0 3px rgba(255, 167, 35, 0.2)',
                bg: 'rgba(255, 255, 255, 0.12)',
              }}
              _hover={{
                borderColor: 'rgba(255, 167, 35, 0.5)',
                bg: 'rgba(255, 255, 255, 0.1)',
              }}
              transition="all 0.3s ease"
            >
              <option value="featured" style={{ background: '#1a0f2e', color: 'white' }}>Featured</option>
              <option value="price-low" style={{ background: '#1a0f2e', color: 'white' }}>Price: Low to High</option>
              <option value="price-high" style={{ background: '#1a0f2e', color: 'white' }}>Price: High to Low</option>
              <option value="newest" style={{ background: '#1a0f2e', color: 'white' }}>Newest</option>
              <option value="popular" style={{ background: '#1a0f2e', color: 'white' }}>Most Popular</option>
            </Select>
          </MotionBox>
        </Flex>
      </MotionBox>

      <AnimatePresence>
        {showFilters && (
          <MotionBox
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            overflow="hidden"
            mt={4}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Box
              bg="linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)"
              p={6}
              borderRadius="20px"
              border="1px solid rgba(255, 255, 255, 0.15)"
              backdropFilter="blur(10px)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
            >
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                <VStack align="start" spacing={3}>
                  <Text fontWeight="bold" color="white" fontSize="lg" mb={2}>
                    Category
                  </Text>
                  <VStack align="start" spacing={2} w="100%">
                    {['All', 'Jerseys', 'Posters', 'T-Shirts', 'Training Gear', 'Accessories'].map((category) => (
                      <MotionBox
                        key={category}
                        w="100%"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="md"
                          variant={filters.category === category ? 'solid' : 'ghost'}
                          colorScheme="orange"
                          onClick={() => setFilters({ ...filters, category })}
                          w="100%"
                          justifyContent="flex-start"
                          borderRadius="10px"
                          bg={filters.category === category ? 'rgba(255, 167, 35, 0.2)' : 'transparent'}
                          color={filters.category === category ? 'orange.400' : 'gray.300'}
                          border={filters.category === category ? '2px solid rgba(255, 167, 35, 0.5)' : '2px solid transparent'}
                          _hover={{
                            bg: filters.category === category ? 'rgba(255, 167, 35, 0.3)' : 'rgba(255, 167, 35, 0.1)',
                            borderColor: 'orange.400',
                            color: 'orange.400',
                            transform: 'translateX(5px)',
                          }}
                          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        >
                          {category}
                        </Button>
                      </MotionBox>
                    ))}
                  </VStack>
                </VStack>

                <VStack align="start" spacing={3}>
                  <Text fontWeight="bold" color="white" fontSize="lg" mb={2}>
                    Price Range
                  </Text>
                  <VStack align="start" spacing={2} w="100%">
                    {['All', 'Under $20', '$20-$50', '$50-$100', 'Over $100'].map((range) => (
                      <MotionBox
                        key={range}
                        w="100%"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="md"
                          variant={filters.priceRange === range ? 'solid' : 'ghost'}
                          colorScheme="orange"
                          onClick={() => setFilters({ ...filters, priceRange: range })}
                          w="100%"
                          justifyContent="flex-start"
                          borderRadius="10px"
                          bg={filters.priceRange === range ? 'rgba(255, 167, 35, 0.2)' : 'transparent'}
                          color={filters.priceRange === range ? 'orange.400' : 'gray.300'}
                          border={filters.priceRange === range ? '2px solid rgba(255, 167, 35, 0.5)' : '2px solid transparent'}
                          _hover={{
                            bg: filters.priceRange === range ? 'rgba(255, 167, 35, 0.3)' : 'rgba(255, 167, 35, 0.1)',
                            borderColor: 'orange.400',
                            color: 'orange.400',
                            transform: 'translateX(5px)',
                          }}
                          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        >
                          {range}
                        </Button>
                      </MotionBox>
                    ))}
                  </VStack>
                </VStack>

                <VStack align="start" spacing={3}>
                  <Text fontWeight="bold" color="white" fontSize="lg" mb={2}>
                    Special Offers
                  </Text>
                  <VStack align="start" spacing={2} w="100%">
                    {['All', 'Limited Edition', 'New Arrivals', 'Best Sellers', "Garnacho's Picks"].map((offer) => (
                      <MotionBox
                        key={offer}
                        w="100%"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="md"
                          variant={filters.specialOffer === offer ? 'solid' : 'ghost'}
                          colorScheme="orange"
                          onClick={() => setFilters({ ...filters, specialOffer: offer })}
                          w="100%"
                          justifyContent="flex-start"
                          borderRadius="10px"
                          bg={filters.specialOffer === offer ? 'rgba(255, 167, 35, 0.2)' : 'transparent'}
                          color={filters.specialOffer === offer ? 'orange.400' : 'gray.300'}
                          border={filters.specialOffer === offer ? '2px solid rgba(255, 167, 35, 0.5)' : '2px solid transparent'}
                          _hover={{
                            bg: filters.specialOffer === offer ? 'rgba(255, 167, 35, 0.3)' : 'rgba(255, 167, 35, 0.1)',
                            borderColor: 'orange.400',
                            color: 'orange.400',
                            transform: 'translateX(5px)',
                          }}
                          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        >
                          {offer}
                        </Button>
                      </MotionBox>
                    ))}
                  </VStack>
                </VStack>
              </SimpleGrid>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

// Bundle Deal Component
const BundleDeal = ({ bundle, onAddToCart }) => {
  return (
    <MotionBox
      bg="linear-gradient(145deg, #2a1b4a 0%, #3d2a5a 100%)"
      borderRadius="16px"
      p={4}
      border="2px solid"
      borderColor="orange.400"
      whileHover={{ scale: 1.02 }}
    >
             <HStack mb={3}>
         <Icon as={StarIcon} color="orange.400" />
         <Heading size="md" color="orange.400">Bundle Deal</Heading>
         <Badge colorScheme="orange" borderRadius="full">
           Save ${bundle.savings}
         </Badge>
       </HStack>
      
      <Text color="gray.300" mb={4}>
        {bundle.description}
      </Text>
      
      <SimpleGrid columns={2} spacing={3} mb={4}>
        {bundle.products.map((product, index) => (
          <HStack key={index} spacing={2}>
            <Image src={product.image} alt={product.title} w="40px" h="40px" borderRadius="8px" />
            <Text fontSize="sm" color="white" noOfLines={1}>{product.title}</Text>
          </HStack>
        ))}
      </SimpleGrid>
      
      <HStack justify="space-between" align="center">
        <VStack align="start" spacing={0}>
          <Text fontSize="sm" color="gray.400" textDecoration="line-through">
            ${bundle.originalPrice}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="orange.400">
            ${bundle.discountedPrice}
          </Text>
        </VStack>
        
                 <MotionBox
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <Button
             colorScheme="orange"
             size="md"
             onClick={() => onAddToCart(bundle)}
             borderRadius="12px"
             fontWeight="600"
             px={6}
             py={3}
             bgGradient="linear(135deg, #FFA723 0%, #FF8C00 100%)"
             border="2px solid rgba(255, 167, 35, 0.3)"
             _hover={{ 
               bgGradient: 'linear(135deg, #FF8C00 0%, #FFA723 100%)',
               boxShadow: '0 0 20px rgba(255, 167, 35, 0.4)',
               transform: 'translateY(-2px)',
               borderColor: 'orange.400',
             }}
             _active={{
               transform: 'translateY(0px)',
             }}
             transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
           >
             Add Bundle
           </Button>
         </MotionBox>
      </HStack>
    </MotionBox>
  );
};

const Merchandise = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    priceRange: 'All',
    specialOffer: 'All'
  });
  const [sortBy, setSortBy] = useState('featured');
  const [activeTab, setActiveTab] = useState('all');

  const toast = useToast();

  // Enhanced product data with more details
  const products = [
    {
      id: 1,
      title: "Garnacho Home Jersey 2024/25",
      price: 89.99,
      description: "Limited edition authentic MUFC kit with Garnacho's signature celebration print",
      image: "/images/cool.png",
      category: "Jerseys",
      isLimitedEdition: true,
      isNew: false,
      isBestSeller: true,
      isGarnachoPick: false,
      discount: 15,
      stockPercentage: 25,
      features: ["Authentic player fit", "Celebration print", "Limited to 1000 pieces", "Includes certificate of authenticity"],
      href: "https://www.kitbag.com/en/alejandro-garnacho/a-2581410041+z-902965-451765480"
    },
    {
      id: 2,
      title: "Iconic Celebration Poster",
      price: 19.99,
      description: "Premium quality poster featuring Garnacho's iconic celebration moments",
      image: "/images/poster.png",
      category: "Posters",
      isLimitedEdition: false,
      isNew: true,
      isBestSeller: false,
      isGarnachoPick: true,
      discount: 0,
      features: ["High-quality print", "Multiple sizes available", "Framed option available", "Signed versions available"],
      href: "https://www.etsy.com/search?q=garnacho+poster&ref=search_bar&dd_referrer=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1632801929%2Falejandro-garnacho-poster-alejandro"
    },
    {
      id: 3,
      title: "Signature Collection T-Shirt",
      price: 29.99,
      description: "Exclusive t-shirt featuring Garnacho's authentic signature design",
      image: "/images/signed.png",
      category: "T-Shirts",
      isLimitedEdition: false,
      isNew: false,
      isBestSeller: true,
      isGarnachoPick: false,
      discount: 10,
      features: ["100% cotton", "Signature design", "Multiple colors", "Sizes XS-XXL"],
      href: "https://www.ebay.co.uk/itm/256421464540"
    },
    {
      id: 4,
      title: "Training Kit Pro",
      price: 59.99,
      description: "Official training gear matching Garnacho's matchday preparation",
      image: "/images/training.png",
      category: "Training Gear",
      isLimitedEdition: false,
      isNew: true,
      isBestSeller: false,
      isGarnachoPick: true,
      discount: 0,
      features: ["Moisture-wicking fabric", "Player-grade quality", "Includes shorts", "Multiple colorways"],
      href: "https://www.uksoccershop.com/p-374298/2024-2025-man-utd-pre-match-shirt-black-kids-garnacho-17.html"
    },
    {
      id: 5,
      title: "Garnacho Cap Collection",
      price: 14.99,
      description: "Stylish cap featuring exclusive Garnacho branding and designs",
      image: "/images/cap.png",
      category: "Accessories",
      isLimitedEdition: false,
      isNew: false,
      isBestSeller: true,
      isGarnachoPick: false,
      discount: 20,
      features: ["Adjustable fit", "Multiple designs", "Premium materials", "One-size-fits-all"],
      href: "https://www.redbubble.com/shop?query=garnacho%20cap&ref=search_box"
    },
    {
      id: 6,
      title: "Collector's Mug Set",
      price: 9.99,
      description: "Premium ceramic mug with exclusive Garnacho artwork",
      image: "/images/mug.png",
      category: "Accessories",
      isLimitedEdition: false,
      isNew: true,
      isBestSeller: false,
      isGarnachoPick: false,
      discount: 0,
      features: ["Ceramic construction", "Microwave safe", "Dishwasher safe", "Set of 2"],
      href: "https://mustshop.org/products/Alejandro-Garnacho-Mug.html?fullSite=1"
    },
    {
      id: 7,
      title: "Away Jersey Limited",
      price: 94.99,
      description: "Exclusive away jersey with special edition numbering",
      image: "/images/jersey.png",
      category: "Jerseys",
      isLimitedEdition: true,
      isNew: true,
      isBestSeller: false,
      isGarnachoPick: true,
      discount: 0,
      stockPercentage: 15,
      features: ["Limited to 500 pieces", "Special numbering", "Certificate included", "Premium packaging"],
      href: "#"
    },
    {
      id: 8,
      title: "Match Day Poster",
      price: 24.99,
      description: "Commemorative poster from Garnacho's best performances",
      image: "/images/web.png",
      category: "Posters",
      isLimitedEdition: false,
      isNew: false,
      isBestSeller: true,
      isGarnachoPick: false,
      discount: 15,
      features: ["High-resolution print", "Multiple moments", "Framed option", "Signed available"],
      href: "#"
    }
  ];

  // Bundle deals
  const bundleDeals = [
    {
      id: 1,
      title: "Ultimate Fan Pack",
      description: "Get the complete Garnacho experience with jersey, poster, and cap",
      products: [
        { title: "Home Jersey", image: "/images/cool.png" },
        { title: "Celebration Poster", image: "/images/poster.png" },
        { title: "Garnacho Cap", image: "/images/cap.png" }
      ],
      originalPrice: 124.97,
      discountedPrice: 99.99,
      savings: 24.98
    },
    {
      id: 2,
      title: "Training Bundle",
      description: "Match Garnacho's training routine with this complete set",
      products: [
        { title: "Training Kit", image: "/images/training.png" },
        { title: "Signature T-Shirt", image: "/images/signed.png" }
      ],
      originalPrice: 89.98,
      discountedPrice: 69.99,
      savings: 19.99
    }
  ];

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         product.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category === 'All' || product.category === filters.category;
    const matchesPriceRange = filters.priceRange === 'All' || 
      (filters.priceRange === 'Under $20' && product.price < 20) ||
      (filters.priceRange === '$20-$50' && product.price >= 20 && product.price <= 50) ||
      (filters.priceRange === '$50-$100' && product.price >= 50 && product.price <= 100) ||
      (filters.priceRange === 'Over $100' && product.price > 100);
    const matchesSpecialOffer = filters.specialOffer === 'All' ||
      (filters.specialOffer === 'Limited Edition' && product.isLimitedEdition) ||
      (filters.specialOffer === 'New Arrivals' && product.isNew) ||
      (filters.specialOffer === 'Best Sellers' && product.isBestSeller) ||
      (filters.specialOffer === "Garnacho's Picks" && product.isGarnachoPick);

    return matchesSearch && matchesCategory && matchesPriceRange && matchesSpecialOffer;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.isNew - a.isNew;
      case 'popular':
        return b.isBestSeller - a.isBestSeller;
      default:
        return 0;
    }
  });

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        status: "info",
        duration: 2000,
      });
    } else {
      setWishlist([...wishlist, productId]);
      toast({
        title: "Added to wishlist!",
        status: "success",
        duration: 2000,
      });
    }
  };

  const handleAddBundleToCart = (bundle) => {
    toast({
      title: "Bundle added to cart!",
      description: `${bundle.title} has been added to your cart.`,
      status: "success",
      duration: 3000,
    });
  };

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
      {[...Array(30)].map((_, i) => (
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
        <VStack spacing={6} align="center" textAlign="center" w="100%" mt={7}>
          <HStack spacing={3}>
            <Box as="span" fontSize="3xl" color="orange.400">🔥</Box>
            <Heading
              fontSize={{ base: '32px', md: '48px' }}
              textTransform="uppercase"
              letterSpacing="2px"
              fontWeight={800}
              fontFamily="'Poppins', sans-serif"
              color="white"
              bgGradient="linear(to-r, white, #FFA723)"
              bgClip="text"
              textShadow="0 0 15px #FFA723"
            >
              Official Garnacho Collection
            </Heading>
            <Box as="span" fontSize="3xl" color="orange.400">🔥</Box>
          </HStack>
          <Text
            fontSize={{ base: '16px', md: '22px' }}
            color="gray.300"
            fontFamily="'Poppins', sans-serif"
            maxW="700px"
            lineHeight="1.6"
          >
            Support the rising star with exclusive merchandise and limited edition items
          </Text>
                     <HStack spacing={6}>
             <MotionBox
               whileHover={{ scale: 1.05, y: -5 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button
                 className="shop-btn"
                 as="a"
                 href="https://www.ebay.com/sch/i.html?_nkw=garnacho+merch&_sacat=0&_from=R40&_trksid=p2334524.m570.l1313&_odkw=garnacho&_osacat=0"
                 bgGradient="linear(135deg, #FFA723 0%, #A12FFF 50%, #FFA723 100%)"
                 color="white"
                 fontWeight="bold"
                 borderRadius="16px"
                 rightIcon={<Icon as={ArrowForwardIcon} />}
                 fontSize="lg"
                 px={10}
                 py={4}
                 size="lg"
                 border="2px solid rgba(255, 255, 255, 0.2)"
                 backdropFilter="blur(10px)"
                 _hover={{
                   bgGradient: 'linear(135deg, #A12FFF 0%, #FFA723 50%, #A12FFF 100%)',
                   boxShadow: '0 0 30px rgba(255, 167, 35, 0.6), 0 8px 32px rgba(0, 0, 0, 0.3)',
                   transform: 'translateY(-5px) scale(1.05)',
                   borderColor: 'rgba(255, 167, 35, 0.5)',
                   _before: {
                     left: '100%',
                   },
                 }}
                 _active={{
                   transform: 'translateY(-2px) scale(1.02)',
                 }}
                 transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                 position="relative"
                 overflow="hidden"
                 _before={{
                   content: '""',
                   position: 'absolute',
                   top: 0,
                   left: '-100%',
                   width: '100%',
                   height: '100%',
                   background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                   transition: 'left 0.5s',
                 }}
               >
                 Shop All
               </Button>
             </MotionBox>
             
             <MotionBox
               whileHover={{ scale: 1.05, y: -5 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button
                 variant="outline"
                 colorScheme="orange"
                 borderRadius="16px"
                 fontSize="lg"
                 px={8}
                 py={4}
                 size="lg"
                 border="2px solid rgba(255, 167, 35, 0.3)"
                 bg="rgba(255, 167, 35, 0.05)"
                 color="orange.400"
                 fontWeight="600"
                 backdropFilter="blur(10px)"
                 _hover={{
                   bg: 'rgba(255, 167, 35, 0.15)',
                   borderColor: 'orange.400',
                   boxShadow: '0 0 25px rgba(255, 167, 35, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
                   transform: 'translateY(-5px) scale(1.05)',
                   color: 'orange.300',
                   _before: {
                     left: '100%',
                   },
                 }}
                 _active={{
                   transform: 'translateY(-2px) scale(1.02)',
                 }}
                 transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                 position="relative"
                 overflow="hidden"
                 _before={{
                   content: '""',
                   position: 'absolute',
                   top: 0,
                   left: '-100%',
                   width: '100%',
                   height: '100%',
                   background: 'linear-gradient(90deg, transparent, rgba(255, 167, 35, 0.1), transparent)',
                   transition: 'left 0.5s',
                 }}
               >
                 <HStack spacing={2}>
                   <Text>View Wishlist</Text>
                   <Badge 
                     colorScheme="orange" 
                     borderRadius="full" 
                     px={2} 
                     py={1}
                     fontSize="xs"
                     fontWeight="bold"
                   >
                     {wishlist.length}
                   </Badge>
                 </HStack>
               </Button>
             </MotionBox>
           </HStack>
        </VStack>
      </Box>

      {/* Bundle Deals Section */}
      <Box py={8}>
                 <Heading size="lg" mb={6} color="white" textAlign="center">
           <Icon as={StarIcon} mr={2} color="orange.400" />
           Bundle Deals
         </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          {bundleDeals.map((bundle) => (
            <BundleDeal
              key={bundle.id}
              bundle={bundle}
              onAddToCart={handleAddBundleToCart}
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Filter and Sort Bar */}
      <FilterSortBar
        filters={filters}
        setFilters={setFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

             {/* Tabs for Different Collections */}
       <Box mb={6}>
         <MotionBox
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
         >
           <Tabs variant="soft-rounded" colorScheme="orange" value={activeTab} onChange={setActiveTab}>
             <TabList 
               bg="linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)" 
               borderRadius="16px" 
               p={2}
               border="1px solid rgba(255, 255, 255, 0.15)"
               backdropFilter="blur(10px)"
               boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
             >
               {[
                 { key: 'all', label: 'All Products', icon: '🔥' },
                 { key: 'limited', label: 'Limited Edition', icon: '⭐' },
                 { key: 'picks', label: "Garnacho's Picks", icon: '👑' },
                 { key: 'new', label: 'New Arrivals', icon: '✨' }
               ].map((tab) => (
                 <MotionBox
                   key={tab.key}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Tab 
                     color="gray.300" 
                     fontWeight="600"
                     fontSize="sm"
                     _selected={{ 
                       bg: 'linear-gradient(145deg, rgba(255, 167, 35, 0.3) 0%, rgba(255, 167, 35, 0.2) 100%)', 
                       color: 'orange.400',
                       border: '2px solid rgba(255, 167, 35, 0.5)',
                       boxShadow: '0 0 20px rgba(255, 167, 35, 0.3)',
                       transform: 'translateY(-2px)',
                     }}
                     _hover={{
                       color: 'orange.400',
                       bg: 'rgba(255, 167, 35, 0.1)',
                     }}
                     borderRadius="12px"
                     transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                     px={4}
                     py={3}
                   >
                     <HStack spacing={2}>
                       <Text fontSize="lg">{tab.icon}</Text>
                       <Text>{tab.label}</Text>
                     </HStack>
                   </Tab>
                 </MotionBox>
               ))}
             </TabList>
           </Tabs>
         </MotionBox>
       </Box>

      {/* Products Grid */}
      <Box py={6} id="products" w="100%">
        <AnimatePresence mode="wait">
          <MotionBox
            key={`${activeTab}-${sortBy}-${JSON.stringify(filters)}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SimpleGrid
              className="product-grid"
              columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
              spacing={6}
              maxW="100vw"
              w="100%"
              mx="auto"
            >
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={handleQuickView}
                  onAddToWishlist={handleAddToWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                  isLimitedEdition={product.isLimitedEdition}
                  discount={product.discount}
                  isNew={product.isNew}
                  isBestSeller={product.isBestSeller}
                  isGarnachoPick={product.isGarnachoPick}
                />
              ))}
            </SimpleGrid>
          </MotionBox>
        </AnimatePresence>
      </Box>

      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={selectedProduct}
      />

      <style>
        {`
          @keyframes twinkle {
            from { opacity: 0.3; }
            to { opacity: 0.7; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .product-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .product-card:hover {
            transform: translateY(-8px) scale(1.02);
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