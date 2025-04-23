// WishlistItem.tsx
import React from 'react';
import styles from './WishlistItem.module.css';
import Button from '@/components/ui/atoms/Button/Button';
import AddToCartButton from '@/components/cart/AddToCartButton/AddToCartButton';
import { WishlistItem as WishlistItemType } from '@/store/slices/wishlistSlice';
import Image from 'next/image';

interface WishlistItemProps {
  item: WishlistItemType;
  onRemove: (productId: string) => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ item, onRemove }) => {
  return (
    <div className={styles.wishlistItem}>
      <div className={styles.imageContainer}>
        <img
          src={item.mainImage}
          alt={item.title}
          width={120}
          height={120}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <h4 className={styles.title}>{item.title}</h4>
        <div className={styles.price}>R$ {item.price}</div>
        <div className={styles.actions}>
          <Button 
            onClick={() => onRemove(item.productId)}
            className={styles.removeButton}
            variant='critical'
            size='small'
          >
            Remover
          </Button>
          <AddToCartButton productId={item.productId} size='small'/>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;