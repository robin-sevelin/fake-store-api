'use client';

import React, { useContext, useState } from 'react';
import Cart from './Cart';
import Navigation from './Navigation';
import { CartContext } from '../lib/store/contexts/cartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => {
    setShowCart(false);
  };

  return (
    <header>
      <section className='flex justify-between p-2'>
        <h1>Fake store</h1>
        <Navigation />
      </section>
      {cart.orderRow.length > 0 && (
        <section>
          {showCart && <Cart setShowCart={onShowCart} />}
          <button onClick={() => setShowCart((prev) => !prev)}>Cart</button>
        </section>
      )}
    </header>
  );
};

export default Header;
