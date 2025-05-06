"use client"
import Button from "@/components/ui/atoms/Button/Button";
import Input from "@/components/ui/atoms/Input/Input";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import pageLayoutStyles from '../../../components/ui/layout/PageLayout.module.css';
import styles from '../auth.module.css'
import { useAuth } from "@/hooks/useAuth";
import { LoginCredentials } from "@/types/auth.types";

export default function LoginPage() {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        password: ''
    });

    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect') || '/';
    const { login, status, error, user } = useAuth();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted && user) {
            router.push(redirectUrl);
        }
    }, [user, redirectUrl, router, isMounted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(credentials.email, credentials.password);
        } catch (err) {
            // Error is already handled by the auth slice
        }
    };

    const DemoCreds = () => {
        return (<div className={styles.demoCredsContainer}><p>email: test@example.com</p><p>password: password</p></div>)
    }

    return (
        <div className={pageLayoutStyles.pageLayout}>
            <div className={styles.authContainer}>
                <DemoCreds/>
                <div className={styles.authCard}>
                    <h1 className={styles.authTitlte}>Log in to your account</h1>
                    
                    {error && (
                        <div className={styles.authError}>
                            {error}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className={styles.authForm}>
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                        
                        <Input
                            type="password"
                            label="Password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                        
                        <div className={styles.authActions}>
                            <Button 
                                type="submit" 
                                variant="primary"
                                fullWidth
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Logging in...' : 'Log in'}
                            </Button>
                        </div>
                    </form>
                    
                    <div className={styles.authFooter}>
                        <span>Don't have an account?</span>
                        <Link 
                            href={`/auth/register?redirect=${encodeURIComponent(redirectUrl)}`} 
                            className={styles.authLink}
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}