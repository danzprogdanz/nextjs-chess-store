import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a simplified product interface for cart items
interface CartProduct {
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
  createdAt?: string; // Only if you really need this
}

export interface CartItem {
  productId: string;
  sku?: string;
  quantity: number;
  price: number;
  title: string;
  mainImage: string;
  createdAt?: string; // Optional, only if needed
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: CartProduct; sku?: string }>) => {
      const { product, sku } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === product.id && item.sku === sku
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: CartItem = {
          productId: product.id,
          sku: sku,
          quantity: 1,
          price: product.price.amount,
          title: product.title,
          mainImage: product.images[0]?.url || '',
        };

        // Only add createdAt if it exists and you need it
        if (product.createdAt) {
          newItem.createdAt = product.createdAt;
        }

        state.items.push(newItem);
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ productId: string; sku?: string }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.productId === action.payload.productId
          )
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        productId: string;
        sku?: string;
        quantity: number;
      }>
    ) => {
      const item = state.items.find(
        (item) =>
          item.productId === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;