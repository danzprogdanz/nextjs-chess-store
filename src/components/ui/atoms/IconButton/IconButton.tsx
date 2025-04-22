import React from 'react';
import styles from './IconButton.module.css';
import { NotificationCount } from '../NotificationCount/NotificationCount';

interface IconButtonProps {
  onClick: () => void;
  count?: number | undefined;
  children: React.ReactNode;
  ariaLabel: string;
}

const IconButton = ({
  onClick,
  count = 0,
  children,
  ariaLabel,
}: IconButtonProps) => {
  return (
    <div className={styles.iconContainer}>
      {count > 0 && <NotificationCount count={count} />}
      <button
        className={styles.iconButton}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
};

export default IconButton;
