import React from 'react';
import styles from './QuantitySelector.module.css';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      if (value < min) {
        onQuantityChange(min);
      } else if (value > max) {
        onQuantityChange(max);
      } else {
        onQuantityChange(value);
      }
    } else if (e.target.value === '') {
      // Allow empty input (will be corrected on blur)
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      onQuantityChange(min);
    }
  };

  return (
    <div className={styles.quantitySelector}>
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={styles.quantityButton}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={styles.quantityInput}
        aria-label="Quantity"
      />
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={styles.quantityButton}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;