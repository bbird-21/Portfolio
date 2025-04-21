import React from 'react';
import './Preloader.css';
import logo from "../logo.svg";

const Preloader = ({ progress }) => {
  return (
    <div className="preloader">
      <div className="preloader-container">
        {/* Optional: Add your logo or a loading icon here */}
        <img src={logo} alt="Loading Logo" className="App-logo" />
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }} // Dynamic width based on progress
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="loading-text">Loading... {progress}%</p>
      </div>
    </div>
  );
};

export default Preloader;
