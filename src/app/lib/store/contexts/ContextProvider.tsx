'use client';

import React, { ReactNode, useReducer } from 'react';
import { CartContext } from './cartContext';
import { cartReducer } from '../reducers/cartReducer';
import { Cart } from '../../classes/cart';

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, new Cart([], 0));
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
