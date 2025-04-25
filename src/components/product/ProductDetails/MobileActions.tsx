"use client"
import AddToCartButton from '@/components/cart/AddToCartButton/AddToCartButton';
import { AddToWishlistButton } from '@/components/wishlist/AddToWishlistButton/AddToWishlistButton';
import { Product } from '@/mocks/productMock';
import styles from './MobileActions.module.css';

interface MobileActionsProps {
  product: Product;
}

export default function MobileActions({ product }: MobileActionsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div className={styles.cartButton}>
          <AddToCartButton product={product} />
        </div>
        <AddToWishlistButton product={product} />
      </div>
    </div>
  );
}