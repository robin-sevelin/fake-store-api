'use client';

import React, { useState } from 'react';
import Cart from './Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <header className='flex justify-between p-2'>
      <h1>Fake store</h1>
      {showCart && <Cart />}
      <button onClick={() => setShowCart((prev) => !prev)}>Cart</button>
    </header>
  );
};

export default Header;
