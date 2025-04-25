import HeroBanner from "@/components/ui/organism/HeroBanner/HeroBanner";
import ProductCarousel from "@/components/product/ProductCarousel/ProductCarousel";
import { mockProducts } from "@/mocks/productMock";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/atoms/Loading/LoadingSpinner";

export default async function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Suspense fallback={<LoadingSpinner />}>
        <ProductCarousel
          products={mockProducts}
          title="Best Sellers"
          options={{
            align: "start",
            containScroll: "trimSnaps",
            breakpoints: {
              "(min-width: 768px)": { slidesToScroll: 2 },
              "(min-width: 992px)": { slidesToScroll: 3 },
            },
          }}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductCarousel
          products={mockProducts}
          title="Discount"
          options={{
            align: "start",
            containScroll: "trimSnaps",
            breakpoints: {
              "(min-width: 768px)": { slidesToScroll: 2 },
              "(min-width: 992px)": { slidesToScroll: 3 },
            },
          }}
        />
      </Suspense>
    </div>
  );
}
