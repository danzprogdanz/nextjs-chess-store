import { addToWishlist, removeFromWishlist, clearWishlist } from '@/store/slices/wishlistSlice';
import { useAppDispatch } from '@/store/store';
import { Product } from '@/types/product.type';

export const useWishlist = () => {
  const dispatch = useAppDispatch();

  const addItem = (product: Product) => {
    // Create a serializable version of the product
    const wishlistProduct = {
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

    dispatch(addToWishlist({
      product: wishlistProduct
    }));
  };

  const removeItem = (productId: string) => {
    dispatch(removeFromWishlist({ productId }));
  };

  const clearAllItems = () => {
    dispatch(clearWishlist());
  };

  return {
    addItem,
    removeItem,
    clearWishlist: clearAllItems,
  };
};