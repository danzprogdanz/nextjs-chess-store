import ProductCard from '@/components/product/ProductCard/ProductCard';
import styles from './ProductGrid.module.css';
import { Product } from '@/types/product.type';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}