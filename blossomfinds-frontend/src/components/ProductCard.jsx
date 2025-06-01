// src/components/ProductCard.jsx
function ProductCard({ product }) {
  return (
    <div className="card h-100 text-center shadow-sm">
      <img
        src={`http://localhost:5221${product.imageUrl}`}
        alt={product.name}
        className="card-img-top img-fluid"
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.category}</p>
        <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
