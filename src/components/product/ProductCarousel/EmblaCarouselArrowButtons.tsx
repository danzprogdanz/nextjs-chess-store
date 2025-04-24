"use client"
import React from 'react';
import styles from './CarouselButtons.module.css';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: any
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = {
  onClick: () => void;
  disabled: boolean;
  className?: string;
};

export const PrevButton: React.FC<PropType> = (props) => {
  const { onClick, disabled, className } = props;

  return (
    <button
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous products"
    >
      <span>&#8249;</span>
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { onClick, disabled, className } = props;

  return (
    <button
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next products"
    >
      <span>&#8250;</span>
    </button>
  );
};