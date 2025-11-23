import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <Link href={'/'}>Home</Link>
      <Link href='/products'>Our products</Link>
      <Link href={'/about'}>About us</Link>
    </nav>
  );
};

export default Navigation;
