import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import secondBgImage from "../assets/img/bg & color palette/secondBgImage.png";
import { Carousel, Col, Row } from "react-bootstrap";
import Sec4Cards from "../Components/Sec4Cards";
// Import the images you want to use as icons
import coneIcon from '../assets/img/Competitions/cone.png.svg';
import cubeIcon from '../assets/img/Competitions/cube.png.svg';
import cylinderIcon from '../assets/img/Competitions/cylinder.png.svg';
import hemisphere from '../assets/img/Competitions/hemisphere.png.svg';
import pill from '../assets/img/Competitions/pill.png.svg';
import torusknot from '../assets/img/Competitions/torus-knot.png.svg';
import torus from '../assets/img/Competitions/torus.png.svg';
import cone from '../assets/img/Competitions/cone.png.svg';

function Section4() {
    const [ref, inView] = useInView({
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const cardDatas = [
        { title: "Speed Programming", image: coneIcon },
        { title: "Web Development", image: cubeIcon },
        { title: "Code in the Dark", image: cylinderIcon },
        { title: "Machine Learning", image: hemisphere },
        { title: "Query Quest", image: pill },
        { title: "Pseudowar", image: torusknot },
        { title: "UI-UX", image: torus },
        { title: "Speed Debugging", image: cone },
    ];

    // Generate cards dynamically using map
    const cardItems = cardDatas.map((cardData, index) => (
        <Col key={index} lg={4}>
            <Sec4Cards cardData={cardData} />
        </Col>
    ));

    // Group cards into sets of 3
    const groupedCards = [];
    for (let i = 0; i < cardItems.length; i += 3) {
        groupedCards.push(cardItems.slice(i, i + 3));
    }

    return (
        <>
            <div
                ref={ref}
                className={`sliding-section ${inView ? "animate-bg" : ""}`}
                style={{
                    backgroundImage: `url(${secondBgImage})`, // Dynamically set background image
                }}
            >
                <div className="content">
                    <h1>Welcome to the Sliding Background Section</h1>
                    <p>Scroll down to see the background slide up as this section comes into view.</p>
                </div>
            </div>
            {/* Carousel */}
            <Carousel>
                {groupedCards.map((group, index) => (
                    <Carousel.Item key={index}>
                        <Col className="d-flex justify-content-center">
                            {group}
                        </Col>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Section4;
