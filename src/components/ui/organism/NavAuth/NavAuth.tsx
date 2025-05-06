"use client"
import React, { useEffect } from 'react'
import styles from './NavAuth.module.css';
import { useAuth } from '@/hooks/useAuth';
import UserIcon from '../../atoms/Icon/UserIcon';
import { useRouter } from 'next/navigation'; // Note: Changed from 'next/router' to 'next/navigation'

interface IProps {}

export const NavAuth: React.FC<IProps> = ({}) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  const handleRegisterClick = () => {
    router.push('/auth/register');
  };

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={styles.container}>
      {user ? <UserIcon/> : null}
      <div className={styles.authLinksWrapper}>
      {user ? (<><p>{user.name}</p><button onClick={handleLogout} className={styles.authButton}>Logout</button></>) : (<><button onClick={handleLoginClick} className={styles.authButton}>Login</button>
        <button onClick={handleRegisterClick} className={styles.authButton}>Register</button></>)}
        </div>
      </div>
    
  )
}

export default NavAuth;