"use client"
import React from 'react';
import { useAppSelector } from '@/store/store';
import CartStep from '../Steps/CartStep/CartStep';
import ShippingStep from '../Steps/ShippingStep/ShippingStep';
import PaymentStep from '../Steps/PaymentStep/PaymentStep';
import ConfirmationStep from '../Steps/ConfirmationStep/ConfirmationStep';
//import CheckoutProgress from '../CheckoutProgress/CheckoutProgress';
//import OrderSummary from '../OrderSummary/OrderSummary';
import styles from './CheckoutContainer.module.css';
import OrderSummary from '../OrderSummary/OrderSummary';
import CheckoutProgress from '../CheckoutProgress/CheckoutProgress';

const CheckoutContainer: React.FC = () => {
  const { step } = useAppSelector((state) => state.checkout);

  const renderStep = () => {
    switch (step) {
      case 'shipping':
        return <ShippingStep />;
      case 'payment':
        return <PaymentStep />;
      case 'confirmation':
        return <ConfirmationStep />;
      default:
        return <ShippingStep />;
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.stepsContainer}>
        <CheckoutProgress currentStep={step} />
        <div className={styles.stepContent}>
          {renderStep()}
        </div>
      </div>
      
      {step !== 'confirmation' && <aside className={styles.orderSummaryContainer}>
        <OrderSummary />
      </aside>}
    </div>
  );
};

export default CheckoutContainer;