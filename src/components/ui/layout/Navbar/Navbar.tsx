"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import FavoriteIcon from "@/components/ui/atoms/Icon/FavoriteIcon";
import CartIcon from "@/components/ui/atoms/Icon/CartIcon";
import KingIcon from "@/components/ui/atoms/Icon/KingIcon";
import { useAppSelector } from "@/store/store";
import IconButton from "../../atoms/IconButton/IconButton";
import { useCart } from "@/hooks/useCart";
import Overlay from "../../atoms/Overlay/Overlay";
import CartSideBar from "@/components/cart/CartSideBar/CartSideBar";
import WishlistSideBar from "@/components/wishlist/WishlistSiderBar/WishlistSideBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCartCardOpen, setIsCartCardOpen] = useState(false);
  const [isWishListCardOpen, setIsWishListCardOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.items);
  const { removeItem, updateItemQuantity } = useCart();

  const wishListItems = useAppSelector((state) => state.wishlist.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const progress = Math.min(scrollY / 200, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCartCardClose = () => {
    setIsCartCardOpen(false);
  };

  const handleWishlistSideBarClose = () => {
    setIsWishListCardOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${
        scrollProgress > 0 ? styles.scrolled : ""
      } ${isOpen ? styles.mobileMenuOpen : ""}`}
      style={{
        backgroundColor: isOpen
          ? "rgba(124, 58, 0, 0.9)"
          : `rgba(var(--heading-color-rgb), ${scrollProgress * 0.9})`,
        backdropFilter: isOpen ? "blur(8px)" : `blur(${scrollProgress * 8}px)`,
        boxShadow:
          scrollProgress > 0 ? "0 2px 4px var(--shadow-color)" : "none",
      }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <KingIcon />
          <p className={styles.companyNameLogo}>Danz's Castle & Crown</p>
        </Link>

        {/* Mobile Icons - shown only on mobile */}
        <div className={styles.mobileIcons}>
          <IconButton
            onClick={() => setIsWishListCardOpen(true)}
            count={wishListItems.length}
            ariaLabel="View favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            onClick={() => setIsCartCardOpen(true)}
            count={cartItems.length}
            ariaLabel="View shopping cart"
          >
            <CartIcon />
          </IconButton>
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className={styles.menuIcon} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            ) : (
              <svg className={styles.menuIcon} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link href="/products" className={styles.navLink}>
            Products
          </Link>
          <IconButton
            onClick={() => setIsWishListCardOpen(true)}
            count={wishListItems.length}
            ariaLabel="View favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            onClick={() => setIsCartCardOpen(true)}
            count={cartItems.length}
            ariaLabel="View shopping cart"
          >
            <CartIcon />
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <Link
          href="/products"
          className={styles.mobileLink}
          onClick={closeMenu}
        >
          Products
        </Link>
        {/* You can add more mobile menu items here if needed */}
      </div>

      <CartSideBar isVisible={isCartCardOpen} onClose={handleCartCardClose} />
      <WishlistSideBar
        isVisible={isWishListCardOpen}
        onClose={handleWishlistSideBarClose}
      />
    </nav>
  );
};

export default Navbar;
