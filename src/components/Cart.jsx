import React from "react";
import { Context, useContext } from "../context/Context";
import CartItem from "./CartItem";
const Cart = () => {
  const { state } = useContext(Context);

  // Check if the cart is empty
  const isCartEmpty = state.cart.length;

  return (
    <>
      {isCartEmpty===0 ? (
        "Your cart is empty"
      ) : (
        <>
          {state.cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </>
      )}
    </>
  );
};

export default Cart;
