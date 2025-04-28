// src/hooks/useCheckout.ts
import { useAppDispatch } from '@/store/store';
import { 
  goToShipping, 
  goToPayment, 
  goToConfirmation,
  setPaymentMethods,
  selectPaymentMethod,
  setLoading,
  resetCheckout,
  PaymentMethod
} from '@/store/slices/checkoutSlice';
//import { CheckoutService } from '@/services/vtex/checkout.service';
import { clearCart } from '@/store/slices/cartSlice';

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 'creditCard',
    name: 'Credit Card',
    icon: 'https://www.svgrepo.com/show/146677/credit-card.svg'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: 'https://www.svgrepo.com/show/328122/paypal.svg'
  },
  {
    id: 'bankTransfer',
    name: 'Bank Transfer',
    icon: 'https://www.svgrepo.com/show/266135/bank-transfer.svg'
  }
];

export const useCheckout = () => {
  const dispatch = useAppDispatch();

  const startCheckout = () => {
    dispatch(goToShipping());
  };

  const proceedToPayment = async () => {
    dispatch(setLoading(true));
    try {
      //const methods = await CheckoutService.getPaymentMethods();
      //dispatch(setPaymentMethods(methods));
      dispatch(setPaymentMethods(mockPaymentMethods));
      dispatch(goToPayment());
    } catch (error) {
      console.error('Failed to load payment methods:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const placeOrder = async () => {
    dispatch(setLoading(true));
    try {
      // In a real app, you would send all checkout data to VTEX API
      //const order = await CheckoutService.placeOrder();
      dispatch(goToConfirmation());
      dispatch(clearCart());
      //return order;
      return [];
    } catch (error) {
      console.error('Failed to place order:', error);
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const selectPayment = (methodId: string) => {
    dispatch(selectPaymentMethod(methodId));
  };

  const reset = () => {
    dispatch(resetCheckout());
  };

  return {
    startCheckout,
    proceedToPayment,
    placeOrder,
    selectPayment,
    reset,
  };
};