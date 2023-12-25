import Image from 'next/image'
import React, { useEffect, useState } from 'react';

export default function Logo({ ...rest }) {
  // Function to determine the initial logo based on the system settings
  const getInitialLogo = () => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDark ? '/navbarLogoDark.webp' : '/navbarLogoLight.webp';
    }
    return '/navbarLogoLight.webp'; // default to light mode logo if window is not defined
  };

  // State for image source
  const [logoSrc, setLogoSrc] = useState(getInitialLogo);

  useEffect(() => {
    // Function to update logo based on theme
    const updateLogo = () => {
      const isDark = document.body.classList.contains('next-dark-theme');
      setLogoSrc(isDark ? '/navbarLogoDark.webp' : '/navbarLogoLight.webp');
    };

    // Initial check and set up an observer for class changes on body
    updateLogo();
    const observer = new MutationObserver(updateLogo);
    observer.observe(document.body, { attributeFilter: ['class'] });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={logoSrc}
      width={208}
      height={79}
      alt="Coupon Catch logo, featuring a fish and hook"
      {...rest}
    />
  )
}