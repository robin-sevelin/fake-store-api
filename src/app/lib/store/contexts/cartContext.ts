import { createContext, Dispatch } from 'react';
import { Cart } from '../../classes/cart';

export type cartContext = {
  cart: Cart;
  dispatch: Dispatch<cartAction>;
};

export enum actionType {
  ADDED = 'ADDED',
  REMOVED = 'REMOVED',
  CLEARED = 'CLEARED',
}

export type cartAction = {
  payload: string;
  action: actionType;
};

export const CartContext = createContext<cartContext>({
  cart: new Cart([], 0),
  dispatch: () => {},
});
