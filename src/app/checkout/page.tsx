'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import pageLayoutStyles from '../../components/ui/layout/PageLayout.module.css';
import styles from './checkout.module.css';
import CheckoutContainer from '@/components/checkout/CheckoutContainer/CheckoutContainer';
import Head from 'next/head';
import { useAppSelector } from "@/store/store";

export default function CheckoutPage() {
  const { items } = useAppSelector((state) => state.cart);
  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.push("/"); 
    }
  }, [items])

  return (
    <>
      <Head>
        <title>Checkout | Your Store Name</title>
        <meta name="description" content="Complete your purchase securely" />
      </Head>
      
      <div className={pageLayoutStyles.pageLayout}>
        <main className={styles.checkoutPageContainer}>
          <header className={styles.checkoutHeader}>
            <h1 className={styles.checkoutTitle}>Checkout</h1>
          </header>
          <CheckoutContainer />
        </main>
      </div>
    </>
  );
}