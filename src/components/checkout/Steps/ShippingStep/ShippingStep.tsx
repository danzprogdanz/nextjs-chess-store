import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/store';
import styles from './ShippingStep.module.css';
import { useCheckout } from '@/hooks/useCheckout';
import Input from '@/components/ui/atoms/Input/Input';
import Button from '@/components/ui/atoms/Button/Button';

const ShippingStep = () => {
  const { shippingAddress, availableShippingOptions, selectedShippingOption, loading } = 
    useAppSelector((state) => state.checkout);
  const { proceedToPayment } = useCheckout();
  
  const [address, setAddress] = useState({
    postalCode: shippingAddress?.postalCode || '',
    street: shippingAddress?.street || '',
    number: shippingAddress?.number || '',
    complement: shippingAddress?.complement || '',
    neighborhood: shippingAddress?.neighborhood || '',
    city: shippingAddress?.city || '',
    state: shippingAddress?.state || '',
    country: shippingAddress?.country || 'US',
    receiverName: shippingAddress?.receiverName || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //setShippingAddress(address);
    proceedToPayment();
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.shippingStep}>
      <h2 className={styles.stepTitle}>Shipping Information</h2>
      <form onSubmit={handleSubmit} className={styles.shippingForm}>
        <div className={styles.formGrid}>
          <Input
            label="Full Name"
            name="receiverName"
            value={address.receiverName}
            onChange={handleAddressChange}
            required
          />
          <Input
            label="Postal Code"
            name="postalCode"
            value={address.postalCode}
            onChange={handleAddressChange}
            required
          />
          <Input
            label="Street Address"
            name="street"
            value={address.street}
            onChange={handleAddressChange}
            required
          />
          <Input
            label="Number"
            name="number"
            value={address.number}
            onChange={handleAddressChange}
            required
          />
          <Input
            label="Complement (Optional)"
            name="complement"
            value={address.complement}
            onChange={handleAddressChange}
          />
          <Input
            label="Neighborhood"
            name="neighborhood"
            value={address.neighborhood}
            onChange={handleAddressChange}
            required
          />
          <Input
            label="City"
            name="city"
            value={address.city}
            onChange={handleAddressChange}
            required
          />
          
          <Input
            label="Country"
            name="country"
            value={address.country}
            onChange={handleAddressChange}
            disabled
          />
        </div>

        {availableShippingOptions.length > 0 && (
          <div className={styles.shippingOptions}>
            <h3>Shipping Methods</h3>
            {availableShippingOptions.map((option) => (
              <div 
                key={option.id} 
                className={`${styles.shippingOption} ${
                  selectedShippingOption?.id === option.id ? styles.selected : ''
                }`}
                onClick={() => {}}
              >
                <input 
                  type="radio" 
                  name="shippingMethod" 
                  checked={selectedShippingOption?.id === option.id}
                  readOnly
                />
                <div className={styles.optionDetails}>
                  <span className={styles.optionName}>{option.name}</span>
                  <span className={styles.optionPrice}>${option.price.toFixed(2)}</span>
                  <span className={styles.optionDelivery}>
                    Estimated delivery: {option.estimatedDelivery}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.actions}>
          <Button 
            type="submit" 
            disabled={!address.street || !address.city || !address.postalCode || loading}
          >
            Proceed to Payment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShippingStep;