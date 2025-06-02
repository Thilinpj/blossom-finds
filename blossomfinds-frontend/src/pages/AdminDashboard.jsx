import { useState } from 'react';
import axios from 'axios';

function AdminDashboard({ products, fetchProducts }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleAddProduct = () => {
    axios.post('http://localhost:5221/api/products', newProduct)
      .then(res => {
        setNewProduct({ name: '', category: '', price: '', imageUrl: '' });
        fetchProducts(); // ✅ Will refresh product list globally
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      {/* Form to Add Product */}
      <div className="mb-4">
        <h4>Add New Product</h4>
        <input className="form-control mb-2" name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" />
        <input className="form-control mb-2" name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" />
        <input className="form-control mb-2" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" type="number" />
        <input className="form-control mb-2" name="imageUrl" value={newProduct.imageUrl} onChange={handleChange} placeholder="Image URL" />
        <button className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* Product List */}
      <h4>Product List</h4>
      <ul className="list-group">
        {products.map(p => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
