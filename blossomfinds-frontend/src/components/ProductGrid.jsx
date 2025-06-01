import ProductCard from './ProductCard';

function ProductGrid({ products }) {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;



/* // src/components/ProductGrid.jsx
import ProductCard from './ProductCard';


function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductGrid;
 */