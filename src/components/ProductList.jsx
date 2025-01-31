import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, handleEdit, handleDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-2">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
