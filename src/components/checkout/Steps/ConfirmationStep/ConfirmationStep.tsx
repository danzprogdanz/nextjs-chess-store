"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./ConfirmationStep.module.css";
import Button from "@/components/ui/atoms/Button/Button";

const ConfirmationStep = () => {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push("/checkout");
  };

  return (
    <div className={styles.confirmationStep}>
      <div className={styles.confirmationContent}>
        <div className={styles.successIcon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
              fill="var(--success-color)"
            />
          </svg>
        </div>
        <h2 className={styles.confirmationTitle}>Order Confirmed!</h2>
        <p className={styles.confirmationMessage}>
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>
        <p className={styles.confirmationDetails}>
          We've sent a confirmation email with your order details.
        </p>

        <div className={styles.actions}>
          <Button variant="secondary" onClick={handleContinueShopping}>
            Continue Shopping
          </Button>
          <Button>View Order Details</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
