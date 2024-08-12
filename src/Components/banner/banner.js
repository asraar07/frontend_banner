// src/components/Banner.js
import React, { useEffect, useState } from 'react';
import { getBanner } from '../../api/bannerservice';
import './banner.css';

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const data = await getBanner();
        setBannerData(data);
        if (data.visible) {
          setIsVisible(true);
          setTimeRemaining(data.timer);
        }
      } catch (error) {
        console.error('Failed to fetch banner data:', error);
      }
    };

    fetchBannerData();
  }, []);

  useEffect(() => {
    let timer;
    if (isVisible && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsVisible(false); // Hide the banner when the timer reaches 0
    }

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [isVisible, timeRemaining]);

  if (!bannerData) {
    return <div>Loading banner...</div>;
  }

  return (
    <div className="banner" style={{ display: isVisible ? 'block' : 'none' }}>
      <h3>{bannerData.description}</h3>
      <p>Link: <a href={bannerData.link}>{bannerData.link}</a></p>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Banner;
