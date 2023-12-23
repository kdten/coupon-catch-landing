import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface StyledImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  incoming: boolean;
}

const slideIn = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;

const slideOut = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 560px;
  height: 769px;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(var(--secondBackground), 1) 0%, rgba(var(--secondBackground), 0) 12%, rgba(var(--secondBackground), 0) 88%, rgba(var(--secondBackground), 1) 100%);
    z-index: 1;
  }
  @media (max-width: 1023px) {
    width: 450px;
    height: 600px;
  }
  // @media (max-width: 768px) {
  //   width: 225px;
  //   height: 300px;
  // }
  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
  }
`;

const StyledImage = styled.img<StyledImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${props => props.incoming ? slideIn : slideOut} 3s forwards;
  @media (max-width: 768px) {
    height: auto;
    // object-fit: contain;
    width: 100vw;
  }
`;

export default function HeroIllustration() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/mockup_logintrim.webp', '/mockup_successtrim.webp'];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <StyledImage
          key={image}
          src={image}
          alt="Picture of app on phone"
          incoming={index === currentImage}
        />
      ))}
    </ImageContainer>
  );
}