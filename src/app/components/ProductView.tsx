'use client';

import React, { useContext, useState } from 'react';
import { Product } from '../lib/types/product';
import { actionType, CartContext } from '../lib/store/contexts/cartContext';
import { OrderRow } from '../lib/classes/orderRow';
import Image from 'next/image';

const ProductView = ({ product }: { product: Product }) => {
  const { dispatch } = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const submit = () => {
    dispatch({
      payload: JSON.stringify(
        new OrderRow(product.title, product.price, amount, product.price)
      ),
      action: actionType.ADDED,
    });
    setAmount(0);
  };

  return (
    <article className='border'>
      <h2>{product.title}</h2>
      <Image src={product.image} alt={product.title} width={100} height={100} />
      <p>Price: {product.price} $</p>
      <p>Amount : {amount}</p>
      <button onClick={() => setAmount((amount) => amount + 1)}>Add one</button>
      <br />
      <button
        disabled={amount === 0}
        onClick={() => setAmount((amount) => amount - 1)}
      >
        Remove one
      </button>
      <br />
      <button disabled={amount === 0} onClick={() => submit()}>
        Add to cart
      </button>
    </article>
  );
};

export default ProductView;
