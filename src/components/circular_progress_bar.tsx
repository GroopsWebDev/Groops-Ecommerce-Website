import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const trailGradient = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";


  const trailStyles = buildStyles({
    pathColor: "#E5E7EB",
    trailColor: "transparent",
  });


  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: trailGradient,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="absolute inset-0">
          <CircularProgressbar
            value={percentage}
            text={''}
            styles={trailStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
