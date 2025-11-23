import React, { Suspense } from 'react';
import { Product } from '../lib/types/product';
import Link from 'next/link';
import Image from 'next/image';

const ProductList = ({ productList }: { productList: Product[] }) => {
  return (
    <section className='flex flex-col'>
      {productList.map((product) => (
        <Suspense fallback={<p>..loading</p>} key={product.id}>
          <Link key={product.id} href={'/products/' + product.id.toString()}>
            <Image
              src={product.image}
              alt={product.title}
              width={50}
              height={50}
            />
            {product.title}
          </Link>
        </Suspense>
      ))}
    </section>
  );
};

export default ProductList;
