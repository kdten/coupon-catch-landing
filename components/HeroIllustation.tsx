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
  width: 664px;
  height: 769px;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(var(--secondBackground), 1) 0%, rgba(var(--secondBackground), 0) 8%, rgba(var(--secondBackground), 0) 80%, rgba(var(--secondBackground), 1) 100%);
    z-index: 1;
  }
`;

const StyledImage = styled.img<StyledImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${props => props.incoming ? slideIn : slideOut} 3s forwards;
`;

export default function HeroIllustration() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/mockup_login.webp', '/mockup_success.webp'];

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