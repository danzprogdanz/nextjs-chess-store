"use client"
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store/store';
import styles from './PaymentStep.module.css';
import { useCheckout } from '@/hooks/useCheckout';
import Button from '@/components/ui/atoms/Button/Button';

const PaymentStep = () => {
  const { 
    availablePaymentMethods, 
    selectedPaymentMethod, 
    loading 
  } = useAppSelector((state) => state.checkout);
  const { items } = useAppSelector((state) => state.cart);
  const { placeOrder, selectPayment } = useCheckout();

  const subtotal = items.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );

  return (
    <div className={styles.paymentStep}>
      <h2 className={styles.stepTitle}>Payment Method</h2>
      
      <div className={styles.paymentContent}>
        <div className={styles.paymentMethods}>
          {availablePaymentMethods.map((method) => (
            <div
              key={method.id}
              className={`${styles.paymentMethod} ${
                selectedPaymentMethod?.id === method.id ? styles.selected : ''
              }`}
              onClick={() => selectPayment(method.id)}
            >
              <input
                type="radio"
                name="paymentMethod"
                checked={selectedPaymentMethod?.id === method.id}
                readOnly
              />
              {method.icon && (
                <img src={method.icon} alt={method.name} className={styles.methodIcon} />
              )}
              <span className={styles.methodName}>{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Button 
          onClick={placeOrder}
          disabled={!selectedPaymentMethod || loading}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default PaymentStep;