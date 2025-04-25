"use client"
import AddToCartButton from '@/components/cart/AddToCartButton/AddToCartButton';
import { AddToWishlistButton } from '@/components/wishlist/AddToWishlistButton/AddToWishlistButton';
import styles from './ProductInfo.module.css';
import { Product } from '@/types/product.type';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      
      <div className={styles.priceContainer}>
        {product.price.originalAmount && (
          <span className={styles.originalPrice}>
            {product.price.currency}
            {product.price.originalAmount.toFixed(2)}
          </span>
        )}
        <span className={styles.currentPrice}>{product.price.formatted}</span>
        {product.price.discountPercentage && (
          <span className={styles.discountBadge}>
            Save {product.price.discountPercentage}%
          </span>
        )}
      </div>

      <div className={styles.ratingContainer}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${styles.star} ${
                i < Math.floor(product.ratings?.statistics.average || 0)
                  ? styles.filled
                  : ''
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <span className={styles.ratingCount}>
          ({product.ratings?.statistics.total || 0} reviews)
        </span>
      </div>

      <p className={styles.description}>{product.description}</p>

      {product.inventory.skus && (
        <div className={styles.variants}>
          <h3 className={styles.variantsTitle}>Available Variants</h3>
          <div className={styles.variantOptions}>
            {product.inventory.skus.map((sku) => (
              <button key={sku.code} className={styles.variantButton}>
                {sku.size || sku.color}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.actions}>
        <AddToCartButton product={product} />
        <AddToWishlistButton product={product} />
      </div>

      <div className={styles.shippingInfo}>
        <div className={styles.shippingItem}>
          <span className={styles.shippingIcon}>🚚</span>
          <span>
            {product.shipping.freeShipping ? 'Free' : 'Standard'} shipping
          </span>
        </div>
        <div className={styles.shippingItem}>
          <span className={styles.shippingIcon}>🔄</span>
          <span>
            {product.shipping.returnPolicy.days}-day returns
          </span>
        </div>
      </div>
    </div>
  );
}