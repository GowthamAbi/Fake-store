import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, onRequestClose, cartItems, removeFromCart }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="bg-white p-6 rounded shadow-lg w-1/2 mx-auto mt-20"
  >
    <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
    <ul>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item.title}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))
      )}
    </ul>
    <button
      onClick={onRequestClose}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
    >
      Close
    </button>
  </Modal>
);

export default CartModal;
