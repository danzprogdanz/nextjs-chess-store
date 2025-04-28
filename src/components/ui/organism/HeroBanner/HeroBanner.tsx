'use client';
import styles from './HeroBanner.module.css';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function HeroBanner() {
  const router = useRouter();
  useEffect(() => {
    // Add transparent class to navbar on mount
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.add(styles.transparentNav);

    return () => {
      // Remove transparent class on unmount
      if (navbar) navbar.classList.remove(styles.transparentNav);
    };
  }, []);

  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Discover Our Collection</h1>
        <p className={styles.subtitle}>
          Premium quality for everyday essentials
        </p>
        <button className={styles.ctaButton} onClick={() =>  router.push("/products")}>Shop Now</button>
      </div>
    </section>
  );
}