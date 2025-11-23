import { OrderRow } from './../../classes/orderRow';
import { Cart } from '../../classes/cart';

import { cartAction, actionType } from '../contexts/cartContext';

export const cartReducer = (state: Cart, action: cartAction) => {
  switch (action.action) {
    case actionType.ADDED: {
      const { title, price, amount }: OrderRow = JSON.parse(action.payload);

      if (state.orderRow.some((row) => row.title === title)) {
        return {
          ...state,
          orderRow: state.orderRow.map((row) => {
            if (row.title === title) {
              return {
                ...row,
                title,
                price,
                amount: row.amount + amount,
                rowTotalPrice: (row.amount + amount) * price,
              };
            } else return row;
          }),
          totalPrice: Number(
            state.orderRow.reduce((a, b) => a + b.rowTotalPrice, 0).toFixed(2)
          ),
        };
      } else {
        const updatedRows = [
          ...state.orderRow,
          new OrderRow(title, price, amount, amount * price),
        ];

        return {
          ...state,
          orderRow: updatedRows,
          totalPrice: Number(
            updatedRows.reduce((a, b) => a + b.rowTotalPrice, 0).toFixed(2)
          ),
        };
      }
    }
    case actionType.REMOVED: {
      const { title }: OrderRow = JSON.parse(action.payload);

      const foundRow = state.orderRow.find((row) => row.title === title);
      const newTotalPrice = foundRow
        ? Number(state.totalPrice - foundRow?.rowTotalPrice).toFixed(2)
        : Number(state.totalPrice).toFixed(2);

      return {
        ...state,
        orderRow: state.orderRow.filter((row) => row.title !== title),
        totalPrice: +newTotalPrice,
      };
    }
    case actionType.CLEARED: {
      return { ...state, orderRow: [], totalPrice: 0 };
    }
    default:
      return state;
  }
};
