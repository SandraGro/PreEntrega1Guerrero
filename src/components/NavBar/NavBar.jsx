import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar({cartCount}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/src/assets/logo.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
          Clothing Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/category/clothing">Clothing</Link>
            <Link className="nav-link" to="/category/accessories">Accessories</Link>
          </div>
        </div>
        <div className="d-flex">
          <CartWidget cartCount={cartCount}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
