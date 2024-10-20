import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import landing from '../assests/landing.png';
import pc from '../assests/pc.png';
import t1 from'../assests/t1.png';
import t2 from '../assests/t2.png';
import t3 from '../assests/t3.png';

const LandingPage = () => {
    const [showBox, setShowBox] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image
    const navigate = useNavigate();

    // Array of images to display in scrollable box
    const images = [pc, t1, t2, t3]; 

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowBox(true);
        } else if (currentScrollY < lastScrollY) {
            setShowBox(false);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Navigate to next image
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Navigate to previous image
    };

    const landingPageStyle = {
        backgroundImage: `url(${landing})`,
      

        height: '130vh'
       
    };

    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        border: 'none',
        color: 'black',
        padding: '20px',
        cursor: 'pointer',
        zIndex: 10,
        borderRadius:'50%'
    };

    const leftArrowStyle = {
        ...arrowStyle,
        left: '78px',
    };

    const rightArrowStyle = {
        ...arrowStyle,
        right: '78px',
    };

    const scrollableBoxStyle = {
        width: '80%',
        maxHeight: '600px',
        overflowY: 'scroll',
        border: '1px solid white',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        marginTop: '20px',
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        display: showBox ? 'block' : 'none',
        scrollbarWidth: 'thin',
    };

    const buttonStyle = {
        position: 'absolute',
        top: '6310px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '25px 100px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 2,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: 'purple',
        letterSpacing: '2px',
        lineHeight: '1.5',
    };

    const handleDiscoverClick = () => {
        navigate('/discover');
    };

    return (
        <div className="landing-page" style={landingPageStyle}>
            {/* Content Area */}
            <div style={{ height: '150vh' }}>
                {/* Add content here */}
            </div>
            <div style={scrollableBoxStyle}>
                {/* Left Arrow */}
                <button style={leftArrowStyle} onClick={handlePrevImage}>
                    &#9664; {/* Left arrow character */}
                </button>

                {/* Right Arrow */}
                <button style={rightArrowStyle} onClick={handleNextImage}>
                    &#9654; {/* Right arrow character */}
                </button>

                <div style={{ position: 'relative' }}>
                    <img src={images[currentImageIndex]} alt="Scrollable Content" style={{ width: '100%', height: 'auto' }} />
                    {/* Button placed over the image */}
                    <button style={buttonStyle} onClick={handleDiscoverClick}>
                        Discover
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
