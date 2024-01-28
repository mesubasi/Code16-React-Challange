import React, { useEffect } from "react";

const Cart = ({ cart, emptyCart, setCart }) => {
  // Use useEffect to retrieve cart data from localStorage on component mount
  useEffect(() => {
    // Retrieve stored cart data from localStorage or default to an empty array
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Update the cart state with the retrieved data
    setCart(storedCart);
  }, []);

  // Calculate the total price of items in the cart
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // Handle clearing the cart and updating localStorage
  const handleClearCart = () => {
    // Remove cart data from localStorage
    localStorage.removeItem("cart");
    // Update the cart state with an empty array
    setCart([]);
  };

  // Render a message if the cart is empty
  if (cart.length === 0) {
    return <p className="text-white text-xl">Your cart is empty.</p>;
  }

  return (
    <div className="border ml-auto w-full p-4 mt-2 rounded-lg shadow-lg bg-teal-700">
      <h2 className="text-2xl font-semibold mb-4 text-white">Cart</h2>
      <ul>
        {/* Map through each item in the cart and display its details */}
        {cart.map((item) => (
          <li key={item.id} className="mt-2 flex justify-between text-white">
            <span>{item.title}</span>
            <span>{item.price} $</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl text-white">
        Total: {total.toFixed(2)} $
      </p>
      {/* Button to clear the cart with a corresponding onClick handler */}
      <button
        className="bg-rose-900 text-white px-4 py-2 rounded w-full hover:bg-rose-950 transition-all mt-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
