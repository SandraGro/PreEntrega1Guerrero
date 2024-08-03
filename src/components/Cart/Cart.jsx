import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  console.log(cart, totalQuantity, total, ' total cart');

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>Your cart is empty</h1>
        <Link to="/" className="Option">
          {" "}
          Products
        </Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3> Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button"> Clear Cart</button>
      <Link to='/checkout' className="Option"> Checkout</Link>
    </div>
  );
};
