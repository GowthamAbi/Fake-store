import React from "react";

const Navbar = ({ cartCount, onCartClick }) => (
  <nav className="bg-blue-500 p-4 flex justify-between items-center">
    <h1 className="text-white text-lg font-bold">Fake Store</h1>
    <button
      onClick={onCartClick}
      className="bg-white text-blue-500 px-4 py-2 rounded"
    >
      Cart ({cartCount})
    </button>
  </nav>
);

export default Navbar;
