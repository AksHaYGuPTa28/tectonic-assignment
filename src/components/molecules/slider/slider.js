import React, { useState, useEffect, useRef } from 'react';
import './slider.css'; // Import the CSS file for styling

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let timer;
    if (slides[currentIndex].type === 'image') {
      const duration = 5000; // 5 seconds
      const updateInterval = 100; // milliseconds
      const progressUpdate = 100 / (duration / updateInterval); 

      timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + progressUpdate;
          if (next >= 100) {
            clearInterval(timer);
            handleNext();
            return 0;
          }
          return next;
        });
      }, updateInterval);
    }
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleNext);
      return () => {
        videoElement.removeEventListener('ended', handleNext);
      };
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  return (
    <div className="slider">
      <button className="slider-btn prev" onClick={handlePrev}>❮</button>
      <div className="slide">
        {slides[currentIndex].type === 'image' ? (
          <>
            <img src={slides[currentIndex].src} alt="slide" />
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </>
        ) : (
          <>
            <video
              src={slides[currentIndex].src}
              ref={videoRef}
              muted={isMuted}
              autoPlay
              controls
            />
          </>
        )}
      </div>
      <button className="slider-btn next" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Slider;
