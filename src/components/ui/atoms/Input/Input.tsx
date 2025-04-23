// components/Input/Input.tsx
import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      startAdornment,
      endAdornment,
      className = '',
      ...props
    },
    ref
  ) => {
    const inputClasses = [
      styles.input,
      error ? styles.error : '',
      startAdornment ? styles.withStartAdornment : '',
      endAdornment ? styles.withEndAdornment : '',
      fullWidth ? styles.fullWidth : '',
      className,
    ].join(' ');

    return (
      <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ''}`}>
        {label && (
          <label htmlFor={props.id} className={styles.label}>
            {label}
          </label>
        )}
        
        <div className={styles.inputWrapper}>
          {startAdornment && (
            <div className={styles.startAdornment}>{startAdornment}</div>
          )}
          
          <input
            ref={ref}
            className={inputClasses}
            aria-invalid={!!error}
            {...props}
          />
          
          {endAdornment && (
            <div className={styles.endAdornment}>{endAdornment}</div>
          )}
        </div>
        
        {(error || helperText) && (
          <div className={`${styles.message} ${error ? styles.errorMessage : ''}`}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;