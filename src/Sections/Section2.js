import React from 'react'
import { Image, Row } from 'react-bootstrap'
import Marquee from "react-marquee-slider";
import image1 from '../assets/img/ourpartners/image1.png';
import image2 from '../assets/img/ourpartners/image2.svg';
import image5 from '../assets/img/ourpartners/image5.png';
import image6 from '../assets/img/ourpartners/image6.png';
import image7 from '../assets/img/ourpartners/image7.png';
import image8 from '../assets/img/ourpartners/image8.png';
import image9 from '../assets/img/ourpartners/image9.png';

function Section2() {
    const partners = [
        { id: 1, logo: image1 },
        { id: 2, logo: image2 },
        { id: 3, logo: image5 },
        { id: 4, logo: image6 },
        { id: 5, logo: image7 },
        { id: 6, logo: image8 },
        { id: 7, logo: image9 },
    ];

    const settings = {
        dots: false,          // Set true if you want navigation dots
        infinite: true,       // Infinite looping
        speed: 3000,           // Transition speed
        slidesToShow: 4,      // Number of logos to show at once
        slidesToScroll: 1,    // Number of logos to scroll at once
        autoplay: true,       // Auto-slide
        autoplaySpeed: 3000,  // Time between auto-slides
        responsive: [
            {
                breakpoint: 768, // Settings for smaller devices
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="marquee-container">
            <h2 style={{ color: '#7038FA' }}><span style={{ color: 'white' }}>Our</span> Partners</h2>
            <div className="marquee-wrapper">
            <Marquee velocity={120} minScale={0.7} resetAfterTries={200} scatterRandomly={false}>
          {partners.map((partner) => (
            <div key={partner.id} className="marquee-item">
              <img src={partner.logo} alt={`Partner ${partner.id}`} />
            </div>
          ))}
        </Marquee>
            </div>
        </div>
    );
};
export default Section2;