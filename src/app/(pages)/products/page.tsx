import ProductList from '@/app/components/ProductList';
import { API_URL } from '@/app/lib/constants/constants';
import { Product } from '@/app/lib/types/product';
import React from 'react';

const page = async () => {
  const response = await fetch(API_URL);
  const productList: Product[] = await response.json();
  return (
    <section>
      <ProductList productList={productList} />
    </section>
  );
};

export default page;
