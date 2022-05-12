import { useContext } from 'react';
import { CheckoutContext } from '../context/checkoutContext';

export const useInfoCheckout = () => {
  const checkout = useContext(CheckoutContext);

  return checkout;
};
