// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import axios from 'axios';

function Home({products}) {

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Our Products</h2>
      <ProductGrid products={products} />
    </div>
  );
}
export default Home;
