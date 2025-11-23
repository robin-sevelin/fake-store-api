import { Suspense } from 'react';

import Link from 'next/link';
import ProductView from '@/app/components/ProductView';
import { API_URL } from '@/app/lib/constants/constants';
import { Product } from '@/app/lib/types/product';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const reponse = await fetch(API_URL + id);
  const product: Product = await reponse.json();

  return (
    <section>
      <Suspense fallback={<p>..loading product</p>}>
        <ProductView product={product} />
      </Suspense>
      <Link href={'/products'}>Back</Link>
    </section>
  );
};

export default page;
