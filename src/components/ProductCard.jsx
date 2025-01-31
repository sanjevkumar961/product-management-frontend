import React from "react";

const ProductCard = ({ product, handleEdit, handleDelete }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
      <div className="flex justify-between mt-2">
        <button onClick={() => handleEdit(product)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
          Edit
        </button>
        <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
