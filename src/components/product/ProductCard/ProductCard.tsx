"use client";

import Link from "next/link";
import styles from "./ProductCard.module.css";
import AddToCartButton from "@/components/cart/AddToCartButton/AddToCartButton";
import { AddToWishlistButton } from "@/components/wishlist/AddToWishlistButton/AddToWishlistButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Changed import
import { Product } from "@/types/product.type";

interface ProductCardProps {
  product: Product;
}

function ProductTitle({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter(); // Now using App Router's useRouter

  return (
    <div className={styles.titleContainer}>
      <h3 className={`${styles.title} ${expanded ? styles.expanded : ""}`}>
        <Link
          href={`/products/${product.slug}`}
          prefetch={false}
          onMouseEnter={() => router.prefetch(`/products/${product.slug}`)}
        >
          {product.title}
        </Link>
      </h3>
      {product.title.length > 50 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className={styles.toggleButton}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.images[0].url}
          alt={product.images[0].altText}
          className={styles.image}
        />
        {product.price.discountPercentage && (
          <span className={styles.discountBadge}>
            -{product.price.discountPercentage}%
          </span>
        )}
      </div>

      <div className={styles.content}>
        <ProductTitle product={product} />
        <div className={styles.priceContainer}>
          {product.price.originalAmount && (
            <span className={styles.originalPrice}>
              {product.price.currency}
              {product.price.originalAmount.toFixed(2)}
            </span>
          )}
          <span className={styles.currentPrice}>{product.price.formatted}</span>
        </div>

        <div className={styles.ratingContainer}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`${styles.star} ${
                  i < Math.floor(product.ratings?.statistics.average || 0)
                    ? styles.filled
                    : ""
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className={styles.ratingCount}>
            ({product.ratings?.statistics.total || 0})
          </span>
        </div>
        <div className={styles.buttonsWrapper}>
          <AddToCartButton product={product} />
          <AddToWishlistButton product={product} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
