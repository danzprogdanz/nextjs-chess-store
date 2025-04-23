import Button from "@/components/ui/atoms/Button/Button";
import { Product } from "@/mocks/productMock";
import { mockProducts } from "@/mocks/productMock";
import { addToCart } from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";

type AddToCartButtonProps = {
  product?: Product;
  productId?: string; 
  size?: "small" | "medium" | "large" | undefined;
};

const AddToCartButton = ({ product, productId, size }: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const resolvedProduct = product 
    ? product 
    : mockProducts.find(p => p.id === productId);

  const handleAddToCart = () => {
    if (!resolvedProduct) {
      console.error("Product not found");
      return;
    }

    const defaultSku = resolvedProduct.inventory.skus?.[0]?.code;
    
    const cartProduct = {
      id: resolvedProduct.id,
      title: resolvedProduct.title,
      price: {
        amount: resolvedProduct.price.amount,
        currency: resolvedProduct.price.currency,
      },
      images: resolvedProduct.images.map(img => ({
        url: img.url,
        altText: img.altText,
      })),
      createdAt: resolvedProduct.createdAt.toISOString(),
    };

    dispatch(addToCart({
      product: cartProduct,
      sku: defaultSku,
    }));
  };

  const isInCart = cartItems.some(item => item.productId === resolvedProduct?.id);

  if (!resolvedProduct) return null;
  
  return (
    <div className="add-to-cart-container">
      {isInCart ? (
        <span className="already-in-cart">Already in cart</span>
      ) : (
        <Button onClick={handleAddToCart} size={size ?? 'medium'}>
          Add to Cart
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;