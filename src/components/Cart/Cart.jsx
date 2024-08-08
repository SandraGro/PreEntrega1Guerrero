import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";


export const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (

      <div className="full-screen-container">
        <div className="alert alert-secondary msg">
          <h5>Your cart is empty</h5>
          <Link to="/" className="Option">Products</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="card-body container">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <hr />
      <hr />
      <h3> Total: ${total}</h3>
      <button onClick={() => clearCart()} className="button btn btn-secondary"> Clear Cart</button>
      <Link to='/checkout' className="option btn btn-primary"> Checkout</Link>
    </div>
  );
};
