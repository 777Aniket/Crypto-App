import React from "react";
import img1 from "../Assets/MacBook.jpeg";
import img2 from "../Assets/BlackShoeImage2.webp";
import toast from "react-hot-toast";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 7999,
      imgSrc: img1,
      id: "asdfghjkl",
    },
    {
      name: "Black Shoe",
      price: 159,
      imgSrc: img2,
      id: "fghjkl",
    },
  ];
  const addToCart = (options) => {
    console.log(options);
    toast.success("Add to cart")
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCart
          key={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
          id={i.id}
          handler={addToCart}
        />
      ))}
    </div>
  );
};

const ProductCart = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, imgSrc, quantity: 1, id })}>
      Add to Cart
    </button>
  </div>
);
export default Home;
