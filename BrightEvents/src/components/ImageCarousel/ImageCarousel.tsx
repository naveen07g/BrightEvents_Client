// src/components/ImageCarousel.tsx

import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';

import wedding1 from '../../assets/ImageCarousel/wedding1.jpg';
import wedding2 from '../../assets/ImageCarousel/wedding2.jpg';
import wedding3 from '../../assets/ImageCarousel/wedding3.jpg';
import wedding6 from '../../assets/ImageCarousel/wedding6.jpg';
import wedding7 from '../../assets/ImageCarousel/wedding7.jpg';
import wedding8 from '../../assets/ImageCarousel/wedding8.jpg';


import './ImageCarousel.css'


const images = [
  wedding1, wedding2, wedding3,wedding6,wedding7,wedding8
];

const ImageCarousel: React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,               // Slow and smooth transition (default is 500)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,      // Longer display before switching
    cssEase: "ease-in-out",    // Smooth easing effect
    fade: true,                // Makes it fade instead of slide
    arrows: false,
  };

  return (
    <Box sx={{ width: '100%', height: '75vh', mx: 'auto',overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box
            key={idx}
            component="img"
            src={img}
            alt={`Slide ${idx + 1}`}
            sx={{
              width: '100vw',
              height: '85vh',
              objectFit: 'cover',
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
