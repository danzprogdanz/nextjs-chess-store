"use client"
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./CartSideBar.module.css";
import { useAppSelector } from "@/store/store";
import { useCart } from "@/hooks/useCart";
import Overlay, { OverlayProps } from "@/components/ui/atoms/Overlay/Overlay";
import CartItem from "../CartItem/CartItem";
import Button from "@/components/ui/atoms/Button/Button";
import { useCheckout } from "@/hooks/useCheckout";

interface CartSideBarProps extends OverlayProps {
  onClose: () => void;
}

const CartSideBarHeader = ({ count }: { count: number }) => (
  <>
    {count === 0 ? (
      <h3>Carrinho vazio</h3>
    ) : (
      <h3 className="cart-sidebar-title">
        Carrinho - {count} {count === 1 ? "item" : "itens"}
      </h3>
    )}
  </>
);

const CartSideBar: React.FC<CartSideBarProps> = ({
  isVisible,
  onClose,
}) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const { removeItem, updateItemQuantity, clearCart } = useCart();
  const { startCheckout } = useCheckout();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const router = useRouter();

  const handleCheckout = () => {
    startCheckout()
    onClose(); 
    router.push("/checkout"); 
  };

  return (
    <Overlay
      isVisible={isVisible}
      onClose={onClose}
      headerComponent={<CartSideBarHeader count={cartItems.length} />}
    >
      <div className={styles.bodyContainer}>
        <div className={styles.itemsWrapper}>
          {cartItems.map((item) => (
            <CartItem
              key={item.productId}
              productId={item.productId}
              sku={item.sku}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.mainImage}
              onRemove={() => removeItem(item.productId)}
              onQuantityChange={(quantity) =>
                updateItemQuantity(item.productId, quantity)
              }
            />
          ))}
        </div>
      </div>
      {cartItems.length > 0 && <div className={styles.footer}>
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Frete</span>
            <span>Calculado no checkout</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span className={styles.totalPrice}>
              R$ {totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <Button onClick={handleCheckout} className={styles.checkoutButton}>
          Finalizar compra
        </Button>
        <Button onClick={clearCart} variant="critical">
          Limpar carrinho
        </Button>
      </div>}
    </Overlay>
  );
};

export default CartSideBar;
