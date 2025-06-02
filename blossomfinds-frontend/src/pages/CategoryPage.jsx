// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

function CategoryPage({ products }) {
  const { categoryName } = useParams();
  const filtered = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>{categoryName}</h2>
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}

export default CategoryPage;
