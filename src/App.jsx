import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };
  return (
    <div className="dark:bg-black">
      <div className="container mx-auto p-4">
        <Header cart={cart} />
        <Products cart={cart} setCart={setCart} />
        <Cart cart={cart} emptyCart={emptyCart} setCart={setCart} />
      </div>
    </div>
  );
}
