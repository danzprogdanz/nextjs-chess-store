import React from 'react';
import styles from './NotificationCount.module.css';

interface NotificationCountProps {
  count: number | undefined;
}

export const NotificationCount = ({ count }: NotificationCountProps) => {
  if (!count) {
    return;
  }

  return <div className={styles.countCircle} data-testid="cart-item-count">{count}</div>;
};
