// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { getBanner, updateBanner } from '../../api/bannerservice';
import { Link } from 'react-router-dom';
import './dashboard.css';
const Dashboard = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 0,
    link: '',
    visible: false,
  });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const data = await getBanner();
        setBannerData(data);
      } catch (error) {
        console.error('Failed to fetch banner data:', error);
      }
    };

    fetchBannerData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData({
      ...bannerData,
      [name]: value,
    });
  };

  const handleToggleVisibility = () => {
    setBannerData({
      ...bannerData,
      visible: !bannerData.visible,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBanner({
        description: bannerData.description,
        timer: bannerData.timer,
        link: bannerData.link,
        visible: bannerData.visible,
      });
      alert('Banner updated successfully!');
    } catch (error) {
      console.error('Failed to update banner:', error);
    }
  };
  

  return (
    <div className="dashboard">
      <h2>Banner Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={bannerData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Timer (seconds):
          <input
            type="number"
            name="timer"
            value={bannerData.timer}
            onChange={handleChange}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            name="link"
            value={bannerData.link}
            onChange={handleChange}
          />
        </label>
        <label>
          Visible:
          <input
            type="checkbox"
            checked={bannerData.visible}
            onChange={handleToggleVisibility}
          />
        </label>
        <button type="submit">Update Banner</button>
      </form>
      <Link to="/banner">View Banner</Link>
    </div>
  );
};

export default Dashboard;
