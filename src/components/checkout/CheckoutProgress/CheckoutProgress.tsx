import React from 'react';
import styles from './CheckoutProgress.module.css';

const steps = [
    { id: 'shipping', label: 'Shipping' },
    { id: 'payment', label: 'Payment' },
    { id: 'confirmation', label: 'Confirmation' },
];

const CheckoutProgress: React.FC<{ currentStep: string }> = ({ currentStep }) => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    
    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div 
                            className={`${styles.progressStep} ${
                                index <= currentIndex ? styles.active : ''
                            }`}
                        >
                            <div className={styles.stepIndicator}>
                                {index + 1}
                            </div>
                            <span className={styles.stepLabel}>{step.label}</span>
                        </div>
                        {index < steps.length - 1 && (
                            <div 
                                className={`${styles.progressLine} ${
                                    index < currentIndex ? styles.active : ''
                                }`}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CheckoutProgress;