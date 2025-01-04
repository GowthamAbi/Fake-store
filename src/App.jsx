import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CartModal from "./components/CardModal.jsx";
import { fetchProducts } from "./api/fakestoreApi.jsx";
import "./index.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  const addToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setModalOpen(true)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <CartModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
