import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistProduct {
  id: string;
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  images: Array<{
    url: string;
    altText?: string;
  }>;
  createdAt?: string;
}

export interface WishlistItem {
  productId: string;
  price: number;
  title: string;
  mainImage: string;
  createdAt?: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<{ product: WishlistProduct }>) => {
      const { product } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === product.id
      );

      if (!existingItem) {
        const newItem: WishlistItem = {
          productId: product.id,
          price: product.price.amount,
          title: product.title,
          mainImage: product.images[0]?.url || '',
        };

        if (product.createdAt) {
          newItem.createdAt = product.createdAt;
        }

        state.items.push(newItem);
      }
    },
    removeFromWishlist: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;