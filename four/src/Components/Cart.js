import React from "react";
import { AiFillDelete } from "react-icons/ai";
import img1 from "../Assets/MacBook.jpeg";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          imgSrc={img1}
          name={"MacBook"}
          price={7999}
          qty={1}
          id="absc"
        />
      </main>
      <aside>
        <h2>SubTotal:${2000}</h2>
        <h2>Shipping:${180}</h2>
        <h2>Tax:${220}</h2>
        <h2>Total:${2400}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decriment,
  incriment,
  deleteHandler,
  id,
}) => (
  <div className="cartitem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>{qty}</p>
      <p>${price}</p>
    </article>
    <div>
      <button
        onClick={() => {
          incriment(id);
        }}
      >
        +
      </button>
      <p>{qty}</p>
      <button
        onClick={() => {
          decriment(id);
        }}
      >
        -
      </button>
    </div>
    <AiFillDelete
      onClick={() => {
        deleteHandler();
      }}
    />
  </div>
);
export default Cart;
