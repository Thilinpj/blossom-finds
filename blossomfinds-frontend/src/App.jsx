// src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:5221/api/products')
    .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/category/:categoryName" element={<CategoryPage products={products} />} />
      </Routes>
    </>
  );
}

export default App;
