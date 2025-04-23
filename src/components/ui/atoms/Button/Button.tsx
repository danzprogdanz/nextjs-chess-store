import React from 'react';
import styles from './Button.module.css';

interface ButtonIcon {
  component: React.ReactNode;
  position: 'left' | 'right';
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'critical';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: ButtonIcon;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth ? styles.fullWidth : '',
    isLoading ? styles.loading : '',
    className,
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className={styles.loader} aria-hidden="true"></span>
      )}
      
      {icon?.position === 'left' && icon.component && (
        <span className={styles.iconLeft}>{icon.component}</span>
      )}
      
      <span className={styles.content}>{children}</span>
      
      {icon?.position === 'right' && icon.component && (
        <span className={styles.iconRight}>{icon.component}</span>
      )}
    </button>
  );
};

export default Button;