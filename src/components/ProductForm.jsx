import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/products/";

const ProductForm = ({ fetchProducts, selectedProduct, setSelectedProduct, setMessage }) => {
  const [formData, setFormData] = useState({ name: "", description: "", price: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedProduct) setFormData(selectedProduct);
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required.";
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = "Price must be positive.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (selectedProduct) {
        await axios.put(`${API_BASE_URL}${selectedProduct.id}/`, formData);
        setMessage("Product updated successfully!");
      } else {
        await axios.post(API_BASE_URL, formData);
        setMessage("Product added successfully!");
      }
      setFormData({ name: "", description: "", price: "" });
      setSelectedProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4 bg-gray-100">
      <h3 className="text-xl font-semibold mb-2">{selectedProduct ? "Update Product" : "Add Product"}</h3>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        {errors.price && <p className="text-red-500">{errors.price}</p>}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {selectedProduct ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
