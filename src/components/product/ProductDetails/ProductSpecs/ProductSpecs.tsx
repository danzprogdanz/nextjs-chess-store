// src/components/product/ProductDetails/ProductSpecs/ProductSpecs.tsx
import { Product } from '@/mocks/productMock';
import styles from './ProductSpecs.module.css';

interface ProductSpecsProps {
  technicalInfo: Product['technicalInfo'];
}

export default function ProductSpecs({ technicalInfo }: ProductSpecsProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product Specifications</h2>
      
      {technicalInfo.specifications.map((spec, index) => (
        <div key={index} className={styles.specSection}>
          <h3 className={styles.specCategory}>{spec.category}</h3>
          <ul className={styles.specList}>
            {spec.properties.map((prop, propIndex) => (
              <li key={propIndex} className={styles.specItem}>
                <span className={styles.specName}>{prop.name}:</span>
                <span className={styles.specValue}>
                  {prop.value} {prop.unit && prop.unit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      {technicalInfo.features.length > 0 && (
        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Key Features</h3>
          <ul className={styles.featuresList}>
            {technicalInfo.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <div className={styles.featureIcon}>•</div>
                <div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}