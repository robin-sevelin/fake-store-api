import Link from 'next/link';

export default async function Home() {
  return (
    <section className='justify-center items-center flex-col m-auto flex mt-3'>
      <h2>Welcome to our webshop!</h2>
      <p>We sell the most awsome tuff that you didn&apos;t know you needed</p>
      <Link className='bg-red-500 p-3 mt-3 inline-block' href={'/products'}>
        Our Products
      </Link>
    </section>
  );
}
