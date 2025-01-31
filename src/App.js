import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const API_BASE_URL = "http://127.0.0.1:8000/api/products/";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}${id}/`);
      fetchProducts(); 
      setMessage("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Product Manager</h1>
      {message && <p className="text-green-500 text-center">{message}</p>}
      <ProductForm 
        fetchProducts={fetchProducts} 
        selectedProduct={selectedProduct} 
        setSelectedProduct={setSelectedProduct} 
        setMessage={setMessage}
      />
      <ProductList 
        products={products} 
        handleEdit={setSelectedProduct} 
        handleDelete={handleDelete} 
      />
    </div>
  );
};

export default App;
