import React from 'react';
import styles from './CartItem.module.css';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import Button from '@/components/ui/atoms/Button/Button';

interface CartItemProps {
  productId: string;
  sku?: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  price,
  quantity,
  imageUrl,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={title}
          width={120}
          height={120}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.price}>R$ {price.toFixed(2)}</div>
        <div className={styles.actions}>
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={onQuantityChange}
            min={1}
            max={99}
          />
          <Button 
            onClick={onRemove}
            className={styles.removeButton}
            variant='critical'
            size='small'
          >
            Remover
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;