import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Box, IconButton} from '@chakra-ui/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

// Import images
import shopImage from '../assets/66358-online-shopping.png';
import microShopImage from '../assets/98827-shopweb-edit.png';
import fitnessImage from '../assets/49964-running-on-treadmill.png';
import restaurantImage from '../assets/img4.png';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function Carousel() {
  const handleDragStart = (e) => e.preventDefault();
  
  const items = [
    
    {
      imageSrc: shopImage,
      title: 'Mini Shops',
      description: `With Exponance's finance management software for showrooms and small stores, you can automate your financial processes. Take advantage of staff management, billing systems, inventory support, and thorough tracking of expenditures, bills, leases, and borrowing information. Financial operations can be optimized to unlock growth potential.`,
    },
    {
      imageSrc: microShopImage,
      title: 'Micro Shops',
      description: `Exponance provides a user-friendly finance management tool designed specifically for small businesses. Inventory management, billing, employee management, and expense tracking can streamline your operations. Improve productivity and simplify your finances for small businesses.`,
    },
    {
      imageSrc: fitnessImage,
      title: 'Fitness Sector',
      description: `With Exponance, you can effortlessly manage your gym's finances. Our cloud-based platform offers staff management, inventory support, membership management, late payment management, advance payment management, overdue payment management, and full billing and monitoring features. To increase productivity, automate the financial operations of your gym.`,
    },
    {
      imageSrc: restaurantImage,
      title: 'Restaurants',
      description: `Utilise Exponance to improve the financial administration of your restaurants. Our platform provides staff administration, inventory support for food and other items, urgent requirements, customer monitoring, advance payments, and expiration tracking. For a seamless dining experience, streamline bills, rent management, and borrowing information.`,
    },
    {
      imageSrc: fitnessImage,
      title: 'Fitness Sector',
      description: `With Exponance, you can effortlessly manage your gym's finances. Our cloud-based platform offers staff management, inventory support, membership management, late payment management, advance payment management, overdue payment management, and full billing and monitoring features. To increase productivity, automate the financial operations of your gym.`,
    },
    
  ];
  

  // Custom render function for navigation buttons
  const renderPrevButton = ({ isDisabled }) => (
    <IconButton
      aria-label="Previous"
       icon={<FaArrowAltCircleLeft />}
      // icon={<ArrowBackIcon />}
      onClick={() => document.querySelector('.alice-carousel__prev-btn').click()}
      isDisabled={isDisabled}
      style={styles.navButton}
    />
  );

  const renderNextButton = ({ isDisabled }) => (
    <IconButton
      aria-label="Next"
      icon={<FaArrowAltCircleRight />}
      // icon={<ArrowForwardIcon />}
      onClick={() => document.querySelector('.alice-carousel__next-btn').click()}
      isDisabled={isDisabled}
      style={styles.navButton}
    />
  );

  return (
    <div className='cards' style={styles.cardsContainer}>
      <ChakraProvider theme={theme}>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          infinite
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        >
          {items.map((item, index) => (
            <Box key={index} style={styles.cardWrapper}>
              <Card maxW='sm' style={styles.card}>
                <CardBody style={styles.cardBody}>
                  <Image
                    src={item.imageSrc}
                    borderRadius='lg'
                    onDragStart={handleDragStart}
                    style={styles.image}
                  />
                  <Stack mt='4' spacing='4'>
                    <Heading size='md' style={styles.heading}>{item.title}</Heading>
                    <Text fontSize='15px' style={styles.description}>
                      {item.description}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          ))}
        </AliceCarousel>
      </ChakraProvider>
    </div>
  );
}

const styles = {
  cardsContainer: {
    position: 'relative',
    padding: '20px',
    backgroundColor: 'white',
  },
  cardWrapper: {
    padding: '20px',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  },
  card: {
    backgroundColor: 'black',
    color: 'white',
    width:'400px',
    height:'450px',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  cardBody: {
    padding: '16px',
    
  },
  image: {
    width: '200px',
    height: 'auto',
    marginBottom: '16px',
  },
  heading: {
    color: 'white',
    fontSize: '1.5rem',
  },
  description: {
    color: 'white',
    fontSize: '1rem',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(550%)',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: '',
    alignItems: '',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'black',
    },
  },
  
};

export default Carousel;
