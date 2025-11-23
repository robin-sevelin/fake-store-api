import ProductList from './components/ProductList';
import { API_URL } from './lib/constants/constants';
import { Product } from './lib/types/product';

export default async function Home() {
  const response = await fetch(API_URL);
  const productList: Product[] = await response.json();

  console.log(
    'Running on:',
    typeof window === 'undefined' ? 'server' : 'client'
  );

  return (
    <section>
      <ProductList productList={productList} />
    </section>
  );
}
