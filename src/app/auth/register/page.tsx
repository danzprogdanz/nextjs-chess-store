"use client";
import Button from "@/components/ui/atoms/Button/Button";
import Input from "@/components/ui/atoms/Input/Input";
import Link from "next/link";
import pageLayoutStyles from "../../../components/ui/layout/PageLayout.module.css";
import styles from "../auth.module.css";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { RegisterCredentials } from "@/types/auth.types";

interface FormError {
  name: string;
  errorType: string;
  message: string;
}

export default function RegisterPage() {
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    fullName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormError[]>([]);

  const { register, status, error } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Clear any existing errors for this field when user types
    if (formErrors.some(err => err.name === name)) {
      setFormErrors(formErrors.filter(err => err.name !== name));
    }

    if (name === 'confirmPassword') {
      setConfirmPassword(value);
      // Clear password mismatch error if passwords now match
      if (value === credentials.password) {
        setFormErrors(formErrors.filter(err => err.name !== 'password'));
      }
    } else {
      setCredentials(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const errors: FormError[] = [];
    
    if (credentials.password !== confirmPassword) {
      errors.push({
        name: 'password',
        errorType: 'password-mismatch',
        message: 'Passwords do not match'
      });
      errors.push({
        name: 'confirmPassword',
        errorType: 'password-mismatch',
        message: 'Passwords do not match'
      });
    }

    if (!credentials.fullName) {
      errors.push({
        name: 'fullName',
        errorType: 'required',
        message: 'Full name is required'
      });
    }

    if (!credentials.email) {
      errors.push({
        name: 'email',
        errorType: 'required',
        message: 'Email is required'
      });
    }

    if (!credentials.password) {
      errors.push({
        name: 'password',
        errorType: 'required',
        message: 'Password is required'
      });
    }

    if (!confirmPassword) {
      errors.push({
        name: 'confirmPassword',
        errorType: 'required',
        message: 'Please confirm your password'
      });
    }

    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await register(
        credentials.fullName,
        credentials.email,
        credentials.password
      );
    } catch (err) {
      // Error is already handled by the auth slice
    }
  };

  return (
    <div className={pageLayoutStyles.pageLayout}>
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <h1 className={styles.authTitlte}>Create an account</h1>

          {error && <div className={styles.authError}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.authForm}>
            <Input
              type="text"
              label="Full Name"
              name="fullName"
              value={credentials.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              errorObjects={formErrors}
            />

            <Input
              type="email"
              label="Email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              errorObjects={formErrors}
            />

            <Input
              type="password"
              label="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              errorObjects={formErrors}
            />

            <Input
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              errorObjects={formErrors}
            />

            <div className={styles.authActions}>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={status === "loading"}
              >
                {status === "loading" ? "Signing up..." : "Sign up"}
              </Button>
            </div>
          </form>

          <div className={styles.authFooter}>
            <span>Already have an account?</span>
            <Link href="/auth/login" className={styles.authLink}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}