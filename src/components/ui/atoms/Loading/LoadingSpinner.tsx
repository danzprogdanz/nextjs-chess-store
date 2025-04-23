"use client"
import React, { useEffect, useState } from 'react';
import styles from './LoadingSpinner.module.css';

interface IProps {
  children?: React.ReactNode;
  isBackgroundVisible?: boolean;
}

const LoadingSpinner: React.FC<IProps> = ({ children, isBackgroundVisible = false }) => {
  const [rectangles, setRectangles] = useState([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRectangles(prevRectangles => {
        const index = prevRectangles.findIndex((isVisible) => !isVisible);
        
        if (index !== -1) {
          const newRectangles = [...prevRectangles];
          newRectangles[index] = true;
          return newRectangles;
        } else {
          return [false, false, false];
        }
      });
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, []); // Removed rectangles from dependencies
  
  return (
    <div className={isBackgroundVisible ? styles.background : styles.backgroundTransparent}>
      <div className={styles.loadingContainer}>
        <svg width="80" height="70">
          {rectangles.map((isVisible, index) => (
            <rect
              key={index}
              className={styles.rect}
              x={index * 30}
              y={50 - index * 20}
              width="12"
              height={20 * (index + 2)}
              style={{
                visibility: isVisible ? 'visible' : 'hidden',
              }}
            />
          ))}
        </svg>
        {children}
      </div>
    </div>
  );
};

export default LoadingSpinner;