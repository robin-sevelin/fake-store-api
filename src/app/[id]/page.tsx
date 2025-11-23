import { Suspense } from 'react';
import ProductView from '../components/ProductView';
import { Product } from '../lib/types/product';
import Link from 'next/link';
import { API_URL } from '../lib/constants/constants';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const reponse = await fetch(API_URL + id);
  const product: Product = await reponse.json();

  return (
    <section>
      <Suspense fallback={<p>..loading product</p>}>
        <ProductView product={product} />
      </Suspense>
      <Link href={'/'}>Back</Link>
    </section>
  );
};

export default page;
