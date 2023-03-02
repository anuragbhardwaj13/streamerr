import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  size: '4xl',
  p: '4',
  width: 'full',
};
const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          Watch The Future of Streaming
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>
          Play Games with the Community
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          Win Big
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          Change your streaming game
        </Heading>
      </Box>
    </Carousel>
  );
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptatibus pariatur impedit provident similique nihil accusamus
            eius unde! Sit dolore consequatur culpa vero architecto hic
            voluptatem. Aliquid doloribus, sed consectetur tempore quidem fugiat
            repellendus asperiores aliquam perferendis ullam similique impedit.
            Perferendis fugiat, voluptatum, eveniet ullam omnis earum
            perspiciatis, nostrum ipsa maiores veniam iste esse tempore quidem
            eos provident exercitationem. Sint provident nulla deleniti earum
            veniam, quia eos ut qui rerum perferendis unde iure odit ex? Ex
            nostrum temporibus reiciendis nobis doloremque repellendus fugiat
            tempore nesciunt eveniet atque ut veritatis animi corporis deleniti
            iusto rerum non cupiditate, repudiandae, et illum maiores!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
