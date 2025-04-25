
import { getProductBySlug } from '@/mocks/productMock';
import { notFound } from 'next/navigation';
import styles from './productPage.module.css';
import pageLayoutStyles from '../../../components/ui/layout/PageLayout.module.css';
import ProductDetails from '@/components/product/ProductDetails/ProductDetails';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const { data: product, relatedProducts } = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className={pageLayoutStyles.pageLayout}>
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </div>
  );
}