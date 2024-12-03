import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./SlidingBackgroundSection.css";

function Section4() {
    const [ref, inView] = useInView({
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    return (
        <div
            ref={ref}
            className={`sliding-section ${inView ? "animate-bg" : ""}`}
        >
            <div className="content">
                <h1>Welcome to the Sliding Background Section</h1>
                <p>
                    Scroll down to see the background slide up as this section comes into view.
                </p>
            </div>
        </div>
    );
}

export default Section4