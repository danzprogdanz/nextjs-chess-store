"use client";

import React, { useEffect, useState } from "react";
import styles from "./Overlay.module.css";
import CloseIcon from "../Icon/CloseIcon";

export interface OverlayProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  headerComponent?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ 
  isVisible, 
  children, 
  onClose, 
  headerComponent 
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }
  }, [isVisible]);

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <>
      {/* Background overlay */}
      <div 
        className={`${styles.background} ${isVisible ? styles.visible : ""}`}
        onClick={onClose}
      />
      
      {/* Card overlay */}
      <div 
        className={`${styles.overlay} ${isVisible ? styles.visible : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            {headerComponent}
            {onClose && (
              <button 
                className={styles.closeButton} 
                onClick={onClose}
                aria-label="Close overlay"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Overlay;