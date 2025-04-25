// src/app/products/page.tsx
import { getAllProducts } from '@/mocks/productMock';
import styles from './productsPage.module.css';
import pageLayoutStyles from '../../components/ui/layout/PageLayout.module.css';
import ProductFilters from '@/components/product/ProductFilters/ProductFilters';
import ProductGrid from '@/components/product/ProductGrid/ProductGrid';

export default async function ProductsPage() {
  const { data: products } = await getAllProducts();

  return (
    <div className={pageLayoutStyles.pageLayout}>
      <div className={styles.productPageContainer}>
        <div className={styles.filters}>
          <ProductFilters />
        </div>
        <div className={styles.products}>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}