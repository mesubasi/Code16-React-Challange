import React from "react";
import CartIcon from "./CartIcon";

const Header = ({ cart }) => {
  return (
    <div className="flex justify-between items-center mb-6 text-white">
      <h1 className="text-3xl font-semibold">
        React and Tailwind CSS Cart Application
      </h1>
      <CartIcon cart={cart} />
    </div>
  );
};

export default Header;
