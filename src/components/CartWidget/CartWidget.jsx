import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CardWidget() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <a className="nav-link" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          className="bi bi-cart"
          viewBox="0 0 16 16"
          style={{ marginRight: "5px" }}
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zM3.14 6l1.25 6H12.5l1.25-6H3.14zM5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      </a>
      <Link
        to="/cart"
        className="CartWidget"
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        {totalQuantity}
      </Link>
    </>
  );
}

export default CardWidget;
