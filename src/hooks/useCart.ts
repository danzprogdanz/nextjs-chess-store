
import { Product } from '@/mocks/productMock';
import { addToCart, removeFromCart, updateQuantity } from '@/store/slices/cartSlice';
import { useAppDispatch } from '@/store/store';

export const useCart = () => {
  const dispatch = useAppDispatch();

  return {
    addItem: (product: Product, sku?: string) =>
      dispatch(addToCart({ product, sku })),
    removeItem: (productId: string, sku?: string) =>
      dispatch(removeFromCart({ productId, sku })),
    updateItemQuantity: (productId: string, quantity: number, sku?: string) =>
      dispatch(updateQuantity({ productId, quantity, sku })),
  };
};
