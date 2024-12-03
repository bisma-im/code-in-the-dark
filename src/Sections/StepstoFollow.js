import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import CardSlider from '../Components/CardSlider';


const TypingEffectHeading = () => {
  const typedRef = useRef(null);  // Ref for the DOM element
  const typedInstanceRef = useRef(null);  // Ref for the Typed instance

  useEffect(() => {
    // Initialize Typed.js
    typedInstanceRef.current = new Typed(typedRef.current, {
      strings: ['To Follow'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Cleanup Typed.js instance on component unmount
    return () => {
      typedInstanceRef.current.destroy();
    };
  }, []);

  return (
    <div className="text-center py-10">
      <h1 className="text-white text-4xl border-b-4 border-purple-500 inline-block pb-2">
        Steps <span className="typed-text" ref={typedRef}></span>
      </h1>
      <CardSlider/>
    </div>
  );
};

export default TypingEffectHeading;
