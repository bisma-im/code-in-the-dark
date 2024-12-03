import React from 'react'
import { Image, Row } from 'react-bootstrap'
import Marquee from "react-marquee-slider";

function Section2() {
    const partners = [
        { id: 1, logo: '/assets/img/ourpartners/image1.png' },
        { id: 1, logo: '/assets/img/ourpartners/image2.svg' },
        { id: 2, logo: '/assets/img/ourpartners/image5.png' },
        { id: 3, logo: '/assets/img/ourpartners/image6.png' },
        { id: 4, logo: '/assets/img/ourpartners/image7.png' },
        { id: 4, logo: '/assets/img/ourpartners/image8.png' },
        { id: 4, logo: '/assets/img/ourpartners/image9.png' },
        // Add more logos as needed
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
export default Section2