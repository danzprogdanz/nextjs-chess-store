// src/components/product/MobileFilter.tsx
'use client';

import { useState } from 'react';

import styles from './MobileFilter.module.css';
import Button from '@/components/ui/atoms/Button/Button';
import Overlay from '@/components/ui/atoms/Overlay/Overlay';

export default function MobileFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={styles.filterButton}
      >
        Filters
      </Button>

      {isOpen && (
        <>
          <Overlay isVisible={true} />
          <div className={styles.filterDrawer}>
            <div className={styles.filterHeader}>
              <h2 className={styles.filterTitle}>Filters</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
              >
                ✕
              </button>
            </div>
            {/* <ProductFilters /> */}
            <Button 
              onClick={() => setIsOpen(false)}
              className={styles.applyButton}
            >
              Apply Filters
            </Button>
          </div>
        </>
      )}
    </>
  );
}