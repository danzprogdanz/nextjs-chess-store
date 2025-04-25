import { getProductBySlug } from '@/mocks/productMock';
import { notFound } from 'next/navigation';
import pageLayoutStyles from '../../../components/ui/layout/PageLayout.module.css';
import ProductDetails from '@/components/product/ProductDetails/ProductDetails';

export default async function ProductPage({ params }: any) {
  const { slug } = params;
  const { data: product, relatedProducts } = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className={pageLayoutStyles.pageLayout}>
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </div>
  );
}
