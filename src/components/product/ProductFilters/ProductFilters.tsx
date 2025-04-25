import styles from './ProductFilters.module.css';
import Button from '@/components/ui/atoms/Button/Button';

interface ProductFiltersProps {
 
}

export default function ProductFilters({}: ProductFiltersProps) {
  const categories = [
    { id: 'classic', name: 'Classic Chess Sets' },
    { id: 'historical', name: 'Historical Chess Sets' },
    { id: 'modern', name: 'Modern Chess Sets' },
    { id: 'luxury', name: 'Luxury Chess Sets' },
    { id: 'themed', name: 'Themed Chess Sets' },
  ];

  const priceRanges = [
    { id: '0-50', name: 'Under $50' },
    { id: '50-100', name: '$50 - $100' },
    { id: '100-200', name: '$100 - $200' },
    { id: '200-500', name: '$200 - $500' },
    { id: '500+', name: 'Over $500' },
  ];

  const materials = [
    { id: 'wood', name: 'Wood' },
    { id: 'stone', name: 'Stone' },
    { id: 'metal', name: 'Metal' },
    { id: 'plastic', name: 'Plastic' },
    { id: 'resin', name: 'Resin' },
  ];

  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.filtersTitle}>Filters</h3>
      
      <div className={styles.filterSection}>
        <h4 className={styles.filterHeading}>Categories</h4>
        <ul className={styles.filterList}>
          {categories.map((category) => (
            <li key={category.id} className={styles.filterItem}>
              <label className={styles.filterLabel}>
                <input
                  type="checkbox"
                  className={styles.filterCheckbox}
                  // Add onChange handler here
                />
                <span className={styles.filterName}>{category.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.filterSection}>
        <h4 className={styles.filterHeading}>Price Range</h4>
        <ul className={styles.filterList}>
          {priceRanges.map((range) => (
            <li key={range.id} className={styles.filterItem}>
              <label className={styles.filterLabel}>
                <input
                  type="radio"
                  name="price-range"
                  className={styles.filterRadio}
                  // Add onChange handler here
                />
                <span className={styles.filterName}>{range.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.filterSection}>
        <h4 className={styles.filterHeading}>Materials</h4>
        <ul className={styles.filterList}>
          {materials.map((material) => (
            <li key={material.id} className={styles.filterItem}>
              <label className={styles.filterLabel}>
                <input
                  type="checkbox"
                  className={styles.filterCheckbox}
                  // Add onChange handler here
                />
                <span className={styles.filterName}>{material.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <Button variant='critical'>Clear all filters</Button>
    </div>
  );
}