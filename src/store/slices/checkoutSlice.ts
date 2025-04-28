// src/store/slices/checkoutSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShippingAddress {
  postalCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  receiverName: string;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDelivery: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon?: string;
}

interface CheckoutState {
  step: 'cart' | 'shipping' | 'payment' | 'confirmation';
  shippingAddress: ShippingAddress | null;
  selectedShippingOption: ShippingOption | null;
  selectedPaymentMethod: PaymentMethod | null;
  availableShippingOptions: ShippingOption[];
  availablePaymentMethods: PaymentMethod[];
  loading: boolean;
  error: string | null;
}

const initialState: CheckoutState = {
  step: 'shipping',
  shippingAddress: null,
  selectedShippingOption: null,
  selectedPaymentMethod: null,
  availableShippingOptions: [],
  availablePaymentMethods: [],
  loading: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    goToShipping: (state) => {
      state.step = 'shipping';
    },
    goToPayment: (state) => {
      state.step = 'payment';
    },
    goToConfirmation: (state) => {
      state.step = 'confirmation';
    },
    setShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload;
    },
    setShippingOptions: (state, action: PayloadAction<ShippingOption[]>) => {
      state.availableShippingOptions = action.payload;
    },
    selectShippingOption: (state, action: PayloadAction<string>) => {
      const option = state.availableShippingOptions.find(o => o.id === action.payload);
      if (option) {
        state.selectedShippingOption = option;
      }
    },
    setPaymentMethods: (state, action: PayloadAction<PaymentMethod[]>) => {
      state.availablePaymentMethods = action.payload;
    },
    selectPaymentMethod: (state, action: PayloadAction<string>) => {
      const method = state.availablePaymentMethods.find(m => m.id === action.payload);
      if (method) {
        state.selectedPaymentMethod = method;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetCheckout: () => initialState,
  },
});

export const {
  goToShipping,
  goToPayment,
  goToConfirmation,
  setShippingAddress,
  setShippingOptions,
  selectShippingOption,
  setPaymentMethods,
  selectPaymentMethod,
  setLoading,
  setError,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;