'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductCarousel.module.css';
import { Product } from '@/types/product.type';

type ProductCarouselProps = {
  products: Product[];
  title?: string;
  options?: EmblaOptionsType;
};

const ProductCarousel: React.FC<ProductCarouselProps> = (props) => {
  const { products, title, options } = props;

  const defaultOptions: EmblaOptionsType = {
    align: 'start',
    slidesToScroll: 1,
    loop: false,
    skipSnaps: false,
    inViewThreshold: 0.7,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...defaultOptions,
    ...options
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = 
    usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      {title && <h2 className={styles.embla__title}>{title}</h2>}

      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {products.map((product) => (
            <div className={styles.embla__slide} key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton 
            onClick={onPrevButtonClick} 
            disabled={prevBtnDisabled} 
            className={styles.embla__button}
          />
          <NextButton 
            onClick={onNextButtonClick} 
            disabled={nextBtnDisabled} 
            className={styles.embla__button}
          />
        </div>

        {products.length > 1 && (
          <div className={styles.embla__dots}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${styles.embla__dot} ${
                  index === selectedIndex ? styles['embla__dot--selected'] : ''
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCarousel;