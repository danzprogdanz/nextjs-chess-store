import React from "react";
import styles from "./WishlistSideBar.module.css";
import { useAppSelector } from "@/store/store";
import Overlay, { OverlayProps } from "@/components/ui/atoms/Overlay/Overlay";
import { useWishlist } from "@/hooks/useWishlist";
import WishlistItem from "../WishlistItem/WishlistItem";

interface WishlistSideBarProps extends OverlayProps {
  onClose: () => void;
}

const CartSideBarHeader = ({ count }: { count: number }) => (
  <>
    {count === 0 ? (
      <h3>Empty wishlist</h3>
    ) : (
      <h3 className="cart-sidebar-title">
        Wishlist - {count} {count === 1 ? "item" : "itens"}
      </h3>
    )}
  </>
);

// WishlistSideBar.tsx
const WishlistSideBar: React.FC<WishlistSideBarProps> = ({
  isVisible,
  onClose,
}) => {
  const wishListItems = useAppSelector((state) => state.wishlist.items);
  const { removeItem } = useWishlist();

  return (
    <Overlay
      isVisible={isVisible}
      onClose={onClose} 
      headerComponent={<CartSideBarHeader count={wishListItems.length} />}
    >
      <div className={styles.bodyContainer}>
        <div className={styles.itemsWrapper}>
          {wishListItems.map((item) => (
            <WishlistItem
              key={item.productId}
              item={item}
              onRemove={removeItem}
            />
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export default WishlistSideBar;
