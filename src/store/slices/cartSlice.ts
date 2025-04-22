// slices/cartSlice.ts
import { Product } from '@/mocks/productMock';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: string;
  sku?: string;
  quantity: number;
  price: number;
  title: string;
  mainImage: string;
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
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product;
        sku?: string;
        quantity?: number;
      }>
    ) => {
      const { product, sku, quantity = 1 } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === product.id && item.sku === sku
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          productId: product.id,
          sku: sku,
          quantity: quantity,
          price: product.price.amount,
          title: product.title,
          mainImage: product.images[0].url,
        });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ productId: string; sku?: string }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.productId === action.payload.productId &&
            item.sku === action.payload.sku
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
          item.productId === action.payload.productId &&
          item.sku === action.payload.sku
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
