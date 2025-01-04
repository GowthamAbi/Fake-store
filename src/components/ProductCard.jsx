import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center">
    <img src={product.image} alt={product.title} className="h-32 w-auto mb-2" />
    <h3 className="font-semibold text-center">{product.title}</h3>
    <p className="text-lg font-bold">${product.price}</p>
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
