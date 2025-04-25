import { addToCart, clearCart, removeFromCart, updateQuantity } from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/store/store';
import { Product } from '@/types/product.type';

export const useCart = () => {
  const dispatch = useAppDispatch();

  const addItem = (product: Product, sku?: string) => {
    // Create a serializable version of the product
    const cartProduct = {
      id: product.id,
      title: product.title,
      price: {
        amount: product.price.amount,
        currency: product.price.currency,
      },
      images: product.images.map(img => ({
        url: img.url,
        altText: img.altText,
      })),
      // Convert Date to string if it exists
      createdAt: product.createdAt instanceof Date 
        ? product.createdAt.toISOString() 
        : typeof product.createdAt === 'string' 
          ? product.createdAt 
          : undefined,
    };

    dispatch(addToCart({
      product: cartProduct,
      sku
    }));
  };

  const removeItem = (productId: string, sku?: string) => {
    dispatch(removeFromCart({ productId, sku }));
  };

  const updateItemQuantity = (productId: string, quantity: number, sku?: string) => {
    if (quantity < 1) {
      removeItem(productId, sku);
    } else {
      dispatch(updateQuantity({ productId, quantity, sku }));
    }
  };

  const clearAllItems = () => {
    dispatch(clearCart());
  };

  return {
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart: clearAllItems,
  };
};