import React, { useEffect, useState } from 'react';
import discover from '../assests/discover.png';
import discover2 from '../assests/discover2.png'; // Import the second background image

const DiscoverPage = () => {
    const [backgroundImage, setBackgroundImage] = useState(discover); // Initial background image
    
    useEffect(() => {
        let lastScrollY = window.scrollY; // Track the last scroll position
    
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log('Scroll event triggered, currentScrollY:', currentScrollY);
    
            if (currentScrollY > lastScrollY && backgroundImage !== discover2) {
                console.log('Switching to discover2 image');
                setBackgroundImage(discover2); // Set the second background image
            } else if (currentScrollY < lastScrollY && backgroundImage !== discover) {
                console.log('Switching to discover image');
                setBackgroundImage(discover); // Set the original background image
            }
    
            lastScrollY = currentScrollY; // Update the last scroll position
        };
    
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
    
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener
        };
    }, [backgroundImage]);
    
    const pageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
    };
    

    return (
        <div style={pageStyle}>
            
        </div>
    );
};

export default DiscoverPage;
