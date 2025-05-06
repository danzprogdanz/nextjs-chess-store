// components/Input/Input.tsx
import React from 'react';
import styles from './Input.module.css';

interface ErrorObject {
  name: string;
  errorType: string;
  message: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  errorObjects?: ErrorObject[];
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
      errorObjects = [],
      ...props
    },
    ref
  ) => {
    // Find if there's an error object that matches the input name
    const matchedError = props.name 
      ? errorObjects.find(err => err.name === props.name)
      : null;

    // Use the matched error message if exists, otherwise use the regular error prop
    const displayedError = matchedError ? matchedError.message : error;
    const errorType = matchedError ? matchedError.errorType : undefined;

    const inputClasses = [
      styles.input,
      (error || matchedError) ? styles.error : '',
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
            aria-invalid={!!(error || matchedError)}
            {...props}
          />
          
          {endAdornment && (
            <div className={styles.endAdornment}>{endAdornment}</div>
          )}
        </div>
        
        {(displayedError || helperText) && (
          <div className={`${styles.message} ${displayedError ? styles.errorMessage : ''}`}>
            {displayedError || helperText}
            {errorType && (
              <span className={styles.errorType}>({errorType})</span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;