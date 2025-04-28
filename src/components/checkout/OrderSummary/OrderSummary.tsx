import React from 'react';
import { useAppSelector } from '@/store/store';
import styles from './OrderSummary.module.css';

const OrderSummary: React.FC = () => {
    const { items } = useAppSelector((state) => state.cart);
    
    const subtotal = items.reduce(
        (sum, item) => sum + (item.price * item.quantity), 
        0
    );
    const shipping = 0; // Would come from shipping method
    const tax = subtotal * 0.1; // Example tax calculation
    const total = subtotal + shipping + tax;

    return (
        <div className={styles.orderSummary}>
            <h3 className={styles.summaryTitle}>Order Summary</h3>
            
            <div className={styles.summaryItems}>
                {items.map(item => (
                    <div key={item.productId} className={styles.summaryItem}>
                        <div className={styles.itemImageWrapper}>
                            {/* Image would go here */}
                            <img src={item.mainImage} className={styles.itemImage}/>
                        </div>
                        <div className={styles.itemDetails}>
                            <div className={styles.itemName}>{item.title}</div>
                            <div className={styles.itemPrice}>
                                {item.quantity} × ${item.price.toFixed(2)}
                            </div>
                        </div>
                        <div className={styles.itemTotal}>
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className={styles.summaryTotals}>
                <div className={styles.totalRow}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$shipping.toFixed(2)}`}</span>
                </div>
                <div className={styles.totalRow}>
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;