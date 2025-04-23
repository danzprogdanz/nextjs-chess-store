'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './ProductCarousel.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/mocks/productMock';

interface ProductCarouselProps {
  products: Product[];
  title?: string;
}

const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Touch and mouse event handlers for dragging
  const handleTouchStart = (e: React.TouchEvent) => {
    setTransitionEnabled(false);
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTransitionEnabled(false);
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault(); // Prevent text selection while dragging
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const diff = x - startX;
    setTranslateX(diff);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const diff = x - startX;
    setTranslateX(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setTransitionEnabled(true);
    
    // Determine if we should change slide based on drag distance
    const threshold = carouselRef.current?.clientWidth ? carouselRef.current.clientWidth / 4 : 100;
    
    if (translateX > threshold) {
      // Swiped right - go previous
      handlePrevious();
    } else if (translateX < -threshold) {
      // Swiped left - go next
      handleNext();
    }
    
    setTranslateX(0);
  };

  // Add mouse move and up listeners when dragging starts
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleEnd);
      };
    }
  }, [isDragging, translateX]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToIndex = (index: number) => {
    setTransitionEnabled(true);
    setCurrentIndex(index);
  };

  // Auto-reset transition after animation completes
  useEffect(() => {
    if (!transitionEnabled) return;
    
    const timer = setTimeout(() => {
      setTransitionEnabled(false);
    }, 300); // Match this with your CSS transition duration
    
    return () => clearTimeout(timer);
  }, [currentIndex, transitionEnabled]);

  return (
    <section className={styles.carouselWrapper}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}

      <div className={styles.carouselContainer}>
        <button
          className={styles.navigationButton}
          onClick={handlePrevious}
          aria-label="Previous products"
          disabled={products.length <= 1}
        >
          <span className={styles.arrowLeft}>&#8249;</span>
        </button>

        <div
          ref={carouselRef}
          className={styles.cardsContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          onMouseDown={handleMouseDown}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={styles.cardWrapper}
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                transition: transitionEnabled && !isDragging ? 'transform 0.3s ease' : 'none',
              }}
              aria-hidden={index !== currentIndex}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          className={styles.navigationButton}
          onClick={handleNext}
          aria-label="Next products"
          disabled={products.length <= 1}
        >
          <span className={styles.arrowRight}>&#8250;</span>
        </button>
      </div>

      {products.length > 1 && (
        <div className={styles.paginationDots}>
          {products.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ''
              }`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to product ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCarousel;