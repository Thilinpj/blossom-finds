// src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
  axios.get('http://localhost:5221/api/products')
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));
};


  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/category/:categoryName" element={<CategoryPage products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard products={products} fetchProducts={fetchProducts} />} />

      </Routes>
    </>
  );
}

export default App;
