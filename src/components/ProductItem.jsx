import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        top: "50%",
        cursor: "pointer",
        marginRight: "15px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        cursor: "pointer",
        marginLeft: "15px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

const ProductItem = ({ product, cart, setCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    // Update the local storage
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the state
    setCart(updatedCart);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg bg-teal-600 ">
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <img
            key={index}
            className="w-full h-full rounded-lg items-center bg-no-repeat"
            src={image}
            alt={`product image ${index + 1}`}
          />
        ))}
        <div className="px-4 mt-5">
          <h2 className="text-xl font-semibold mb-2 text-white">
            {product.title}
          </h2>
          <span className="font-bold text-l text-white">Desc:</span>
          <p className="text-white">
            {product.description.toLowerCase().substr(0, 200) + "..."}
          </p>
          <div className="flex justify-between">
            <p className="mt-2 text-white font-bold">Price: </p>
            <p className="text-white my-2 mr-3 font-bold">{product.price} $</p>
          </div>
          <button
            className={`bg-rose-900 justify-between text-white rounded inline-block mt-auto items-end hover:bg-rose-950 w-full py-[8px] ${
              findProduct && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => addToCart(product)}
            disabled={findProduct}
          >
            Add to Cart
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default ProductItem;
