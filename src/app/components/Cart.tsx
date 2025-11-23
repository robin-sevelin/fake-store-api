'use client';

import React, { useContext } from 'react';
import { actionType, CartContext } from '../lib/store/contexts/cartContext';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div className='bg-red-500 h-full absolute z-10 justify-start'>
      <ul>
        {cart.orderRow.map((row, index) => (
          <li key={index}>
            {row.title} x {row.amount}
            <button
              onClick={() =>
                dispatch({
                  action: actionType.REMOVED,
                  payload: JSON.stringify(row),
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Totalprice: {cart.totalPrice} $</p>
      {cart.totalPrice > 0 && (
        <button
          onClick={() =>
            dispatch({
              action: actionType.CLEARED,
              payload: JSON.stringify(cart),
            })
          }
        >
          Clear cart
        </button>
      )}
    </div>
  );
};

export default Cart;
