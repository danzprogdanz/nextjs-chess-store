// src/components/product/ProductDetails/ProductDetails.tsx
'use client';

import ProductGallery from './ProductGallery';

import styles from './ProductDetails.module.css';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductSpecs from './ProductSpecs/ProductSpecs';
import { Product } from '@/types/product.type';

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      
      <ProductSpecs technicalInfo={product.technicalInfo} />
    </div>
  );
}