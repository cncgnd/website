import { useEffect, useRef, useState } from 'react';
import './Card.css'; 
import devtron from '../images/devtron.png';
import microsoft from '../images/microsoft.png';
import tata from'../images/tata 1 mg.png';
import epam from '../images/epam.png';

export const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sponsorRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    if (sponsorRef.current) {
      observer.observe(sponsorRef.current);
    }

    return () => {
      if (sponsorRef.current) {
        observer.unobserve(sponsorRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black w-screen h-full">
      <div className="">
        <h2 className="text-white text-3xl font-bold mb-20 text-center mt-20" id="sponsors">Our Sponsors</h2>
        <div className="p-4 rounded-lg shadow-lg grid sm:grid-cols-1 md:grid-cols-4 gap-20" ref={sponsorRef}>
          <div className={`card ease-in-out ${isVisible ? 'appear' : ''}`}><img src={devtron} className='img pt-12'></img></div>
          <div className={`card ease-in-out ${isVisible ? 'appear' : ''}`}><img src={microsoft} className='img pt-12'></img></div>
          <div className={`card ease-in-out ${isVisible ? 'appear' : ''}`}><img src={tata} className='img h-36'></img></div>
          <div className={`card ease-in-out ${isVisible ? 'appear' : ''}`}><img src={epam}  className='img h-36'></img></div>
        </div>
      </div>
    </div>
  );
};
